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

import * as Cluster_AllocationExplain from './cluster.allocation_explain'
import * as Common_QueryDsl from './_common.query_dsl'
import * as Indices_Stats from './indices.stats'

export interface AcknowledgedResponseBase {
  acknowledged: boolean;
}

export type ActionStatusOptions = 'failure' | 'simulated' | 'success' | 'throttled'

export interface BaseNode {
  attributes?: Record<string, string>;
  host?: Host;
  ip?: Ip;
  name: Name;
  roles?: NodeRoles;
  transport_address?: TransportAddress;
}

export type BulkByScrollFailure = BulkItemResponseFailure | ScrollableHitSourceSearchFailure

export interface BulkByScrollResponseBase extends BulkByScrollTaskStatus {
  failures: BulkByScrollFailure[];
  timed_out: boolean;
  took: number;
}

export interface BulkByScrollTaskStatus {
  batches: number;
  canceled?: string;
  created?: number;
  deleted: number;
  noops: number;
  requests_per_second: number;
  retries: Retries;
  slice_id?: number;
  slices?: BulkByScrollTaskStatusOrException[];
  throttled?: Duration;
  throttled_millis: DurationValueUnitMillis;
  throttled_until?: Duration;
  throttled_until_millis: DurationValueUnitMillis;
  total: number;
  updated?: number;
  version_conflicts: number;
}

export type BulkByScrollTaskStatusOrException = BulkByScrollTaskStatus | ErrorCause

export interface BulkItemResponseFailure {
  cause: ErrorCause;
  id?: Id;
  index: IndexName;
  status: number;
}

export type byte = number

export type ByteCount = number

export type ByteUnit = 'b' | 'g' | 'gb' | 'k' | 'kb' | 'm' | 'mb' | 'p' | 'pb' | 't' | 'tb'

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
  size?: HumanReadableByteCount;
  size_in_bytes: ByteCount;
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

export type DurationValueUnitMillis = UnitMillis

export type DurationValueUnitNanos = UnitNanos

export type EmptyObject = Record<string, any>

export type EpochTimeUnitMillis = UnitMillis

export type EpochTimeUnitSeconds = UnitSeconds

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
  memory_size?: HumanReadableByteCount;
  memory_size_in_bytes: ByteCount;
}

export interface FieldMemoryUsage {
  memory_size?: HumanReadableByteCount;
  memory_size_in_bytes: ByteCount;
}

export type Fields = Field | Field[]

export interface FieldSizeUsage {
  size?: HumanReadableByteCount;
  size_in_bytes: ByteCount;
}

export type FieldValue = boolean | undefined | number | Record<string, any> | string

export type FieldWithOrder = Record<string, ScoreSort>

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
  getTime?: Duration;
  missing_time?: Duration;
  missing_time_in_millis: DurationValueUnitMillis;
  missing_total: number;
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

export type HumanReadableByteCount = string

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

export interface KnnField {
  boost?: number;
  filter?: Common_QueryDsl.QueryContainer | Common_QueryDsl.QueryContainer[];
  k?: number;
  max_distance?: number;
  min_score?: number;
  vector: QueryVector;
}

export interface LatLonGeoLocation {
  lat: number;
  lon: number;
}

export type Level = 'cluster' | 'indices' | 'shards'

export interface MergesStats {
  current: number;
  current_docs: number;
  current_size?: HumanReadableByteCount;
  current_size_in_bytes: ByteCount;
  total: number;
  total_auto_throttle?: HumanReadableByteCount;
  total_auto_throttle_in_bytes: ByteCount;
  total_docs: number;
  total_size?: HumanReadableByteCount;
  total_size_in_bytes: ByteCount;
  total_stopped_time?: Duration;
  total_stopped_time_in_millis: DurationValueUnitMillis;
  total_throttled_time?: Duration;
  total_throttled_time_in_millis: DurationValueUnitMillis;
  total_time?: Duration;
  total_time_in_millis: DurationValueUnitMillis;
  unreferenced_file_cleanups_performed?: number;
}

export type Metadata = Record<string, any>

export type MinimumShouldMatch = number | string

export type MultiTermQueryRewrite = 'constant_score' | 'constant_score_boolean' | 'scoring_boolean' | 'top_terms_N' | 'top_terms_blended_freqs_N' | 'top_terms_boost_N'

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

export type NodeRole = 'client' | 'coordinating_only' | 'data' | 'data_cold' | 'data_content' | 'data_frozen' | 'data_hot' | 'data_warm' | 'ingest' | 'ml' | 'remote_cluster_client' | 'transform' | 'voting_only' | 'master' | 'cluster_manager'

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

