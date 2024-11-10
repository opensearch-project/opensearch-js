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

import * as Ism_CommonErrorNotification from './ism._common___ErrorNotification'
import * as Ism_CommonIsmTemplate from './ism._common___IsmTemplate'
import * as Ism_CommonStates from './ism._common___States'

export type undefined = {
  default_state?: string;
  description?: string;
  error_notification?: Ism_CommonErrorNotification.undefined | undefined;
  ism_template?: Ism_CommonIsmTemplate.undefined | undefined | Ism_CommonIsmTemplate.undefined[];
  last_updated_time?: number;
  policy_id?: string;
  schema_version?: number;
  states?: Ism_CommonStates.undefined[];
}

