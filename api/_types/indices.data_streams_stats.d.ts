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

import * as Common from './_common'

export interface DataStreamsStatsItem {
  backing_indices: number;
  data_stream: Common.Name;
  maximum_timestamp: Common.EpochTimeUnitMillis;
  store_size?: Common.StorageSize;
  store_size_bytes: Common.Bytes;
}

