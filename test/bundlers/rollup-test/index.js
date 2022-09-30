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

const { Client } = require('../../../index');
const client = new Client({ node: 'http://localhost:9200' });
client.info((err) => {
  process.exit(err ? 1 : 0);
});
