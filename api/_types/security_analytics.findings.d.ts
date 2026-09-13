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


export type DetectionType = 'rule' | 'threat'

export type Document = {
  document?: string;
  found?: boolean;
  id?: string;
  index?: string;
}

export type Finding = {
  detectorId?: string;
  document_list?: Document[];
  id?: string;
  index?: string;
  queries?: Query[];
  related_doc_ids?: string[];
  timestamp?: number;
}

export type Findings = Finding[]

export type FindingWithScore = {
  detector_type?: string;
  finding?: string;
  rules?: string[];
  score?: number;
}

export type GetFindingsResponse = {
  findings: Findings;
  total_findings: number;
}

export type Query = {
  fields?: string[];
  id?: string;
  name?: string;
  query?: string;
  query_field_names?: string[];
  tags?: string[];
}

export type RuleSeverity = 'critical' | 'high' | 'low' | 'medium'

export type SearchFindingCorrelationsResponse = {
  findings: FindingWithScore[];
}

