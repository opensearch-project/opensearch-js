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
import * as CommonRemoteStoreStats from './_common___RemoteStoreStats'
import * as CommonSegmentReplicationStats from './_common___SegmentReplicationStats'
import * as Indices_StatsShardFileSizeInfo from './indices.stats___ShardFileSizeInfo'

export type undefined = {
  count: number;
  doc_values_memory?: CommonHumanReadableByteCount.undefined;
  doc_values_memory_in_bytes: CommonByteCount.undefined;
  file_sizes: Record<string, Indices_StatsShardFileSizeInfo.undefined>;
  fixed_bit_set?: CommonHumanReadableByteCount.undefined;
  fixed_bit_set_memory_in_bytes: CommonByteCount.undefined;
  index_writer_max_memory_in_bytes?: CommonByteCount.undefined;
  index_writer_memory?: CommonHumanReadableByteCount.undefined;
  index_writer_memory_in_bytes: CommonByteCount.undefined;
  max_unsafe_auto_id_timestamp: number;
  memory?: CommonHumanReadableByteCount.undefined;
  memory_in_bytes: CommonByteCount.undefined;
  norms_memory?: CommonHumanReadableByteCount.undefined;
  norms_memory_in_bytes: CommonByteCount.undefined;
  points_memory?: CommonHumanReadableByteCount.undefined;
  points_memory_in_bytes: CommonByteCount.undefined;
  remote_store?: CommonRemoteStoreStats.undefined;
  segment_replication?: CommonSegmentReplicationStats.undefined;
  stored_fields_memory?: CommonHumanReadableByteCount.undefined;
  stored_fields_memory_in_bytes: CommonByteCount.undefined;
  term_vectors_memory?: CommonHumanReadableByteCount.undefined;
  term_vectors_memory_in_bytes: CommonByteCount.undefined;
  terms_memory?: CommonHumanReadableByteCount.undefined;
  terms_memory_in_bytes: CommonByteCount.undefined;
  version_map_memory?: CommonHumanReadableByteCount.undefined;
  version_map_memory_in_bytes: CommonByteCount.undefined;
}

