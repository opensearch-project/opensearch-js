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
import * as Global from '../_types/_global'
import * as Query_CommonDataSourceList from '../_types/query._common___DataSourceList'

export type Query_DatasourcesList_Request = Global.Params & Record<string, any>

export type Query_DatasourcesList_Response = ApiResponse & {
  body: Query_DatasourcesList_ResponseBody;
}

export type Query_DatasourcesList_ResponseBody = Query_CommonDataSourceList.undefined

