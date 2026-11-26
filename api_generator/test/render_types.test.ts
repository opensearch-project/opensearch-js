/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// Baseline behavior of the component type renderer for shapes it already handles correctly.

import { render_types, spec_from_yaml, type_definition, type_check, type RenderedFiles } from './harness'

const COMMON = `
_common:
  Field:
    type: string
  Fields:
    oneOf:
      - $ref: '#/components/schemas/_common___Field'
      - type: array
        items:
          $ref: '#/components/schemas/_common___Field'
  Simple:
    type: object
    properties:
      b:
        type: integer
      a:
        type: string
      x-y:
        type: boolean
    required: [a]
  Kind:
    type: string
    enum: [one, two]
  Counts:
    type: object
    additionalProperties:
      type: number
  Base:
    type: object
    properties:
      name:
        type: string
  Child:
    allOf:
      - $ref: '#/components/schemas/_common___Base'
      - type: object
        properties:
          age:
            type: number
        required: [age]
  Titled:
    oneOf:
      - title: value
        type: string
      - title: object
        type: object
        properties:
          value:
            type: string
        required: [value]
_common.mapping:
  Property:
    type: object
    properties:
      field:
        $ref: '#/components/schemas/_common___Field'
      copy_to:
        $ref: '#/components/schemas/_common___Fields'
`

describe('render_types', () => {
  let files: RenderedFiles
  beforeAll(() => { files = render_types(spec_from_yaml(COMMON)) })

  test('renders object properties sorted, with optional markers and quoted keys', () => {
    expect(type_definition(files, '_common', 'Simple')).toBe(`{
  a: string;
  b?: number;
  'x-y'?: boolean;
}`)
  })

  test('renders string enums as literal unions', () => {
    expect(type_definition(files, '_common', 'Kind')).toBe("'one' | 'two'")
  })

  test('renders scalar-or-array unions', () => {
    expect(type_definition(files, '_common', 'Fields')).toBe('Field | Field[]')
  })

  test('renders additionalProperties-only objects as records', () => {
    expect(type_definition(files, '_common', 'Counts')).toBe('Record<string, number>')
  })

  test('renders refs into other files through a namespace import', () => {
    expect(files['_types/_common.mapping.d.ts']).toContain("import * as Common from './_common'")
    expect(type_definition(files, '_common.mapping', 'Property')).toBe(`{
  copy_to?: Common.Fields;
  field?: Common.Field;
}`)
  })

  test('renders allOf of a ref and an inline object as an intersection', () => {
    expect(type_definition(files, '_common', 'Child')).toBe(`Base & {
  age: number;
}`)
  })

  test('renders titled oneOf branches as a union', () => {
    expect(type_definition(files, '_common', 'Titled')).toBe(`string | {
  value: string;
}`)
  })

  test('rendered files compile', () => {
    expect(type_check(files, `
import * as Common from './_types/_common'
const child: Common.Child = { name: 'n', age: 1 }
// @ts-expect-error age is required
const child_without_age: Common.Child = { name: 'n' }
const titled: Common.Titled[] = ['v', { value: 'v' }]
export { child, child_without_age, titled }
`)).toEqual([])
  })
})