export type PercentageNumber = number

export type PercentageString = string

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
  memory_size?: HumanReadableByteCount;
  memory_size_in_bytes: ByteCount;
  miss_count: number;
  total_count: number;
}

export type QueryVector = number[]

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
  external_total_time?: Duration;
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
  total_time_spent?: Duration;
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
  failed?: HumanReadableByteCount;
  failed_bytes: ByteCount;
  started?: HumanReadableByteCount;
  started_bytes: ByteCount;
  succeeded?: HumanReadableByteCount;
  succeeded_bytes: ByteCount;
}

export interface RemoteStoreTranslogUploadTotalUploadsStats {
  failed: number;
  started: number;
  succeeded: number;
}

export interface RemoteStoreUploadDownloadStats {
  failed?: HumanReadableByteCount;
  failed_bytes: ByteCount;
  started?: HumanReadableByteCount;
  started_bytes: ByteCount;
  succeeded?: HumanReadableByteCount;
  succeeded_bytes: ByteCount;
}

export interface RemoteStoreUploadPressureStats {
  total_rejections: number;
}

export interface RemoteStoreUploadRefreshSizeLagStats {
  max?: HumanReadableByteCount;
  max_bytes: ByteCount;
  total?: HumanReadableByteCount;
  total_bytes: ByteCount;
}

export interface RemoteStoreUploadStats {
  max_refresh_time_lag?: Duration;
  max_refresh_time_lag_in_millis: DurationValueUnitMillis;
  pressure: RemoteStoreUploadPressureStats;
  refresh_size_lag: RemoteStoreUploadRefreshSizeLagStats;
  total_time_spent?: Duration;
  total_time_spent_in_millis: DurationValueUnitMillis;
  total_upload_size: RemoteStoreUploadDownloadStats;
}

export interface RequestCacheStats {
  evictions: number;
  hit_count: number;
  memory_size?: HumanReadableByteCount;
  memory_size_in_bytes: ByteCount;
  miss_count: number;
}

export interface RequestStats {
  current?: number;
  time?: Duration;
  time_in_millis?: DurationValueUnitMillis;
  total?: number;
}

export type Result = 'created' | 'deleted' | 'noop' | 'not_found' | 'updated'

export interface Retries {
  bulk: number;
  search: number;
}

export type Routing = string | string[]

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

export interface ScrollableHitSourceSearchFailure {
  index?: IndexName;
  node?: string;
  reason: ErrorCause;
  shard?: number;
  status: number;
}

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
  max_bytes_behind: ByteCount;
  max_replication_lag: ByteCount;
  total_bytes_behind: ByteCount;
}

export interface SegmentsStats {
  count: number;
  doc_values_memory?: HumanReadableByteCount;
  doc_values_memory_in_bytes: ByteCount;
  file_sizes: Record<string, Indices_Stats.ShardFileSizeInfo>;
  fixed_bit_set?: HumanReadableByteCount;
  fixed_bit_set_memory_in_bytes: ByteCount;
  index_writer_max_memory_in_bytes?: ByteCount;
  index_writer_memory?: HumanReadableByteCount;
  index_writer_memory_in_bytes: ByteCount;
  max_unsafe_auto_id_timestamp: number;
  memory?: HumanReadableByteCount;
  memory_in_bytes: ByteCount;
  norms_memory?: HumanReadableByteCount;
  norms_memory_in_bytes: ByteCount;
  points_memory?: HumanReadableByteCount;
  points_memory_in_bytes: ByteCount;
  remote_store?: RemoteStoreStats;
  segment_replication?: SegmentReplicationStats;
  stored_fields_memory?: HumanReadableByteCount;
  stored_fields_memory_in_bytes: ByteCount;
  term_vectors_memory?: HumanReadableByteCount;
  term_vectors_memory_in_bytes: ByteCount;
  terms_memory?: HumanReadableByteCount;
  terms_memory_in_bytes: ByteCount;
  version_map_memory?: HumanReadableByteCount;
  version_map_memory_in_bytes: ByteCount;
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

export type SortCombinations = Field | FieldWithOrder | SortOptions

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
  reserved?: HumanReadableByteCount;
  reserved_in_bytes: ByteCount;
  size?: HumanReadableByteCount;
  size_in_bytes: ByteCount;
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
  size?: HumanReadableByteCount;
  size_in_bytes: ByteCount;
  uncommitted_operations: number;
  uncommitted_size?: HumanReadableByteCount;
  uncommitted_size_in_bytes: ByteCount;
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

export interface XyCartesianCoordinates {
  x: number;
  y: number;
}

export type XyLocation = XyCartesianCoordinates | number[] | string

