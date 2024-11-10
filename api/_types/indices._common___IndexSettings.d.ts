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

import * as CommonDateTime from './_common___DateTime'
import * as CommonDuration from './_common___Duration'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'
import * as CommonName from './_common___Name'
import * as CommonPipelineName from './_common___PipelineName'
import * as CommonStringifiedboolean from './_common___Stringifiedboolean'
import * as CommonStringifiedEpochTimeUnitMillis from './_common___StringifiedEpochTimeUnitMillis'
import * as CommonStringifiedinteger from './_common___Stringifiedinteger'
import * as CommonUuid from './_common___Uuid'
import * as Indices_CommonIndexCheckOnStartup from './indices._common___IndexCheckOnStartup'
import * as Indices_CommonIndexingPressure from './indices._common___IndexingPressure'
import * as Indices_CommonIndexRouting from './indices._common___IndexRouting'
import * as Indices_CommonIndexSegmentSort from './indices._common___IndexSegmentSort'
import * as Indices_CommonIndexSettingBlocks from './indices._common___IndexSettingBlocks'
import * as Indices_CommonIndexSettingsAnalysis from './indices._common___IndexSettingsAnalysis'
import * as Indices_CommonIndexSettingsAnalyze from './indices._common___IndexSettingsAnalyze'
import * as Indices_CommonIndexSettingsHighlight from './indices._common___IndexSettingsHighlight'
import * as Indices_CommonIndexSettingsIndexing from './indices._common___IndexSettingsIndexing'
import * as Indices_CommonIndexSettingsLifecycle from './indices._common___IndexSettingsLifecycle'
import * as Indices_CommonIndexSettingsMapping from './indices._common___IndexSettingsMapping'
import * as Indices_CommonIndexSettingsMerge from './indices._common___IndexSettingsMerge'
import * as Indices_CommonIndexSettingsQueries from './indices._common___IndexSettingsQueries'
import * as Indices_CommonIndexSettingsQueryString from './indices._common___IndexSettingsQueryString'
import * as Indices_CommonIndexSettingsSearch from './indices._common___IndexSettingsSearch'
import * as Indices_CommonIndexSettingsSimilarity from './indices._common___IndexSettingsSimilarity'
import * as Indices_CommonIndexSettingsStore from './indices._common___IndexSettingsStore'
import * as Indices_CommonIndexSettingsTimeSeries from './indices._common___IndexSettingsTimeSeries'
import * as Indices_CommonIndexVersioning from './indices._common___IndexVersioning'
import * as Indices_CommonSoftDeletes from './indices._common___SoftDeletes'
import * as Indices_CommonTranslog from './indices._common___Translog'
import * as Indices_CommonTranslogDurability from './indices._common___TranslogDurability'

export type undefined = {
  analysis?: Indices_CommonIndexSettingsAnalysis.undefined;
  analyze?: Indices_CommonIndexSettingsAnalyze.undefined;
  'analyze.max_token_count'?: CommonStringifiedinteger.undefined;
  auto_expand_replicas?: string;
  blocks?: Indices_CommonIndexSettingBlocks.undefined;
  'blocks.metadata'?: CommonStringifiedboolean.undefined;
  'blocks.read'?: CommonStringifiedboolean.undefined;
  'blocks.read_only'?: CommonStringifiedboolean.undefined;
  'blocks.read_only_allow_delete'?: CommonStringifiedboolean.undefined;
  'blocks.write'?: CommonStringifiedboolean.undefined;
  check_on_startup?: Indices_CommonIndexCheckOnStartup.undefined;
  codec?: string;
  creation_date?: CommonStringifiedEpochTimeUnitMillis.undefined;
  creation_date_string?: CommonDateTime.undefined;
  default_pipeline?: CommonPipelineName.undefined;
  final_pipeline?: CommonPipelineName.undefined;
  format?: string | number;
  gc_deletes?: CommonDuration.undefined;
  hidden?: CommonStringifiedboolean.undefined;
  highlight?: Indices_CommonIndexSettingsHighlight.undefined;
  'highlight.max_analyzed_offset'?: number;
  index?: ;
  indexing?: Indices_CommonIndexSettingsIndexing.undefined;
  indexing_pressure?: Indices_CommonIndexingPressure.undefined;
  knn?: boolean;
  'knn.algo_param.ef_search'?: number;
  lifecycle?: Indices_CommonIndexSettingsLifecycle.undefined;
  'lifecycle.name'?: CommonName.undefined;
  load_fixed_bitset_filters_eagerly?: boolean;
  mapping?: Indices_CommonIndexSettingsMapping.undefined;
  max_docvalue_fields_search?: number;
  max_inner_result_window?: number;
  max_ngram_diff?: number;
  max_refresh_listeners?: number;
  max_regex_length?: number;
  max_rescore_window?: number;
  max_result_window?: number;
  max_script_fields?: number;
  max_shingle_diff?: number;
  max_slices_per_scroll?: number;
  max_terms_count?: number;
  merge?: Indices_CommonIndexSettingsMerge.undefined;
  'merge.scheduler.max_thread_count'?: CommonStringifiedinteger.undefined;
  mode?: string;
  number_of_replicas?: number | string;
  number_of_routing_shards?: number;
  number_of_shards?: number | string;
  priority?: number | string;
  provided_name?: CommonName.undefined;
  queries?: Indices_CommonIndexSettingsQueries.undefined;
  query_string?: Indices_CommonIndexSettingsQueryString.undefined;
  'query_string.lenient'?: CommonStringifiedboolean.undefined;
  refresh_interval?: CommonDuration.undefined;
  routing?: Indices_CommonIndexRouting.undefined;
  routing_partition_size?: CommonStringifiedinteger.undefined;
  routing_path?: string | string[];
  search?: Indices_CommonIndexSettingsSearch.undefined;
  'search.idle.after'?: CommonDuration.undefined;
  settings?: ;
  similarity?: Indices_CommonIndexSettingsSimilarity.undefined;
  soft_deletes?: Indices_CommonSoftDeletes.undefined;
  'soft_deletes.retention_lease.period'?: CommonDuration.undefined;
  sort?: Indices_CommonIndexSegmentSort.undefined;
  store?: Indices_CommonIndexSettingsStore.undefined;
  time_series?: Indices_CommonIndexSettingsTimeSeries.undefined;
  top_metrics_max_size?: number;
  translog?: Indices_CommonTranslog.undefined;
  'translog.durability'?: Indices_CommonTranslogDurability.undefined;
  'translog.flush_threshold_size'?: CommonHumanReadableByteCount.undefined;
  uuid?: CommonUuid.undefined;
  verified_before_close?: CommonStringifiedboolean.undefined;
  version?: Indices_CommonIndexVersioning.undefined;
  [key: string]: any | Record<string, any>;
}

