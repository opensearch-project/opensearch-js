/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import Namespace from './spec_parser/Namespace'
import { type RawOpenSearchSpec } from './spec_parser/types'
import OperationParser from './spec_parser/OperationParser'
import _ from 'lodash'
import fs from 'fs'
import YAML from 'yaml'
import * as path from 'path'
import ModuleFileRenderer from './renderers/render_code/ModuleFileRenderer'
import FunctionFileRenderer from './renderers/render_code/FunctionFileRenderer'
import OpensearchApiRenderder from './renderers/render_code/OpensearchApiRenderder'
import HttpModuleFileRenderer from './renderers/render_code/HttpModuleFileRenderer'
import HttpFunctionFileRenderer from './renderers/render_code/HttpFunctionFileRenderer'
import TypesFileRenderder from './renderers/render_types/TypesFileRenderder'
import TypesContainer, { TYPE_COMPONENTS_FOLDER } from './renderers/render_types/TypesContainer'
import ComponentTypesContainer from './renderers/render_types/ComponentTypesContainer'
import FunctionTypesContainer from './renderers/render_types/FunctionTypesContainer'
import { clear_child_dirs, recreate_dir } from './helpers'
import OpenSearchApiTypeRenderer from './renderers/render_types/OpensearchApiTypeRenderer'
import ApiTypeRenderer from './renderers/render_types/ApiTypeRenderer'

const HTTP_METHODS = ['get', 'post', 'put', 'delete', 'head', 'patch', 'options', 'trace', 'connect'].sort()

export default class Generator {
  readonly namespaces: Record<string, Namespace>
  readonly repo_folder: string

  constructor (spec_path: string, repo_folder: string) {
    this.repo_folder = repo_folder

    const raw_spec: RawOpenSearchSpec = YAML.parse(fs.readFileSync(spec_path, 'utf8'))
    const operations = (new OperationParser(raw_spec)).operations
    this.namespaces =
      _.fromPairs(
        _.entries(
          _.groupBy(operations, 'namespace'))
          .map(([name, ops]) => [name, new Namespace(name, ops)]))
    this.namespaces.http = new Namespace('http', [])
    ComponentTypesContainer.from_spec(raw_spec)
    FunctionTypesContainer.from_namespaces(_.values(this.namespaces))
  }

  generate (): void {
    this.#make_folders()
    this.#generate_namespace_actions()
    this.#generate_namespace_modules()
    this.#generate_opensearch_api()
    this.#generate_types_containers()
    this.#generate_api_index_type()
    this.#generate_opensearch_api_type()
  }

  #make_folders (): void {
    clear_child_dirs(path.join(this.repo_folder, 'api'))
    recreate_dir(path.join(this.repo_folder, 'api', TYPE_COMPONENTS_FOLDER))
    for (const ns of Object.values(this.namespaces)) recreate_dir(this.repo_folder, 'api', ns.prototype_name)
  }

  #generate_namespace_actions (): void {
    const generate_file = (ns: Namespace, file_name: string, content: string): void => {
      const file_path = path.join(this.repo_folder, 'api', ns.prototype_name, `${file_name}.js`)
      fs.writeFileSync(file_path, content)
    }

    for (const ns of _.values(this.namespaces)) {
      for (const func of _.values(ns.functions)) {
        const renderer = new FunctionFileRenderer(func, ns)
        generate_file(ns, func.prototype_name, renderer.render())
      }
    }

    for (const method of HTTP_METHODS) {
      const renderer = new HttpFunctionFileRenderer(method, this.namespaces.http)
      generate_file(this.namespaces.http, method, renderer.render())
    }
  }

  #generate_namespace_modules (): void {
    for (const ns of _.values(this.namespaces).filter(ns => !ns.root)) {
      const renderer = ns.prototype_name === 'http' ? new HttpModuleFileRenderer(ns, HTTP_METHODS) : new ModuleFileRenderer(ns)
      const file_path = path.join(this.repo_folder, 'api', ns.prototype_name, '_api.js')
      fs.writeFileSync(file_path, renderer.render())
    }
  }

  #generate_opensearch_api (): void {
    const file_path = path.join(this.repo_folder, 'api', 'OpenSearchApi.js')
    const content = new OpensearchApiRenderder(this.namespaces).render()
    fs.writeFileSync(file_path, content)
  }

  #generate_opensearch_api_type (): void {
    const file_path = path.join(this.repo_folder, 'api', 'OpenSearchApi.d.ts')
    const renderder = new OpenSearchApiTypeRenderer(this.namespaces, HTTP_METHODS)
    fs.writeFileSync(file_path, renderder.render())
  }

  #generate_types_containers (): void {
    for (const container of TypesContainer.REPO.values()) {
      const renderer = new TypesFileRenderder(container)
      const file_path = path.join(this.repo_folder, 'api', container.file_path)
      fs.writeFileSync(file_path, renderer.render())
    }
  }

  #generate_api_index_type (): void {
    const file_path = path.join(this.repo_folder, 'api', 'index.d.ts')
    const renderder = new ApiTypeRenderer()
    fs.writeFileSync(file_path, renderder.render())
  }
}
