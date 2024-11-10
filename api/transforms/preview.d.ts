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
import * as Transforms_CommonPreview from '../_types/transforms._common___Preview'
import * as Transforms_CommonTransform from '../_types/transforms._common___Transform'

export type Transforms_Preview_Request = Global.Params & {
  body?: Transforms_Preview_RequestBody;
}

export type Transforms_Preview_RequestBody = {
  transform: Transforms_CommonTransform.undefined;
}

export type Transforms_Preview_Response = ApiResponse & {
  body: Transforms_Preview_ResponseBody;
}

export type Transforms_Preview_ResponseBody = Transforms_CommonPreview.undefined

