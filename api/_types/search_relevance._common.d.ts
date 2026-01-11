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


export type Experiment = {
  id?: string;
  judgmentList?: string[];
  querySetId?: string;
  results?: Record<string, any>;
  searchConfigurationList?: string[];
  size?: number;
  status?: string;
  timestamp?: string;
  type?: string;
}

export type GenericObject = {
  _shards?: Record<string, any>;
  hits?: Record<string, any>;
  timed_out?: boolean;
  took?: number;
}

export type Judgment = {
  id?: string;
  judgmentScores?: Record<string, any>;
  metadata?: Record<string, any>;
  name?: string;
  status?: string;
  timestamp?: string;
  type?: string;
}

export type QuerySet = {
  description?: string;
  id?: string;
  name?: string;
  querySetQueries?: Record<string, any>;
  sampling?: string;
  timestamp?: string;
}

export type SearchConfiguration = {
  id?: string;
  index?: string;
  name?: string;
  query?: string;
  searchPipeline?: string;
  timestamp?: string;
}

