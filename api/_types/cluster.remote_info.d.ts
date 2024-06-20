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

export type ClusterRemoteInfo = ClusterRemoteSniffInfo | ClusterRemoteProxyInfo

export interface ClusterRemoteProxyInfo {
  connected: boolean;
  initial_connect_timeout: Common.Duration;
  max_proxy_socket_connections: number;
  mode: 'proxy';
  num_proxy_sockets_connected: number;
  proxy_address: string;
  server_name: string;
  skip_unavailable: boolean;
}

export interface ClusterRemoteSniffInfo {
  connected: boolean;
  initial_connect_timeout: Common.Duration;
  max_connections_per_cluster: number;
  mode: 'sniff';
  num_nodes_connected: number;
  seeds: string[];
  skip_unavailable: boolean;
}

