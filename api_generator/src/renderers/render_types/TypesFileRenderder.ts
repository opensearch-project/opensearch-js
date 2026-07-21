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
import TypesContainer, { SEPARATOR } from './TypesContainer'

const TS_VAR_REGEX = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/

interface ExtendsInfo {
  extends: Array<{ ref: string, schema: Schema }>
  own: Schema
}

export default class TypesFileRenderder extends BaseRenderer {
  protected template_file = 'type.containers.mustache'
  private readonly _container: TypesContainer
  private readonly _extends_info_cache = new WeakMap<Schema, ExtendsInfo | null>()
  private readonly _generic_params_cache = new WeakMap<Schema, string[]>()

  constructor (container: TypesContainer) {
    super()
    this._container = container
  }

  view (): Record<string, any> {
    return {
      is_function: this._container.is_function,
      types: _.entries(this._container.schemas)
        .filter(([name]) => !TypesContainer.is_generic_param_ref(this.#key_for(name)))
        .map(([name, schema]) => {
          const own_param_keys = this._container.is_function ? [] : this.#own_generic_params(schema)
          const type_params = this.#render_generic_params(own_param_keys)
          const definition = this.#render_schema(schema, new Set(own_param_keys), true)
          const is_interface = definition.startsWith('extends')
          return { name: `${name}${type_params}`, definition, is_interface }
        }),
      imports: Array.from(this._container.referenced_containers)
        .sort((a, b) => a.import_name.localeCompare(b.import_name))
        .map(container => {
          return { path: this._container.import_path(container), name: container.import_name }
        })
    }
  }

  #key_for (schema_name: string): string {
    return `${this._container.file_name}${SEPARATOR}${schema_name}`
  }

  #normalize_extends (schema: Schema): ExtendsInfo | null {
    if (this._extends_info_cache.has(schema)) return this._extends_info_cache.get(schema) ?? null
    if (schema.allOf == null) {
      this._extends_info_cache.set(schema, null)
      return null
    }
    const members = schema.allOf as Schema[]
    const named = members.filter((member) => member.$ref != null)
    const one_of_members = members.filter((member) => member.oneOf != null)
    const inline_members = members.filter((member) => (member.$ref ?? member.oneOf) == null)
    const own = inline_members.reduce<Schema>((acc, member) => {
      acc.properties = { ...acc.properties, ...member.properties }
      acc.additionalProperties = acc.additionalProperties ?? member.additionalProperties
      acc.required = [...(acc.required ?? []), ...(member.required ?? [])]
      return acc
    }, {})
    if (one_of_members.length > 0) {
      own.oneOf = one_of_members.flatMap((member) => member.oneOf as Schema[])
    }
    for (const member of named) {
      if (member.properties != null) own.properties = { ...own.properties, ...member.properties }
      if (member.additionalProperties != null) own.additionalProperties = own.additionalProperties ?? member.additionalProperties
      if (member.items != null) own.items = own.items ?? member.items
      if (member.required != null) own.required = [...(own.required ?? []), ...member.required]
    }

    const extends_list = named
      .filter((member): member is Schema & { $ref: string } => typeof member.$ref === 'string')
      .map((member) => ({ ref: member.$ref, schema: this.#resolve_ref(member.$ref) }))
    const info = { extends: extends_list, own }
    this._extends_info_cache.set(schema, info)
    return info
  }

  #resolve_ref (ref: string): Schema {
    if (ref === 'ApiResponse') return {}
    return this._container.ref_to_schema(ref)
  }

  #own_generic_params (schema: Schema): string[] {
    const cached = this._generic_params_cache.get(schema)
    if (cached != null) return cached
    const resolved_info = this.#normalize_extends(schema)
    const own = resolved_info != null ? resolved_info.own : schema

    const params = new Set<string>()
    if (!this.#is_bare_forwarding_ref(own)) {
      const inherited_generic_prop_names = this.#inherited_generic_prop_names(resolved_info)
      this.#collect_own_property_params(own, inherited_generic_prop_names, params)
      this.#collect_own_root_level_params(own, params)
    }

    const result = Array.from(params).sort((a, b) => {
      return TypesContainer.generic_param_name(a).localeCompare(TypesContainer.generic_param_name(b)) || a.localeCompare(b)
    })
    this.#assert_unique_generic_param_names(result)
    this._generic_params_cache.set(schema, result)
    return result
  }

  #is_bare_forwarding_ref (own: Schema): boolean {
    return own.$ref != null && Object.keys(own).length === 1
  }

