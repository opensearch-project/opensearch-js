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

import * as Security_CommonUserAttributes from './security._common___UserAttributes'

export type undefined = {
  attributes?: Security_CommonUserAttributes.undefined;
  backend_roles?: string[];
  description?: string;
  hash?: string;
  hidden?: boolean;
  opendistro_security_roles?: string[];
  password?: string;
  reserved?: boolean;
  static?: boolean;
}

