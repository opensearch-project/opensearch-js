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

export default class ModuleFileRenderer extends BaseRenderer {
  protected template_file = 'module.mustache'
  protected readonly namespace: Namespace

  constructor (namespace: Namespace) {
    super()
    this.namespace = namespace
  }

  view (): Record<string, any> {
    const functions = this.#functions()
    return {
      module_name: this.namespace.module_name,
      doc_namespace: this.namespace.doc_namespace,
      functions,
      deprecated_functions: functions.filter((f) => f.prototype_name !== f.snake_cased_name)
    }
  }

  #functions (): Array<Record<string, any>> {
    return _.values(this.namespace.functions)
      .sort((a, b) => a.prototype_name.localeCompare(b.prototype_name))
      .map((func: ApiFunction) => {
        return {
          prototype_name: func.prototype_name,
          snake_cased_name: func.name,
          path: `./${func.prototype_name}`
        }
      })
  }
}
