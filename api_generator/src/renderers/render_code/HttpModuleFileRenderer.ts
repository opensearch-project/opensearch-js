/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import type Namespace from '../../spec_parser/Namespace'
import ModuleFileRenderer from './ModuleFileRenderer'

export default class HttpModuleFileRenderer extends ModuleFileRenderer {
  protected template_file = 'module.mustache'
  private readonly http_methods: string[]

  constructor (namespace: Namespace, http_methods: string[]) {
    super(namespace)
    this.http_methods = http_methods
  }

  view (): Record<string, any> {
    return {
      module_name: this.namespace.module_name,
      doc_namespace: this.namespace.doc_namespace,
      functions: this.#functions()
    }
  }

  #functions (): Array<Record<string, any>> {
    return this.http_methods.map((method) => {
      return {
        prototype_name: method,
        path: `./${method}`
      }
    })
  }
}
