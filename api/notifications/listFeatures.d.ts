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
import * as Notifications_CommonNotificationConfigType from '../_types/notifications._common___NotificationConfigType'
import * as Notifications_CommonNotificationsPluginFeaturesMap from '../_types/notifications._common___NotificationsPluginFeaturesMap'

export type Notifications_ListFeatures_Request = Global.Params & Record<string, any>

export type Notifications_ListFeatures_Response = ApiResponse & {
  body: Notifications_ListFeatures_ResponseBody;
}

export type Notifications_ListFeatures_ResponseBody = {
  allowed_config_type_list?: Notifications_CommonNotificationConfigType.undefined[];
  plugin_features?: Notifications_CommonNotificationsPluginFeaturesMap.undefined;
}

