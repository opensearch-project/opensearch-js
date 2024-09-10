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


export interface AccountDetails {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  is_hidden?: boolean;
  is_internal_user?: boolean;
  is_reserved?: boolean;
  roles?: string[];
  tenants?: UserTenants;
  user_name?: string;
  user_requested_tenant?: undefined | string;
}

export interface ActionGroup {
  allowed_actions?: string[];
  description?: string;
  hidden?: boolean;
  reserved?: boolean;
  static?: boolean;
  type?: string;
}

export type ActionGroupsMap = Record<string, ActionGroup>

export interface AllowListConfig {
  enabled?: boolean;
  requests?: Record<string, any>;
}

export interface AuditConfig {
  audit?: AuditLogsConfig;
  compliance?: ComplianceConfig;
  enabled?: boolean;
}

export interface AuditConfigWithReadOnly {
  _readonly?: string[];
  config?: AuditConfig;
}

export interface AuditLogsConfig {
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

export interface AuthInfo {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  peer_certificates?: number | string;
  principal?: undefined | string;
  remote_address?: undefined | string;
  roles?: string[];
  size_of_backendroles?: string;
  size_of_custom_attributes?: string;
  size_of_user?: string;
  sso_logout_url?: undefined | string;
  tenants?: Record<string, any>;
  user?: string;
  user_name?: string;
  user_requested_tenant?: undefined | string;
}

export interface CertificateCountPerNode {
  failed?: number;
  successful?: number;
  total?: number;
}

export interface CertificatesDetail {
  issuer_dn?: string;
  not_after?: string;
  not_before?: string;
  san?: string;
  subject_dn?: string;
}

export interface CertificatesPerNode {
  certificates?: Record<string, CertificateTypes>;
  name?: string;
}

export interface CertificateTypes {
  http?: Record<string, CertificatesDetail>[];
  transport?: Record<string, CertificatesDetail>[];
}

export interface ChangePasswordRequestContent {
  current_password: string;
  password: string;
}

export interface ComplianceConfig {
  enabled?: boolean;
  external_config?: boolean;
  internal_config?: boolean;
  read_ignore_users?: string[];
  read_metadata_only?: boolean;
  read_watched_fields?: any;
  write_ignore_users?: string[];
  write_log_diffs?: boolean;
  write_metadata_only?: boolean;
  write_watched_indices?: string[];
}

export interface ConfigUpgradePayload {
  config?: string[];
}

export interface Created {
  message?: string;
  status?: number | string;
}

export interface CreateTenantParams {
  description?: string;
}

export interface DashboardsInfo {
  default_tenant?: string;
  multitenancy_enabled?: boolean;
  not_fail_on_forbidden_enabled?: boolean;
  opensearch_dashboards_index?: string;
  opensearch_dashboards_mt_enabled?: boolean;
  opensearch_dashboards_server_user?: string;
  password_validation_error_message?: string;
  password_validation_regex?: string;
  private_tenant_enabled?: boolean;
  sign_in_options?: string[];
  user_name?: string;
}

export interface DistinguishedNames {
  nodes_dn?: string[];
}

export type DistinguishedNamesMap = Record<string, DistinguishedNames>

export interface DynamicConfig {
  dynamic?: DynamicOptions;
}

export interface DynamicOptions {
  auth_failure_listeners?: Record<string, any>;
  authc?: Record<string, any>;
  authz?: Record<string, any>;
  disable_intertransport_auth?: boolean;
  disable_rest_auth?: boolean;
  do_not_fail_on_forbidden?: boolean;
  do_not_fail_on_forbidden_empty?: boolean;
  filtered_alias_mode?: string;
  hosts_resolver_mode?: string;
  http?: Record<string, any>;
  kibana?: Record<string, any>;
  multi_rolespan_enabled?: boolean;
  on_behalf_of?: Record<string, any>;
  'opensearch-dashboards'?: Record<string, any>;
  respect_request_indices_options?: boolean;
}

export interface GenerateOBOToken {
  authenticationToken?: string;
  durationSeconds?: string;
  user?: string;
}

export interface GetCertificates {
  http_certificates_list?: CertificatesDetail[];
  transport_certificates_list?: CertificatesDetail[];
}

export interface GetCertificatesNew {
  _nodes?: Record<string, CertificateCountPerNode>;
  cluster_name?: string;
  nodes?: Record<string, CertificatesPerNode>;
}

export interface HealthInfo {
  message?: undefined | string;
  mode?: string;
  status?: string;
}

export interface IndexPermission {
  allowed_actions?: string[];
  dls?: string;
  fls?: string[];
  index_patterns?: string[];
  masked_fields?: string[];
}

export interface InternalServerError {
  error?: string;
}

export interface MultiTenancyConfig {
  default_tenant?: string;
  multitenancy_enabled?: boolean;
  private_tenant_enabled?: boolean;
  sign_in_options?: string[];
}

export interface OBOToken {
  description: string;
  duration?: string;
  service?: string;
}

export interface Ok {
  message?: string;
  status?: number | string;
}

export interface PatchOperation {
  op: string;
  path: string;
  value?: Record<string, any>;
}

export interface PermissionsInfo {
  disabled_endpoints?: Record<string, any>;
  has_api_access?: boolean;
  user?: string;
  user_name?: string;
}

export interface Role {
  cluster_permissions?: string[];
  description?: string;
  hidden?: boolean;
  index_permissions?: IndexPermission[];
  reserved?: boolean;
  static?: boolean;
  tenant_permissions?: TenantPermission[];
}

export interface RoleMapping {
  and_backend_roles?: string[];
  backend_roles?: string[];
  description?: string;
  hidden?: boolean;
  hosts?: string[];
  reserved?: boolean;
  users?: string[];
}

export type RoleMappings = Record<string, RoleMapping>

export type RolesMap = Record<string, Role>

export interface SecurityConfig {
  config?: DynamicConfig;
}

export interface SSLInfo {
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

export interface Tenant {
  description?: string;
  hidden?: boolean;
  reserved?: boolean;
  static?: boolean;
}

export type TenantInfo = Record<string, string>

export interface TenantPermission {
  allowed_actions?: string[];
  tenant_patterns?: string[];
}

export type TenantsMap = Record<string, Tenant>

export interface UpgradeCheck {
  status?: string;
  upgradeActions?: Record<string, any>;
  upgradeAvailable?: boolean;
}

export interface UpgradePerform {
  status?: string;
  upgrades?: Record<string, any>;
}

export interface User {
  attributes?: UserAttributes;
  backend_roles?: string[];
  description?: string;
  hash?: string;
  hidden?: boolean;
  opendistro_security_roles?: string[];
  password?: string;
  reserved?: boolean;
  static?: boolean;
}

export type UserAttributes = Record<string, string>

export type UsersMap = Record<string, User>

export interface UserTenants {
  admin?: boolean;
  admin_tenant?: boolean;
  global_tenant?: boolean;
}

export interface WhoAmI {
  dn?: undefined | string;
  is_admin?: boolean;
  is_node_certificate_request?: boolean;
}

