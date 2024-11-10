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

import * as CommonByteCount from './_common___ByteCount'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'

export type undefined = {
  max_age?: CommonDuration.undefined;
  max_age_millis?: CommonDurationValueUnitMillis.undefined;
  max_docs?: number;
  max_primary_shard_docs?: number;
  max_primary_shard_size?: CommonHumanReadableByteCount.undefined;
  max_primary_shard_size_bytes?: CommonByteCount.undefined;
  max_size?: CommonHumanReadableByteCount.undefined;
  max_size_bytes?: CommonByteCount.undefined;
  min_age?: CommonDuration.undefined;
  min_docs?: number;
  min_primary_shard_docs?: number;
  min_primary_shard_size?: CommonHumanReadableByteCount.undefined;
  min_primary_shard_size_bytes?: CommonByteCount.undefined;
  min_size?: CommonHumanReadableByteCount.undefined;
  min_size_bytes?: CommonByteCount.undefined;
}

