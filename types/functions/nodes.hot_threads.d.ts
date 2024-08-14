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
import * as Common from '../components/_common'
import * as Nodes_Common from '../components/nodes._common'

export interface Request extends Global.Params {
  ignore_idle_threads?: boolean;
  interval?: Common.Duration;
  node_id?: string[];
  snapshots?: number;
  threads?: number;
  timeout?: Common.Duration;
  type?: Nodes_Common.SampleType;
}

export type ResponseBody = Record<string, any>

export interface Response extends ApiResponse {
  body: ResponseBody
}
