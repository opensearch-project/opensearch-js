/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import lower from '../src/client_model/lower'
import type { ClientModel } from '../src/client_model/ClientModel'
import type { RawOpenSearchSpec } from '../src/spec_parser/types'

const ref = (name: string): { $ref: string } => ({ $ref: `#/components/schemas/${name}` })

const model = (): ClientModel => ({
  format: 'opensearch-client-model',
  version: '0.2.0',
  types: {
    _common___Id: { type_kind: 'alias', type: { scalar: 'string' } },
    _common___TDocument: { type_kind: 'alias', type: { any: true }, generic_parameter: true },
    _common___Base: { type_kind: 'object', fields: { total: { type: { scalar: 'integer' }, required: false } }, constraints: [] },
    _common___Derived: {
      type_kind: 'object',
      bases: ['_common___Base'],
      fields: {
        total: { type: { scalar: 'integer' }, required: true, declared_in: '_common___Base' },
        own: { type: { ref: '_common___Id' }, required: false }
      },
      constraints: []
    },
    _common___TermsLookup: {
      type_kind: 'object',
      fields: {
        index: { type: { scalar: 'string' }, required: true },
        id: { type: { ref: '_common___Id' }, required: false },
        query: { type: { scalar: 'string' }, required: false }
      },
      constraints: [{ union_kind: 'presence', one_of: [['id'], ['query']] }]
    },
    _common___Container: {
      type_kind: 'object',
      fields: { meta: { type: { map: { any: true } }, required: false } },
      constraints: [{
        union_kind: 'container',
        variants: {
          avg: { value: { ref: '_common___Base' }, extra_fields: {}, extra_constraints: [] },
          terms: {
            value: { ref: '_common___Base' },
            extra_fields: { aggs: { type: { map: { ref: '_common___Container' } }, required: false } },
            extra_constraints: [{ union_kind: 'not_all', keys: ['aggs', 'aggregations'] }]
          }
        }
      }]
    },
    _common___Choice: { type_kind: 'union', union_kind: 'titled', exclusive: true, variants: { a: { ref: '_common___Id' }, b: { array: { ref: '_common___Id' } } }, titles: ['a', 'b'] }
  },
  responses: { get___200: { media_type: 'application/json', type: { object: { fields: { found: { type: { scalar: 'boolean' }, required: true } }, constraints: [] } } } },
  request_bodies: {}
})

const spec = (): RawOpenSearchSpec => (({
  components: {
    schemas: {
      _common___TDocument: { 'x-is-generic-type-parameter': true },
      _common___Id: { type: 'string', description: 'An id.', default: 'x' }
    },
    responses: { get___200: { content: { 'application/json': { schema: { type: 'object', description: 'Found.' } } } } }
  }
}) as unknown as RawOpenSearchSpec)

describe('lower', () => {
  const lowered = spec()
  lower(lowered, model())
  const schemas = lowered.components.schemas as Record<string, any>
  const responses = lowered.components.responses as Record<string, any>

  test('keeps generic type parameters and the annotations of the original schemas', () => {
    expect(schemas._common___TDocument).toEqual({ 'x-is-generic-type-parameter': true })
    expect(schemas._common___Id).toEqual({ type: 'string', description: 'An id.', default: 'x' })
  })

  test('an object with bases is the bases plus its own fields; inherited fields it makes required stay required', () => {
    expect(schemas._common___Derived).toEqual({
      allOf: [ref('_common___Base'), { type: 'object', properties: { own: ref('_common___Id') }, required: ['total'] }]
    })
  })

  test('a presence constraint is a union of objects with the fields each branch requires', () => {
    expect(schemas._common___TermsLookup.allOf[1]).toEqual({
      oneOf: [
        { type: 'object', properties: { id: ref('_common___Id') }, required: ['id'] },
        { type: 'object', properties: { query: { type: 'string' } }, required: ['query'] }
      ]
    })
  })

  test('a container is a union of its variants, each with the fields only it allows', () => {
    expect(schemas._common___Container.allOf[1].oneOf).toEqual([
      { type: 'object', properties: { avg: ref('_common___Base') }, required: ['avg'] },
      { type: 'object', properties: { terms: ref('_common___Base'), aggs: { type: 'object', additionalProperties: ref('_common___Container') } }, required: ['terms'] }
    ])
  })

  test('a union keeps its member titles', () => {
    expect(schemas._common___Choice).toEqual({
      oneOf: [{ ...ref('_common___Id'), title: 'a' }, { type: 'array', items: ref('_common___Id'), title: 'b' }]
    })
  })

  test('response bodies are lowered too, keeping their annotations', () => {
    expect(responses.get___200.content['application/json'].schema).toEqual({
      type: 'object', properties: { found: { type: 'boolean' } }, required: ['found'], description: 'Found.'
    })
  })
})
