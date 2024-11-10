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


export type undefined = {
  disabled_rest_categories?: string[];
  disabled_transport_categories?: string[];
  enable_rest?: boolean;
  enable_transport?: boolean;
  exclude_sensitive_headers?: boolean;
  ignore_headers?: string[];
  ignore_requests?: string[];
  ignore_url_params?: string[];
  ignore_users?: string[];
  log_request_body?: boolean;
  resolve_bulk_requests?: boolean;
  resolve_indices?: boolean;
}

