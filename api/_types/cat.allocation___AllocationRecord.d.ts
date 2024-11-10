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

import * as CommonHost from './_common___Host'
import * as CommonIp from './_common___Ip'
import * as CommonPercentageString from './_common___PercentageString'

export type undefined = {
  'disk.avail'?: undefined | string;
  'disk.indices'?: undefined | string;
  'disk.percent'?: CommonPercentageString.undefined | undefined;
  'disk.total'?: undefined | string;
  'disk.used'?: undefined | string;
  host?: CommonHost.undefined | undefined;
  ip?: CommonIp.undefined | undefined;
  node?: string;
  shards?: string;
}

