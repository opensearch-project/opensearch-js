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
import * as Global from '../_types/_global'
import * as SecurityAnalytics_Findings from '../_types/security_analytics.findings'

export interface SecurityAnalytics_SearchFindingCorrelations_Request extends Global.Params {
  detector_type: string;
  finding: string;
  nearby_findings?: number;
  time_window?: number;
}

export interface SecurityAnalytics_SearchFindingCorrelations_Response extends ApiResponse {
  body: SecurityAnalytics_SearchFindingCorrelations_ResponseBody;
}

export type SecurityAnalytics_SearchFindingCorrelations_ResponseBody = SecurityAnalytics_Findings.SearchFindingCorrelationsResponse

