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

export type undefined = {
  error?: string;
  provision_end_time?: string;
  provision_start_time?: string;
  provisioning_progress?: string;
  resources_created?: string[];
  state?: 'COMPLETED' | 'FAILED' | 'NOT_STARTED' | 'PROVISIONING';
  user?: FlowFramework_CommonUser.undefined;
  user_outputs?: string[];
  workflow_id?: string;
}

