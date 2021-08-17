/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

'use strict'

const { createReadStream } = require('fs')
const { join } = require('path')
const split = require('split2')
const { test, beforeEach, afterEach } = require('tap')
const { waitCluster } = require('../../utils')
const { Client } = require('../../../')

const INDEX = `test-helpers-${process.pid}`
const client = new Client({
  ssl: {
    rejectUnauthorized: false
  },
  node: process.env.TEST_OPENSEARCH_SERVER || 'https://localhost:9200',
  auth: {
    username: 'admin',
    password: 'admin'
  }
})

beforeEach(async () => {
  await waitCluster(client)
  await client.indices.create({ index: INDEX })
  const stream = createReadStream(join(__dirname, '..', '..', 'fixtures', 'stackoverflow.ndjson'))
  const result = await client.helpers.bulk({
    datasource: stream.pipe(split()),
    refreshOnCompletion: true,
    onDocument (doc) {
      return {
        index: { _index: INDEX }
      }
    }
  })
  if (result.failed > 0) {
    throw new Error('Failed bulk indexing docs')
  }
})

afterEach(async () => {
  await client.indices.delete({ index: INDEX }, { ignore: 404 })
})

test('search helper', async t => {
  const scrollSearch = client.helpers.scrollSearch({
    index: INDEX,
    body: {
      query: {
        match: {
          title: 'javascript'
        }
      }
    }
  })

  let count = 0
  for await (const search of scrollSearch) {
    count += 1
    for (const doc of search.documents) {
      t.ok(doc.title.toLowerCase().includes('javascript'))
    }
  }
  t.equal(count, 11)
})

test('clear a scroll search', async t => {
  const scrollSearch = client.helpers.scrollSearch({
    index: INDEX,
    body: {
      query: {
        match: {
          title: 'javascript'
        }
      }
    }
  })

  let count = 0
  for await (const search of scrollSearch) {
    count += 1
    if (count === 2) {
      search.clear()
    }
  }
  t.equal(count, 2)
})

test('scroll documents', async t => {
  const scrollSearch = client.helpers.scrollDocuments({
    index: INDEX,
    body: {
      query: {
        match: {
          title: 'javascript'
        }
      }
    }
  })

  let count = 0
  for await (const doc of scrollSearch) {
    count += 1
    t.ok(doc.title.toLowerCase().includes('javascript'))
  }
  t.equal(count, 106)
})
