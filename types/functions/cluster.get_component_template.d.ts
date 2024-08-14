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
import * as Cluster_Common from '../components/cluster._common'

export interface Request extends Global.Params {
  cluster_manager_timeout?: Common.Duration;
  local?: boolean;
  master_timeout?: Common.Duration;
  name?: Common.Name;
}

export interface ResponseBody {
  component_templates: Cluster_Common.ComponentTemplate[];
}

export interface Response extends ApiResponse {
  body: ResponseBody
}
