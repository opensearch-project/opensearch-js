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

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../components/_global'
import * as Notifications_Common from '../components/notifications._common'

export interface Request extends Global.Params {
  body?: RequestBody;
  'chime.url'?: string;
  'chime.url.keyword'?: string;
  config_type?: Notifications_Common.NotificationConfigType;
  created_time_ms?: number;
  description?: string;
  'description.keyword'?: string;
  'email_group.recipient_list.recipient'?: string;
  'email_group.recipient_list.recipient.keyword'?: string;
  'email.email_account_id'?: string;
  'email.email_group_id_list'?: string;
  'email.recipient_list.recipient'?: string;
  'email.recipient_list.recipient.keyword'?: string;
  is_enabled?: boolean;
  last_updated_time_ms?: number;
  'microsoft_teams.url'?: string;
  'microsoft_teams.url.keyword'?: string;
  name?: string;
  'name.keyword'?: string;
  query?: string;
  'ses_account.from_address'?: string;
  'ses_account.from_address.keyword'?: string;
  'ses_account.region'?: string;
  'ses_account.role_arn'?: string;
  'ses_account.role_arn.keyword'?: string;
  'slack.url'?: string;
  'slack.url.keyword'?: string;
  'smtp_account.from_address'?: string;
  'smtp_account.from_address.keyword'?: string;
  'smtp_account.host'?: string;
  'smtp_account.host.keyword'?: string;
  'smtp_account.method'?: string;
  'sns.role_arn'?: string;
  'sns.role_arn.keyword'?: string;
  'sns.topic_arn'?: string;
  'sns.topic_arn.keyword'?: string;
  text_query?: string;
  'webhook.url'?: string;
  'webhook.url.keyword'?: string;
}

export type ResponseBody = Notifications_Common.GetConfigsResponse

export interface RequestBody {
  config_id_list?: string[];
  from_index?: number;
  max_items?: number;
  sort_field?: string;
  sort_order?: string;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}
