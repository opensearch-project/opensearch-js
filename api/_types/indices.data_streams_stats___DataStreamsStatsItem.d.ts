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
import * as CommonEpochTimeUnitMillis from './_common___EpochTimeUnitMillis'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'
import * as CommonName from './_common___Name'

export type undefined = {
  backing_indices: number;
  data_stream: CommonName.undefined;
  maximum_timestamp: CommonEpochTimeUnitMillis.undefined;
  store_size?: CommonHumanReadableByteCount.undefined;
  store_size_bytes: CommonByteCount.undefined;
}

