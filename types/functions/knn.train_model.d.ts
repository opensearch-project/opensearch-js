/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../components/_global'

export interface Knn_TrainModel_RequestBody {
  description?: string;
  dimension: number;
  max_training_vector_count?: number;
  method: string;
  search_size?: number;
  training_field: string;
  training_index: string;
}

export interface Knn_TrainModel_Request extends Global.Params {
  body: Knn_TrainModel_RequestBody;
  model_id?: string;
  preference?: string;
}

export type Knn_TrainModel_ResponseBody = Record<string, any>

export interface Knn_TrainModel_Response extends ApiResponse {
  body: Knn_TrainModel_ResponseBody
}
