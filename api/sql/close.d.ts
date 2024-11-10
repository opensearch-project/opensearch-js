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
import * as Sql_CommonSqlClose from '../_types/sql._common___SqlClose'
import * as Sql_CommonSqlCloseResponse from '../_types/sql._common___SqlCloseResponse'

export type Sql_Close_Request = Global.Params & {
  body?: Sql_CommonSqlClose.undefined;
  format?: string;
  sanitize?: boolean;
}

export type Sql_Close_Response = ApiResponse & {
  body: Sql_Close_ResponseBody;
}

export type Sql_Close_ResponseBody = Sql_CommonSqlCloseResponse.undefined

