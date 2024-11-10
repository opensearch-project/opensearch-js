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

import * as Core_RankEvalRankEvalHitItem from './_core.rank_eval___RankEvalHitItem'
import * as Core_RankEvalUnratedDocument from './_core.rank_eval___UnratedDocument'

export type undefined = {
  hits: Core_RankEvalRankEvalHitItem.undefined[];
  metric_details: Record<string, Record<string, Record<string, any>>>;
  metric_score: number;
  unrated_docs: Core_RankEvalUnratedDocument.undefined[];
}

