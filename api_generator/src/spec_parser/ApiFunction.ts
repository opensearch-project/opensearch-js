/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import _ from 'lodash'
import type { Parameter, RequestBody, ResponseBody, Operation } from './types'
import { to_pascal_case } from '../helpers'
import ApiPath from './ApiPath'

export interface ApiFunctionTyping {
  request: string
  request_body: string
  response: string
  response_body: string
}

export default class ApiFunction {
  readonly operations: Operation[]

  readonly ns_prototype: string
  readonly name: string
  readonly full_name: string
  readonly paths: ApiPath[]
  readonly http_verbs: Set<string>
  readonly description: string
  readonly api_reference: string | undefined
  readonly path_params: Record<string, Parameter>
  readonly query_params: Record<string, Parameter>
  readonly params: Record<string, Parameter | RequestBody>
  readonly required_params: Set<string>
  readonly request_body: RequestBody | undefined
  readonly response_body: ResponseBody | undefined
  readonly function_name: string
  readonly prototype_name: string
  readonly types: ApiFunctionTyping

  constructor (operations: Operation[], ns_prototype: string) {
    this.operations = operations
    this.name = operations[0].group
    this.full_name = operations[0].full_name
    this.ns_prototype = ns_prototype
    this.paths = ApiPath.from_operations(operations)
    this.path_params = this.#path_params(operations)
    this.query_params = this.#query_params(operations)
    this.http_verbs = new Set(operations.map((o) => o.http_verb.toUpperCase()))
    this.request_body = operations[0].request_body
    this.response_body = operations[0].response_body
    this.description = operations[0].description
    this.api_reference = operations[0].api_reference
    this.params = this.#params()
    this.required_params = new Set(_.entries(this.params).filter(([_, p]) => p.required).map(([name, _]) => name))
    this.prototype_name = _.camelCase(this.operations[0].group)
    this.function_name = `${this.prototype_name}Func` // append `Func` to avoid conflicts with reserved words

    const type_name = this.full_name.split('.').map(to_pascal_case).join('_')
    this.types = {
      request: `${type_name}_Request`,
      request_body: `${type_name}_RequestBody`,
      response: `${type_name}_Response`,
      response_body: `${type_name}_ResponseBody`
    }
  }

  #query_params (operations: Operation[]): Record<string, Parameter> {
    return operations[0].parameters
      .filter((p) => p.in === 'query')
      .reduce((a, b) => ({ ...a, [b.name]: b }), {})
  }

  // Operations of the same group can have different sets of path parameters.
  // Only the path parameters that are common to all operations are required.
  #path_params (operations: Operation[]): Record<string, Parameter> {
    const path_params: Record<string, Parameter> = {}
    const universal_path_params = new Set<string>(operations.map((o) => {
      const params = o.parameters.filter((p) => p.in === 'path')
      for (const param of params) path_params[param.name] = param
      return params.map((p) => p.name)
    }).reduce((a, b) => _.intersection(b, a)))
    for (const name in path_params) path_params[name].required = universal_path_params.has(name)
    if (this.full_name === 'nodes.info') delete path_params.node_id_or_metric // TODO: Handle this more elegantly
    return path_params
  }

  #params (): Record<string, Parameter | RequestBody> {
    const params: Record<string, Parameter | RequestBody> = { ...this.query_params, ...this.path_params }
    if (this.request_body) params.body = this.request_body
    return params
  }
}
