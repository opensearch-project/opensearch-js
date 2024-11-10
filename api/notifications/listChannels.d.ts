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
import * as Notifications_CommonNotificationChannel from '../_types/notifications._common___NotificationChannel'
import * as Notifications_CommonTotalHitRelation from '../_types/notifications._common___TotalHitRelation'

export type Notifications_ListChannels_Request = Global.Params & Record<string, any>

export type Notifications_ListChannels_Response = ApiResponse & {
  body: Notifications_ListChannels_ResponseBody;
}

export type Notifications_ListChannels_ResponseBody = {
  channel_list?: Notifications_CommonNotificationChannel.undefined[];
  start_index?: number;
  total_hit_relation?: Notifications_CommonTotalHitRelation.undefined;
  total_hits?: number;
}

