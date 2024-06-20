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

export interface DataStreamsStatsItem {
  backing_indices: number;
  data_stream: Common.Name;
  maximum_timestamp: Common.EpochTimeUnitMillis;
  store_size?: Common.ByteSize;
  store_size_bytes: number;
}

