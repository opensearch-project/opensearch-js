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
const { strongPasswordRequired } = require('../../lib/tools');

test('strongPasswordRequired', (t) => {
  t.plan(9);

  t.throws(() => strongPasswordRequired());

  t.ok(strongPasswordRequired('latest'));
  t.ok(strongPasswordRequired('3.0'));
  t.ok(strongPasswordRequired('2.12.x'));
  t.ok(strongPasswordRequired('2.12.0'));

  t.notOk(strongPasswordRequired('2.11'));
  t.notOk(strongPasswordRequired('2.11.x'));
  t.notOk(strongPasswordRequired('1.13.0'));
  t.notOk(strongPasswordRequired('1.x'));
});
