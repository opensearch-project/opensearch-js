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

export interface IndexSegment {
  shards: Record<string, ShardsSegment | ShardsSegment[]>;
}

export interface Segment {
  attributes: Record<string, string>;
  committed: boolean;
  compound: boolean;
  deleted_docs: number;
  generation: number;
  num_docs: number;
  search: boolean;
  size_in_bytes: number;
  version: Common.VersionString;
}

export interface ShardSegmentRouting {
  node: string;
  primary: boolean;
  state: string;
}

export interface ShardsSegment {
  num_committed_segments: number;
  num_search_segments: number;
  routing: ShardSegmentRouting;
  segments: Record<string, Segment>;
}

