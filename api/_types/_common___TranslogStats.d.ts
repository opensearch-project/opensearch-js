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
import * as CommonRemoteStoreTranslogStats from './_common___RemoteStoreTranslogStats'

export type undefined = {
  earliest_last_modified_age: number;
  operations: number;
  remote_store?: CommonRemoteStoreTranslogStats.undefined;
  size?: CommonHumanReadableByteCount.undefined;
  size_in_bytes: CommonByteCount.undefined;
  uncommitted_operations: number;
  uncommitted_size?: CommonHumanReadableByteCount.undefined;
  uncommitted_size_in_bytes: CommonByteCount.undefined;
}

