/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import TypesContainer, { SEPARATOR, TYPE_COMPONENTS_FOLDER } from './TypesContainer'
import type { JSONSchema7 as Schema } from 'json-schema'
import type { RawOpenSearchSpec, RawParameter } from '../../spec_parser/types'
import _ from 'lodash'

export default class ComponentTypesContainer extends TypesContainer {
  constructor (file_name: string, schemas: Record<string, Schema>) {
    super(TYPE_COMPONENTS_FOLDER, file_name, schemas)
  }

  static from_spec (spec: RawOpenSearchSpec): void {
    ComponentTypesContainer.build_components(spec)
    ComponentTypesContainer.build_global_params(spec)
  }

  private static build_components (spec: RawOpenSearchSpec): void {
    const referenced_schemas = _.entries(spec.components.schemas).map(([key, schema]) => {
      const [file_name, schema_name] = key.split(SEPARATOR)
      return { file_name, schema_name, schema }
    })
    const ref_schemas_map = _.groupBy(referenced_schemas, 'file_name')
    _.entries(ref_schemas_map).forEach(([file_name, schemas]) => {
      const schema_map = _.fromPairs(schemas.map(({ schema_name, schema }) => [schema_name, schema]))
      const container = new ComponentTypesContainer(file_name, schema_map)
      TypesContainer.REPO.set(container.file_path, container)
    })
  }

  private static build_global_params (spec: RawOpenSearchSpec): void {
    const params: RawParameter[] = _.entries(spec.components.parameters)
      .filter(([key]) => key.startsWith(`_global${SEPARATOR}`))
      .map(([, param]) => param)
    const required = params.filter(param => param.required).map(param => param.name)
    const properties = _.fromPairs(params.map(param => [param.name, param.schema]))
    const container = new ComponentTypesContainer('_global', { Params: { type: 'object', properties, required } })
    TypesContainer.REPO.set(container.file_path, container)
  }
}
