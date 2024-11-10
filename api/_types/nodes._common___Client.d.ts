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

export type undefined = {
  agent?: string;
  closed_time_millis?: number;
  id?: number;
  last_request_time_millis?: number;
  last_uri?: string;
  local_address?: string;
  opened_time_millis?: number;
  remote_address?: string;
  request_count?: number;
  request_size_bytes?: CommonByteCount.undefined;
  x_opaque_id?: string;
}

