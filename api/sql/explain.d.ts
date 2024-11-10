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
import * as Sql_CommonExplain from '../_types/sql._common___Explain'
import * as Sql_CommonExplainResponse from '../_types/sql._common___ExplainResponse'

export type Sql_Explain_Request = Global.Params & {
  body?: Sql_CommonExplain.undefined;
  format?: string;
  sanitize?: boolean;
}

export type Sql_Explain_Response = ApiResponse & {
  body: Sql_Explain_ResponseBody;
}

export type Sql_Explain_ResponseBody = Sql_CommonExplainResponse.undefined

