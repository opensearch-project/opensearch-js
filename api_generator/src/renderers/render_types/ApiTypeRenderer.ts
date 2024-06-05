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
import FunctionTypesContainer from './FunctionTypesContainer'

export default class ApiTypeRenderer extends BaseRenderer {
  protected template_file = 'types.api.mustache'
  private readonly containers: FunctionTypesContainer[]

  constructor () {
    super()
    this.containers = FunctionTypesContainer.repo()
  }

  view (): Record<string, any> {
    return { imports: this.#imports(), exports: this.#exports() }
  }

  #imports (): Array<{ types: string, path: string }> {
    return this.containers.map(container => {
      return {
        types: Object.keys(container.schemas).join(', '),
        path: FunctionTypesContainer.import_path(container, { file_path: './' })
      }
    })
  }

  #exports (): string[] {
    return this.containers.map(container => Object.keys(container.schemas).join(', '))
  }
}
