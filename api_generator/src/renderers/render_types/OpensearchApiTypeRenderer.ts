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
import type Namespace from '../../spec_parser/Namespace'
import _ from 'lodash'

export default class OpensearchApiTypeRenderer extends BaseRenderer {
  protected template_file = 'type.OpensearchAPI.mustache'
  protected partial_files = ['type.function.mustache']
  private readonly http_methods: string[]
  private readonly namespaces: Namespace[]
  private readonly core_namespace: Namespace
  constructor (namespaces: Record<string, Namespace>, http_methods: string[]) {
    super()
    this.http_methods = http_methods
    this.core_namespace = namespaces._core
    this.namespaces = _.values(_.omit(namespaces, ['_core', 'http']))
      .sort((a, b) => a.prototype_name.localeCompare(b.prototype_name))
  }

  view (): Record<string, any> {
    return {
      core_functions: this.#functions_view(this.core_namespace),
      namespaces: this.namespaces.map(namespace => {
        return {
          name: namespace.prototype_name,
          functions: this.#functions_view(namespace)
        }
      }),
      http_methods: this.http_methods.map(method => method.toLowerCase())
    }
  }

  #functions_view (namespace: Namespace): Array<Record<string, any>> {
    return _.values(namespace.functions).map(func => {
      return {
        params_required: func.required_params.size > 0,
        function: func.prototype_name,
        request: `API.${func.types.request}`,
        response: `API.${func.types.response}`
      }
    })
  }
}
