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
import * as CommonId from '../_types/_common___Id'
import * as CommonSequenceNumber from '../_types/_common___SequenceNumber'
import * as Global from '../_types/_global'
import * as Transforms_CommonTransform from '../_types/transforms._common___Transform'
import * as Transforms_CommonTransformEntity from '../_types/transforms._common___TransformEntity'

export type Transforms_Put_Request = Global.Params & {
  body?: Transforms_CommonTransform.undefined;
  id: CommonId.undefined;
  if_primary_term?: number;
  if_seq_no?: CommonSequenceNumber.undefined;
}

export type Transforms_Put_Response = ApiResponse & {
  body: Transforms_Put_ResponseBody;
}

export type Transforms_Put_ResponseBody = Transforms_CommonTransformEntity.undefined

