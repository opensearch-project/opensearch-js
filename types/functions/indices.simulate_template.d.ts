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
import * as Indices_Common from '../components/indices._common'
import * as Common from '../components/_common'
import * as Indices_SimulateTemplate from '../components/indices.simulate_template'

export interface Request extends Global.Params {
  body?: Indices_Common.IndexTemplate;
  cause?: string;
  cluster_manager_timeout?: Common.Duration;
  create?: boolean;
  master_timeout?: Common.Duration;
  name?: Common.Name;
}

export interface ResponseBody {
  overlapping?: Indices_SimulateTemplate.Overlapping[];
  template: Indices_SimulateTemplate.Template;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}
