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


export interface AnalyzeDetail {
  analyzer?: AnalyzerDetail;
  charfilters?: CharFilterDetail[];
  custom_analyzer: boolean;
  tokenfilters?: TokenDetail[];
  tokenizer?: TokenDetail;
}

export interface AnalyzerDetail {
  name: string;
  tokens: ExplainAnalyzeToken[];
}

export interface AnalyzeToken {
  end_offset: number;
  position: number;
  positionLength?: number;
  start_offset: number;
  token: string;
  type: string;
}

export interface CharFilterDetail {
  filtered_text: string[];
  name: string;
}

export interface ExplainAnalyzeToken {
  bytes: string;
  end_offset: number;
  keyword?: boolean;
  position: number;
  positionLength: number;
  start_offset: number;
  termFrequency: number;
  token: string;
  type: string;
}

export type TextToAnalyze = string | string[]

export interface TokenDetail {
  name: string;
  tokens: ExplainAnalyzeToken[];
}

