/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import { type RawOpenSearchSpec } from './spec_parser/types'
import _ from 'lodash'
import fs from 'fs'
import path from 'path'

export function resolve_ref (ref: string, root: Record<string, any>): any {
  const paths = ref.replace('#/', '').split('/')
  for (const p of paths) {
    root = root[p]
    if (root === undefined) break
  }
  return root
}

export function resolve_obj (obj: any, root: RawOpenSearchSpec): any | undefined {
  if (obj === undefined) return undefined
  if (obj.$ref == null) return obj
  else return resolve_ref(obj.$ref as string, root)
}

export function to_pascal_case (str: string): string {
  return _.upperFirst(_.camelCase(str))
}

export function recreate_dir (...paths: string[]): void {
  const folder_path = path.join(...paths)
  if (fs.existsSync(folder_path)) fs.rmSync(folder_path, { recursive: true })
  fs.mkdirSync(folder_path, { recursive: true })
}

export function clear_child_dirs (parent: string): void {
  fs.readdirSync(parent).forEach(file => {
    file = path.join(parent, file)
    if (fs.statSync(file).isDirectory()) fs.rmSync(file, { recursive: true })
  })
}
