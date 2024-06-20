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

export interface RolloverConditions {
  max_age?: Common.Duration;
  max_age_millis?: Common.DurationValueUnitMillis;
  max_docs?: number;
  max_primary_shard_docs?: number;
  max_primary_shard_size?: Common.ByteSize;
  max_primary_shard_size_bytes?: number;
  max_size?: Common.ByteSize;
  max_size_bytes?: number;
  min_age?: Common.Duration;
  min_docs?: number;
  min_primary_shard_docs?: number;
  min_primary_shard_size?: Common.ByteSize;
  min_primary_shard_size_bytes?: number;
  min_size?: Common.ByteSize;
  min_size_bytes?: number;
}

