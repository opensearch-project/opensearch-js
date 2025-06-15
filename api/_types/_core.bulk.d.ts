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
import * as Core_Search from './_core.search'

export type CreateOperation = WriteOperation

export type DeleteOperation = OperationBase & {
  if_primary_term?: number;
  if_seq_no?: Common.SequenceNumber;
  version?: Common.VersionNumber;
  version_type?: Common.VersionType;
}

export type IndexOperation = WriteOperation & {
  if_primary_term?: number;
  if_seq_no?: Common.SequenceNumber;
  op_type?: Common.OpType;
  version?: Common.VersionNumber;
  version_type?: Common.VersionType;
}

export type OperationBase = {
  _id?: Common.Id;
  _index?: Common.IndexName;
  routing?: Common.Routing;
}

export type OperationContainer = {
  create?: CreateOperation;
  delete?: DeleteOperation;
  index?: IndexOperation;
  update?: UpdateOperation;
}

export type ResponseItem = {
  _id?: undefined | string;
  _index: string;
  _primary_term?: number;
  _seq_no?: Common.SequenceNumber;
  _shards?: Common.ShardInfo;
  _type?: string;
  _version?: Common.VersionNumber;
  error?: Common.ErrorCause;
  forced_refresh?: boolean;
  get?: Common.InlineGetDictUserDefined;
  result?: string;
  status: number;
}

export type UpdateAction = {
  _source?: Core_Search.SourceConfig;
  detect_noop?: boolean;
  doc?: Record<string, any>;
  doc_as_upsert?: boolean;
  script?: Common.Script;
  scripted_upsert?: boolean;
  upsert?: Record<string, any>;
}

export type UpdateOperation = OperationBase & {
  if_primary_term?: number;
  if_seq_no?: Common.SequenceNumber;
  require_alias?: boolean;
  retry_on_conflict?: number;
}

export type WriteOperation = OperationBase & {
  pipeline?: string;
  require_alias?: boolean;
}

