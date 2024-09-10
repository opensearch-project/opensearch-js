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

import * as Common from './_common'

export interface AllocationRecord {
  'disk.avail'?: Common.ByteSize | undefined;
  'disk.indices'?: Common.ByteSize | undefined;
  'disk.percent'?: Common.Percentage | undefined;
  'disk.total'?: Common.ByteSize | undefined;
  'disk.used'?: Common.ByteSize | undefined;
  host?: Common.Host | undefined;
  ip?: Common.Ip | undefined;
  node?: string;
  shards?: string;
}

