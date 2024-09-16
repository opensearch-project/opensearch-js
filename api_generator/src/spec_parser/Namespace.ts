/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import ApiFunction from './ApiFunction'
import { type Operation } from './types'
import _ from 'lodash'
import { to_pascal_case } from '../helpers'

export default class Namespace {
  readonly name: string
  readonly module_name: string
  readonly root: boolean
  readonly doc_namespace: string
  readonly prototype_name: string
  readonly functions: Record<string, ApiFunction>

  constructor (name: string, operations: Operation[]) {
    this.name = name
    this.root = name === '_core'
    this.prototype_name = this.root ? name : _.camelCase(name)
    this.module_name = `${to_pascal_case(name)}Api`
    this.doc_namespace = this.root ? 'API-Core' : `API-${name.split('_').map(e => _.capitalize(e)).join('-')}`
    this.functions =
      _.fromPairs(
        _.entries(
          _.groupBy(operations, 'group'))
          .map(([name, ops]) => [name, new ApiFunction(ops, this.prototype_name)]))
  }
}
