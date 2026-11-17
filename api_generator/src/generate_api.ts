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

// `npm run generate_api -- --model <opensearch-client-model.json>` reads the types from the spec's client model.
const model_index = process.argv.indexOf('--model')
const model_path = model_index >= 0 ? process.argv[model_index + 1] : undefined
if (model_index >= 0 && model_path == null) throw new Error('--model needs the path of the client model')
const generator = new Generator('opensearch-openapi.yaml', '../', model_path)
generator.generate()
