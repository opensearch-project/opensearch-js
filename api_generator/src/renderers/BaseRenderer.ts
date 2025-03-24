/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import Mustache from 'mustache'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

export default class BaseRenderer {
  protected template_file: string = ''
  protected partial_files: string[] = []
  protected partials: Record<string, string> | undefined

  view (): Record<string, any> {
    throw Error('Not implemented')
  }

  render (args: { template_path?: string, view?: Record<string, any> } = {}): string {
    const full_path = path.join(__dirname, './templates', args.template_path ?? this.template_file)
    const template = fs.readFileSync(full_path, 'utf8')
    const view = args.view ?? this.view()
    return Mustache.render(template, { ...this.#commons(), ...view }, this.#partials())
  }

  #partials (): Record<string, string> {
    if (this.partials != null) return this.partials
    if (this.partial_files.length === 0) return {}
    this.partials = _.fromPairs(this.partial_files.map((file) => {
      const full_path = path.join(__dirname, './templates', file)
      const template = fs.readFileSync(full_path, 'utf8')
      return [file, template]
    }))
    return this.partials
  }

  #commons (): Record<string, any> {
    return {
      opensearch_license:
`/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */
`,
      generated_code_warning:
`/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */`
    }
  }
}
