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

import * as CommonDuration from './_common___Duration'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'
import * as Indices_CommonTranslogDurability from './indices._common___TranslogDurability'
import * as Indices_CommonTranslogRetention from './indices._common___TranslogRetention'

export type undefined = {
  durability?: Indices_CommonTranslogDurability.undefined;
  flush_threshold_size?: CommonHumanReadableByteCount.undefined;
  retention?: Indices_CommonTranslogRetention.undefined;
  sync_interval?: CommonDuration.undefined;
}

