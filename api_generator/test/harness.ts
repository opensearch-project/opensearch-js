/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import fs from 'fs'
import os from 'os'
import path from 'path'
import _ from 'lodash'
import ts from 'typescript'
import YAML from 'yaml'
import { type JSONSchema7 as Schema } from 'json-schema'
import { type RawOpenSearchSpec } from '../src/spec_parser/types'
import TypesContainer, { SEPARATOR } from '../src/renderers/render_types/TypesContainer'
import ComponentTypesContainer from '../src/renderers/render_types/ComponentTypesContainer'
import TypesFileRenderder from '../src/renderers/render_types/TypesFileRenderder'

export type SchemaFiles = Record<string, Record<string, Schema>>
export type RenderedFiles = Record<string, string>

// Builds a minimal spec from schemas grouped by file name, e.g. { '_common': { Field: { type: 'string' } } }.
// $refs inside the schemas use the bundled form: '#/components/schemas/_common___Field'.
export function spec_from (files: SchemaFiles): RawOpenSearchSpec {
  const schemas = _.fromPairs(_.entries(files).flatMap(([file_name, file_schemas]) =>
    _.entries(file_schemas).map(([name, schema]) => [`${file_name}${SEPARATOR}${name}`, schema])))
  return { paths: {}, components: { schemas, parameters: {}, requestBodies: {}, responses: {} } }
}

export function spec_from_yaml (yaml_text: string): RawOpenSearchSpec {
  return spec_from(YAML.parse(yaml_text) as SchemaFiles)
}

export function spec_from_fixture (file_name: string): RawOpenSearchSpec {
  return spec_from_yaml(fs.readFileSync(path.join(__dirname, 'fixtures', file_name), 'utf8'))
}

// The type containers live in static registries, so every render starts from a clean slate.
export function reset_types (): void {
  TypesContainer.REPO.clear()
  TypesContainer.GENERIC_PARAMS.clear()
}

// Renders every component types container of the spec. Keys are paths relative to the api/ folder.
export function render_types (spec: RawOpenSearchSpec): RenderedFiles {
  reset_types()
  ComponentTypesContainer.from_spec(spec)
  return _.fromPairs(Array.from(TypesContainer.REPO.values())
    .map((container) => [container.file_path, new TypesFileRenderder(container).render()]))
}

// Returns the right-hand side of `export type <name> = ...` (or the body of `export interface <name>`).
export function type_definition (files: RenderedFiles, file_name: string, type_name: string): string {
  const content = files[path.join('_types', `${file_name}.d.ts`)]
  if (content == null) throw new Error(`No rendered file for ${file_name}`)
  const lines = content.split('\n')
  const start = lines.findIndex((line) => new RegExp(`^export (type|interface) ${_.escapeRegExp(type_name)}\\b`).test(line))
  if (start < 0) throw new Error(`Type ${type_name} not found in ${file_name}`)
  const end = lines.findIndex((line, index) => index > start && line === '')
  const definition = lines.slice(start, end < 0 ? undefined : end).join('\n')
  return definition.replace(/^export (type|interface) [^\s=<]+(<[^>]*>)?( = | )/, '')
}

// Writes the rendered files and a check file to a temp dir and type-checks them with tsc.
// The check file imports the rendered types relative to the api/ folder, e.g. `import * as Common from './_types/_common'`.
// Returns the formatted diagnostics; an empty array means the check file compiles.
export function type_check (files: RenderedFiles, check_source: string): string[] {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'api-generator-test-'))
  try {
    for (const [file_path, content] of _.entries(files)) {
      fs.mkdirSync(path.dirname(path.join(dir, file_path)), { recursive: true })
      fs.writeFileSync(path.join(dir, file_path), content)
    }
    const check_path = path.join(dir, 'check.ts')
    fs.writeFileSync(check_path, check_source)
    const program = ts.createProgram([check_path], { strict: true, noEmit: true, target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS })
    return ts.getPreEmitDiagnostics(program).map((diagnostic) => {
      const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
      if (diagnostic.file == null || diagnostic.start == null) return message
      const { line } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start)
      return `${path.relative(dir, diagnostic.file.fileName)}:${line + 1}: ${message}`
    })
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}
