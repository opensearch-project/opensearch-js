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

import * as Indices_SegmentsSegment from './indices.segments___Segment'
import * as Indices_SegmentsShardSegmentRouting from './indices.segments___ShardSegmentRouting'

export type undefined = {
  num_committed_segments: number;
  num_search_segments: number;
  routing: Indices_SegmentsShardSegmentRouting.undefined;
  segments: Record<string, Indices_SegmentsSegment.undefined>;
}

