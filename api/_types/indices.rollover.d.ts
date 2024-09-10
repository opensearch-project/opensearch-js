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

export interface RolloverConditions {
  max_age?: Common.Duration;
  max_age_millis?: Common.DurationValueUnitMillis;
  max_docs?: number;
  max_primary_shard_docs?: number;
  max_primary_shard_size?: Common.StorageSize;
  max_primary_shard_size_bytes?: Common.Bytes;
  max_size?: Common.StorageSize;
  max_size_bytes?: Common.Bytes;
  min_age?: Common.Duration;
  min_docs?: number;
  min_primary_shard_docs?: number;
  min_primary_shard_size?: Common.StorageSize;
  min_primary_shard_size_bytes?: Common.Bytes;
  min_size?: Common.StorageSize;
  min_size_bytes?: Common.Bytes;
}

