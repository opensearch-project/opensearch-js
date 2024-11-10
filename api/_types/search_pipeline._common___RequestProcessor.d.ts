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
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

import * as SearchPipeline_CommonFilterQueryRequestProcessor from './search_pipeline._common___FilterQueryRequestProcessor'
import * as SearchPipeline_CommonNeuralQueryEnricherRequestProcessor from './search_pipeline._common___NeuralQueryEnricherRequestProcessor'
import * as SearchPipeline_CommonOversampleRequestProcessor from './search_pipeline._common___OversampleRequestProcessor'
import * as SearchPipeline_CommonSearchScriptRequestProcessor from './search_pipeline._common___SearchScriptRequestProcessor'

export type undefined = {
  filter_query: SearchPipeline_CommonFilterQueryRequestProcessor.undefined;
} | {
  neural_query_enricher: SearchPipeline_CommonNeuralQueryEnricherRequestProcessor.undefined;
} | {
  script: SearchPipeline_CommonSearchScriptRequestProcessor.undefined;
} | {
  oversample: SearchPipeline_CommonOversampleRequestProcessor.undefined;
}

