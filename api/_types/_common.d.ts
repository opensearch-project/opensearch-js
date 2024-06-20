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

import * as Common_QueryDsl from './_common.query_dsl'
import * as Indices_Stats from './indices.stats'
import * as Cluster_AllocationExplain from './cluster.allocation_explain'

export interface AcknowledgedResponseBase {
  acknowledged: boolean;
}

export type ActionStatusOptions = 'failure' | 'simulated' | 'success' | 'throttled'

export interface BaseNode {
  attributes: Record<string, string>;
  host: Host;
  ip: Ip;
  name: Name;
  roles?: NodeRoles;
  transport_address: TransportAddress;
}

export interface BulkIndexByScrollFailure {
  cause: ErrorCause;
  id: Id;
  index: IndexName;
  status: number;
  type: string;
}

export interface BulkStats {
  avg_size?: ByteSize;
  avg_size_in_bytes: number;
  avg_time?: Duration;
  avg_time_in_millis: DurationValueUnitMillis;
  total_operations: number;
  total_size?: ByteSize;
  total_size_in_bytes: number;
  total_time?: Duration;
  total_time_in_millis: DurationValueUnitMillis;
}

export type byte = number

export type Bytes = 'b' | 'g' | 'gb' | 'k' | 'kb' | 'm' | 'mb' | 'p' | 'pb' | 't' | 'tb'

export type ByteSize = number | string

export interface ClusterDetails {
  _shards?: ShardStatistics;
  failures?: ShardFailure[];
  indices: string;
  status: ClusterSearchStatus;
  timed_out: boolean;
  took?: DurationValueUnitMillis;
}

export type ClusterSearchStatus = 'failed' | 'partial' | 'running' | 'skipped' | 'successful'

export interface ClusterStatistics {
  details?: Record<string, ClusterDetails>;
  failed: number;
  partial: number;
  running: number;
  skipped: number;
  successful: number;
  total: number;
}

export interface CompletionStats {
  fields?: Record<string, FieldSizeUsage>;
  size?: ByteSize;
  size_in_bytes: number;
}

export type Conflicts = 'abort' | 'proceed'

