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

import * as CommonHealthStatus from './_common___HealthStatus'

export type undefined = {
  active_shards: number;
  initializing_shards: number;
  primary_active: boolean;
  relocating_shards: number;
  status: CommonHealthStatus.undefined;
  unassigned_shards: number;
}

