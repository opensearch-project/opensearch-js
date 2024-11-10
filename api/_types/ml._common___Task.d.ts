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

import * as CommonNodeIds from './_common___NodeIds'

export type undefined = {
  create_time?: number;
  error?: string;
  function_name?: string;
  is_async?: boolean;
  last_update_time?: number;
  model_id?: string;
  state: 'CANCELLED' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'FAILED' | 'RUNNING';
  task_id?: string;
  task_type?: 'DEPLOY_MODEL' | 'REGISTER_MODEL';
  worker_node?: CommonNodeIds.undefined[];
}

