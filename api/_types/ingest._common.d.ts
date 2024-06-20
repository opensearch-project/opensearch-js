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

export interface AppendProcessor extends ProcessorBase {
  allow_duplicates?: boolean;
  field: Common.Field;
  value: Record<string, any>[];
}

export interface AttachmentProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  indexed_chars?: number;
  indexed_chars_field?: Common.Field;
  properties?: string[];
  resource_name?: string;
  target_field?: Common.Field;
}

export interface BytesProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field?: Common.Field;
}

export interface CircleProcessor extends ProcessorBase {
  error_distance: number;
  field: Common.Field;
  ignore_missing?: boolean;
  shape_type: ShapeType;
  target_field?: Common.Field;
}

export interface ConvertProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field?: Common.Field;
  type: ConvertType;
}

export type ConvertType = 'auto' | 'boolean' | 'double' | 'float' | 'integer' | 'long' | 'string'

export interface CsvProcessor extends ProcessorBase {
  empty_value?: Record<string, any>;
  field: Common.Field;
  ignore_missing?: boolean;
  quote?: string;
  separator?: string;
  target_fields: Common.Fields;
  trim?: boolean;
}

export interface DateIndexNameProcessor extends ProcessorBase {
  date_formats: string[];
  date_rounding: string;
  field: Common.Field;
  index_name_format?: string;
  index_name_prefix?: string;
  locale?: string;
  timezone?: string;
}

export interface DateProcessor extends ProcessorBase {
  field: Common.Field;
  formats: string[];
  locale?: string;
  target_field?: Common.Field;
  timezone?: string;
}

export interface DissectProcessor extends ProcessorBase {
  append_separator?: string;
  field: Common.Field;
  ignore_missing?: boolean;
  pattern: string;
}

export interface DotExpanderProcessor extends ProcessorBase {
  field: Common.Field;
  path?: string;
}

export type DropProcessor = ProcessorBase & Record<string, any>

export interface EnrichProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  max_matches?: number;
  override?: boolean;
  policy_name: string;
  shape_relation?: Common.GeoShapeRelation;
  target_field: Common.Field;
}

export interface FailProcessor extends ProcessorBase {
  message: string;
}

export interface ForeachProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  processor: ProcessorContainer;
}

export interface GeoIpProcessor extends ProcessorBase {
  database_file?: string;
  field: Common.Field;
  first_only?: boolean;
  ignore_missing?: boolean;
  properties?: string[];
  target_field?: Common.Field;
}

export interface GrokProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  pattern_definitions?: Record<string, string>;
  patterns: string[];
  trace_match?: boolean;
}

export interface GsubProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  pattern: string;
  replacement: string;
  target_field?: Common.Field;
}

export interface InferenceConfig {
  classification?: InferenceConfigClassification;
  regression?: InferenceConfigRegression;
}

export interface InferenceConfigClassification {
  num_top_classes?: number;
  num_top_feature_importance_values?: number;
  prediction_field_type?: string;
  results_field?: Common.Field;
  top_classes_results_field?: Common.Field;
}

export interface InferenceConfigRegression {
  num_top_feature_importance_values?: number;
  results_field?: Common.Field;
}

export interface InferenceProcessor extends ProcessorBase {
  field_map?: Record<string, Record<string, any>>;
  inference_config?: InferenceConfig;
  model_id: Common.Id;
  target_field?: Common.Field;
}

export interface JoinProcessor extends ProcessorBase {
  field: Common.Field;
  separator: string;
  target_field?: Common.Field;
}

export interface JsonProcessor extends ProcessorBase {
  add_to_root?: boolean;
  add_to_root_conflict_strategy?: JsonProcessorConflictStrategy;
  allow_duplicate_keys?: boolean;
  field: Common.Field;
  target_field?: Common.Field;
}

export type JsonProcessorConflictStrategy = 'merge' | 'replace'

