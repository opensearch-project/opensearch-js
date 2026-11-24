/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

import Generator from './Generator'

// `npm run generate_api -- --model` reads the types from the spec's client model (its `x-model` extensions).
const generator = new Generator('opensearch-openapi.yaml', '../', process.argv.includes('--model'))
generator.generate()
