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

export interface SegmentsRecord {
  committed?: string;
  compound?: string;
  'docs.count'?: string;
  'docs.deleted'?: string;
  generation?: string;
  id?: Common.NodeId;
  index?: Common.IndexName;
  ip?: string;
  prirep?: string;
  searchable?: string;
  segment?: string;
  shard?: string;
  size?: Common.ByteSize;
  'size.memory'?: Common.ByteSize;
  version?: Common.VersionString;
}

