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
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'

export type undefined = {
  cache_count: number;
  cache_size: number;
  evictions: number;
  hit_count: number;
  memory_size?: CommonHumanReadableByteCount.undefined;
  memory_size_in_bytes: CommonByteCount.undefined;
  miss_count: number;
  total_count: number;
}

