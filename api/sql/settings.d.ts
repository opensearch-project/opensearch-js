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
import * as Sql_CommonSqlSettings from '../_types/sql._common___SqlSettings'
import * as Sql_CommonSqlSettingsPlain from '../_types/sql._common___SqlSettingsPlain'
import * as Sql_CommonSqlSettingsResponse from '../_types/sql._common___SqlSettingsResponse'

export type Sql_Settings_Request = Global.Params & {
  body?: Sql_Settings_RequestBody;
  format?: string;
}

export type Sql_Settings_RequestBody = Sql_CommonSqlSettingsPlain.undefined | Sql_CommonSqlSettings.undefined

export type Sql_Settings_Response = ApiResponse & {
  body: Sql_Settings_ResponseBody;
}

export type Sql_Settings_ResponseBody = Sql_CommonSqlSettingsResponse.undefined

