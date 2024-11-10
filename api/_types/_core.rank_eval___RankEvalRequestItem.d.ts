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

import * as CommonId from './_common___Id'
import * as Core_RankEvalDocumentRating from './_core.rank_eval___DocumentRating'
import * as Core_RankEvalRankEvalQuery from './_core.rank_eval___RankEvalQuery'

export type undefined = {
  id: CommonId.undefined;
  params?: Record<string, Record<string, any>>;
  ratings: Core_RankEvalDocumentRating.undefined[];
  request?: Core_RankEvalRankEvalQuery.undefined;
  template_id?: CommonId.undefined;
}

