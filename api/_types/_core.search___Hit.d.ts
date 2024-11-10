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
import * as CommonIndexName from './_common___IndexName'
import * as CommonSequenceNumber from './_common___SequenceNumber'
import * as CommonSortResults from './_common___SortResults'
import * as CommonType from './_common___Type'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as Core_ExplainExplanation from './_core.explain___Explanation'
import * as Core_SearchInnerHitsResult from './_core.search___InnerHitsResult'
import * as Core_SearchNestedIdentity from './_core.search___NestedIdentity'

export type undefined = {
  _explanation?: Core_ExplainExplanation.undefined;
  _id: CommonId.undefined;
  _ignored?: string[];
  _index: CommonIndexName.undefined;
  _nested?: Core_SearchNestedIdentity.undefined;
  _node?: string;
  _primary_term?: number;
  _routing?: string;
  _score?: undefined | number | string;
  _seq_no?: CommonSequenceNumber.undefined;
  _shard?: string;
  _source?: Record<string, any>;
  _type?: CommonType.undefined;
  _version?: CommonVersionNumber.undefined;
  fields?: Record<string, Record<string, any>>;
  highlight?: Record<string, string[]>;
  ignored_field_values?: Record<string, string[]>;
  inner_hits?: Record<string, Core_SearchInnerHitsResult.undefined>;
  matched_queries?: string[];
  sort?: CommonSortResults.undefined;
}

