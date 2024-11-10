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

import * as CommonExpandWildcards from './_common___ExpandWildcards'
import * as CommonIndices from './_common___Indices'
import * as CommonRouting from './_common___Routing'
import * as CommonSearchType from './_common___SearchType'

export type undefined = {
  allow_no_indices?: boolean;
  allow_partial_search_results?: boolean;
  ccs_minimize_roundtrips?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  preference?: string;
  request_cache?: boolean;
  routing?: CommonRouting.undefined;
  search_type?: CommonSearchType.undefined;
}

