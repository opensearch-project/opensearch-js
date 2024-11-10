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

import * as Notifications_CommonDeliveryStatus from './notifications._common___DeliveryStatus'
import * as Notifications_CommonEmailRecipientStatus from './notifications._common___EmailRecipientStatus'
import * as Notifications_CommonNotificationConfigType from './notifications._common___NotificationConfigType'

export type undefined = {
  config_id?: string;
  config_name?: string;
  config_type?: Notifications_CommonNotificationConfigType.undefined;
  delivery_status?: Notifications_CommonDeliveryStatus.undefined;
  email_recipient_status?: Notifications_CommonEmailRecipientStatus.undefined[];
}

