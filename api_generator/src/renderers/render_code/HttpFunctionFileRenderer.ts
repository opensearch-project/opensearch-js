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
import BaseRenderer from '../BaseRenderer'

export default class HttpFunctionFileRenderer extends BaseRenderer {
  protected template_file = 'http_function.mustache'
  private readonly method: string
  private readonly namespace: Namespace

  constructor (method: string, namespace: Namespace) {
    super()
    this.method = method
    this.namespace = namespace
  }

  view (): Record<string, any> {
    return {
      capitalized_method: this.method.toUpperCase(),
      doc_namespace: this.namespace.doc_namespace,
      return_type: '{{abort: function(), then: function(), catch: function()}|Promise<never>|*}',
      function_name: `${this.method}Func`
    }
  }
}
