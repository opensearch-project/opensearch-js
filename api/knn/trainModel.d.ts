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

export type Knn_TrainModel_Request = Global.Params & {
  body: Knn_TrainModel_RequestBody;
  model_id?: string;
  preference?: string;
}

export type Knn_TrainModel_RequestBody = {
  compression_level?: string;
  description?: string;
  dimension: number;
  max_training_vector_count?: number;
  method?: string;
  mode?: string;
  search_size?: number;
  spaceType?: string;
  training_field: string;
  training_index: string;
}

export type Knn_TrainModel_Response = ApiResponse & {
  body: Knn_TrainModel_ResponseBody;
}

export type Knn_TrainModel_ResponseBody = {
  model_id: string;
}

