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
  evictions?: number;
  hit_count?: number;
  item_count?: number;
  miss_count?: number;
  size?: CommonHumanReadableByteCount.undefined;
  size_in_bytes?: CommonByteCount.undefined;
  store_name?: string;
}

