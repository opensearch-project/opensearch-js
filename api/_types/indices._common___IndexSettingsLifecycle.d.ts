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

import * as CommonName from './_common___Name'
import * as CommonStringifiedboolean from './_common___Stringifiedboolean'
import * as CommonStringifiedEpochTimeUnitMillis from './_common___StringifiedEpochTimeUnitMillis'
import * as Indices_CommonIndexSettingsLifecycleStep from './indices._common___IndexSettingsLifecycleStep'

export type undefined = {
  indexing_complete?: CommonStringifiedboolean.undefined;
  name: CommonName.undefined;
  origination_date?: CommonStringifiedEpochTimeUnitMillis.undefined;
  parse_origination_date?: boolean;
  rollover_alias?: string;
  step?: Indices_CommonIndexSettingsLifecycleStep.undefined;
}

