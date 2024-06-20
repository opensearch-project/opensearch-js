/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
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
  user_requested_tenant?: string;
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

export interface AllowConfig {
  enabled?: boolean;
  requests?: Record<string, any>;
}

export interface AllowListConfig {
  config?: AllowConfig;
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
  ignore_requests?: string[];
  ignore_users?: string[];
  log_request_body?: boolean;
  resolve_bulk_requests?: boolean;
  resolve_indices?: boolean;
}

export interface AuthInfo {
  backend_roles?: any[];
  custom_attribute_names?: any[];
  peer_certificates?: number;
  principal?: string;
  remote_address?: string;
  roles?: any[];
  size_of_backendroles?: string;
  size_of_custom_attributes?: string;
  size_of_user?: string;
  sso_logout_url?: string;
  tenants?: Record<string, any>;
  user?: string;
  user_name?: string;
  user_requested_tenant?: string;
}

export interface BadRequest {
  message?: string;
  status?: '400';
}

export interface CertificatesDetail {
  issuer_dn?: string;
  not_after?: string;
  not_before?: string;
  san?: string;
  subject_dn?: string;
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
  config?: any[];
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
  sign_in_options?: any[];
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
  authc?: any;
  authFailureListeners?: any;
  authz?: any;
  disableIntertransportAuth?: boolean;
  disableRestAuth?: boolean;
  doNotFailOnForbidden?: boolean;
  doNotFailOnForbiddenEmpty?: boolean;
  filteredAliasMode?: string;
  hostsResolverMode?: string;
  http?: any;
  kibana?: any;
  multiRolespanEnabled?: boolean;
  respectRequestIndicesOptions?: boolean;
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

export interface HealthInfo {
  message?: string;
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

export interface MethodNotImplemented {
  message?: string;
  status?: '501';
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
  status?: '200';
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

export interface SSLInfo {
  local_certificates_list?: any[];
  peer_certificates?: number;
  peer_certificates_list?: any[];
  principal?: string;
  ssl_cipher?: string;
  ssl_openssl_available?: boolean;
  ssl_openssl_non_available_cause?: string;
  ssl_openssl_supports_hostname_validation?: boolean;
  ssl_openssl_supports_key_manager_factory?: boolean;
  ssl_openssl_version?: string;
  ssl_openssl_version_string?: string;
  ssl_protocol?: string;
  ssl_provider_http?: string;
  ssl_provider_transport_client?: string;
  ssl_provider_transport_server?: string;
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

export interface Unauthorized {
  message?: string;
  status?: '403';
}

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
  dn?: string;
  is_admin?: string;
  is_node_certificate_request?: string;
}

