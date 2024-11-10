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

import * as Cluster_StatsFieldTypes from './cluster.stats___FieldTypes'
import * as CommonByteCount from './_common___ByteCount'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'

export type undefined = {
  field_types: Cluster_StatsFieldTypes.undefined[];
  total_deduplicated_field_count?: number;
  total_deduplicated_mapping_size?: CommonHumanReadableByteCount.undefined;
  total_deduplicated_mapping_size_in_bytes?: CommonByteCount.undefined;
  total_field_count?: number;
}

