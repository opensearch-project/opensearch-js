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
import * as Ml_CommonCreateConnectorRequest from '../_types/ml._common___CreateConnectorRequest'

export type Ml_CreateConnector_Request = Global.Params & {
  body?: Ml_CommonCreateConnectorRequest.undefined;
}

export type Ml_CreateConnector_Response = ApiResponse & {
  body: Ml_CreateConnector_ResponseBody;
}

export type Ml_CreateConnector_ResponseBody = {
  connector_id?: string;
}

