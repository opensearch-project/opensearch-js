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
import * as Nodes_CommonTransportHistogram from './nodes._common___TransportHistogram'

export type undefined = {
  inbound_handling_time_histogram?: Nodes_CommonTransportHistogram.undefined[];
  outbound_handling_time_histogram?: Nodes_CommonTransportHistogram.undefined[];
  rx_count?: number;
  rx_size?: CommonHumanReadableByteCount.undefined;
  rx_size_in_bytes?: CommonByteCount.undefined;
  server_open?: number;
  total_outbound_connections?: number;
  tx_count?: number;
  tx_size?: CommonHumanReadableByteCount.undefined;
  tx_size_in_bytes?: CommonByteCount.undefined;
}

