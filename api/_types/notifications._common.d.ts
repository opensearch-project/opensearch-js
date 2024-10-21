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


export interface Chime {
  url: string;
}

export interface DeleteConfigsResponse {
  delete_response_list?: DeleteResponseList;
}

export type DeleteResponseList = Record<string, RestStatus>

export interface DeliveryStatus {
  status_code?: string;
  status_text?: string;
}

export interface Email {
  email_account_id: string;
  recipient_list?: RecipientListItem[];
}

export type EmailEncryptionMethod = 'none' | 'ssl' | 'start_tls'

export interface EmailGroup {
  email_group_id_list?: string[];
  recipient_list: RecipientListItem[];
}

export interface EmailRecipientStatus {
  delivery_status?: DeliveryStatus;
  recipient?: string;
}

export interface EventSource {
  reference_id?: string;
  severity?: SeverityType;
  tags?: string[];
  title?: string;
}

export interface EventStatus {
  config_id?: string;
  config_name?: string;
  config_type?: NotificationConfigType;
  delivery_status?: DeliveryStatus;
  email_recipient_status?: EmailRecipientStatus[];
}

export interface GetConfigsResponse {
  config_list?: NotificationsConfigsOutputItem[];
  start_index?: number;
  total_hit_relation?: TotalHitRelation;
  total_hits?: number;
}

export type HeaderParamsMap = Record<string, number>

export type HttpMethodType = 'PATCH' | 'POST' | 'PUT'

export interface MicrosoftTeamsItem {
  url: string;
}

export interface NotificationChannel {
  config_id?: string;
  config_type?: NotificationConfigType;
  description?: string;
  is_enabled?: boolean;
  name?: string;
}

export type NotificationConfigType = 'chime' | 'email' | 'email_group' | 'microsoft_teams' | 'ses_account' | 'slack' | 'smtp_account' | 'sns' | 'webhook'

export interface NotificationsConfig {
  config: NotificationsConfigItem;
  config_id?: string;
}

export interface NotificationsConfigItem {
  chime?: Chime;
  config_type: NotificationConfigType;
  description?: string;
  email?: Email;
  email_group?: EmailGroup;
  is_enabled?: boolean;
  microsoft_teams?: MicrosoftTeamsItem;
  name: string;
  ses_account?: SesAccount;
  slack?: SlackItem;
  smtp_account?: SmtpAccount;
  sns?: SnsItem;
  webhook?: Webhook;
}

export interface NotificationsConfigsOutputItem {
  config?: NotificationsConfigItem;
  config_id?: string;
  created_time_ms?: number;
  last_updated_time_ms?: number;
}

export type NotificationsPluginFeaturesMap = Record<string, string>

export interface RecipientListItem {
  recipient?: string;
}

export type RestStatus = 'ACCEPTED' | 'CREATED' | 'MULTI_STATUS' | 'NON_AUTHORITATIVE_INFORMATION' | 'NO_CONTENT' | 'OK' | 'PARTIAL_CONTENT' | 'RESET_CONTENT'

export interface SesAccount {
  from_address: string;
  region: string;
  role_arn?: string;
}

export type SeverityType = 'critical' | 'high' | 'info'

export interface SlackItem {
  url: string;
}

export interface SmtpAccount {
  from_address: string;
  host: string;
  method: EmailEncryptionMethod;
  port: number;
}

export interface SnsItem {
  role_arn?: string;
  topic_arn: string;
}

export type TotalHitRelation = 'eq' | 'gte'

export interface Webhook {
  header_params?: HeaderParamsMap;
  method?: HttpMethodType;
  url: string;
}

