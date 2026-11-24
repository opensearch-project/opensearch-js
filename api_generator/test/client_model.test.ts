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
import { read_client_model, type ClientModel } from '../src/client_model/ClientModel'
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

// The spec with the model written into it, as `npm run merge` of opensearch-api-specification does.
const spec_with_model = (m: ClientModel = model()): RawOpenSearchSpec => {
  const merged = spec() as unknown as { components: Record<string, Record<string, any>> }
  const components = merged.components
  components['x-model'] = { format: m.format, version: m.version }
  components.requestBodies = {}
  const annotate = (section: string, entries: Record<string, unknown>): void => {
    for (const [name, entry] of Object.entries(entries)) {
      components[section][name] = { ...(components[section][name] ?? { type: 'object' }), 'x-model': entry }
    }
  }
  annotate('schemas', m.types)
  annotate('responses', m.responses)
  annotate('requestBodies', m.request_bodies)
  return merged as unknown as RawOpenSearchSpec
}

describe('read_client_model', () => {
  test('reassembles the model from the x-model of the components', () => {
    expect(read_client_model(spec_with_model())).toEqual(model())
  })

  test('keeps the order of the fields', () => {
    const read = read_client_model(spec_with_model())
    const lookup = read.types._common___TermsLookup
    expect(lookup.type_kind === 'object' ? Object.keys(lookup.fields) : []).toEqual(['index', 'id', 'query'])
  })

  test('takes only the components that have a model', () => {
    const merged = spec_with_model()
    merged.components.schemas._common___Unmodeled = { type: 'string' }
    expect(Object.keys(read_client_model(merged).types)).not.toContain('_common___Unmodeled')
  })

  test('fails without components.x-model', () => {
    expect(() => read_client_model(spec())).toThrow(/has no client model/)
  })

  test('fails on an unsupported version', () => {
    const merged = spec_with_model()
    ;(merged.components as Record<string, any>)['x-model'].version = '9.9.9'
    expect(() => read_client_model(merged)).toThrow(/Unsupported client model version 9.9.9/)
  })
})

describe('lower', () => {
  const lowered = spec_with_model()
  lower(lowered, read_client_model(lowered))
  const schemas = lowered.components.schemas as Record<string, any>
  const responses = lowered.components.responses as Record<string, any>

  test('keeps generic type parameters and the annotations of the original schemas, but not their x-model', () => {
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

  test('a presence branch brings its nested constraints along', () => {
    const m = model()
    m.types._common___Sort = {
      type_kind: 'object',
      fields: {
        field: { type: { scalar: 'string' }, required: false },
        script: { type: { scalar: 'string' }, required: false },
        lang: { type: { scalar: 'string' }, required: false }
      },
      constraints: [{ union_kind: 'presence', one_of: [['field'], ['script']], nested: [null, [{ union_kind: 'presence', any_of: [['lang']] }]] }]
    }
    const nested = spec_with_model(m)
    lower(nested, read_client_model(nested))
    const sort = (nested.components.schemas as Record<string, any>)._common___Sort
    expect(sort.allOf[1].oneOf[1]).toEqual({
      allOf: [
        { type: 'object', properties: { script: { type: 'string' } }, required: ['script'] },
        { anyOf: [{ type: 'object', properties: { lang: { type: 'string' } }, required: ['lang'] }] }
      ]
    })
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
