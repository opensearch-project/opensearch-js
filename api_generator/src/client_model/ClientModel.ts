/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// The resolved client model of opensearch-api-specification (`opensearch-client-model.json`, built by
// `npm run model` there): every type of the spec with its $refs followed, its allOfs merged and its unions
// classified. See "Client Model" in the specification's CLIENT_GENERATOR_GUIDE.md.

import fs from 'fs'

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

// Reads a model file and checks its format and version.
export function read_client_model (file_path: string): ClientModel {
  const model = JSON.parse(fs.readFileSync(file_path, 'utf8')) as ClientModel
  if (model.format !== MODEL_FORMAT) throw new Error(`${file_path} is not an OpenSearch client model (format ${model.format})`)
  if (!SUPPORTED_VERSIONS.includes(model.version)) {
    throw new Error(`Unsupported client model version ${model.version} (supported: ${SUPPORTED_VERSIONS.join(', ')})`)
  }
  return model
}
