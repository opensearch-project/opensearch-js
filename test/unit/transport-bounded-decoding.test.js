/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

'use strict';

const { test } = require('tap');
const { gzipSync } = require('zlib');
const intoStream = require('into-stream');
const { Connection } = require('../../index');
const { Client } = require('../utils');

// Regression: a compressed response with no content-length (as on chunked
// gzip responses) must not be decoded without bound. Before the fix the size
// guards sat behind `if (content-length !== undefined)`, so none ran, the
// body was inflated with no limit, and payload.toString() threw an uncaught
// ERR_STRING_TOO_LONG that terminated the process. The decoded output is now
// capped, so an oversized body surfaces as a normal, catchable error.
test('Compressed response with no content-length is bounded, not crashing', (t) => {
  t.plan(3);

  // A small, valid gzip body that decodes to far more than the cap below.
  const body = gzipSync(Buffer.alloc(4096, 0x61));

  class MockConnection extends Connection {
    request(params, callback) {
      const stream = intoStream(body);
      stream.statusCode = 200;
      stream.headers = {
        'content-type': 'application/json;utf=8',
        'content-encoding': 'gzip',
        // deliberately no content-length, as on a chunked gzip response
        connection: 'keep-alive',
        date: new Date().toISOString(),
      };
      process.nextTick(callback, null, stream);
      return { abort() {} };
    }
  }

  const client = new Client({
    node: 'http://localhost:9200',
    Connection: MockConnection,
    // Tiny budget forces the decoded-output cap down to its floor, so the
    // 4 KB decoded body overflows it. This exercises the same code path a
    // 660 MB real-world inflation would, without allocating it.
    memoryCircuitBreaker: { enabled: true, maxPercentage: 0.000001 },
  });

  client.info((err, result) => {
    // The process reaching this callback at all is the regression check:
    // the overflow is reported, not thrown uncaught.
    t.ok(err instanceof Error, 'oversized decode surfaces as a catchable error');
    t.notOk(result && result.body, 'no body is returned on overflow');
    t.equal(result.meta.attempts, 0, 'not retried');
  });
});

// A normal compressed response with no content-length must still work; the
// byte-counting and output cap added for the fix must not break the happy path.
test('Compressed response with no content-length still deserializes', (t) => {
  t.plan(2);

  const body = gzipSync(JSON.stringify({ hello: 'world' }));

  class MockConnection extends Connection {
    request(params, callback) {
      const stream = intoStream(body);
      stream.statusCode = 200;
      stream.headers = {
        'content-type': 'application/json;utf=8',
        'content-encoding': 'gzip',
        // no content-length, as on a chunked response
        connection: 'keep-alive',
        date: new Date().toISOString(),
      };
      process.nextTick(callback, null, stream);
      return { abort() {} };
    }
  }

  const client = new Client({ node: 'http://localhost:9200', Connection: MockConnection });
  client.info((err, { body }) => {
    t.error(err);
    t.same(body, { hello: 'world' });
  });
});

// Regression: an uncompressed response with no content-length must also be
// bounded. The accumulated string is checked against the decoded-size limit,
// which the memory circuit breaker tightens, so an oversized body is reported
// rather than accumulated without bound.
test('Uncompressed response with no content-length is bounded', (t) => {
  t.plan(2);

  class MockConnection extends Connection {
    request(params, callback) {
      const stream = intoStream(JSON.stringify({ hello: 'world', padding: 'x'.repeat(1024) }));
      stream.statusCode = 200;
      stream.headers = {
        'content-type': 'application/json;utf=8',
        // no content-length, as on a chunked response
        connection: 'keep-alive',
        date: new Date().toISOString(),
      };
      process.nextTick(callback, null, stream);
      return { abort() {} };
    }
  }

  const client = new Client({
    node: 'http://localhost:9200',
    Connection: MockConnection,
    // Tiny budget drives the decoded-size limit down to its floor, so the body
    // exceeds it and is reported instead of accumulated.
    memoryCircuitBreaker: { enabled: true, maxPercentage: 0.000001 },
  });

  client.info((err, result) => {
    t.ok(err instanceof Error, 'oversized body surfaces as a catchable error');
    t.equal(result.meta.attempts, 0, 'not retried');
  });
});

// An uncompressed response with no content-length must still work; the string
// byte-counting added for the fix must not break the happy path.
test('Uncompressed response with no content-length still deserializes', (t) => {
  t.plan(2);

  class MockConnection extends Connection {
    request(params, callback) {
      const stream = intoStream(JSON.stringify({ hello: 'world' }));
      stream.statusCode = 200;
      stream.headers = {
        'content-type': 'application/json;utf=8',
        // no content-length
        connection: 'keep-alive',
        date: new Date().toISOString(),
      };
      process.nextTick(callback, null, stream);
      return { abort() {} };
    }
  }

  const client = new Client({ node: 'http://localhost:9200', Connection: MockConnection });
  client.info((err, { body }) => {
    t.error(err);
    t.same(body, { hello: 'world' });
  });
});
