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
import _ from 'lodash'
import type ApiFunction from '../../spec_parser/ApiFunction'
import type Namespace from '../../spec_parser/Namespace'

export default class FunctionFileRenderer extends BaseRenderer {
  protected template_file = 'function.mustache'
  private readonly func: ApiFunction
  private readonly namespace: Namespace

  constructor (func: ApiFunction, namespace: Namespace) {
    super()
    this.namespace = namespace
    this.func = func
  }

  view (): Record<string, any> {
    return {
      with_path_params: _.keys(this.func.path_params).length > 0,
      required: this.func.required_params.size > 0,
      method_description: this.func.description,
      reference: `{@link ${this.func.api_reference} - ${this.func.full_name}}`,
      doc_namespace: this.namespace.doc_namespace,
      params_container: this.func.required_params.size === 0 ? '[params]' : 'params',
      params_container_description: _.values(this.func.params).length === 0 ? ' - (Unused)' : undefined,
      parameter_descriptions: this.#parameter_descriptions(),
      function_name: this.func.function_name,
      path_components: this.#path_components(),
      path: this.#path(),
      http_verb: this.#http_verb(),
      body_required: this.func.request_body?.required,
      return_type: '{{abort: function(), then: function(), catch: function()}|Promise<never>|*}',
      required_params: Array.from(this.func.required_params),
      path_params: _.keys(this.func.path_params),
      bulk_body: this.func.request_body?.bulk ?? false
    }
  }

  #parameter_descriptions (): Array<Record<string, any>> {
    return Object.values(this.func.params).map((p) => {
      return {
        type: `{${this.#parameter_type(p.schema.type as string)}}`,
        jsdoc_name: p.required ? `params.${p.name}` : `[params.${p.name}${p.default == null ? '' : `=${p.default}`}]`,
        deprecated: p.deprecated,
        description: p.description ? `- ${p.description}` : ''
      }
    })
  }

  #parameter_type (type: string | undefined | any[]): string {
    if (type == null) return 'string'
    if (Array.isArray(type)) return type.map(this.#parameter_type.bind(this)).join(' | ')
    if (['integer', 'long'].includes(type)) return 'number'
    return type
  }

  #path (): string {
    const path_params = _.values(this.func.path_params)
    if (path_params.length === 0) return `'${this.func.url}'`
    if (path_params.every((p) => p.required)) return `${this.#path_components().join(' + ')}`
    return `[${this.#path_components().join(', ')}].filter(c => c).join('').replace('//', '/')`
  }

  #path_components (): string[] {
    return this.func.url
      .split('{')
      .flatMap(x => x.split('}'))
      .map(x => x.includes('/') ? `'${x}'` : x)
      .filter(x => x !== '')
  }

  #http_verb (): string {
    const verbs = Array.from(this.func.http_verbs).sort()
    if (_.isEqual(verbs, ['GET', 'POST'])) return "body ? 'POST' : 'GET'"
    if (_.isEqual(verbs, ['POST', 'PUT'])) {
      const optional = (_.values(this.func.path_params)).find((p) => !p.required)?.name
      if (optional == null) return "'POST'"
      return `${optional} == null ? 'POST' : 'PUT'`
    }
    return `'${verbs[0]}'`
  }
}
