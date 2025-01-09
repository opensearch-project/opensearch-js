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
import TypesContainer from './TypesContainer'

export default class ComponentTypesRenderer extends BaseRenderer {
  protected template_file = 'types.component_types.mustache'
  private readonly containers: TypesContainer[]

  constructor () {
    super()
    this.containers = [...TypesContainer.REPO.values()].filter((container) => container.folder_name === '_types')
  }

  view (): Record<string, any> {
    return { imports: this.#imports(), exports: this.#exports() }
  }

  #imports (): Array<{ name: string, path: string }> {
    return this.containers.map(container => {
      return {
        name: container.import_name,
        path: FunctionTypesContainer.import_path(container, { file_path: './_types/index.d.ts' })
      }
    })
  }

  #exports (): string[] {
    return this.containers.map(container => container.import_name)
  }
}
