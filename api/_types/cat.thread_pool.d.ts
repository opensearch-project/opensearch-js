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

import * as Common from './_common'

export interface ThreadPoolRecord {
  active?: string;
  completed?: string;
  core?: undefined | string;
  ephemeral_node_id?: string;
  host?: string;
  ip?: string;
  keep_alive?: undefined | string;
  largest?: string;
  max?: undefined | string;
  name?: string;
  node_id?: Common.NodeId;
  node_name?: string;
  pid?: string;
  pool_size?: string;
  port?: string;
  queue?: string;
  queue_size?: string;
  rejected?: string;
  size?: undefined | string;
  type?: string;
}

