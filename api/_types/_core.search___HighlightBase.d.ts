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

import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as Core_SearchBoundaryScanner from './_core.search___BoundaryScanner'
import * as Core_SearchHighlighterFragmenter from './_core.search___HighlighterFragmenter'
import * as Core_SearchHighlighterOrder from './_core.search___HighlighterOrder'
import * as Core_SearchHighlighterTagsSchema from './_core.search___HighlighterTagsSchema'
import * as Core_SearchHighlighterType from './_core.search___HighlighterType'

export type undefined = {
  boundary_chars?: string;
  boundary_max_scan?: number;
  boundary_scanner?: Core_SearchBoundaryScanner.undefined;
  boundary_scanner_locale?: string;
  force_source?: boolean;
  fragment_size?: number;
  fragmenter?: Core_SearchHighlighterFragmenter.undefined;
  highlight_filter?: boolean;
  highlight_query?: Common_QueryDslQueryContainer.undefined;
  max_analyzed_offset?: number;
  max_fragment_length?: number;
  no_match_size?: number;
  number_of_fragments?: number;
  options?: Record<string, Record<string, any>>;
  order?: Core_SearchHighlighterOrder.undefined;
  phrase_limit?: number;
  post_tags?: string[];
  pre_tags?: string[];
  require_field_match?: boolean;
  tags_schema?: Core_SearchHighlighterTagsSchema.undefined;
  type?: Core_SearchHighlighterType.undefined;
}

