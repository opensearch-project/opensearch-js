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


export interface FieldStatistics {
  doc_count: number;
  sum_doc_freq: number;
  sum_ttf: number;
}

export interface Filter {
  max_doc_freq?: number;
  max_num_terms?: number;
  max_term_freq?: number;
  max_word_length?: number;
  min_doc_freq?: number;
  min_term_freq?: number;
  min_word_length?: number;
}

export interface Term {
  doc_freq?: number;
  score?: number;
  term_freq: number;
  tokens?: Token[];
  ttf?: number;
}

export interface TermVector {
  field_statistics: FieldStatistics;
  terms: Record<string, Term>;
}

export interface Token {
  end_offset?: number;
  payload?: string;
  position: number;
  start_offset?: number;
}

