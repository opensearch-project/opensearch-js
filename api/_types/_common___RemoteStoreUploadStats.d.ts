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

import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonRemoteStoreUploadDownloadStats from './_common___RemoteStoreUploadDownloadStats'
import * as CommonRemoteStoreUploadPressureStats from './_common___RemoteStoreUploadPressureStats'
import * as CommonRemoteStoreUploadRefreshSizeLagStats from './_common___RemoteStoreUploadRefreshSizeLagStats'

export type undefined = {
  max_refresh_time_lag?: CommonDuration.undefined;
  max_refresh_time_lag_in_millis: CommonDurationValueUnitMillis.undefined;
  pressure: CommonRemoteStoreUploadPressureStats.undefined;
  refresh_size_lag: CommonRemoteStoreUploadRefreshSizeLagStats.undefined;
  total_time_spent?: CommonDuration.undefined;
  total_time_spent_in_millis: CommonDurationValueUnitMillis.undefined;
  total_upload_size: CommonRemoteStoreUploadDownloadStats.undefined;
}

