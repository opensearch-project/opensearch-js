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
import * as CommonFields from './_common___Fields'
import * as CommonIndices from './_common___Indices'
import * as CommonSlicedScroll from './_common___SlicedScroll'
import * as CommonSort from './_common___Sort'
import * as Core_ReindexRemoteSource from './_core.reindex___RemoteSource'

export type undefined = {
  _source?: CommonFields.undefined;
  index: CommonIndices.undefined;
  query?: Common_QueryDslQueryContainer.undefined;
  remote?: Core_ReindexRemoteSource.undefined;
  size?: number;
  slice?: CommonSlicedScroll.undefined;
  sort?: CommonSort.undefined;
}

