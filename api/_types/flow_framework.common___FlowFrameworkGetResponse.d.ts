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

import * as FlowFramework_CommonUser from './flow_framework.common___user'
import * as FlowFramework_CommonVersion from './flow_framework.common___version'

export type undefined = {
  created_time?: number;
  description?: string;
  last_provisioned_time?: number;
  last_updated_time?: number;
  name?: string;
  use_case?: string;
  user?: FlowFramework_CommonUser.undefined;
  version?: FlowFramework_CommonVersion.undefined;
  workflows?: Record<string, any>;
}

