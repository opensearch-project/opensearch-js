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
import * as SecurityAnalytics_Alerts from '../_types/security_analytics.alerts'

export interface SecurityAnalytics_GetAlerts_Request extends Global.Params {
  alertState?: SecurityAnalytics_Alerts.AlertState;
  detector_id?: string;
  detectorType?: string;
  endTime?: number;
  missing?: string;
  searchString?: string;
  severityLevel?: SecurityAnalytics_Alerts.AlertSeverityLevel;
  size?: number;
  sortOrder?: Common.SortOrder;
  sortString?: string;
  startIndex?: number;
  startTime?: number;
}

export interface SecurityAnalytics_GetAlerts_Response extends ApiResponse {
  body: SecurityAnalytics_GetAlerts_ResponseBody;
}

export type SecurityAnalytics_GetAlerts_ResponseBody = SecurityAnalytics_Alerts.GetAlertsResponse

