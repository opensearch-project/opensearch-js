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
import * as CommonHost from './_common___Host'
import * as CommonIp from './_common___Ip'
import * as CommonName from './_common___Name'
import * as CommonNodeRoles from './_common___NodeRoles'
import * as CommonPluginStats from './_common___PluginStats'
import * as CommonTransportAddress from './_common___TransportAddress'
import * as CommonVersionString from './_common___VersionString'
import * as Nodes_InfoNodeInfoAggregation from './nodes.info___NodeInfoAggregation'
import * as Nodes_InfoNodeInfoHttp from './nodes.info___NodeInfoHttp'
import * as Nodes_InfoNodeInfoIngest from './nodes.info___NodeInfoIngest'
import * as Nodes_InfoNodeInfoNetwork from './nodes.info___NodeInfoNetwork'
import * as Nodes_InfoNodeInfoSearchPipelines from './nodes.info___NodeInfoSearchPipelines'
import * as Nodes_InfoNodeInfoSettings from './nodes.info___NodeInfoSettings'
import * as Nodes_InfoNodeInfoTransport from './nodes.info___NodeInfoTransport'
import * as Nodes_InfoNodeJvmInfo from './nodes.info___NodeJvmInfo'
import * as Nodes_InfoNodeOperatingSystemInfo from './nodes.info___NodeOperatingSystemInfo'
import * as Nodes_InfoNodeProcessInfo from './nodes.info___NodeProcessInfo'
import * as Nodes_InfoNodeThreadPoolInfo from './nodes.info___NodeThreadPoolInfo'

export type undefined = {
  aggregations?: Record<string, Nodes_InfoNodeInfoAggregation.undefined>;
  attributes?: Record<string, string>;
  build_flavor?: string;
  build_hash: string;
  build_type: string;
  host?: CommonHost.undefined;
  http?: Nodes_InfoNodeInfoHttp.undefined;
  ingest?: Nodes_InfoNodeInfoIngest.undefined;
  ip?: CommonIp.undefined;
  jvm?: Nodes_InfoNodeJvmInfo.undefined;
  modules?: CommonPluginStats.undefined[];
  name: CommonName.undefined;
  network?: Nodes_InfoNodeInfoNetwork.undefined;
  os?: Nodes_InfoNodeOperatingSystemInfo.undefined;
  plugins?: CommonPluginStats.undefined[];
  process?: Nodes_InfoNodeProcessInfo.undefined;
  roles: CommonNodeRoles.undefined;
  search_pipelines?: Nodes_InfoNodeInfoSearchPipelines.undefined;
  settings?: Nodes_InfoNodeInfoSettings.undefined;
  thread_pool?: Record<string, Nodes_InfoNodeThreadPoolInfo.undefined>;
  total_indexing_buffer?: number;
  total_indexing_buffer_in_bytes?: CommonByteCount.undefined;
  transport?: Nodes_InfoNodeInfoTransport.undefined;
  transport_address?: CommonTransportAddress.undefined;
  version: CommonVersionString.undefined;
}

