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


export type ActionExecutionResult = {
  action_id?: string;
  last_execution_time?: string;
  throttled_count?: number;
}

export type Alert = {
  acknowledged_time?: undefined | string;
  action_execution_results?: ActionExecutionResult[];
  alert_history?: AlertError[];
  detector_id?: string;
  end_time?: undefined | string;
  error_message?: undefined | string;
  finding_ids?: string[];
  id?: string;
  last_notification_time?: string;
  related_doc_ids?: string[];
  schema_version?: number;
  severity?: string;
  start_time?: string;
  state?: AlertState;
  trigger_id?: string;
  trigger_name?: string;
  version?: number;
}

export type AlertError = {
  message?: string;
  timestamp?: string;
}

export type Alerts = Alert[]

export type AlertSeverityLevel = '1' | '2' | '3' | '4' | '5' | 'ALL'

export type AlertState = 'ACKNOWLEDGED' | 'ACTIVE' | 'COMPLETED' | 'DELETED' | 'ERROR'

export type GetAlertsResponse = {
  alerts: Alerts;
  total_alerts: number;
}

