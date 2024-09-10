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
import * as Indices_Common from './indices._common'
import * as Nodes_Common from './nodes._common'

export interface DeprecationIndexing {
  enabled: boolean | string;
}

export type Metric = '_all' | 'aggregations' | 'http' | 'indices' | 'ingest' | 'jvm' | 'os' | 'plugins' | 'process' | 'search_pipelines' | 'settings' | 'thread_pool' | 'transport'

export interface NodeInfo {
  aggregations?: Record<string, NodeInfoAggregation>;
  attributes?: Record<string, string>;
  build_flavor?: string;
  build_hash: string;
  build_type: string;
  host?: Common.Host;
  http?: NodeInfoHttp;
  ingest?: NodeInfoIngest;
  ip?: Common.Ip;
  jvm?: NodeJvmInfo;
  modules?: Common.PluginStats[];
  name: Common.Name;
  network?: NodeInfoNetwork;
  os?: NodeOperatingSystemInfo;
  plugins?: Common.PluginStats[];
  process?: NodeProcessInfo;
  roles: Common.NodeRoles;
  search_pipelines?: NodeInfoSearchPipelines;
  settings?: NodeInfoSettings;
  thread_pool?: Record<string, NodeThreadPoolInfo>;
  total_indexing_buffer?: number;
  total_indexing_buffer_in_bytes?: Common.Bytes;
  transport?: NodeInfoTransport;
  transport_address?: Common.TransportAddress;
  version: Common.VersionString;
}

export interface NodeInfoAction {
  destructive_requires_name: string;
}

export interface NodeInfoAggregation {
  types: string[];
}

export interface NodeInfoBootstrap {
  memory_lock: string;
}

export interface NodeInfoClient {
  type: string;
}

export interface NodeInfoDiscovery {
  seed_hosts?: string;
  type?: string;
}

export interface NodeInfoHttp {
  bound_address: string[];
  max_content_length?: Common.StorageSize;
  max_content_length_in_bytes: Common.Bytes;
  publish_address: string;
}

export interface NodeInfoIngest {
  processors: NodeInfoIngestProcessor[];
}

export interface NodeInfoIngestDownloader {
  enabled: string;
}

export interface NodeInfoIngestInfo {
  downloader: NodeInfoIngestDownloader;
}

export interface NodeInfoIngestProcessor {
  type: string;
}

export interface NodeInfoJvmMemory {
  direct_max?: Common.StorageSize;
  direct_max_in_bytes: Common.Bytes;
  heap_init?: Common.StorageSize;
  heap_init_in_bytes: Common.Bytes;
  heap_max?: Common.StorageSize;
  heap_max_in_bytes: Common.Bytes;
  non_heap_init?: Common.StorageSize;
  non_heap_init_in_bytes: Common.Bytes;
  non_heap_max?: Common.StorageSize;
  non_heap_max_in_bytes: Common.Bytes;
}

export interface NodeInfoMemory {
  total: Common.StorageSize;
  total_in_bytes: Common.Bytes;
}

export interface NodeInfoNetwork {
  primary_interface: NodeInfoNetworkInterface;
  refresh_interval: number;
}

export interface NodeInfoNetworkInterface {
  address: string;
  mac_address: string;
  name: Common.Name;
}

export interface NodeInfoOSCPU {
  cache_size: Common.StorageSize;
  cache_size_in_bytes: Common.Bytes;
  cores_per_socket: number;
  mhz: number;
  model: string;
  total_cores: number;
  total_sockets: number;
  vendor: string;
}

export interface NodeInfoPath {
  data?: string[];
  home: string;
  logs: string;
  repo?: string[];
}

export interface NodeInfoRepositories {
  url: NodeInfoRepositoriesUrl;
}

export interface NodeInfoRepositoriesUrl {
  allowed_urls: string;
}

export interface NodeInfoScript {
  allowed_types: string;
  disable_max_compilations_rate: string;
}

export interface NodeInfoSearch {
  remote: NodeInfoSearchRemote;
}

export interface NodeInfoSearchPipelines {
  request_processors: NodeInfoIngestProcessor[];
  response_processors: NodeInfoIngestProcessor[];
}

export interface NodeInfoSearchRemote {
  connect: string;
}

export interface NodeInfoSettings {
  action?: NodeInfoAction;
  bootstrap?: NodeInfoBootstrap;
  client: NodeInfoClient;
  cluster: NodeInfoSettingsCluster;
  discovery?: NodeInfoDiscovery;
  http: NodeInfoSettingsHttp;
  index?: NodeInfoSettingsIndex;
  ingest?: NodeInfoSettingsIngest;
  network?: NodeInfoSettingsNetwork;
  node: NodeInfoSettingsNode;
  path: NodeInfoPath;
  plugins?: NodeInfoSettingsPlugins;
  repositories?: NodeInfoRepositories;
  script?: NodeInfoScript;
  search?: NodeInfoSearch;
  transport: NodeInfoSettingsTransport;
}

