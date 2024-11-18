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
import { type Operation } from './types'

export default class ApiPath {
  readonly url: string
  readonly components: string[]
  readonly params: string[]
  readonly param_signature: string
  readonly static_signature: string

  constructor (url: string) {
    this.url = url
    this.components = this.#components()
    this.params = this.components.filter(x => !x.startsWith("'"))
    this.param_signature = _.clone(this.params).sort().join()
    this.static_signature = this.components.filter(x => x.startsWith("'"))
      .map(x => x.replaceAll("'", ''))
      .join('/')
  }

  static from_operations (operations: Operation[]): ApiPath[] {
    const paths = operations.map(o => new ApiPath(o.url))
    return _.uniqBy(paths, 'param_signature')
  }

  // Operations with statically uniform paths can be grouped together in a simple one-line path constructor
  // Operations with diverged paths will require a more complex path constructor with multiple if-else branches
  static statically_uniform (paths: ApiPath[]): boolean {
    return _.uniqBy(paths, 'static_signature').length === 1
  }

  // Generate a path constructor
  // @param required - whether all path parameters are required
  build (required: boolean): string {
    if (this.components.length === 0) return "'/'"
    return required ? this.#build_required() : this.#build_optional()
  }

  // turn ['one', a, b, 'two/three', c] into '/one' + a + '/' + b + '/two/three/' + c
  // turn [a, b, 'one', c] into '/' + a + '/' + b + '/one/' + c
  #build_required (): string {
    const components = this.components.map(x => !x.startsWith("'") ? x : `'/${x.slice(1, -1)}/'`)
    if (!components[0].startsWith("'")) components.unshift("'/'")
    const next = _.clone(components)
    next.shift()
    next.push("'^.^'") // sentinel value to mark the end of the array
    return Array.from({ length: components.length }, (_, i) => [components[i], next[i]])
      .flatMap(([com, nxt]) => {
        if (!com.startsWith("'") && !nxt.startsWith("'")) return [com, "'/'"] // insert '/' between param components
        if (com.startsWith("'") && nxt === "'^.^'") return `${com.slice(0, -2)}'` // remove trailing '/' from last component
        return com
      }).join(' + ')
  }

  // turn ['one', a, b, 'two/three', c] into `['/one', a, b, 'two/three', c].filter(c => c != null).join('/')`
  // turn [a, b, 'one', c] into `['', a, b, 'one', c].filter(c => c != null).join('/')`
  #build_optional (): string {
    const components = _.clone(this.components)
    if (components[0].startsWith("'")) components[0] = `'/${components[0].slice(1)}`
    else components.unshift("''")
    return `[${components.join(', ')}].filter(c => c != null).join('/')`
  }

  // turn '/one/{a}/{b}/two/three/{c}' into ['one', a, b, 'two/three', c]
  #components (): string[] {
    return this.url
      .split('{').flatMap(x => x.split('}'))
      .map(x => {
        if (!x.includes('/')) return x // path parameter
        if (x.startsWith('/')) x = x.slice(1) // remove leading '/' of static component
        if (x.endsWith('/')) x = x.slice(0, -1) // remove trailing '/' of static component
        return `'${x}'` // static component
      })
      .filter(x => x !== '' && x !== "''")
  }
}
