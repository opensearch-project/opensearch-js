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
  local_certificates_list?: string[];
  peer_certificates: number | string;
  peer_certificates_list?: string[];
  principal: undefined | string;
  ssl_cipher: undefined | string;
  ssl_openssl_available: boolean;
  ssl_openssl_non_available_cause: undefined | string;
  ssl_openssl_supports_hostname_validation: boolean;
  ssl_openssl_supports_key_manager_factory: boolean;
  ssl_openssl_version: number | string;
  ssl_openssl_version_string: undefined | string;
  ssl_protocol: undefined | string;
  ssl_provider_http: undefined | string;
  ssl_provider_transport_client: string;
  ssl_provider_transport_server: string;
}

