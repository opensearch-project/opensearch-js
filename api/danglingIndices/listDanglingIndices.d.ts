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

import { ApiResponse } from '../../lib/Transport'
import * as CommonName from '../_types/_common___Name'
import * as CommonNodeStatistics from '../_types/_common___NodeStatistics'
import * as DanglingIndices_ListDanglingIndicesDanglingIndex from '../_types/dangling_indices.list_dangling_indices___DanglingIndex'
import * as Global from '../_types/_global'

export type DanglingIndices_ListDanglingIndices_Request = Global.Params & Record<string, any>

export type DanglingIndices_ListDanglingIndices_Response = ApiResponse & {
  body: DanglingIndices_ListDanglingIndices_ResponseBody;
}

export type DanglingIndices_ListDanglingIndices_ResponseBody = {
  _nodes?: CommonNodeStatistics.undefined;
  cluster_name?: CommonName.undefined;
  dangling_indices: DanglingIndices_ListDanglingIndicesDanglingIndex.undefined[];
}

