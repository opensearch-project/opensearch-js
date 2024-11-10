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
  available?: CommonHumanReadableByteCount.undefined;
  available_in_bytes?: CommonByteCount.undefined;
  cache_reserved?: CommonHumanReadableByteCount.undefined;
  cache_reserved_in_bytes?: CommonByteCount.undefined;
  disk_queue?: string;
  disk_read_size?: CommonHumanReadableByteCount.undefined;
  disk_read_size_in_bytes?: CommonByteCount.undefined;
  disk_reads?: number;
  disk_write_size?: CommonHumanReadableByteCount.undefined;
  disk_write_size_in_bytes?: CommonByteCount.undefined;
  disk_writes?: number;
  free?: CommonHumanReadableByteCount.undefined;
  free_in_bytes?: CommonByteCount.undefined;
  mount?: string;
  path?: string;
  total?: CommonHumanReadableByteCount.undefined;
  total_in_bytes?: CommonByteCount.undefined;
  type?: string;
}

