/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyModule',
  },
  plugins: [resolve(), commonjs({ include: ['../../../node_modules/**'] }), json()],
};