export interface CoordsGeoBounds {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export type DataStreamName = string

export type DataStreamNames = DataStreamName | DataStreamName[]

export type DateFormat = string

export type DateMath = string

export type DateTime = string | EpochTimeUnitMillis

export type DFIIndependenceMeasure = 'chisquared' | 'saturated' | 'standardized'

export type DFRAfterEffect = 'b' | 'l' | 'no'

export type DFRBasicModel = 'be' | 'd' | 'g' | 'if' | 'in' | 'ine' | 'p'

export type Distance = string

export type DistanceUnit = 'cm' | 'ft' | 'in' | 'km' | 'm' | 'mi' | 'mm' | 'nmi' | 'yd'

export interface DocStats {
  count: number;
  deleted?: number;
}

export interface DocStatus {
  '1xx'?: number;
  '2xx'?: number;
  '3xx'?: number;
  '4xx'?: number;
  '5xx'?: number;
}

export type Duration = string

export type DurationLarge = string

export type DurationValueUnitMillis = UnitMillis & Record<string, any>

export type DurationValueUnitNanos = UnitNanos & Record<string, any>

export type EmptyObject = Record<string, any>

export type EpochTimeUnitMillis = UnitMillis & Record<string, any>

export type EpochTimeUnitSeconds = UnitSeconds & Record<string, any>

export interface ErrorCause {
  caused_by?: ErrorCause;
  reason?: string;
  root_cause?: ErrorCause[];
  stack_trace?: string;
  suppressed?: ErrorCause[];
  type: string;
  [key: string]: any | Record<string, any>;
}

export interface ErrorResponseBase {
  error: ErrorCause;
  status: number;
}

export type ExpandWildcard = 'all' | 'closed' | 'hidden' | 'none' | 'open'

export type ExpandWildcards = ExpandWildcard | ExpandWildcard[]

export type Field = string

export interface FielddataStats {
  evictions?: number;
  fields?: Record<string, FieldMemoryUsage>;
  memory_size?: ByteSize;
  memory_size_in_bytes: number;
}

export interface FieldMemoryUsage {
  memory_size?: ByteSize;
  memory_size_in_bytes: number;
}

export type Fields = Field | Field[]

export interface FieldSizeUsage {
  size?: ByteSize;
  size_in_bytes: number;
}

export type FieldValue = boolean | undefined | number | Record<string, any> | string

export interface FlushStats {
  periodic: number;
  total: number;
  total_time?: Duration;
  total_time_in_millis: DurationValueUnitMillis;
}

export type Fuzziness = string | number

export type GeoBounds = CoordsGeoBounds | TopLeftBottomRightGeoBounds | TopRightBottomLeftGeoBounds | WktGeoBounds

export interface GeoDistanceSort {
  distance_type?: GeoDistanceType;
  ignore_unmapped?: boolean;
  mode?: SortMode;
  order?: SortOrder;
  unit?: DistanceUnit;
}

export type GeoDistanceType = 'arc' | 'plane'

export type GeoHash = string

export interface GeoHashLocation {
  geohash: GeoHash;
}

export type GeoHashPrecision = number | string

export type GeoHexCell = string

export interface GeoLine {
  coordinates: number[][];
  type: string;
}

export type GeoLocation = LatLonGeoLocation | GeoHashLocation | number[] | string

export type GeoShapeRelation = 'contains' | 'disjoint' | 'intersects' | 'within'

export type GeoTile = string

export type GeoTilePrecision = number

export interface GetStats {
  current: number;
  exists_time?: Duration;
  exists_time_in_millis: DurationValueUnitMillis;
  exists_total: number;
  missing_time?: Duration;
  missing_time_in_millis: DurationValueUnitMillis;
  missing_total: number;
  time?: Duration;
  time_in_millis: DurationValueUnitMillis;
  total: number;
}

export type HealthStatus = 'green' | 'red' | 'yellow'

export type HealthStatusCapitalized = 'GREEN' | 'RED' | 'YELLOW'

export type Host = string

export interface HourAndMinute {
  hour: number[];
  minute: number[];
}

export type HttpHeaders = Record<string, string | string[]>

export type IBDistribution = 'll' | 'spl'

export type IBLambda = 'df' | 'ttf'

export type Id = string

export type Ids = Id | Id[]

export type IndexAlias = string

export interface IndexingStats {
  delete_current: number;
  delete_time?: Duration;
  delete_time_in_millis: DurationValueUnitMillis;
  delete_total: number;
  doc_status?: DocStatus;
  index_current: number;
  index_failed: number;
  index_time?: Duration;
  index_time_in_millis: DurationValueUnitMillis;
  index_total: number;
  is_throttled: boolean;
  noop_update_total: number;
  throttle_time?: Duration;
  throttle_time_in_millis: DurationValueUnitMillis;
  types?: Record<string, IndexingStats>;
  write_load?: number;
}

export type IndexName = string

export type Indices = IndexName | IndexName[]

export interface IndicesResponseBase extends AcknowledgedResponseBase {
  _shards?: ShardStatistics;
}

export interface InlineGet {
  _primary_term?: number;
  _routing?: Routing;
  _seq_no?: SequenceNumber;
  _source?: Record<string, any>;
  fields?: Record<string, Record<string, any>>;
  found: boolean;
}

export interface InlineGetDictUserDefined {
  _primary_term?: number;
  _routing?: Routing;
  _seq_no?: SequenceNumber;
  _source?: Record<string, any>;
  fields?: Record<string, Record<string, any>>;
  found: boolean;
}

export interface InlineScript extends ScriptBase {
  lang?: ScriptLanguage;
  options?: Record<string, string>;
  source: string;
}

export type Ip = string

export interface KnnQuery {
  boost?: number;
  field: Field;
  filter?: Common_QueryDsl.QueryContainer | Common_QueryDsl.QueryContainer[];
  k: number;
  num_candidates: number;
  query_vector?: QueryVector;
  query_vector_builder?: QueryVectorBuilder;
  similarity?: number;
}

export interface LatLonGeoLocation {
  lat: number;
  lon: number;
}

export type Level = 'cluster' | 'indices' | 'shards'

export interface MergesStats {
  current: number;
  current_docs: number;
  current_size?: string;
  current_size_in_bytes: number;
  total: number;
  total_auto_throttle?: string;
  total_auto_throttle_in_bytes: number;
  total_docs: number;
  total_size?: string;
  total_size_in_bytes: number;
  total_stopped_time?: Duration;
  total_stopped_time_in_millis: DurationValueUnitMillis;
  total_throttled_time?: Duration;
  total_throttled_time_in_millis: DurationValueUnitMillis;
  total_time?: Duration;
  total_time_in_millis: DurationValueUnitMillis;
  unreferenced_file_cleanups_performed?: number;
}

export type Metadata = Record<string, any>

export type Metrics = string | string[]

export type MinimumShouldMatch = number | string

export type MultiTermQueryRewrite = string

export type Name = string

export type Names = Name | Name[]

export interface NestedSortValue {
  filter?: Common_QueryDsl.QueryContainer;
  max_children?: number;
  nested?: NestedSortValue;
  path: Field;
}

export interface NodeAttributes {
  attributes: Record<string, string>;
  ephemeral_id: Id;
  external_id?: string;
  id?: NodeId;
  name: NodeName;
  roles?: NodeRoles;
  transport_address: TransportAddress;
}

export type NodeId = string

export type NodeIds = NodeId | NodeId[]

export type NodeName = string

export type NodeRole = 'client' | 'cluster_manager' | 'coordinating_only' | 'data' | 'data_cold' | 'data_content' | 'data_frozen' | 'data_hot' | 'data_warm' | 'ingest' | 'master' | 'ml' | 'remote_cluster_client' | 'transform' | 'voting_only'

export type NodeRoles = NodeRole[]

export interface NodeShard {
  allocation_id?: Record<string, Id>;
  index: IndexName;
  node?: NodeName;
  primary: boolean;
  recovery_source?: Record<string, Id>;
  relocating_node?: NodeId | undefined;
  relocation_failure_info?: RelocationFailureInfo;
  shard: number;
  state: Indices_Stats.ShardRoutingState;
  unassigned_info?: Cluster_AllocationExplain.UnassignedInformation;
}

export interface NodeStatistics {
  failed: number;
  failures?: ErrorCause[];
  successful: number;
  total: number;
}

export type Normalization = 'h1' | 'h2' | 'h3' | 'no' | 'z'

export interface OpenSearchVersionInfo {
  build_date: DateTime;
  build_flavor?: string;
  build_hash: string;
  build_snapshot: boolean;
  build_type: string;
  distribution: string;
  lucene_version: VersionString;
  minimum_index_compatibility_version: VersionString;
  minimum_wire_compatibility_version: VersionString;
  number: string;
}

export type OpType = 'create' | 'index'

export type Password = string

export type Percentage = string | number

export interface PhaseTook {
  can_match: uint;
  dfs_pre_query: uint;
  dfs_query: uint;
  expand: uint;
  fetch: uint;
  query: uint;
}

export type PipelineName = string

export type PipeSeparatedFlagsSimpleQueryStringFlag = Common_QueryDsl.SimpleQueryStringFlag | string

export interface PluginStats {
  classname: string;
  custom_foldername?: undefined | string;
  description: string;
  extended_plugins: string[];
  has_native_controller: boolean;
  java_version: VersionString;
  licensed?: boolean;
  name: Name;
  opensearch_version: VersionString;
  version: VersionString;
}

export interface QueryCacheStats {
  cache_count: number;
  cache_size: number;
  evictions: number;
  hit_count: number;
  memory_size?: ByteSize;
  memory_size_in_bytes: number;
  miss_count: number;
  total_count: number;
}

export type QueryVector = number[]

export interface QueryVectorBuilder {
  text_embedding?: TextEmbedding;
}

export type RankBase = Record<string, any>

export interface RankContainer {
  rrf?: RrfRank;
}

export interface RecoveryStats {
  current_as_source: number;
  current_as_target: number;
  throttle_time?: Duration;
  throttle_time_in_millis: DurationValueUnitMillis;
}

export type Refresh = 'false' | 'true' | 'wait_for'

export interface RefreshStats {
  external_total: number;
  external_total_time_in_millis: DurationValueUnitMillis;
  listeners: number;
  total: number;
  total_time?: Duration;
  total_time_in_millis: DurationValueUnitMillis;
}

export type RelationName = string

export interface RelocationFailureInfo {
  failed_attempts: number;
}

export interface RemoteStoreDownloadStats {
  total_download_size: RemoteStoreUploadDownloadStats;
  total_time_spent_in_millis: DurationValueUnitMillis;
}

export interface RemoteStoreStats {
  download: RemoteStoreDownloadStats;
  upload: RemoteStoreUploadStats;
}

export interface RemoteStoreTranslogStats {
  upload: RemoteStoreTranslogUploadStats;
}

export interface RemoteStoreTranslogUploadStats {
  total_upload_size: RemoteStoreTranslogUploadTotalUploadSizeStats;
  total_uploads: RemoteStoreTranslogUploadTotalUploadsStats;
}

export interface RemoteStoreTranslogUploadTotalUploadSizeStats {
  failed_bytes: ByteSize;
  started_bytes: ByteSize;
  succeeded_bytes: ByteSize;
}

export interface RemoteStoreTranslogUploadTotalUploadsStats {
  failed: number;
  started: number;
  succeeded: number;
}

export interface RemoteStoreUploadDownloadStats {
  failed_bytes: ByteSize;
  started_bytes: ByteSize;
  succeeded_bytes: ByteSize;
}

export interface RemoteStoreUploadPressureStats {
  total_rejections: number;
}

export interface RemoteStoreUploadRefreshSizeLagStats {
  max_bytes: ByteSize;
  total_bytes: ByteSize;
}

export interface RemoteStoreUploadStats {
  max_refresh_time_lag_in_millis: DurationValueUnitMillis;
  pressure: RemoteStoreUploadPressureStats;
  refresh_size_lag: RemoteStoreUploadRefreshSizeLagStats;
  total_time_spent_in_millis: DurationValueUnitMillis;
  total_upload_size: RemoteStoreUploadDownloadStats;
}

export interface RequestCacheStats {
  evictions: number;
  hit_count: number;
  memory_size?: string;
  memory_size_in_bytes: number;
  miss_count: number;
}

export interface RequestStats {
  current?: number;
  time_in_millis?: DurationValueUnitMillis;
  total?: number;
}

export type Result = 'created' | 'deleted' | 'noop' | 'not_found' | 'updated'

export interface Retries {
  bulk: number;
  search: number;
}

export type Routing = string

export interface RrfRank extends RankBase {
  rank_constant?: number;
  window_size?: number;
}

export type ScheduleTimeOfDay = string | HourAndMinute

export interface ScoreSort {
  order?: SortOrder;
}

export type Script = InlineScript | StoredScriptId

export interface ScriptBase {
  params?: Record<string, any>;
}

export interface ScriptField {
  ignore_failure?: boolean;
  script: Script;
}

export type ScriptLanguage = 'expression' | 'java' | 'mustache' | 'painless'

export interface ScriptSort {
  mode?: SortMode;
  nested?: NestedSortValue;
  order?: SortOrder;
  script: Script;
  type?: ScriptSortType;
}

export type ScriptSortType = 'number' | 'string' | 'version'

export type ScrollId = string

export type ScrollIds = ScrollId | ScrollId[]

export interface SearchStats {
  concurrent_avg_slice_count?: number;
  concurrent_query_current?: number;
  concurrent_query_time?: Duration;
  concurrent_query_time_in_millis?: DurationValueUnitMillis;
  concurrent_query_total?: number;
  fetch_current: number;
  fetch_time?: Duration;
  fetch_time_in_millis: DurationValueUnitMillis;
  fetch_total: number;
  groups?: Record<string, SearchStats>;
  open_contexts?: number;
  point_in_time_current?: number;
  point_in_time_time?: Duration;
  point_in_time_time_in_millis?: DurationValueUnitMillis;
  point_in_time_total?: number;
  query_current: number;
  query_time?: Duration;
  query_time_in_millis: DurationValueUnitMillis;
  query_total: number;
  request?: Record<string, RequestStats>;
  scroll_current: number;
  scroll_time?: Duration;
  scroll_time_in_millis: DurationValueUnitMillis;
  scroll_total: number;
  search_idle_reactivate_count_total?: number;
  suggest_current: number;
  suggest_time?: Duration;
  suggest_time_in_millis: DurationValueUnitMillis;
  suggest_total: number;
}

export type SearchType = 'dfs_query_then_fetch' | 'query_then_fetch'

export interface SegmentReplicationStats {
  max_bytes_behind: ByteSize;
  max_replication_lag: ByteSize;
  total_bytes_behind: ByteSize;
}

export interface SegmentsStats {
  count: number;
  doc_values_memory?: ByteSize;
  doc_values_memory_in_bytes: number;
  file_sizes: Record<string, Indices_Stats.ShardFileSizeInfo>;
  fixed_bit_set?: ByteSize;
  fixed_bit_set_memory_in_bytes: number;
  index_writer_max_memory_in_bytes?: number;
  index_writer_memory?: ByteSize;
  index_writer_memory_in_bytes: number;
  max_unsafe_auto_id_timestamp: number;
  memory?: ByteSize;
  memory_in_bytes: number;
  norms_memory?: ByteSize;
  norms_memory_in_bytes: number;
  points_memory?: ByteSize;
  points_memory_in_bytes: number;
  remote_store?: RemoteStoreStats;
  segment_replication?: SegmentReplicationStats;
  stored_fields_memory_in_bytes: number;
  stored_memory?: ByteSize;
  term_vectors_memory_in_bytes: number;
  term_vectory_memory?: ByteSize;
  terms_memory?: ByteSize;
  terms_memory_in_bytes: number;
  version_map_memory?: ByteSize;
  version_map_memory_in_bytes: number;
}

export type SequenceNumber = number

export interface ShardFailure {
  index?: IndexName;
  node?: string;
  reason: ErrorCause;
  shard: number;
  status?: string;
}

export interface ShardsOperationResponseBase {
  _shards: ShardStatistics;
}

export interface ShardStatistics {
  failed: uint;
  failures?: ShardFailure[];
  skipped?: uint;
  successful: uint;
  total: uint;
}

export type short = number

export interface SlicedScroll {
  field?: Field;
  id: Id;
  max: number;
}

export type Slices = number | SlicesCalculation

export type SlicesCalculation = 'auto'

export type Sort = SortCombinations | SortCombinations[]

export type SortCombinations = Field | SortOptions

export type SortMode = 'avg' | 'max' | 'median' | 'min' | 'sum'

export interface SortOptions {
  _doc?: ScoreSort;
  _geo_distance?: GeoDistanceSort;
  _score?: ScoreSort;
  _script?: ScriptSort;
}

export type SortOrder = 'asc' | 'desc'

export type SortResults = FieldValue[]

export interface StoredScript {
  lang: ScriptLanguage;
  options?: Record<string, string>;
  source: string;
}

export interface StoredScriptId extends ScriptBase {
  id: Id;
}

export interface StoreStats {
  reserved?: ByteSize;
  reserved_in_bytes: number;
  size?: ByteSize;
  size_in_bytes: number;
  total_data_set_size?: ByteSize;
  total_data_set_size_in_bytes?: number;
}

export type Stringifiedboolean = boolean | string

export type StringifiedEpochTimeUnitMillis = EpochTimeUnitMillis | string

export type StringifiedEpochTimeUnitSeconds = EpochTimeUnitSeconds | string

export type Stringifiedinteger = number | string

export type StringifiedVersionNumber = VersionNumber | string

export type SuggestMode = 'always' | 'missing' | 'popular'

export interface TaskFailure {
  node_id: NodeId;
  reason: ErrorCause;
  status: string;
  task_id: number;
}

export type TaskId = string | number

export interface TextEmbedding {
  model_id: string;
  model_text: string;
}

export type TimeOfDay = string

export type TimeUnit = 'd' | 'h' | 'm' | 'micros' | 'ms' | 'nanos' | 's'

export type TimeZone = string

export interface TopLeftBottomRightGeoBounds {
  bottom_right: GeoLocation;
  top_left: GeoLocation;
}

export interface TopRightBottomLeftGeoBounds {
  bottom_left: GeoLocation;
  top_right: GeoLocation;
}

export interface TranslogStats {
  earliest_last_modified_age: number;
  operations: number;
  remote_store?: RemoteStoreTranslogStats;
  size?: string;
  size_in_bytes: number;
  uncommitted_operations: number;
  uncommitted_size?: string;
  uncommitted_size_in_bytes: number;
}

export type TransportAddress = string

export type Type = string

export type uint = number

export type ulong = number

export type UnitMillis = number

export type UnitNanos = number

export type UnitSeconds = number

export type Username = string

export type Uuid = string

export type VersionNumber = number

export type VersionString = string

export type VersionType = 'external' | 'external_gte' | 'force' | 'internal'

export type Void = Record<string, any>

export type WaitForActiveShardOptions = 'all' | 'index-setting'

export type WaitForActiveShards = number | WaitForActiveShardOptions

export type WaitForEvents = 'high' | 'immediate' | 'languid' | 'low' | 'normal' | 'urgent'

export interface WarmerStats {
  current: number;
  total: number;
  total_time?: Duration;
  total_time_in_millis: DurationValueUnitMillis;
}

export interface WktGeoBounds {
  wkt: string;
}

export interface WriteResponseBase {
  _id: Id;
  _index: IndexName;
  _primary_term: number;
  _seq_no: SequenceNumber;
  _shards: ShardStatistics;
  _type?: Type;
  _version: VersionNumber;
  forced_refresh?: boolean;
  result: Result;
}

