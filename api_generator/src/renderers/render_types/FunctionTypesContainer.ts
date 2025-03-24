/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import TypesContainer, { SEPARATOR } from './TypesContainer'
import _ from 'lodash'
import { type ApiFunctionTyping } from '../../spec_parser/ApiFunction'
import type ApiFunction from '../../spec_parser/ApiFunction'
import type Namespace from '../../spec_parser/Namespace'
import { type JSONSchema7 as Schema } from 'json-schema'

export default class FunctionTypesContainer extends TypesContainer {
  private readonly _func: ApiFunction

  constructor (func: ApiFunction) {
    super(func.ns_prototype, func.prototype_name, {}, true)
    this._func = func
    this.schemas[func.types.request] = this.#build_request()
    const request_body = this.#build_request_body()
    if (request_body) this.schemas[func.types.request_body] = request_body
    this.schemas[func.types.response] = this.#build_response()
    this.schemas[func.types.response_body] = this.#build_response_body()
  }

  static repo (): FunctionTypesContainer[] {
    return Array.from(TypesContainer.REPO.values()).filter(container => container.is_function) as FunctionTypesContainer[]
  }

  static find_by_func (func: ApiFunction): FunctionTypesContainer | undefined {
    const key = `${func.ns_prototype}/${func.prototype_name}.d.ts`
    return TypesContainer.REPO.get(key) as FunctionTypesContainer
  }

  create_ref (key: keyof ApiFunctionTyping): string {
    return `${this._func.ns_prototype}/${this._func.prototype_name}${SEPARATOR}${this._func.types[key]}`
  }

  #build_request (): Schema {
    const params = { ...this._func.query_params, ...this._func.path_params }
    const body = this._func.request_body
    const properties = _.fromPairs(_.entries(params).map(([name, param]) => [name, param.ref_obj ?? param.schema]))
    if (body) properties.body = body.ref_obj ? body.ref_obj : { $ref: this.create_ref('request_body') }
    const required_params = Object.entries(params).filter(([, param]) => param.required).map(([name]) => name)
    const required = body?.required ? [...required_params, 'body'] : required_params
    const schema: Schema = { properties, required }
    return { allOf: [schema, { $ref: `#/components/schemas/_global${SEPARATOR}Params` }] }
  }

  #build_response (): Schema {
    if (this._func.http_verbs.has('HEAD')) return { type: 'boolean' }
    const schema = { properties: { body: { $ref: this.create_ref('response_body') } }, required: ['body'] }
    return { allOf: [schema, { $ref: 'ApiResponse' }] }
  }

  #build_response_body (): Schema {
    const body = this._func.response_body
    if (body == null) return { type: 'object' }
    if (body.ref_obj != null) return body.ref_obj
    if (body.schema != null) return body.schema
    return { type: 'object' }
  }

  #build_request_body (): Schema | undefined {
    const body = this._func.request_body
    if (body == null) return undefined
    if (body.ref_obj != null) return
    if (body.schema != null) return body.schema
    return { type: 'object' }
  }

  static from_namespaces (namespaces: Namespace[]): void {
    for (const ns of namespaces) {
      for (const func of _.values(ns.functions)) {
        const container = new FunctionTypesContainer(func)
        TypesContainer.REPO.set(container.file_path, container)
      }
    }
  }
}
