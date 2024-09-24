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

function empty (obj: Record<string, any> | undefined): obj is undefined {
  if (obj == null) return true
  return Object.keys(obj).length === 0
}

const TS_VAR_REGEX = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/

export default class TypesFileRenderder extends BaseRenderer {
  protected template_file = 'type.containers.mustache'
  private readonly _container: TypesContainer

  constructor (container: TypesContainer) {
    super()
    this._container = container
  }

  view (): Record<string, any> {
    const con = this._container
    return {
      is_function: con.is_function,
      types: _.entries(con.schemas).map(([name, schema]) => {
        const definition = this.#render_schema(schema)
        const declarative = this.#is_interface(definition) ? `interface ${name}` : `type ${name} =`
        return { declarative, definition }
      }),
      imports: Array.from(con.referenced_containers)
        .sort((a, b) => a.import_name.localeCompare(b.import_name))
        .map(container => {
          return { path: con.import_path(container), name: container.import_name }
        })
    }
  }

  #is_interface (definition: string): boolean {
    if (definition.includes('} |')) return false
    if (definition.includes('| {')) return false
    if (definition.includes('} &')) return false
    if (definition.includes('& {')) return false
    return definition.includes('}')
  }

  #render_schema (schema: Schema): string {
    if (Array.isArray(schema.items)) throw new Error('Unhandled positioned array schema')
    if (typeof schema === 'object' && _.keys(schema).length === 0) return 'any'
    if (schema.$ref != null) return this._container.ref_to_obj(schema.$ref)
    if (schema.items != null) return `${this.#render_schema(schema.items as Schema)}[]`
    if (schema.type === 'array') return 'any[]'
    if (schema.enum != null) return schema.enum.map(str => `'${str as string}'`).join(' | ')
    if (schema.type === 'string') return 'string'
    if (schema.type === 'number') return 'number'
    if (schema.type === 'integer') return 'number'
    if (schema.type === 'boolean') return 'boolean'
    if (schema.type === 'null') return 'undefined'
    if (Array.isArray(schema.type)) return schema.type.map(type => this.#render_schema({ type } satisfies Schema)).join(' | ')
    if (schema.type != null && schema.type !== 'object') throw new Error(`Unhandled schema type: ${(schema as any).type}`)
    if (schema.oneOf != null || schema.anyOf != null) return this.#render_anyOf(schema)
    if (schema.allOf != null) return this.#render_allOf(schema.allOf as Schema[])
    return this.#render_simple_obj(schema)
  }

  #render_anyOf (schema: Schema): string {
    const schemas = schema.oneOf ?? schema.anyOf ?? []
    return schemas.map((sch) => this.#render_schema(sch as Schema)).join(' | ')
  }

  #render_allOf (schemas: Schema[]): string {
    const named_schemas = schemas.filter(schema => schema.$ref != null)
    const inline_schemas = schemas.filter(schema => schema.$ref == null)

    if (inline_schemas.length === 0) return named_schemas.map(schema => this.#render_schema(schema)).join(' & ')

    const compound_inline = inline_schemas.reduce<Schema>((acc, schema) => {
      acc.properties = { ...acc.properties, ...(schema).properties }
      acc.additionalProperties = acc.additionalProperties ?? (schema).additionalProperties
      acc.required = [...(acc.required ?? []), ...(schema).required ?? []]
      return acc
    }, {})

    const inline_schemas_render = this.#render_schema(compound_inline)
    const named_schemas_render = named_schemas.map(schema => this.#render_schema(schema)).join(', ')

    if (named_schemas.length === 0) return inline_schemas_render
    if (inline_schemas_render.includes('{')) return `extends ${named_schemas_render} ${inline_schemas_render}`
    return `${named_schemas_render} & ${this.#render_simple_obj(compound_inline)}`
  }

  #render_simple_obj (schema: Schema): string {
    if (empty(schema.properties)) {
      if (schema.additionalProperties === true || schema.additionalProperties == null) return 'Record<string, any>'
      if (schema.additionalProperties === false) return '{}'
      if (!empty(schema.additionalProperties)) return `Record<string, ${this.#render_schema(schema.additionalProperties)}>`
    }
    const required = new Set(schema.required ?? [])
    const properties = _.entries(schema.properties)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, prop]) => {
        const name = TS_VAR_REGEX.test(key) ? key : `'${key}'`
        return { name, type: this.#render_schema(prop as Schema), required: required.has(key) }
      })
    const additional_properties = this.#render_add_props(schema)
    return this.render('type.object.mustache', { properties, additional_properties })
  }

  #render_add_props (schema: Schema): string | undefined {
    const add_props = schema.additionalProperties
    if (add_props === false) return undefined
    if (add_props === true) return 'any'
    if (empty(add_props)) return undefined
    return schema.properties != null ? `any | ${this.#render_schema(add_props)}` : this.#render_schema(add_props)
  }
}
