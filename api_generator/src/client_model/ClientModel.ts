/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// The resolved client model of opensearch-api-specification: every type of the spec with its $refs followed, its
// allOfs merged and its unions classified. The spec carries it next to the JSON Schema it is built from, as `x-model`
// on every component schema, response and request body, plus `components.x-model` with its format and version
// (written by `npm run merge` in that repository). See "Client Model" in the specification's
// CLIENT_GENERATOR_GUIDE.md.

import type { RawOpenSearchSpec } from '../spec_parser/types'

export const MODEL_KEY = 'x-model'
export const MODEL_FORMAT = 'opensearch-client-model'
export const SUPPORTED_VERSIONS = ['0.2.0']

export type TypeExpr =
  | { ref: string }
  | { scalar: 'string' | 'number' | 'integer' | 'boolean' | 'null', format?: string }
  | { enum: Array<string | number | boolean | null> }
  | { array: TypeExpr }
  | { map: TypeExpr }
  | { union: TypeExpr[], union_kind: string, exclusive: boolean, titles?: Array<string | null> }
  | { object: ObjectShape, description?: string }
  | { any: true }

export interface Field {
  type: TypeExpr
  required: boolean
  description?: string
  declared_in?: string
}

export interface ObjectShape {
  bases?: string[]
  fields: Record<string, Field>
  additional_fields?: TypeExpr
  constraints: Constraint[]
}

export type Constraint =
  | { union_kind: 'presence', one_of?: string[][], any_of?: string[][], nested?: Array<Constraint[] | null> }
  | { union_kind: 'container', variants: Record<string, ContainerVariant> }
  | { union_kind: 'not_all', keys: string[] }
  | { union_kind: string, matches: 'one_of' | 'any_of', types: TypeExpr[] }

export interface ContainerVariant {
  value: TypeExpr
  extra_fields: Record<string, Field>
  extra_constraints: Constraint[]
}

export type TypeEntry =
  | ({ type_kind: 'object', description?: string } & ObjectShape)
  | {
    type_kind: 'union'
    union_kind: string
    exclusive: boolean
    discriminator?: string
    variants?: Record<string, TypeExpr>
    members?: TypeExpr[]
    titles?: Array<string | null>
    description?: string
  }
  | { type_kind: 'alias', type: TypeExpr, generic_parameter?: true, description?: string }

export interface BodyEntry {
  media_type: string
  type: TypeExpr
  description?: string
}

export interface ClientModel {
  format: string
  version: string
  types: Record<string, TypeEntry>
  responses: Record<string, BodyEntry>
  request_bodies: Record<string, BodyEntry>
}

// The client model of a spec, from its `x-model` extensions: `components.x-model` (format and version), and the
// `x-model` of every component schema (its type), response and request body (its body), by component name.
export function read_client_model (spec: RawOpenSearchSpec): ClientModel {
  const components = (spec.components ?? {}) as Record<string, Record<string, any> | undefined>
  const header = components[MODEL_KEY] as { format?: string, version?: string } | undefined
  if (header == null) {
    throw new Error(`The specification has no client model (components.${MODEL_KEY}): use a specification merged by ` +
      "opensearch-api-specification's `npm run merge` (opensearch-project/opensearch-api-specification#1329)")
  }
  if (header.format !== MODEL_FORMAT) throw new Error(`components.${MODEL_KEY} is not an OpenSearch client model (format ${header.format})`)
  if (header.version == null || !SUPPORTED_VERSIONS.includes(header.version)) {
    throw new Error(`Unsupported client model version ${header.version} (supported: ${SUPPORTED_VERSIONS.join(', ')})`)
  }
  const entries = <T>(section: string): Record<string, T> => {
    const result: Record<string, T> = {}
    for (const name of Object.keys(components[section] ?? {}).sort()) {
      const entry = components[section]?.[name]?.[MODEL_KEY]
      if (entry != null) result[name] = entry as T
    }
    return result
  }
  return {
    format: header.format,
    version: header.version,
    types: entries<TypeEntry>('schemas'),
    responses: entries<BodyEntry>('responses'),
    request_bodies: entries<BodyEntry>('requestBodies')
  }
}
