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
import type ApiFunction from '../../spec_parser/ApiFunction'
import _ from 'lodash'

export default class OpensearchApiRenderder extends BaseRenderer {
  protected template_file = 'OpensearchAPI.mustache'
  private readonly namespaces: Record<string, Namespace>
  private readonly root_namespace: Namespace

  constructor (namespaces: Record<string, Namespace>) {
    super()
    this.root_namespace = namespaces._core
    this.namespaces = _.omit(namespaces, '_core')
  }

  view (): Record<string, any> {
    const root_functions = this.#root_functions()
    const api_modules = this.#api_modules()
    return {
      doc_namespace: this.root_namespace.doc_namespace,
      root_functions,
      deprecated_root_functions: root_functions.filter((f) => f.prototype_name !== f.snake_cased_name),
      api_modules,
      deprecated_api_modules: api_modules.filter((m) => m.prototype_name !== m.snake_cased_name)
    }
  }

  #root_functions (): Array<Record<string, any>> {
    return _.values(this.root_namespace.functions)
      .sort((a, b) => a.prototype_name.localeCompare(b.prototype_name))
      .map((func: ApiFunction) => {
        return {
          prototype_name: func.prototype_name,
          snake_cased_name: func.name,
          path: `./${this.root_namespace.prototype_name}/${func.prototype_name}`
        }
      })
  }

  #api_modules (): Array<Record<string, any>> {
    return _.values(this.namespaces)
      .sort((a, b) => a.module_name.localeCompare(b.module_name))
      .map((namespace: Namespace) => {
        return {
          prototype_name: namespace.prototype_name,
          snake_cased_name: namespace.name,
          path: `./${namespace.prototype_name}/_api`
        }
      })
  }
}
