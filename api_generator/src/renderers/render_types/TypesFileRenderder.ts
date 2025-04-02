/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import BaseRenderer from '../BaseRenderer'
import type { JSONSchema7 as Schema } from 'json-schema'
import _ from 'lodash'
import type TypesContainer from './TypesContainer'

const TS_VAR_REGEX = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/

export default class TypesFileRenderder extends BaseRenderer {
  protected template_file = 'type.containers.mustache'
  private readonly _container: TypesContainer

  constructor (container: TypesContainer) {
    super()
    this._container = container
  }

  view (): Record<string, any> {
    return {
      is_function: this._container.is_function,
      types: _.entries(this._container.schemas).map(([name, schema]) => {
        const definition = this.#render_schema(schema)
        const is_interface = definition.startsWith('extends')
        return { name, definition, is_interface }
      }),
      imports: Array.from(this._container.referenced_containers)
        .sort((a, b) => a.import_name.localeCompare(b.import_name))
        .map(container => {
          return { path: this._container.import_path(container), name: container.import_name }
        })
    }
  }

  #render_schema (schema: Schema): string {
    if (schema.anyOf != null) schema.oneOf = schema.anyOf
    if (Array.isArray(schema.items)) throw new Error('Unhandled positioned array schema')
    if (_.isEmpty(schema)) return 'any'
    if (schema.$ref != null) return this._container.ref_to_imported_type(schema.$ref)
    if (schema.items != null) return `${this.#render_schema(schema.items as Schema)}[]`
    if (schema.type === 'array') return 'any[]'
    if (schema.enum != null) return schema.enum.map(str => `'${str as string}'`).join(' | ')
    if (schema.type === 'string' && schema.const != null) return `'${schema.const as string}'`
    if (schema.type === 'string') return 'string'
    if (schema.type === 'number') return 'number'
    if (schema.type === 'integer') return 'number'
    if (schema.type === 'boolean') return 'boolean'
    if (schema.type === 'null') return 'undefined'
    if (Array.isArray(schema.type)) return schema.type.map(type => this.#render_schema({ type } satisfies Schema)).join(' | ')
    if (schema.type != null && schema.type !== 'object') throw new Error(`Unhandled schema type: ${(schema as any).type}`)
    if (schema.oneOf != null) return this.#render_oneOf(schema.oneOf as Schema[])
    if (schema.allOf != null) return this.#render_allOf(schema.allOf as Schema[])
    return this.#render_simple_obj(schema)
  }

  #render_oneOf (schemas: Schema[]): string {
    const renders = schemas.map(schema => this.#render_schema(schema))
    return this.#union(renders)
  }

  #render_allOf (schemas: Schema[]): string {
    const named_schemas = schemas.filter(schema => schema.$ref != null)
    const one_of_schemas = schemas.filter(schema => schema.oneOf != null)
    const component_schemas = schemas.filter(schema => (schema.$ref ?? schema.oneOf) == null)

    const compound_schema = (component_schemas).reduce<Schema>((acc, schema) => {
      acc.properties = { ...acc.properties, ...(schema).properties }
      acc.additionalProperties = acc.additionalProperties ?? (schema).additionalProperties
      acc.required = [...(acc.required ?? []), ...(schema).required ?? []]
      return acc
    }, {})

    const inline_schemas = [compound_schema].concat(one_of_schemas).filter(schema => !_.isEmpty(schema))
    const inline_render = this.#intersection(inline_schemas.map(schema => this.#render_schema(schema)))
    const named_render = this.#intersection(named_schemas.map(schema => this.#render_schema(schema)))

    if (inline_schemas.length === 0) return named_render
    if (named_schemas.length === 0) return inline_render

    if (inline_render.includes('{') && this._container.is_function) return `extends ${named_render} ${inline_render}`
    else return this.#intersection([named_render, inline_render])
  }

  #union (renders: string[]): string {
    return _.uniq(renders.map(render => this.#parenthesize(render, ' & '))).join(' | ')
  }

  #intersection (renders: string[]): string {
    return _.uniq(renders.map(render => this.#parenthesize(render, ' | '))).join(' & ')
  }

  #parenthesize (render: string, token: ' | ' | ' & '): string {
    const required = !render.startsWith('(') && _.some(render.split('\n').map(line => line.includes(token) && !line.endsWith(';')))
    return required ? `(${render})` : render
  }

  #render_simple_obj (schema: Schema): string {
    if (_.isEmpty(schema.properties)) {
      if (schema.additionalProperties === true || schema.additionalProperties == null) return 'Record<string, any>'
      if (schema.additionalProperties === false) return '{}'
      if (!_.isEmpty(schema.additionalProperties)) return `Record<string, ${this.#render_schema(schema.additionalProperties)}>`
    }
    const required = new Set(schema.required ?? [])
    const properties = _.entries(schema.properties)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, prop]) => {
        const name = TS_VAR_REGEX.test(key) ? key : `'${key}'`
        return { name, type: this.#render_schema(prop as Schema), required: required.has(key) }
      })
    const additional_properties = this.#render_add_props(schema)
    return this.render({ template_path: 'type.object.mustache', view: { properties, additional_properties } })
  }

  #render_add_props (schema: Schema): string | undefined {
    const add_props = schema.additionalProperties
    if (add_props === false) return undefined
    if (add_props === true) return 'any'
    if (_.isEmpty(add_props)) return undefined
    return schema.properties != null ? `any | ${this.#render_schema(add_props)}` : this.#render_schema(add_props)
  }
}
