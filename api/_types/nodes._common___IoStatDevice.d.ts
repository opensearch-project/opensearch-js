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

import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'

export type undefined = {
  device_name?: string;
  io_time_in_millis?: CommonDurationValueUnitMillis.undefined;
  operations?: number;
  queue_size?: number;
  read_kilobytes?: number;
  read_operations?: number;
  read_time?: number;
  write_kilobytes?: number;
  write_operations?: number;
  write_time?: number;
}

