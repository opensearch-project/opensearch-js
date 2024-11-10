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
import * as Ml_CommonSearchModelsQuery from '../_types/ml._common___SearchModelsQuery'
import * as Ml_CommonSearchModelsResponse from '../_types/ml._common___SearchModelsResponse'

export type Ml_SearchModels_Request = Global.Params & {
  body?: Ml_CommonSearchModelsQuery.undefined;
}

export type Ml_SearchModels_Response = ApiResponse & {
  body: Ml_SearchModels_ResponseBody;
}

export type Ml_SearchModels_ResponseBody = Ml_CommonSearchModelsResponse.undefined