export interface NodeInfoSettingsCluster {
  deprecation_indexing?: DeprecationIndexing;
  election?: NodeInfoSettingsClusterElection;
  initial_cluster_manager_nodes?: string;
  initial_master_nodes?: string;
  name: Common.Name;
  routing?: Indices_Common.IndexRouting;
}

export interface NodeInfoSettingsClusterElection {
  strategy: Common.Name;
}

export interface NodeInfoSettingsHttp {
  compression?: boolean | string;
  port?: number | string;
  type: string;
  'type.default'?: string;
}

export interface NodeInfoSettingsIndex {
  store?: NodeInfoSettingsIndexStore;
}

export interface NodeInfoSettingsIndexHybrid {
  mmap?: NodeInfoSettingsIndexStoreMmap;
}

export interface NodeInfoSettingsIndexStore {
  hybrid?: NodeInfoSettingsIndexHybrid;
}

export interface NodeInfoSettingsIndexStoreMmap {
  extensions?: string[];
}

export interface NodeInfoSettingsIngest {
  append?: NodeInfoIngestInfo;
  attachment?: NodeInfoIngestInfo;
  bytes?: NodeInfoIngestInfo;
  circle?: NodeInfoIngestInfo;
  convert?: NodeInfoIngestInfo;
  csv?: NodeInfoIngestInfo;
  date?: NodeInfoIngestInfo;
  date_index_name?: NodeInfoIngestInfo;
  dissect?: NodeInfoIngestInfo;
  dot_expander?: NodeInfoIngestInfo;
  drop?: NodeInfoIngestInfo;
  enrich?: NodeInfoIngestInfo;
  fail?: NodeInfoIngestInfo;
  foreach?: NodeInfoIngestInfo;
  geoip?: NodeInfoIngestInfo;
  grok?: NodeInfoIngestInfo;
  gsub?: NodeInfoIngestInfo;
  inference?: NodeInfoIngestInfo;
  join?: NodeInfoIngestInfo;
  json?: NodeInfoIngestInfo;
  kv?: NodeInfoIngestInfo;
  lowercase?: NodeInfoIngestInfo;
  pipeline?: NodeInfoIngestInfo;
  remove?: NodeInfoIngestInfo;
  rename?: NodeInfoIngestInfo;
  script?: NodeInfoIngestInfo;
  set?: NodeInfoIngestInfo;
  set_security_user?: NodeInfoIngestInfo;
  sort?: NodeInfoIngestInfo;
  split?: NodeInfoIngestInfo;
  trim?: NodeInfoIngestInfo;
  uppercase?: NodeInfoIngestInfo;
  urldecode?: NodeInfoIngestInfo;
  user_agent?: NodeInfoIngestInfo;
}

export interface NodeInfoSettingsNetwork {
  host: Common.Host;
}

export interface NodeInfoSettingsNode {
  attr: NodeInfoShardIndexingPressureEnabled;
  max_local_storage_nodes?: string;
  name: Common.Name;
}

export type NodeInfoSettingsPlugins = Record<string, Common.FieldValue>

export interface NodeInfoSettingsTransport {
  type: string;
  'type.default'?: string;
}

export interface NodeInfoShardIndexingPressureEnabled {
  shard_indexing_pressure_enabled: string;
}

export interface NodeInfoTransport {
  bound_address: string[];
  profiles: Record<string, string>;
  publish_address: string;
}

export interface NodeJvmInfo {
  bundled_jdk: boolean;
  gc_collectors?: string[];
  input_arguments?: string[];
  mem: NodeInfoJvmMemory;
  memory_pools?: string[];
  pid: number;
  start_time_in_millis: Common.EpochTimeUnitMillis;
  using_bundled_jdk?: boolean | undefined;
  using_compressed_ordinary_object_pointers?: boolean | string;
  version?: Common.VersionString;
  vm_name?: Common.Name;
  vm_vendor?: string;
  vm_version?: Common.VersionString;
}

export interface NodeOperatingSystemInfo {
  allocated_processors?: number;
  arch?: string;
  available_processors: number;
  cpu?: NodeInfoOSCPU;
  mem?: NodeInfoMemory;
  name?: Common.Name;
  pretty_name?: Common.Name;
  refresh_interval_in_millis: Common.DurationValueUnitMillis;
  swap?: NodeInfoMemory;
  version?: Common.VersionString;
}

export interface NodeProcessInfo {
  id: number;
  mlockall: boolean;
  refresh_interval_in_millis: Common.DurationValueUnitMillis;
}

export interface NodeThreadPoolInfo {
  core?: number;
  keep_alive?: Common.Duration;
  max?: number;
  queue_size: number;
  size?: number;
  type: string;
}

export interface ResponseBase extends Nodes_Common.NodesResponseBase {
  cluster_name: Common.Name;
  nodes: Record<string, NodeInfo>;
}

