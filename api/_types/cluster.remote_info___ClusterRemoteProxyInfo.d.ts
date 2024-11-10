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

export type undefined = {
  connected: boolean;
  initial_connect_timeout: CommonDuration.undefined;
  max_proxy_socket_connections: number;
  mode: 'proxy';
  num_proxy_sockets_connected: number;
  proxy_address: string;
  server_name: string;
  skip_unavailable: boolean;
}

