/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import { type JSONSchema7 as Schema } from 'json-schema'
export type HttpVerb = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options'
export type ContentType = 'application/json' | 'application/x-ndjson'
export interface RefObject { $ref: string }

export interface RawOpenSearchSpec {
  paths: Record<string, Path>
  components: {
    schemas: Record<string, Schema>
    parameters: Record<string, RawParameter>
    requestBodies: Record<string, RawRequestBody>
    responses: Record<string, RawResponseBody>
  }
}
export type Path = Record<HttpVerb, RawOperation>

export interface RawOperation {
  'x-operation-group': string
  'x-version-added'?: string
  'x-version-removed'?: string
  'x-version-deprecated'?: string
  'x-deprecation-message'?: string
  'x-ignorable'?: boolean

  deprecated?: boolean
  description: string
  externalDocs?: { url: string }

  parameters: RefObject[]
  requestBody?: RefObject
  responses: Record<string, RefObject>
}

export interface RawParameter {
  name: string
  in: 'path' | 'query'
  'x-global'?: boolean
  required?: boolean
  description: string
  deprecated?: boolean
  default?: any
  schema: Schema | RefObject
}

export interface RawRequestBody {
  description: string
  content: Record<ContentType, { schema: Schema | RefObject }>
  required?: boolean
}

export interface RawResponseBody {
  description: string
  content: Record<ContentType, { schema: Schema | RefObject }>
}

/// //////////// Parsed types //////////// ///

export interface Operation {
  full_name: string
  namespace: string
  group: string

  url: string
  http_verb: HttpVerb

  description: string
  api_reference: string | undefined

  deprecated: boolean
  deprecation_message: string | undefined

  parameters: Parameter[]
  request_body: RequestBody | undefined
  response_body: ResponseBody | undefined
}

export interface Parameter extends RawParameter {
  schema: Schema
  deprecated: boolean
  default: any
  ref_obj?: RefObject
}

export interface RequestBody {
  name: 'body'
  deprecated: false
  default: undefined
  schema: Schema
  description: string
  required: boolean
  bulk: boolean
  ref_obj?: RefObject
}

export interface ResponseBody {
  schema: Schema
  description: string
  ref_obj?: RefObject
}
