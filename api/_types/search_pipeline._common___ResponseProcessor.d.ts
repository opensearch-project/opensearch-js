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

import * as SearchPipeline_CommonCollapseResponseProcessor from './search_pipeline._common___CollapseResponseProcessor'
import * as SearchPipeline_CommonPersonalizeSearchRankingResponseProcessor from './search_pipeline._common___PersonalizeSearchRankingResponseProcessor'
import * as SearchPipeline_CommonRenameFieldResponseProcessor from './search_pipeline._common___RenameFieldResponseProcessor'
import * as SearchPipeline_CommonRerankResponseProcessor from './search_pipeline._common___RerankResponseProcessor'
import * as SearchPipeline_CommonRetrievalAugmentedGenerationResponseProcessor from './search_pipeline._common___RetrievalAugmentedGenerationResponseProcessor'
import * as SearchPipeline_CommonSortResponseProcessor from './search_pipeline._common___SortResponseProcessor'
import * as SearchPipeline_CommonSplitResponseProcessor from './search_pipeline._common___SplitResponseProcessor'
import * as SearchPipeline_CommonTruncateHitsResponseProcessor from './search_pipeline._common___TruncateHitsResponseProcessor'

export type undefined = {
  personalize_search_ranking: SearchPipeline_CommonPersonalizeSearchRankingResponseProcessor.undefined;
} | {
  retrieval_augmented_generation: SearchPipeline_CommonRetrievalAugmentedGenerationResponseProcessor.undefined;
} | {
  rename_field: SearchPipeline_CommonRenameFieldResponseProcessor.undefined;
} | {
  rerank: SearchPipeline_CommonRerankResponseProcessor.undefined;
} | {
  collapse: SearchPipeline_CommonCollapseResponseProcessor.undefined;
} | {
  truncate_hits: SearchPipeline_CommonTruncateHitsResponseProcessor.undefined;
} | {
  sort: SearchPipeline_CommonSortResponseProcessor.undefined;
} | {
  split: SearchPipeline_CommonSplitResponseProcessor.undefined;
}

