/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// Replaces the component schemas and the JSON bodies of the response and request body components of a spec with
// schemas built from the client model, in one canonical form the type renderer reads without interpreting
// composition:
// - an object is one `$ref` per base, plus its own fields as one inline object, plus one `oneOf`/`anyOf` per
//   presence, container or other union constraint, each branch typed with the fields it requires;
// - a union is a plain `oneOf`/`anyOf` of its members, with their titles;
// - an alias is its type.
// Operations, paths and parameters stay as they are.

import _ from 'lodash'
import type { JSONSchema7 as Schema } from 'json-schema'
import type { ClientModel, Constraint, Field, ObjectShape, TypeEntry, TypeExpr } from './ClientModel'
import type { RawOpenSearchSpec } from '../spec_parser/types'

const REF_PREFIX = '#/components/schemas/'

// Keywords of the original schema that annotate it rather than shape it (documentation, defaults, extensions):
// kept on the lowered schema, so the JSDoc of the generated functions doesn't change.
const ANNOTATIONS = new Set(['description', 'default', 'deprecated', 'title', 'examples', 'externalDocs', 'readOnly', 'writeOnly'])

function with_annotations (lowered: Schema, original: Schema | undefined): Schema {
  if (original == null || typeof original !== 'object') return lowered
  for (const [key, value] of Object.entries(original)) {
    if (ANNOTATIONS.has(key) || key.startsWith('x-')) (lowered as Record<string, unknown>)[key] = value
  }
  return lowered
}

export default function lower (spec: RawOpenSearchSpec, model: ClientModel): void {
  const lowerer = new Lowerer(model)
  const schemas = spec.components.schemas
  for (const [name, entry] of Object.entries(model.types)) {
    // Generic type parameters keep their schema: the renderer recognizes them by x-is-generic-type-parameter.
    if (entry.type_kind === 'alias' && entry.generic_parameter === true) continue
    schemas[name] = with_annotations(lowerer.entry(entry), schemas[name])
  }
  const lower_bodies = (components: Record<string, any> | undefined, bodies: ClientModel['responses']): void => {
    for (const [name, body] of Object.entries(bodies)) {
      const media = components?.[name]?.content?.[body.media_type]
      if (media?.schema != null) media.schema = with_annotations(lowerer.expr(body.type), media.schema as Schema)
    }
  }
  const components = spec.components as Record<string, Record<string, any> | undefined>
  lower_bodies(components.responses, model.responses)
  lower_bodies(components.requestBodies, model.request_bodies)
}

class Lowerer {
  private readonly _model: ClientModel

  constructor (model: ClientModel) {
    this._model = model
  }

  entry (entry: TypeEntry): Schema {
    let schema: Schema
    if (entry.type_kind === 'object') schema = this.object(entry)
    else if (entry.type_kind === 'union') {
      const members = entry.variants != null ? Object.values(entry.variants) : entry.members ?? []
      schema = this.union(members, entry.exclusive, entry.titles)
    } else schema = this.expr(entry.type)
    if (entry.description != null) schema.description = entry.description
    return schema
  }

  expr (type: TypeExpr): Schema {
    if ('ref' in type) return { $ref: REF_PREFIX + type.ref }
    if ('scalar' in type) {
      const scalar: Schema = { type: type.scalar }
      if (type.format != null) scalar.format = type.format
      return scalar
    }
    if ('enum' in type) return { enum: type.enum }
    if ('array' in type) return 'any' in type.array ? { type: 'array' } : { type: 'array', items: this.expr(type.array) }
    if ('map' in type) return { type: 'object', additionalProperties: 'any' in type.map ? true : this.expr(type.map) }
    if ('union' in type) return this.union(type.union, type.exclusive, type.titles)
    if ('object' in type) return this.object(type.object)
    return {}
  }

  union (members: TypeExpr[], exclusive: boolean, titles?: Array<string | null>): Schema {
    const branches = members.map((member, index) => {
      const branch = this.expr(member)
      const title = titles?.[index]
      return title != null ? { ...branch, title } : branch
    })
    return exclusive ? { oneOf: branches } : { anyOf: branches }
  }

  object (shape: ObjectShape): Schema {
    const bases = shape.bases ?? []
    const own: Schema = { type: 'object' }
    const properties: Record<string, Schema> = {}
    const required: string[] = []
    for (const [name, field] of Object.entries(shape.fields)) {
      const base = field.declared_in
      if (base == null) properties[name] = this.expr(field.type)
      // An inherited field that this type makes required is required here too.
      if (field.required && (base == null || !this.#base_requires(base, name))) required.push(name)
    }
    if (!_.isEmpty(properties)) own.properties = properties
    if (required.length > 0) own.required = required
    const inherited_additional = bases.some((base) => _.isEqual(this.#base_shape(base)?.additional_fields, shape.additional_fields))
    if (shape.additional_fields != null && !inherited_additional) {
      own.additionalProperties = 'any' in shape.additional_fields ? true : this.expr(shape.additional_fields)
    }

    const constraints = shape.constraints.map((c) => this.constraint(c, shape.fields)).filter((c): c is Schema => c != null)
    const has_own = own.properties != null || own.required != null || own.additionalProperties != null
    if (bases.length === 0 && constraints.length === 0) return own
    const members: Schema[] = bases.map((base) => ({ $ref: REF_PREFIX + base }))
    if (has_own) members.push(own)
    members.push(...constraints)
    return members.length === 1 && bases.length === 1 ? members[0] : { allOf: members }
  }

  // A constraint as a union member of the allOf: each branch is an object with the fields it requires.
  constraint (constraint: Constraint, fields: Record<string, Field>): Schema | undefined {
    const branch = (keys: string[], extra: Record<string, Field> = {}): Schema => ({
      type: 'object',
      properties: {
        ..._.fromPairs(keys.map((key) => [key, fields[key] != null ? this.expr(fields[key].type) : {}])),
        ..._.mapValues(extra, (field) => this.expr(field.type))
      },
      required: keys
    })
    if ('one_of' in constraint && constraint.one_of != null) return { oneOf: constraint.one_of.map((keys) => branch(keys)) }
    if ('any_of' in constraint && constraint.any_of != null) return { anyOf: constraint.any_of.map((keys) => branch(keys)) }
    if ('variants' in constraint) {
      return {
        oneOf: Object.entries(constraint.variants).map(([key, variant]) => {
          const shape = branch([], variant.extra_fields)
          shape.properties = { [key]: this.expr(variant.value), ...shape.properties }
          shape.required = [key]
          return shape
        })
      }
    }
    if ('matches' in constraint) {
      const members = constraint.types.map((t) => this.expr(t))
      return constraint.matches === 'one_of' ? { oneOf: members } : { anyOf: members }
    }
    return undefined // not_all: not expressed in the generated types
  }

  #base_shape (base: string): ObjectShape | undefined {
    const entry = this._model.types[base]
    return entry?.type_kind === 'object' ? entry : undefined
  }

  #base_requires (base: string, field: string): boolean {
    return this.#base_shape(base)?.fields[field]?.required === true
  }
}
