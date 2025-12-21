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

export type ErrorPolicy = 'BLOCK' | 'DROP'

export type GetIngestionStateResponse = {
  _shards?: Common.ShardStatistics;
  ingestion_state?: Record<string, ShardIngestionState[]>;
  next_page_token?: string;
}

export type IngestionStateShardFailure = {
  error: string;
  shard: number;
}

export type PauseIngestionResponse = {
  acknowledged: boolean;
  error?: string;
  failures?: IngestionStateShardFailure[];
  shards_acknowledged: boolean;
}

export type PollerState = 'CLOSED' | 'NONE' | 'PAUSED' | 'POLLING' | 'PROCESSING'

export type ResetMode = 'OFFSET' | 'TIMESTAMP'

export type ResetSettings = {
  mode: ResetMode;
  shard: number;
  value: string;
}

export type ResumeIngestionRequest = {
  reset_settings?: ResetSettings[];
}

export type ResumeIngestionResponse = {
  acknowledged: boolean;
  error?: string;
  failures?: IngestionStateShardFailure[];
  shards_acknowledged: boolean;
}

export type ShardIngestionState = {
  batch_start_pointer?: string;
  error_policy?: ErrorPolicy;
  poller_paused?: boolean;
  poller_state?: PollerState;
  shard?: number;
  write_block_enabled?: boolean;
}

