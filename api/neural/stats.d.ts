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
import * as Neural_Common from '../_types/neural._common'

export interface Neural_Stats_Request extends Global.Params {
  flat_stat_paths?: boolean;
  include_all_nodes?: boolean;
  include_individual_nodes?: boolean;
  include_info?: boolean;
  include_metadata?: boolean;
  node_id?: string;
  stat?: Neural_Common.NeuralStatName | Neural_Common.NeuralStatName[];
}

export interface Neural_Stats_Response extends ApiResponse {
  body: Neural_Stats_ResponseBody;
}

export type Neural_Stats_ResponseBody = Neural_Common.NeuralStats

