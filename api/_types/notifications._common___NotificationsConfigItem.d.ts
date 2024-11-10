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

import * as Notifications_CommonChime from './notifications._common___Chime'
import * as Notifications_CommonEmail from './notifications._common___Email'
import * as Notifications_CommonEmailGroup from './notifications._common___EmailGroup'
import * as Notifications_CommonMicrosoftTeamsItem from './notifications._common___MicrosoftTeamsItem'
import * as Notifications_CommonNotificationConfigType from './notifications._common___NotificationConfigType'
import * as Notifications_CommonSesAccount from './notifications._common___SesAccount'
import * as Notifications_CommonSlackItem from './notifications._common___SlackItem'
import * as Notifications_CommonSmtpAccount from './notifications._common___SmtpAccount'
import * as Notifications_CommonSnsItem from './notifications._common___SnsItem'
import * as Notifications_CommonWebhook from './notifications._common___Webhook'

export type undefined = {
  chime?: Notifications_CommonChime.undefined;
  config_type: Notifications_CommonNotificationConfigType.undefined;
  description?: string;
  email?: Notifications_CommonEmail.undefined;
  email_group?: Notifications_CommonEmailGroup.undefined;
  is_enabled?: boolean;
  microsoft_teams?: Notifications_CommonMicrosoftTeamsItem.undefined;
  name: string;
  ses_account?: Notifications_CommonSesAccount.undefined;
  slack?: Notifications_CommonSlackItem.undefined;
  smtp_account?: Notifications_CommonSmtpAccount.undefined;
  sns?: Notifications_CommonSnsItem.undefined;
  webhook?: Notifications_CommonWebhook.undefined;
}