  #render_generic_params (param_keys: string[]): string {
    if (param_keys.length === 0) return ''
    const param_names = param_keys.map((key) => TypesContainer.generic_param_name(key))
    return `<${param_names.map((name) => `${name} = any`).join(', ')}>`
  }

  #assert_unique_generic_param_names (param_keys: string[]): void {
    const keys_by_name = new Map<string, string>()
    for (const key of param_keys) {
      const name = TypesContainer.generic_param_name(key)
      const existing_key = keys_by_name.get(name)
      if (existing_key != null && existing_key !== key) {
        throw new Error(`Generic parameters ${existing_key} and ${key} share the TypeScript name ${name}`)
      }
      keys_by_name.set(name, key)
    }
  }

  #inherited_generic_prop_names (resolved_info: ExtendsInfo | null): Set<string> {
    const inherited_generic_prop_names = new Set<string>()
    if (resolved_info == null) return inherited_generic_prop_names

    for (const { schema: base } of resolved_info.extends) {
      const base_params = new Set(this.#own_generic_params(base))
      if (base_params.size === 0) continue

      // Generic properties of allOf bases live in their normalized inline schema.
      const base_own = this.#normalize_extends(base)?.own ?? base
      for (const [prop_name, prop_schema] of Object.entries(base_own.properties ?? {})) {
        const ref = (prop_schema as Schema).$ref
        if (ref == null || !TypesContainer.is_generic_param_ref(ref)) continue

        const ref_key = TypesContainer.generic_param_key(ref)
        if (!base_params.has(ref_key)) continue
        const own_ref = (resolved_info.own.properties?.[prop_name] as Schema | undefined)?.$ref
        if (own_ref != null && TypesContainer.generic_param_key(own_ref) === ref_key) {
          inherited_generic_prop_names.add(prop_name)
        }
      }
    }
    return inherited_generic_prop_names
  }

  #collect_own_property_params (own: Schema, inherited_generic_prop_names: Set<string>, params: Set<string>): void {
    for (const [prop_name, prop_schema] of Object.entries(own.properties ?? {})) {
      if (inherited_generic_prop_names.has(prop_name)) continue
      this.#collect_generic_param_refs(prop_schema as Schema, params)
    }
  }

  #collect_own_root_level_params (own: Schema, params: Set<string>): void {
    const root_only: Schema = {
      $ref: own.$ref,
      additionalProperties: own.additionalProperties,
      items: own.items,
      oneOf: own.oneOf,
      anyOf: own.anyOf
    }
    this.#collect_generic_param_refs(root_only, params)
  }

  #collect_generic_param_refs (schema: Schema, params: Set<string>): void {
    this.#collect_refs(schema, (ref) => {
      if (TypesContainer.is_generic_param_ref(ref)) params.add(TypesContainer.generic_param_key(ref))
    })
  }

  #collect_refs (schema: Schema, visit: (ref: string) => void): void {
    const walk = (node: unknown): void => {
      if (Array.isArray(node)) { node.forEach(walk); return }
      if (node == null || typeof node !== 'object') return
      const ref = (node as Schema).$ref
      if (typeof ref === 'string') { visit(ref); return }
      const current = node as Record<string, unknown>
      if (current.properties != null && typeof current.properties === 'object') Object.values(current.properties).forEach(walk)
      if (current.additionalProperties != null && typeof current.additionalProperties === 'object') walk(current.additionalProperties)
      if (current.items != null) walk(current.items)
      if (Array.isArray(current.oneOf)) current.oneOf.forEach(walk)
      if (Array.isArray(current.anyOf)) current.anyOf.forEach(walk)
      if (Array.isArray(current.allOf)) {
        for (const member of current.allOf) {
          if (member != null && typeof member === 'object') walk({ ...(member as Schema), $ref: undefined })
        }
      }
    }
    walk(schema)
  }

  #render_schema (schema: Schema, generic_param_keys?: ReadonlySet<string>, is_top_level = false): string {
    if (Array.isArray(schema.items)) throw new Error('Unhandled positioned array schema')
    if (_.isEmpty(schema)) return 'any'
    if (schema.$ref != null) {
      if (TypesContainer.is_generic_param_ref(schema.$ref)) {
        const key = TypesContainer.generic_param_key(schema.$ref)
        return generic_param_keys?.has(key) === true ? TypesContainer.generic_param_name(key) : 'any'
      }
      return this.#render_ref(schema.$ref, generic_param_keys)
    }
    if (schema.items != null) return `${this.#render_schema(schema.items as Schema, generic_param_keys)}[]`
    if (schema.type === 'array') return 'any[]'
    if (schema.enum != null) return schema.enum.map(str => `'${str as string}'`).join(' | ')
    if (schema.type === 'string' && schema.const != null) return `'${schema.const as string}'`
    if (schema.type === 'string') return 'string'
    if (schema.type === 'number') return 'number'
    if (schema.type === 'integer') return 'number'
    if (schema.type === 'boolean') return 'boolean'
    if (schema.type === 'null') return 'undefined'
    if (Array.isArray(schema.type)) return schema.type.map(type => this.#render_schema({ type } satisfies Schema, generic_param_keys)).join(' | ')
    if (schema.type != null && schema.type !== 'object') throw new Error(`Unhandled schema type: ${(schema as any).type}`)
    const union_members = schema.anyOf ?? schema.oneOf
    if (union_members != null) return this.#render_oneOf(union_members as Schema[], generic_param_keys)
    if (schema.allOf != null) return this.#render_allOf(schema, generic_param_keys, is_top_level)
    return this.#render_simple_obj(schema, generic_param_keys)
  }

  #render_ref (ref: string, generic_param_keys?: ReadonlySet<string>): string {
    const base_name = this._container.ref_to_imported_type(ref)
    if (generic_param_keys == null || generic_param_keys.size === 0) return base_name

    const target_schema = this.#resolve_ref(ref)
    const target_params = this.#own_generic_params(target_schema)
    if (target_params.length === 0) return base_name

    const forwarded = target_params.map((key) => generic_param_keys.has(key) ? TypesContainer.generic_param_name(key) : 'any')
    return `${base_name}<${forwarded.join(', ')}>`
  }

  #render_oneOf (schemas: Schema[], generic_param_keys?: ReadonlySet<string>): string {
    const renders = schemas.map(schema => this.#render_schema(schema, generic_param_keys))
    return this.#union(renders)
  }

  #render_allOf (schema: Schema, generic_param_keys?: ReadonlySet<string>, is_top_level = false): string {
    const info = this.#normalize_extends(schema)
    if (info == null) return this.#render_simple_obj(schema, generic_param_keys)

    const inline_render = _.isEmpty(info.own) ? '' : this.#render_schema(info.own, generic_param_keys)
    const named_render = this.#intersection(info.extends.map(({ ref, schema: base }) => this.#render_extends(ref, base, info.own, generic_param_keys)))

    if (inline_render === '') return named_render
    if (info.extends.length === 0) return inline_render

    if (is_top_level && inline_render.includes('{') && this._container.is_function) return `extends ${named_render} ${inline_render}`
    else return this.#intersection([named_render, inline_render])
  }

  #render_extends (ref: string, base_schema: Schema, own: Schema, generic_param_keys?: ReadonlySet<string>): string {
    const base_type_name = this._container.ref_to_imported_type(ref)
    const base_params = this.#own_generic_params(base_schema)
    if (base_params.length === 0) return base_type_name

    const base_info = this.#normalize_extends(base_schema)
    const base_own = base_info != null ? base_info.own : base_schema
    const found = new Map<string, Schema>()
    this.#walk_schema_pairs(base_own, own, (base_node, own_node) => {
      if (base_node?.$ref == null || !TypesContainer.is_generic_param_ref(base_node.$ref) || own_node == null) return
      const key = TypesContainer.generic_param_key(base_node.$ref)
      const existing = found.get(key)
      if (existing != null && !_.isEqual(existing, own_node)) throw new Error(`Conflicting specializations for generic parameter ${key}`)
      found.set(key, own_node)
    })

    const args = base_params.map((param_key) => {
      const specialization = found.get(param_key)
      if (specialization != null) return this.#render_schema(specialization, generic_param_keys)
      if (generic_param_keys?.has(param_key) === true) return TypesContainer.generic_param_name(param_key)
      return 'any'
    })

    return `${base_type_name}<${args.join(', ')}>`
  }

  #walk_schema_pairs (base: Schema | undefined, own: Schema | undefined, visit: (base_node: Schema | undefined, own_node: Schema | undefined) => void): void {
    if (base == null) return
    visit(base, own)
    if (base.$ref != null) return
    if (base.properties != null) {
      for (const [prop_name, base_prop] of Object.entries(base.properties)) {
        this.#walk_schema_pairs(base_prop as Schema, (own?.properties as Record<string, Schema> | undefined)?.[prop_name], visit)
      }
    }
    if (base.additionalProperties != null && typeof base.additionalProperties === 'object') {
      const own_additional_properties = own?.additionalProperties
      this.#walk_schema_pairs(base.additionalProperties, typeof own_additional_properties === 'object' ? own_additional_properties : undefined, visit)
    }
    if (base.items != null && !Array.isArray(base.items)) {
      const own_items = own?.items
      this.#walk_schema_pairs(base.items as Schema, own_items != null && !Array.isArray(own_items) ? own_items as Schema : undefined, visit)
    }
    if (Array.isArray(base.oneOf)) {
      const own_one_of = Array.isArray(own?.oneOf) ? own.oneOf as Schema[] : undefined
      base.oneOf.forEach((base_branch, index) => { this.#walk_schema_pairs(base_branch as Schema, own_one_of?.[index], visit) })
    }
    if (Array.isArray(base.anyOf)) {
      const own_any_of = Array.isArray(own?.anyOf) ? own.anyOf as Schema[] : undefined
      base.anyOf.forEach((base_branch, index) => { this.#walk_schema_pairs(base_branch as Schema, own_any_of?.[index], visit) })
    }
    if (Array.isArray(base.allOf)) {
      const base_inline = (base.allOf as Schema[]).filter((member) => member.$ref == null)
      const own_all_of = Array.isArray(own?.allOf) ? own.allOf as Schema[] : undefined
      const own_inline = own_all_of?.filter((member) => member.$ref == null) ?? []
      const merged_base = this.#merge_inline_schemas(base_inline)
      const merged_own = own_inline.length > 0 ? this.#merge_inline_schemas(own_inline) : own
      this.#walk_schema_pairs(merged_base, merged_own, visit)
    }
  }

  #merge_inline_schemas (members: Schema[]): Schema {
    return members.reduce<Schema>((acc, member) => {
      acc.properties = { ...acc.properties, ...member.properties }
      acc.additionalProperties = acc.additionalProperties ?? member.additionalProperties
      acc.items = acc.items ?? member.items
      if (member.oneOf != null) acc.oneOf = [...(acc.oneOf as Schema[] ?? []), ...(member.oneOf as Schema[])]
      if (member.anyOf != null) acc.anyOf = [...(acc.anyOf as Schema[] ?? []), ...(member.anyOf as Schema[])]
      return acc
    }, {})
  }

  #union (renders: string[]): string {
    return _.uniq(renders.map(render => this.#parenthesize(render, ' & '))).join(' | ')
  }

  #intersection (renders: string[]): string {
    return _.uniq(renders.filter((r) => r !== '').map(render => this.#parenthesize(render, ' | '))).join(' & ')
  }

  #parenthesize (render: string, token: ' | ' | ' & '): string {
    const required = !render.startsWith('(') && _.some(render.split('\n').map(line => line.includes(token) && !line.endsWith(';')))
    return required ? `(${render})` : render
  }

  #render_simple_obj (schema: Schema, generic_param_keys?: ReadonlySet<string>): string {
    if (_.isEmpty(schema.properties)) {
      if (schema.additionalProperties === true || schema.additionalProperties == null) return 'Record<string, any>'
      if (schema.additionalProperties === false) return '{}'
      if (!_.isEmpty(schema.additionalProperties)) return `Record<string, ${this.#render_schema(schema.additionalProperties, generic_param_keys)}>`
    }
    const required = new Set(schema.required ?? [])
    const properties = _.entries(schema.properties)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, prop]) => {
        const name = TS_VAR_REGEX.test(key) ? key : `'${key}'`
        return { name, type: this.#render_schema(prop as Schema, generic_param_keys), required: required.has(key) }
      })
    const additional_properties = this.#render_add_props(schema, generic_param_keys)
    return this.render({ template_path: 'type.object.mustache', view: { properties, additional_properties } })
  }

  #render_add_props (schema: Schema, generic_param_keys?: ReadonlySet<string>): string | undefined {
    const add_props = schema.additionalProperties
    if (add_props === false) return undefined
    if (add_props === true) return 'any'
    if (_.isEmpty(add_props)) return undefined
    return schema.properties != null ? `any | ${this.#render_schema(add_props, generic_param_keys)}` : this.#render_schema(add_props, generic_param_keys)
  }
}