export interface KeyValueProcessor extends ProcessorBase {
  exclude_keys?: string[];
  field: Common.Field;
  field_split: string;
  ignore_missing?: boolean;
  include_keys?: string[];
  prefix?: string;
  strip_brackets?: boolean;
  target_field?: Common.Field;
  trim_key?: string;
  trim_value?: string;
  value_split: string;
}

export interface LowercaseProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field?: Common.Field;
}

export interface Pipeline {
  _meta?: Common.Metadata;
  description?: string;
  on_failure?: ProcessorContainer[];
  processors?: ProcessorContainer[];
  version?: Common.VersionNumber;
}

export interface PipelineProcessor extends ProcessorBase {
  ignore_missing_pipeline?: boolean;
  name: Common.Name;
}

export interface ProcessorBase {
  description?: string;
  if?: string;
  ignore_failure?: boolean;
  on_failure?: ProcessorContainer[];
  tag?: string;
}

export interface ProcessorContainer {
  append?: AppendProcessor;
  attachment?: AttachmentProcessor;
  bytes?: BytesProcessor;
  circle?: CircleProcessor;
  convert?: ConvertProcessor;
  csv?: CsvProcessor;
  date?: DateProcessor;
  date_index_name?: DateIndexNameProcessor;
  dissect?: DissectProcessor;
  dot_expander?: DotExpanderProcessor;
  drop?: DropProcessor;
  enrich?: EnrichProcessor;
  fail?: FailProcessor;
  foreach?: ForeachProcessor;
  geoip?: GeoIpProcessor;
  grok?: GrokProcessor;
  gsub?: GsubProcessor;
  inference?: InferenceProcessor;
  join?: JoinProcessor;
  json?: JsonProcessor;
  kv?: KeyValueProcessor;
  lowercase?: LowercaseProcessor;
  pipeline?: PipelineProcessor;
  remove?: RemoveProcessor;
  rename?: RenameProcessor;
  script?: Common.Script;
  set?: SetProcessor;
  set_security_user?: SetSecurityUserProcessor;
  sort?: SortProcessor;
  split?: SplitProcessor;
  text_embedding?: TextEmbeddingProcessor;
  trim?: TrimProcessor;
  uppercase?: UppercaseProcessor;
  urldecode?: UrlDecodeProcessor;
  user_agent?: UserAgentProcessor;
}

export interface RemoveProcessor extends ProcessorBase {
  field: Common.Fields;
  ignore_missing?: boolean;
}

export interface RenameProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field: Common.Field;
}

export interface SetProcessor extends ProcessorBase {
  copy_from?: Common.Field;
  field: Common.Field;
  ignore_empty_value?: boolean;
  media_type?: string;
  override?: boolean;
  value?: Record<string, any>;
}

export interface SetSecurityUserProcessor extends ProcessorBase {
  field: Common.Field;
  properties?: string[];
}

export type ShapeType = 'geo_shape' | 'shape'

export interface SortProcessor extends ProcessorBase {
  field: Common.Field;
  order?: Common.SortOrder;
  target_field?: Common.Field;
}

export interface SplitProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  preserve_trailing?: boolean;
  separator: string;
  target_field?: Common.Field;
}

export interface TextEmbeddingProcessor extends ProcessorBase {
  description?: string;
  field_map: Record<string, string>;
  model_id: Common.Id;
}

export interface TrimProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field?: Common.Field;
}

export interface UppercaseProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field?: Common.Field;
}

export interface UrlDecodeProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  target_field?: Common.Field;
}

export interface UserAgentProcessor extends ProcessorBase {
  field: Common.Field;
  ignore_missing?: boolean;
  options?: UserAgentProperty[];
  regex_file?: string;
  target_field?: Common.Field;
}

export type UserAgentProperty = 'BUILD' | 'DEVICE' | 'MAJOR' | 'MINOR' | 'NAME' | 'OS' | 'OS_MAJOR' | 'OS_MINOR' | 'OS_NAME' | 'PATCH'

