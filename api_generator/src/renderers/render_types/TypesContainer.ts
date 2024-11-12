/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import { type JSONSchema7 as Schema } from 'json-schema'
import path from 'path'
import _ from 'lodash'
import { to_pascal_case } from '../../helpers'

type FilePath = string
export const TYPE_COMPONENTS_FOLDER = '_types'
export const SEPARATOR = '___' // separating fileName___schemaName in $ref

export default class TypesContainer {
  static readonly REPO = new Map<FilePath, TypesContainer>()

  readonly folder_name: string
  readonly file_name: string
  readonly file_path: FilePath
  readonly import_name: string
  readonly referenced_containers = new Set<TypesContainer>()
  readonly is_function: boolean = false
  schemas: Record<string, Schema>

  constructor (folder_name: string, file_name: string, schemas: Record<string, Schema>, is_function = false) {
    this.folder_name = folder_name
    this.file_name = file_name
    this.file_path = path.join(folder_name, `${file_name}.d.ts`)
    this.import_name = _.map(file_name.split('.'), to_pascal_case).join('_')
    this.is_function = is_function
    this.schemas = schemas
  }

  static import_path (from: { file_path: string }, to: { file_path: string }): string {
    const relative = path.relative(path.dirname(to.file_path), from.file_path).replace('.d.ts', '')
    return relative.startsWith('.') ? relative : `./${relative}`
  }

  import_path (from: TypesContainer): string {
    return TypesContainer.import_path(from, this)
  }

  ref_to_obj (ref: string): string {
    if (ref === 'ApiResponse') return ref
    const schema_name = ref.split(SEPARATOR)[1]
    const container = this.ref_to_container(ref)
    if (container === this) return schema_name
    return `${container.import_name}.${schema_name}`
  }

  ref_to_container (ref: string): TypesContainer {
    let file_path: string = 'UNSET'
    if (ref.startsWith('#/components')) {
      const file_name = ref.split(SEPARATOR)[0].split('/').reverse()[0]
      file_path = `${TYPE_COMPONENTS_FOLDER}/${file_name}.d.ts`
    } else {
      const [folder_name, file_name] = ref.split(SEPARATOR)[0].split('/')
      file_path = `${folder_name}/${file_name}.d.ts`
    }
    const container = TypesContainer.REPO.get(file_path)
    if (!container) throw new Error(`Container not found for: ${ref} -> ${file_path}`)
    if (container === this) return this
    this.referenced_containers.add(container)
    return container
  }
}
