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

import { ApiResponse } from '../../lib/Transport'
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'
import * as SecurityAnalytics_Findings from '../_types/security_analytics.findings'

export interface SecurityAnalytics_GetFindings_Request extends Global.Params {
  detectionType?: SecurityAnalytics_Findings.DetectionType;
  detector_id?: string;
  detectorType?: string;
  endTime?: string;
  findingIds?: string;
  missing?: string;
  searchString?: string;
  severity?: SecurityAnalytics_Findings.RuleSeverity;
  size?: number;
  sortOrder?: Common.SortOrder;
  sortString?: string;
  startIndex?: number;
  startTime?: number;
}

export interface SecurityAnalytics_GetFindings_Response extends ApiResponse {
  body: SecurityAnalytics_GetFindings_ResponseBody;
}

export type SecurityAnalytics_GetFindings_ResponseBody = SecurityAnalytics_Findings.GetFindingsResponse

