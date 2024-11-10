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
import * as Sql_CommonQuery from '../_types/sql._common___Query'
import * as Sql_CommonQueryResponse from '../_types/sql._common___QueryResponse'

export type Ppl_Query_Request = Global.Params & {
  body: Sql_CommonQuery.undefined;
  format?: string;
  sanitize?: boolean;
}

export type Ppl_Query_Response = ApiResponse & {
  body: Ppl_Query_ResponseBody;
}

export type Ppl_Query_ResponseBody = Sql_CommonQueryResponse.undefined

