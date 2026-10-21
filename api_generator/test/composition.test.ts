/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// Schema composition shapes (allOf/oneOf/anyOf nested in each other) that have caused type regressions.
// The assertions are made against the TypeScript compiler, so they check what users can write,
// not the exact text the generator emits.
//
// Known bugs are marked `test.failing`: the test documents the correct behavior and is expected to fail
// until the generator is fixed. See https://github.com/opensearch-project/opensearch-js/issues/1154.

import { render_types, spec_from_fixture, spec_from_yaml, type_check, type_definition, type RenderedFiles } from './harness'

const IMPORTS = `
import * as Common from './_types/_common'
import * as Common_Aggregations from './_types/_common.aggregations'
import * as Common_QueryDsl from './_types/_common.query_dsl'
`

describe('composition shapes from the spec', () => {
  let files: RenderedFiles
  beforeAll(() => { files = render_types(spec_from_fixture('composition.yaml')) })

  const check = (source: string): string[] => type_check(files, `${IMPORTS}\n${source}\nexport {}\n`)

  // S1: allOf: [$ref, { oneOf: [...] }], a union used as an allOf member (AggregationContainer).
  describe('union as an allOf member (AggregationContainer)', () => {
    test('renders the shared part intersected with the union of variants', () => {
      expect(type_definition(files, '_common.aggregations', 'AggregationContainer')).toBe(`Aggregation & ({
  avg: AverageAggregation;
} | HistogramAggregation)`)
    })

    test('accepts one variant plus shared fields, rejects a container without a variant', () => {
      expect(check(`
const avg: Common_Aggregations.AggregationContainer = { avg: {}, meta: { owner: 'x' } }
const histogram: Common_Aggregations.AggregationContainer = { histogram: { interval: 10 }, aggregations: { inner: { avg: {} } } }
// @ts-expect-error a container needs one aggregation variant
const empty: Common_Aggregations.AggregationContainer = { meta: {} }
void [avg, histogram, empty]
`)).toEqual([])
    })
  })

  // S2: allOf: [object, { anyOf: [...] }] with optional-only branches (MetricAggregationBase, TermsAggregationFields).
  describe('anyOf as an allOf member (MetricAggregationBase, TermsAggregationFields)', () => {
    test.failing('keeps the properties of the anyOf branches', () => {
      expect(check(`
const by_field: Common_Aggregations.MetricAggregationBase = { field: 'price', missing: 0 }
const by_script: Common_Aggregations.MetricAggregationBase = { script: { source: 'doc.price.value' } }
const avg: Common_Aggregations.AggregationContainer = { avg: { field: 'price' } }
const terms: Common_Aggregations.TermsAggregationFields = { field: 'brand', size: 10 }
void [by_field, by_script, avg, terms]
`)).toEqual([])
    })
  })

  // S3: properties + required next to allOf: [{ oneOf: [...] }] (TermsLookup).
  describe('properties next to a composition keyword (TermsLookup)', () => {
    test.failing('keeps the sibling properties and their requiredness', () => {
      expect(check(`
const by_id: Common_QueryDsl.TermsLookup = { index: 'users', path: 'followers', id: '1' }
const by_query: Common_QueryDsl.TermsLookup = { index: 'users', path: 'followers', query: { match_all: {} }, routing: 'r', store: true }
// @ts-expect-error index and path are required
const without_index: Common_QueryDsl.TermsLookup = { id: '1' }
void [by_id, by_query, without_index]
`)).toEqual([])
    })

    test('still requires one of the oneOf branches', () => {
      expect(check(`
// @ts-expect-error either id or query is required
const neither: Common_QueryDsl.TermsLookup = { index: 'users', path: 'followers' }
void neither
`)).toEqual([])
    })
  })
})

describe('several unions as allOf members', () => {
  const files = (): RenderedFiles => render_types(spec_from_yaml(`
_common:
  Pair:
    allOf:
      - oneOf:
          - { type: object, properties: { a: { type: string } }, required: [a] }
          - { type: object, properties: { b: { type: string } }, required: [b] }
      - oneOf:
          - { type: object, properties: { c: { type: string } }, required: [c] }
          - { type: object, properties: { d: { type: string } }, required: [d] }
`))

  test.failing('intersects the unions instead of concatenating them', () => {
    expect(type_check(files(), `
import * as Common from './_types/_common'
const pair: Common.Pair = { a: 'a', c: 'c' }
// @ts-expect-error one branch of each union is required
const half: Common.Pair = { a: 'a' }
export { pair, half }
`)).toEqual([])
  })
})
