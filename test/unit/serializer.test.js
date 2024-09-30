/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

const { test } = require('tap');
const { stringify } = require('querystring');
const Serializer = require('../../lib/Serializer');
const { SerializationError, DeserializationError } = require('../../lib/errors');

test('Basic', (t) => {
  t.plan(2);
  const s = new Serializer();
  const obj = { hello: 'world' };
  const json = JSON.stringify(obj);
  t.equal(s.serialize(obj), json);
  t.same(s.deserialize(json), obj);
});

test('Long numerals enabled', (t) => {
  t.plan(3);
  const s = new Serializer({ enableLongNumeralSupport: true });
  const longPositive = BigInt(Number.MAX_SAFE_INTEGER) * 2n; // eslint-disable-line no-undef
  const longNegative = BigInt(Number.MIN_SAFE_INTEGER) * 2n; // eslint-disable-line no-undef
  const json =
    `{` +
    // The space before and after the values, and the lack of spaces before comma are intentional
    `"\\":${longPositive}": "[ ${longNegative.toString()}, ${longPositive.toString()} ]", ` +
    `"positive": ${longPositive.toString()}, ` +
    `"array": [ ${longNegative.toString()}, ${longPositive.toString()} ], ` +
    `"negative": ${longNegative.toString()},` +
    `"false-positive-1": "෴${longNegative.toString()}", ` +
    `"false-positive-2": "[ ߷${longPositive.toString()} ]", ` +
    `"false-positive-3": "\\": ֍${longPositive.toString()}\\"", ` +
    `"false-positive-4": "෴߷֍${longPositive.toString()}", ` +
    `"hardcoded": 102931203123987` +
    `}`;
  const obj = s.deserialize(json);
  const res = s.serialize(obj);
  t.same(obj, {
    hardcoded: 102931203123987,
    'false-positive-4': `෴߷֍${longPositive.toString()}`,
    'false-positive-3': `": ֍${longPositive.toString()}"`,
    'false-positive-2': `[ ߷${longPositive.toString()} ]`,
    'false-positive-1': `෴${longNegative.toString()}`,
    negative: longNegative,
    array: [longNegative, longPositive],
    positive: longPositive,
    ['":' + longPositive]: `[ ${longNegative.toString()}, ${longPositive.toString()} ]`,
  });
  // The space before and after the values, and the lack of spaces before comma are intentional
  t.equal(res.replace(/\s+/g, ''), json.replace(/\s+/g, ''));
  t.match(res, `"[ ${longNegative.toString()}, ${longPositive.toString()} ]"`);
});

test('long numerals not enabled', (t) => {
  t.plan(5);
  const s = new Serializer({ enableLongNumeralSupport: false });
  const longPositive = BigInt(Number.MAX_SAFE_INTEGER) * 3n; // eslint-disable-line no-undef
  const longNegative = BigInt(Number.MIN_SAFE_INTEGER) * 3n; // eslint-disable-line no-undef
  const json =
    `{` +
    `"positive": ${longPositive.toString()}, ` +
    `"negative": ${longNegative.toString()}` +
    `}`;
  const obj = s.deserialize(json);
  const res = s.serialize(obj);
  t.not(obj.positive, longPositive);
  t.not(obj.negative, longNegative);
  t.equal(typeof obj.positive, 'number');
  t.equal(typeof obj.negative, 'number');
  t.not(res.replace(/\s+/g, ''), json.replace(/\s+/g, ''));
});

test('ndserialize', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = [{ hello: 'world' }, { winter: 'is coming' }, { you_know: 'for search' }];
  t.equal(
    s.ndserialize(obj),
    JSON.stringify(obj[0]) + '\n' + JSON.stringify(obj[1]) + '\n' + JSON.stringify(obj[2]) + '\n'
  );
});

test('ndserialize (strings)', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = [
    JSON.stringify({ hello: 'world' }),
    JSON.stringify({ winter: 'is coming' }),
    JSON.stringify({ you_know: 'for search' }),
  ];
  t.equal(s.ndserialize(obj), obj[0] + '\n' + obj[1] + '\n' + obj[2] + '\n');
});

test('qserialize', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = {
    hello: 'world',
    you_know: 'for search',
  };

  t.equal(s.qserialize(obj), stringify(obj));
});

test('qserialize (array)', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = {
    hello: 'world',
    arr: ['foo', 'bar'],
  };

  t.equal(s.qserialize(obj), 'hello=world&arr=foo%2Cbar');
});

test('qserialize (string)', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = {
    hello: 'world',
    you_know: 'for search',
  };

  t.equal(s.qserialize(stringify(obj)), stringify(obj));
});

test('qserialize (key with undefined value)', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = {
    hello: 'world',
    key: undefined,
    foo: 'bar',
  };

  t.equal(s.qserialize(obj), 'hello=world&foo=bar');
});

test('SerializationError', (t) => {
  t.plan(1);
  const s = new Serializer();
  const obj = { hello: 'world' };
  obj.o = obj;
  try {
    s.serialize(obj);
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof SerializationError);
  }
});

test('SerializationError ndserialize', (t) => {
  t.plan(1);
  const s = new Serializer();
  try {
    s.ndserialize({ hello: 'world' });
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof SerializationError);
  }
});

test('DeserializationError', (t) => {
  t.plan(1);
  const s = new Serializer();
  const json = '{"hello';
  try {
    s.deserialize(json);
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof DeserializationError);
  }
});

test('prototype poisoning protection', (t) => {
  t.plan(2);
  const s = new Serializer();
  try {
    s.deserialize('{"__proto__":{"foo":"bar"}}');
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof DeserializationError);
  }

  try {
    s.deserialize('{"constructor":{"prototype":{"foo":"bar"}}}');
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof DeserializationError);
  }
});

test('disable prototype poisoning protection', (t) => {
  t.plan(2);
  const s = new Serializer({ disablePrototypePoisoningProtection: true });
  try {
    s.deserialize('{"__proto__":{"foo":"bar"}}');
    t.pass('Should not fail');
  } catch (err) {
    t.fail(err);
  }

  try {
    s.deserialize('{"constructor":{"prototype":{"foo":"bar"}}}');
    t.pass('Should not fail');
  } catch (err) {
    t.fail(err);
  }
});

test('disable prototype poisoning protection only for proto', (t) => {
  t.plan(2);
  const s = new Serializer({ disablePrototypePoisoningProtection: 'proto' });
  try {
    s.deserialize('{"__proto__":{"foo":"bar"}}');
    t.pass('Should not fail');
  } catch (err) {
    t.fail(err);
  }

  try {
    s.deserialize('{"constructor":{"prototype":{"foo":"bar"}}}');
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof DeserializationError);
  }
});

test('disable prototype poisoning protection only for constructor', (t) => {
  t.plan(2);
  const s = new Serializer({ disablePrototypePoisoningProtection: 'constructor' });
  try {
    s.deserialize('{"__proto__":{"foo":"bar"}}');
    t.fail('Should fail');
  } catch (err) {
    t.ok(err instanceof DeserializationError);
  }

  try {
    s.deserialize('{"constructor":{"prototype":{"foo":"bar"}}}');
    t.pass('Should not fail');
  } catch (err) {
    t.fail(err);
  }
});

test('Long numerals and ANSI escape sequences', (t) => {
  t.plan(1);
  const s = new Serializer({ enableLongNumeralSupport: true });
  const obj = {message: "hello \u001b[38;7;2mworld\u001b[0m", value: BigInt(Number.MAX_SAFE_INTEGER) * 2n};
  t.same(s.deserialize(s.serialize(obj)), obj);
})
