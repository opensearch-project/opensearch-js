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

import * as Global from './components/_global';
import * as Info from './functions/info';
import * as Ping from './functions/ping';
import * as Bulk from './functions/bulk';
import * as Count from './functions/count';
import * as DeleteByQueryRethrottle from './functions/delete_by_query_rethrottle';
import * as FieldCaps from './functions/field_caps';
import * as Mget from './functions/mget';
import * as Msearch from './functions/msearch';
import * as MsearchTemplate from './functions/msearch_template';
import * as Mtermvectors from './functions/mtermvectors';
import * as RankEval from './functions/rank_eval';
import * as Reindex from './functions/reindex';
import * as ReindexRethrottle from './functions/reindex_rethrottle';
import * as RenderSearchTemplate from './functions/render_search_template';
import * as GetScriptContext from './functions/get_script_context';
import * as GetScriptLanguages from './functions/get_script_languages';
import * as DeleteScript from './functions/delete_script';
import * as GetScript from './functions/get_script';
import * as PutScript from './functions/put_script';
import * as ScriptsPainlessExecute from './functions/scripts_painless_execute';
import * as Search from './functions/search';
import * as SearchShards from './functions/search_shards';
import * as DeletePit from './functions/delete_pit';
import * as DeleteAllPits from './functions/delete_all_pits';
import * as GetAllPits from './functions/get_all_pits';
import * as ClearScroll from './functions/clear_scroll';
import * as Scroll from './functions/scroll';
import * as SearchTemplate from './functions/search_template';
import * as UpdateByQueryRethrottle from './functions/update_by_query_rethrottle';
import * as Create from './functions/create';
import * as DeleteByQuery from './functions/delete_by_query';
import * as Index from './functions/index';
import * as Delete from './functions/delete';
import * as Get from './functions/get';
import * as Exists from './functions/exists';
import * as Explain from './functions/explain';
import * as CreatePit from './functions/create_pit';
import * as GetSource from './functions/get_source';
import * as ExistsSource from './functions/exists_source';
import * as Termvectors from './functions/termvectors';
import * as UpdateByQuery from './functions/update_by_query';
import * as Update from './functions/update';
import * as Indices_GetAlias from './functions/indices.get_alias';
import * as Indices_PutAlias from './functions/indices.put_alias';
import * as Indices_ExistsAlias from './functions/indices.exists_alias';
import * as Indices_UpdateAliases from './functions/indices.update_aliases';
import * as Indices_Analyze from './functions/indices.analyze';
import * as Indices_ClearCache from './functions/indices.clear_cache';
import * as Indices_GetDataStream from './functions/indices.get_data_stream';
import * as Indices_DataStreamsStats from './functions/indices.data_streams_stats';
import * as Indices_DeleteDataStream from './functions/indices.delete_data_stream';
import * as Indices_CreateDataStream from './functions/indices.create_data_stream';
import * as Indices_Flush from './functions/indices.flush';
import * as Indices_Forcemerge from './functions/indices.forcemerge';
import * as Indices_GetIndexTemplate from './functions/indices.get_index_template';
import * as Indices_SimulateTemplate from './functions/indices.simulate_template';
import * as Indices_SimulateIndexTemplate from './functions/indices.simulate_index_template';
import * as Indices_DeleteIndexTemplate from './functions/indices.delete_index_template';
import * as Indices_ExistsIndexTemplate from './functions/indices.exists_index_template';
import * as Indices_PutIndexTemplate from './functions/indices.put_index_template';
import * as Indices_GetMapping from './functions/indices.get_mapping';
import * as Indices_GetFieldMapping from './functions/indices.get_field_mapping';
import * as Indices_Recovery from './functions/indices.recovery';
import * as Indices_Refresh from './functions/indices.refresh';
import * as Indices_ResolveIndex from './functions/indices.resolve_index';
import * as Indices_Segments from './functions/indices.segments';
import * as Indices_GetSettings from './functions/indices.get_settings';
import * as Indices_PutSettings from './functions/indices.put_settings';
import * as Indices_ShardStores from './functions/indices.shard_stores';
import * as Indices_Stats from './functions/indices.stats';
import * as Indices_GetTemplate from './functions/indices.get_template';
import * as Indices_DeleteTemplate from './functions/indices.delete_template';
import * as Indices_ExistsTemplate from './functions/indices.exists_template';
import * as Indices_PutTemplate from './functions/indices.put_template';
import * as Indices_GetUpgrade from './functions/indices.get_upgrade';
import * as Indices_Upgrade from './functions/indices.upgrade';
import * as Indices_ValidateQuery from './functions/indices.validate_query';
import * as Indices_Rollover from './functions/indices.rollover';
import * as Indices_Delete from './functions/indices.delete';
import * as Indices_Get from './functions/indices.get';
import * as Indices_Exists from './functions/indices.exists';
import * as Indices_Create from './functions/indices.create';
import * as Indices_DeleteAlias from './functions/indices.delete_alias';
import * as Indices_AddBlock from './functions/indices.add_block';
import * as Indices_Clone from './functions/indices.clone';
import * as Indices_Close from './functions/indices.close';
import * as Indices_PutMapping from './functions/indices.put_mapping';
import * as Indices_Open from './functions/indices.open';
import * as Indices_Shrink from './functions/indices.shrink';
import * as Indices_Split from './functions/indices.split';
import * as Cat_Help from './functions/cat.help';
import * as Cat_Aliases from './functions/cat.aliases';
import * as Cat_Allocation from './functions/cat.allocation';
import * as Cat_ClusterManager from './functions/cat.cluster_manager';
import * as Cat_Count from './functions/cat.count';
import * as Cat_Fielddata from './functions/cat.fielddata';
import * as Cat_Health from './functions/cat.health';
import * as Cat_Indices from './functions/cat.indices';
import * as Cat_Master from './functions/cat.master';
import * as Cat_Nodeattrs from './functions/cat.nodeattrs';
import * as Cat_Nodes from './functions/cat.nodes';
import * as Cat_PendingTasks from './functions/cat.pending_tasks';
import * as Cat_PitSegments from './functions/cat.pit_segments';
import * as Cat_AllPitSegments from './functions/cat.all_pit_segments';
import * as Cat_Plugins from './functions/cat.plugins';
import * as Cat_Recovery from './functions/cat.recovery';
import * as Cat_Repositories from './functions/cat.repositories';
import * as Cat_SegmentReplication from './functions/cat.segment_replication';
import * as Cat_Segments from './functions/cat.segments';
import * as Cat_Shards from './functions/cat.shards';
import * as Cat_Snapshots from './functions/cat.snapshots';
import * as Cat_Tasks from './functions/cat.tasks';
import * as Cat_Templates from './functions/cat.templates';
import * as Cat_ThreadPool from './functions/cat.thread_pool';
import * as Cluster_AllocationExplain from './functions/cluster.allocation_explain';
import * as Cluster_DeleteDecommissionAwareness from './functions/cluster.delete_decommission_awareness';
import * as Cluster_GetDecommissionAwareness from './functions/cluster.get_decommission_awareness';
import * as Cluster_PutDecommissionAwareness from './functions/cluster.put_decommission_awareness';
import * as Cluster_Health from './functions/cluster.health';
import * as Cluster_PendingTasks from './functions/cluster.pending_tasks';
import * as Cluster_Reroute from './functions/cluster.reroute';
import * as Cluster_GetWeightedRouting from './functions/cluster.get_weighted_routing';
import * as Cluster_PutWeightedRouting from './functions/cluster.put_weighted_routing';
import * as Cluster_DeleteWeightedRouting from './functions/cluster.delete_weighted_routing';
import * as Cluster_GetSettings from './functions/cluster.get_settings';
import * as Cluster_PutSettings from './functions/cluster.put_settings';
import * as Cluster_State from './functions/cluster.state';
import * as Cluster_Stats from './functions/cluster.stats';
import * as Cluster_DeleteVotingConfigExclusions from './functions/cluster.delete_voting_config_exclusions';
import * as Cluster_PostVotingConfigExclusions from './functions/cluster.post_voting_config_exclusions';
import * as Cluster_GetComponentTemplate from './functions/cluster.get_component_template';
import * as Cluster_DeleteComponentTemplate from './functions/cluster.delete_component_template';
import * as Cluster_ExistsComponentTemplate from './functions/cluster.exists_component_template';
import * as Cluster_PutComponentTemplate from './functions/cluster.put_component_template';
import * as Cluster_RemoteInfo from './functions/cluster.remote_info';
import * as DanglingIndices_ListDanglingIndices from './functions/dangling_indices.list_dangling_indices';
import * as DanglingIndices_DeleteDanglingIndex from './functions/dangling_indices.delete_dangling_index';
import * as DanglingIndices_ImportDanglingIndex from './functions/dangling_indices.import_dangling_index';
import * as Ingest_GetPipeline from './functions/ingest.get_pipeline';
import * as Ingest_Simulate from './functions/ingest.simulate';
import * as Ingest_DeletePipeline from './functions/ingest.delete_pipeline';
import * as Ingest_PutPipeline from './functions/ingest.put_pipeline';
import * as Ingest_ProcessorGrok from './functions/ingest.processor_grok';
import * as Nodes_Info from './functions/nodes.info';
import * as Nodes_HotThreads from './functions/nodes.hot_threads';
import * as Nodes_ReloadSecureSettings from './functions/nodes.reload_secure_settings';
import * as Nodes_Stats from './functions/nodes.stats';
import * as Nodes_Usage from './functions/nodes.usage';
import * as Security_GetSslinfo from './functions/security.get_sslinfo';
import * as Security_ConfigUpgradeCheck from './functions/security.config_upgrade_check';
import * as Security_ConfigUpgradePerform from './functions/security.config_upgrade_perform';
import * as Security_GetAccountDetails from './functions/security.get_account_details';
import * as Security_ChangePassword from './functions/security.change_password';
import * as Security_GetActionGroups from './functions/security.get_action_groups';
import * as Security_PatchActionGroups from './functions/security.patch_action_groups';
import * as Security_DeleteActionGroup from './functions/security.delete_action_group';
import * as Security_GetActionGroup from './functions/security.get_action_group';
import * as Security_PatchActionGroup from './functions/security.patch_action_group';
import * as Security_CreateActionGroup from './functions/security.create_action_group';
import * as Security_GetAllowlist from './functions/security.get_allowlist';
import * as Security_PatchAllowlist from './functions/security.patch_allowlist';
import * as Security_CreateAllowlist from './functions/security.create_allowlist';
import * as Security_GetAuditConfiguration from './functions/security.get_audit_configuration';
import * as Security_PatchAuditConfiguration from './functions/security.patch_audit_configuration';
import * as Security_UpdateAuditConfiguration from './functions/security.update_audit_configuration';
import * as Security_Authtoken from './functions/security.authtoken';
import * as Security_FlushCache from './functions/security.flush_cache';
import * as Security_GenerateOboToken from './functions/security.generate_obo_token';
import * as Security_GetUsers from './functions/security.get_users';
import * as Security_PatchUsers from './functions/security.patch_users';
import * as Security_DeleteUser from './functions/security.delete_user';
import * as Security_GetUser from './functions/security.get_user';
import * as Security_PatchUser from './functions/security.patch_user';
import * as Security_CreateUser from './functions/security.create_user';
import * as Security_GenerateUserToken from './functions/security.generate_user_token';
import * as Security_Migrate from './functions/security.migrate';
import * as Security_GetDistinguishedNames from './functions/security.get_distinguished_names';
import * as Security_PatchDistinguishedNames from './functions/security.patch_distinguished_names';
import * as Security_DeleteDistinguishedName from './functions/security.delete_distinguished_name';
import * as Security_GetDistinguishedName from './functions/security.get_distinguished_name';
import * as Security_PatchDistinguishedName from './functions/security.patch_distinguished_name';
import * as Security_UpdateDistinguishedName from './functions/security.update_distinguished_name';
import * as Security_GetPermissionsInfo from './functions/security.get_permissions_info';
import * as Security_GetRoles from './functions/security.get_roles';
import * as Security_PatchRoles from './functions/security.patch_roles';
import * as Security_DeleteRole from './functions/security.delete_role';
import * as Security_GetRole from './functions/security.get_role';
import * as Security_PatchRole from './functions/security.patch_role';
import * as Security_CreateRole from './functions/security.create_role';
import * as Security_GetRoleMappings from './functions/security.get_role_mappings';
import * as Security_PatchRoleMappings from './functions/security.patch_role_mappings';
import * as Security_DeleteRoleMapping from './functions/security.delete_role_mapping';
import * as Security_GetRoleMapping from './functions/security.get_role_mapping';
import * as Security_PatchRoleMapping from './functions/security.patch_role_mapping';
import * as Security_CreateRoleMapping from './functions/security.create_role_mapping';
import * as Security_GetConfiguration from './functions/security.get_configuration';
import * as Security_PatchConfiguration from './functions/security.patch_configuration';
import * as Security_UpdateConfiguration from './functions/security.update_configuration';
import * as Security_GetCertificates from './functions/security.get_certificates';
import * as Security_ReloadHttpCertificates from './functions/security.reload_http_certificates';
import * as Security_ReloadTransportCertificates from './functions/security.reload_transport_certificates';
import * as Security_GetTenancyConfig from './functions/security.get_tenancy_config';
import * as Security_CreateUpdateTenancyConfig from './functions/security.create_update_tenancy_config';
import * as Security_GetTenants from './functions/security.get_tenants';
import * as Security_PatchTenants from './functions/security.patch_tenants';
import * as Security_DeleteTenant from './functions/security.delete_tenant';
import * as Security_GetTenant from './functions/security.get_tenant';
import * as Security_PatchTenant from './functions/security.patch_tenant';
import * as Security_CreateTenant from './functions/security.create_tenant';
import * as Security_GetUsersLegacy from './functions/security.get_users_legacy';
import * as Security_DeleteUserLegacy from './functions/security.delete_user_legacy';
import * as Security_GetUserLegacy from './functions/security.get_user_legacy';
import * as Security_CreateUserLegacy from './functions/security.create_user_legacy';
import * as Security_GenerateUserTokenLegacy from './functions/security.generate_user_token_legacy';
import * as Security_Validate from './functions/security.validate';
import * as Security_Authinfo from './functions/security.authinfo';
import * as Security_GetDashboardsInfo from './functions/security.get_dashboards_info';
import * as Security_PostDashboardsInfo from './functions/security.post_dashboards_info';
import * as Security_Health from './functions/security.health';
import * as Security_TenantInfo from './functions/security.tenant_info';
import * as Security_WhoAmI from './functions/security.who_am_i';
import * as Security_WhoAmIProtected from './functions/security.who_am_i_protected';
import * as Knn_Stats from './functions/knn.stats';
import * as Knn_SearchModels from './functions/knn.search_models';
import * as Knn_TrainModel from './functions/knn.train_model';
import * as Knn_DeleteModel from './functions/knn.delete_model';
import * as Knn_GetModel from './functions/knn.get_model';
import * as Knn_Warmup from './functions/knn.warmup';
import * as Ml_RegisterModelGroup from './functions/ml.register_model_group';
import * as Ml_DeleteModelGroup from './functions/ml.delete_model_group';
import * as Ml_GetModelGroup from './functions/ml.get_model_group';
import * as Ml_RegisterModel from './functions/ml.register_model';
import * as Ml_SearchModels from './functions/ml.search_models';
import * as Ml_DeleteModel from './functions/ml.delete_model';
import * as Ml_GetTask from './functions/ml.get_task';
import * as Notifications_ListChannels from './functions/notifications.list_channels';
import * as Notifications_DeleteConfigs from './functions/notifications.delete_configs';
import * as Notifications_GetConfigs from './functions/notifications.get_configs';
import * as Notifications_CreateConfig from './functions/notifications.create_config';
import * as Notifications_DeleteConfig from './functions/notifications.delete_config';
import * as Notifications_GetConfig from './functions/notifications.get_config';
import * as Notifications_UpdateConfig from './functions/notifications.update_config';
import * as Notifications_SendTest from './functions/notifications.send_test';
import * as Notifications_ListFeatures from './functions/notifications.list_features';
import * as Ppl_Query from './functions/ppl.query';
import * as Ppl_Explain from './functions/ppl.explain';
import * as Ppl_GetStats from './functions/ppl.get_stats';
import * as Ppl_PostStats from './functions/ppl.post_stats';
import * as Sql_Settings from './functions/sql.settings';
import * as Sql_Query from './functions/sql.query';
import * as Sql_Explain from './functions/sql.explain';
import * as Sql_Close from './functions/sql.close';
import * as Sql_GetStats from './functions/sql.get_stats';
import * as Sql_PostStats from './functions/sql.post_stats';
import * as Rollups_Delete from './functions/rollups.delete';
import * as Rollups_Get from './functions/rollups.get';
import * as Rollups_Put from './functions/rollups.put';
import * as Rollups_Explain from './functions/rollups.explain';
import * as Rollups_Start from './functions/rollups.start';
import * as Rollups_Stop from './functions/rollups.stop';
import * as Transforms_Search from './functions/transforms.search';
import * as Transforms_Preview from './functions/transforms.preview';
import * as Transforms_Delete from './functions/transforms.delete';
import * as Transforms_Get from './functions/transforms.get';
import * as Transforms_Put from './functions/transforms.put';
import * as Transforms_Explain from './functions/transforms.explain';
import * as Transforms_Start from './functions/transforms.start';
import * as Transforms_Stop from './functions/transforms.stop';
import * as RemoteStore_Restore from './functions/remote_store.restore';
import * as SearchPipeline_Get from './functions/search_pipeline.get';
import * as SearchPipeline_Delete from './functions/search_pipeline.delete';
import * as SearchPipeline_Put from './functions/search_pipeline.put';
import * as Snapshot_GetRepository from './functions/snapshot.get_repository';
import * as Snapshot_Status from './functions/snapshot.status';
import * as Snapshot_DeleteRepository from './functions/snapshot.delete_repository';
import * as Snapshot_CreateRepository from './functions/snapshot.create_repository';
import * as Snapshot_CleanupRepository from './functions/snapshot.cleanup_repository';
import * as Snapshot_VerifyRepository from './functions/snapshot.verify_repository';
import * as Snapshot_Delete from './functions/snapshot.delete';
import * as Snapshot_Get from './functions/snapshot.get';
import * as Snapshot_Create from './functions/snapshot.create';
import * as Snapshot_Clone from './functions/snapshot.clone';
import * as Snapshot_Restore from './functions/snapshot.restore';
import * as Tasks_List from './functions/tasks.list';
import * as Tasks_Cancel from './functions/tasks.cancel';
import * as Tasks_Get from './functions/tasks.get';

import Transport, {
  ApiError,
  ApiResponse,
  TransportRequestOptions,
  TransportRequestCallback,
  TransportRequestPromise,
} from '../lib/Transport';
import { ConnectionPool, ResurrectEvent } from '../lib/pool';
import Serializer from '../lib/Serializer';
import Helpers from '../lib/Helpers';
import { ClientOptions, ClientExtendsCallbackOptions } from './client_options';

declare type callbackFn<TResponse> = (err: ApiError, result: TResponse) => void;
declare type extendsCallback = (options: ClientExtendsCallbackOptions) => any;

declare interface HttpRequest {
  path: string;
  querystring?: Global.Params;
  headers?: Record<string, any>;
  body?: Record<string, any> | Record<string, any>[] | string;
}

declare class Client {
  constructor(opts: ClientOptions);
  connectionPool: ConnectionPool;
  transport: Transport;
  serializer: Serializer;
  extend(method: string, fn: extendsCallback): void;
  extend(method: string, opts: { force: boolean }, fn: extendsCallback): void;
  helpers: Helpers;
  child(opts?: ClientOptions): Client;
  close(callback: Function): void;
  close(): Promise<void>;
  emit(event: string | symbol, ...args: any[]): boolean;
  on(event: 'request', listener: (err: ApiError, meta: ApiResponse) => void): this;
  on(event: 'response', listener: (err: ApiError, meta: ApiResponse) => void): this;
  on(event: 'sniff', listener: (err: ApiError, meta: ApiResponse) => void): this;
  on(event: 'resurrect', listener: (err: null, meta: ResurrectEvent) => void): this;
  once(event: 'request', listener: (err: ApiError, meta: ApiResponse) => void): this;
  once(event: 'response', listener: (err: ApiError, meta: ApiResponse) => void): this;
  once(event: 'sniff', listener: (err: ApiError, meta: ApiResponse) => void): this;
  once(event: 'resurrect', listener: (err: null, meta: ResurrectEvent) => void): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;

  cat: {
    help (params?: Cat_Help.Cat_Help_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Help.Cat_Help_Response>;
    help (callback: callbackFn<Cat_Help.Cat_Help_Response>): TransportRequestCallback;
    help (params: Cat_Help.Cat_Help_Request, callback: callbackFn<Cat_Help.Cat_Help_Response>): TransportRequestCallback;
    help (params: Cat_Help.Cat_Help_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Help.Cat_Help_Response>): TransportRequestCallback;

    aliases (params?: Cat_Aliases.Cat_Aliases_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Aliases.Cat_Aliases_Response>;
    aliases (callback: callbackFn<Cat_Aliases.Cat_Aliases_Response>): TransportRequestCallback;
    aliases (params: Cat_Aliases.Cat_Aliases_Request, callback: callbackFn<Cat_Aliases.Cat_Aliases_Response>): TransportRequestCallback;
    aliases (params: Cat_Aliases.Cat_Aliases_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Aliases.Cat_Aliases_Response>): TransportRequestCallback;

    allocation (params?: Cat_Allocation.Cat_Allocation_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Allocation.Cat_Allocation_Response>;
    allocation (callback: callbackFn<Cat_Allocation.Cat_Allocation_Response>): TransportRequestCallback;
    allocation (params: Cat_Allocation.Cat_Allocation_Request, callback: callbackFn<Cat_Allocation.Cat_Allocation_Response>): TransportRequestCallback;
    allocation (params: Cat_Allocation.Cat_Allocation_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Allocation.Cat_Allocation_Response>): TransportRequestCallback;

    clusterManager (params?: Cat_ClusterManager.Cat_ClusterManager_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_ClusterManager.Cat_ClusterManager_Response>;
    clusterManager (callback: callbackFn<Cat_ClusterManager.Cat_ClusterManager_Response>): TransportRequestCallback;
    clusterManager (params: Cat_ClusterManager.Cat_ClusterManager_Request, callback: callbackFn<Cat_ClusterManager.Cat_ClusterManager_Response>): TransportRequestCallback;
    clusterManager (params: Cat_ClusterManager.Cat_ClusterManager_Request, options: TransportRequestOptions, callback: callbackFn<Cat_ClusterManager.Cat_ClusterManager_Response>): TransportRequestCallback;

    count (params?: Cat_Count.Cat_Count_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Count.Cat_Count_Response>;
    count (callback: callbackFn<Cat_Count.Cat_Count_Response>): TransportRequestCallback;
    count (params: Cat_Count.Cat_Count_Request, callback: callbackFn<Cat_Count.Cat_Count_Response>): TransportRequestCallback;
    count (params: Cat_Count.Cat_Count_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Count.Cat_Count_Response>): TransportRequestCallback;

    fielddata (params?: Cat_Fielddata.Cat_Fielddata_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Fielddata.Cat_Fielddata_Response>;
    fielddata (callback: callbackFn<Cat_Fielddata.Cat_Fielddata_Response>): TransportRequestCallback;
    fielddata (params: Cat_Fielddata.Cat_Fielddata_Request, callback: callbackFn<Cat_Fielddata.Cat_Fielddata_Response>): TransportRequestCallback;
    fielddata (params: Cat_Fielddata.Cat_Fielddata_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Fielddata.Cat_Fielddata_Response>): TransportRequestCallback;

    health (params?: Cat_Health.Cat_Health_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Health.Cat_Health_Response>;
    health (callback: callbackFn<Cat_Health.Cat_Health_Response>): TransportRequestCallback;
    health (params: Cat_Health.Cat_Health_Request, callback: callbackFn<Cat_Health.Cat_Health_Response>): TransportRequestCallback;
    health (params: Cat_Health.Cat_Health_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Health.Cat_Health_Response>): TransportRequestCallback;

    indices (params?: Cat_Indices.Cat_Indices_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Indices.Cat_Indices_Response>;
    indices (callback: callbackFn<Cat_Indices.Cat_Indices_Response>): TransportRequestCallback;
    indices (params: Cat_Indices.Cat_Indices_Request, callback: callbackFn<Cat_Indices.Cat_Indices_Response>): TransportRequestCallback;
    indices (params: Cat_Indices.Cat_Indices_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Indices.Cat_Indices_Response>): TransportRequestCallback;

    master (params?: Cat_Master.Cat_Master_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Master.Cat_Master_Response>;
    master (callback: callbackFn<Cat_Master.Cat_Master_Response>): TransportRequestCallback;
    master (params: Cat_Master.Cat_Master_Request, callback: callbackFn<Cat_Master.Cat_Master_Response>): TransportRequestCallback;
    master (params: Cat_Master.Cat_Master_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Master.Cat_Master_Response>): TransportRequestCallback;

    nodeattrs (params?: Cat_Nodeattrs.Cat_Nodeattrs_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Nodeattrs.Cat_Nodeattrs_Response>;
    nodeattrs (callback: callbackFn<Cat_Nodeattrs.Cat_Nodeattrs_Response>): TransportRequestCallback;
    nodeattrs (params: Cat_Nodeattrs.Cat_Nodeattrs_Request, callback: callbackFn<Cat_Nodeattrs.Cat_Nodeattrs_Response>): TransportRequestCallback;
    nodeattrs (params: Cat_Nodeattrs.Cat_Nodeattrs_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Nodeattrs.Cat_Nodeattrs_Response>): TransportRequestCallback;

    nodes (params?: Cat_Nodes.Cat_Nodes_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Nodes.Cat_Nodes_Response>;
    nodes (callback: callbackFn<Cat_Nodes.Cat_Nodes_Response>): TransportRequestCallback;
    nodes (params: Cat_Nodes.Cat_Nodes_Request, callback: callbackFn<Cat_Nodes.Cat_Nodes_Response>): TransportRequestCallback;
    nodes (params: Cat_Nodes.Cat_Nodes_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Nodes.Cat_Nodes_Response>): TransportRequestCallback;

    pendingTasks (params?: Cat_PendingTasks.Cat_PendingTasks_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_PendingTasks.Cat_PendingTasks_Response>;
    pendingTasks (callback: callbackFn<Cat_PendingTasks.Cat_PendingTasks_Response>): TransportRequestCallback;
    pendingTasks (params: Cat_PendingTasks.Cat_PendingTasks_Request, callback: callbackFn<Cat_PendingTasks.Cat_PendingTasks_Response>): TransportRequestCallback;
    pendingTasks (params: Cat_PendingTasks.Cat_PendingTasks_Request, options: TransportRequestOptions, callback: callbackFn<Cat_PendingTasks.Cat_PendingTasks_Response>): TransportRequestCallback;

    pitSegments (params?: Cat_PitSegments.Cat_PitSegments_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_PitSegments.Cat_PitSegments_Response>;
    pitSegments (callback: callbackFn<Cat_PitSegments.Cat_PitSegments_Response>): TransportRequestCallback;
    pitSegments (params: Cat_PitSegments.Cat_PitSegments_Request, callback: callbackFn<Cat_PitSegments.Cat_PitSegments_Response>): TransportRequestCallback;
    pitSegments (params: Cat_PitSegments.Cat_PitSegments_Request, options: TransportRequestOptions, callback: callbackFn<Cat_PitSegments.Cat_PitSegments_Response>): TransportRequestCallback;

    allPitSegments (params?: Cat_AllPitSegments.Cat_AllPitSegments_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_AllPitSegments.Cat_AllPitSegments_Response>;
    allPitSegments (callback: callbackFn<Cat_AllPitSegments.Cat_AllPitSegments_Response>): TransportRequestCallback;
    allPitSegments (params: Cat_AllPitSegments.Cat_AllPitSegments_Request, callback: callbackFn<Cat_AllPitSegments.Cat_AllPitSegments_Response>): TransportRequestCallback;
    allPitSegments (params: Cat_AllPitSegments.Cat_AllPitSegments_Request, options: TransportRequestOptions, callback: callbackFn<Cat_AllPitSegments.Cat_AllPitSegments_Response>): TransportRequestCallback;

    plugins (params?: Cat_Plugins.Cat_Plugins_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Plugins.Cat_Plugins_Response>;
    plugins (callback: callbackFn<Cat_Plugins.Cat_Plugins_Response>): TransportRequestCallback;
    plugins (params: Cat_Plugins.Cat_Plugins_Request, callback: callbackFn<Cat_Plugins.Cat_Plugins_Response>): TransportRequestCallback;
    plugins (params: Cat_Plugins.Cat_Plugins_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Plugins.Cat_Plugins_Response>): TransportRequestCallback;

    recovery (params?: Cat_Recovery.Cat_Recovery_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Recovery.Cat_Recovery_Response>;
    recovery (callback: callbackFn<Cat_Recovery.Cat_Recovery_Response>): TransportRequestCallback;
    recovery (params: Cat_Recovery.Cat_Recovery_Request, callback: callbackFn<Cat_Recovery.Cat_Recovery_Response>): TransportRequestCallback;
    recovery (params: Cat_Recovery.Cat_Recovery_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Recovery.Cat_Recovery_Response>): TransportRequestCallback;

    repositories (params?: Cat_Repositories.Cat_Repositories_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Repositories.Cat_Repositories_Response>;
    repositories (callback: callbackFn<Cat_Repositories.Cat_Repositories_Response>): TransportRequestCallback;
    repositories (params: Cat_Repositories.Cat_Repositories_Request, callback: callbackFn<Cat_Repositories.Cat_Repositories_Response>): TransportRequestCallback;
    repositories (params: Cat_Repositories.Cat_Repositories_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Repositories.Cat_Repositories_Response>): TransportRequestCallback;

    segmentReplication (params?: Cat_SegmentReplication.Cat_SegmentReplication_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_SegmentReplication.Cat_SegmentReplication_Response>;
    segmentReplication (callback: callbackFn<Cat_SegmentReplication.Cat_SegmentReplication_Response>): TransportRequestCallback;
    segmentReplication (params: Cat_SegmentReplication.Cat_SegmentReplication_Request, callback: callbackFn<Cat_SegmentReplication.Cat_SegmentReplication_Response>): TransportRequestCallback;
    segmentReplication (params: Cat_SegmentReplication.Cat_SegmentReplication_Request, options: TransportRequestOptions, callback: callbackFn<Cat_SegmentReplication.Cat_SegmentReplication_Response>): TransportRequestCallback;

    segments (params?: Cat_Segments.Cat_Segments_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Segments.Cat_Segments_Response>;
    segments (callback: callbackFn<Cat_Segments.Cat_Segments_Response>): TransportRequestCallback;
    segments (params: Cat_Segments.Cat_Segments_Request, callback: callbackFn<Cat_Segments.Cat_Segments_Response>): TransportRequestCallback;
    segments (params: Cat_Segments.Cat_Segments_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Segments.Cat_Segments_Response>): TransportRequestCallback;

    shards (params?: Cat_Shards.Cat_Shards_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Shards.Cat_Shards_Response>;
    shards (callback: callbackFn<Cat_Shards.Cat_Shards_Response>): TransportRequestCallback;
    shards (params: Cat_Shards.Cat_Shards_Request, callback: callbackFn<Cat_Shards.Cat_Shards_Response>): TransportRequestCallback;
    shards (params: Cat_Shards.Cat_Shards_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Shards.Cat_Shards_Response>): TransportRequestCallback;

    snapshots (params?: Cat_Snapshots.Cat_Snapshots_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Snapshots.Cat_Snapshots_Response>;
    snapshots (callback: callbackFn<Cat_Snapshots.Cat_Snapshots_Response>): TransportRequestCallback;
    snapshots (params: Cat_Snapshots.Cat_Snapshots_Request, callback: callbackFn<Cat_Snapshots.Cat_Snapshots_Response>): TransportRequestCallback;
    snapshots (params: Cat_Snapshots.Cat_Snapshots_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Snapshots.Cat_Snapshots_Response>): TransportRequestCallback;

    tasks (params?: Cat_Tasks.Cat_Tasks_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Tasks.Cat_Tasks_Response>;
    tasks (callback: callbackFn<Cat_Tasks.Cat_Tasks_Response>): TransportRequestCallback;
    tasks (params: Cat_Tasks.Cat_Tasks_Request, callback: callbackFn<Cat_Tasks.Cat_Tasks_Response>): TransportRequestCallback;
    tasks (params: Cat_Tasks.Cat_Tasks_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Tasks.Cat_Tasks_Response>): TransportRequestCallback;

    templates (params?: Cat_Templates.Cat_Templates_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Templates.Cat_Templates_Response>;
    templates (callback: callbackFn<Cat_Templates.Cat_Templates_Response>): TransportRequestCallback;
    templates (params: Cat_Templates.Cat_Templates_Request, callback: callbackFn<Cat_Templates.Cat_Templates_Response>): TransportRequestCallback;
    templates (params: Cat_Templates.Cat_Templates_Request, options: TransportRequestOptions, callback: callbackFn<Cat_Templates.Cat_Templates_Response>): TransportRequestCallback;

    threadPool (params?: Cat_ThreadPool.Cat_ThreadPool_Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_ThreadPool.Cat_ThreadPool_Response>;
    threadPool (callback: callbackFn<Cat_ThreadPool.Cat_ThreadPool_Response>): TransportRequestCallback;
    threadPool (params: Cat_ThreadPool.Cat_ThreadPool_Request, callback: callbackFn<Cat_ThreadPool.Cat_ThreadPool_Response>): TransportRequestCallback;
    threadPool (params: Cat_ThreadPool.Cat_ThreadPool_Request, options: TransportRequestOptions, callback: callbackFn<Cat_ThreadPool.Cat_ThreadPool_Response>): TransportRequestCallback;

  };

  cluster: {
    allocationExplain (params?: Cluster_AllocationExplain.Cluster_AllocationExplain_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_AllocationExplain.Cluster_AllocationExplain_Response>;
    allocationExplain (callback: callbackFn<Cluster_AllocationExplain.Cluster_AllocationExplain_Response>): TransportRequestCallback;
    allocationExplain (params: Cluster_AllocationExplain.Cluster_AllocationExplain_Request, callback: callbackFn<Cluster_AllocationExplain.Cluster_AllocationExplain_Response>): TransportRequestCallback;
    allocationExplain (params: Cluster_AllocationExplain.Cluster_AllocationExplain_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_AllocationExplain.Cluster_AllocationExplain_Response>): TransportRequestCallback;

    deleteDecommissionAwareness (params?: Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Response>;
    deleteDecommissionAwareness (callback: callbackFn<Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Response>): TransportRequestCallback;
    deleteDecommissionAwareness (params: Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Request, callback: callbackFn<Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Response>): TransportRequestCallback;
    deleteDecommissionAwareness (params: Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteDecommissionAwareness.Cluster_DeleteDecommissionAwareness_Response>): TransportRequestCallback;

    getDecommissionAwareness (params: Cluster_GetDecommissionAwareness.Cluster_GetDecommissionAwareness_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetDecommissionAwareness.Cluster_GetDecommissionAwareness_Response>;
    getDecommissionAwareness (params: Cluster_GetDecommissionAwareness.Cluster_GetDecommissionAwareness_Request, callback: callbackFn<Cluster_GetDecommissionAwareness.Cluster_GetDecommissionAwareness_Response>): TransportRequestCallback;
    getDecommissionAwareness (params: Cluster_GetDecommissionAwareness.Cluster_GetDecommissionAwareness_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetDecommissionAwareness.Cluster_GetDecommissionAwareness_Response>): TransportRequestCallback;

    putDecommissionAwareness (params: Cluster_PutDecommissionAwareness.Cluster_PutDecommissionAwareness_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutDecommissionAwareness.Cluster_PutDecommissionAwareness_Response>;
    putDecommissionAwareness (params: Cluster_PutDecommissionAwareness.Cluster_PutDecommissionAwareness_Request, callback: callbackFn<Cluster_PutDecommissionAwareness.Cluster_PutDecommissionAwareness_Response>): TransportRequestCallback;
    putDecommissionAwareness (params: Cluster_PutDecommissionAwareness.Cluster_PutDecommissionAwareness_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutDecommissionAwareness.Cluster_PutDecommissionAwareness_Response>): TransportRequestCallback;

    health (params?: Cluster_Health.Cluster_Health_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_Health.Cluster_Health_Response>;
    health (callback: callbackFn<Cluster_Health.Cluster_Health_Response>): TransportRequestCallback;
    health (params: Cluster_Health.Cluster_Health_Request, callback: callbackFn<Cluster_Health.Cluster_Health_Response>): TransportRequestCallback;
    health (params: Cluster_Health.Cluster_Health_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_Health.Cluster_Health_Response>): TransportRequestCallback;

    pendingTasks (params?: Cluster_PendingTasks.Cluster_PendingTasks_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PendingTasks.Cluster_PendingTasks_Response>;
    pendingTasks (callback: callbackFn<Cluster_PendingTasks.Cluster_PendingTasks_Response>): TransportRequestCallback;
    pendingTasks (params: Cluster_PendingTasks.Cluster_PendingTasks_Request, callback: callbackFn<Cluster_PendingTasks.Cluster_PendingTasks_Response>): TransportRequestCallback;
    pendingTasks (params: Cluster_PendingTasks.Cluster_PendingTasks_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PendingTasks.Cluster_PendingTasks_Response>): TransportRequestCallback;

    reroute (params?: Cluster_Reroute.Cluster_Reroute_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_Reroute.Cluster_Reroute_Response>;
    reroute (callback: callbackFn<Cluster_Reroute.Cluster_Reroute_Response>): TransportRequestCallback;
    reroute (params: Cluster_Reroute.Cluster_Reroute_Request, callback: callbackFn<Cluster_Reroute.Cluster_Reroute_Response>): TransportRequestCallback;
    reroute (params: Cluster_Reroute.Cluster_Reroute_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_Reroute.Cluster_Reroute_Response>): TransportRequestCallback;

    getWeightedRouting (params: Cluster_GetWeightedRouting.Cluster_GetWeightedRouting_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetWeightedRouting.Cluster_GetWeightedRouting_Response>;
    getWeightedRouting (params: Cluster_GetWeightedRouting.Cluster_GetWeightedRouting_Request, callback: callbackFn<Cluster_GetWeightedRouting.Cluster_GetWeightedRouting_Response>): TransportRequestCallback;
    getWeightedRouting (params: Cluster_GetWeightedRouting.Cluster_GetWeightedRouting_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetWeightedRouting.Cluster_GetWeightedRouting_Response>): TransportRequestCallback;

    putWeightedRouting (params: Cluster_PutWeightedRouting.Cluster_PutWeightedRouting_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutWeightedRouting.Cluster_PutWeightedRouting_Response>;
    putWeightedRouting (params: Cluster_PutWeightedRouting.Cluster_PutWeightedRouting_Request, callback: callbackFn<Cluster_PutWeightedRouting.Cluster_PutWeightedRouting_Response>): TransportRequestCallback;
    putWeightedRouting (params: Cluster_PutWeightedRouting.Cluster_PutWeightedRouting_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutWeightedRouting.Cluster_PutWeightedRouting_Response>): TransportRequestCallback;

    deleteWeightedRouting (params?: Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Response>;
    deleteWeightedRouting (callback: callbackFn<Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Response>): TransportRequestCallback;
    deleteWeightedRouting (params: Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Request, callback: callbackFn<Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Response>): TransportRequestCallback;
    deleteWeightedRouting (params: Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteWeightedRouting.Cluster_DeleteWeightedRouting_Response>): TransportRequestCallback;

    getSettings (params?: Cluster_GetSettings.Cluster_GetSettings_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetSettings.Cluster_GetSettings_Response>;
    getSettings (callback: callbackFn<Cluster_GetSettings.Cluster_GetSettings_Response>): TransportRequestCallback;
    getSettings (params: Cluster_GetSettings.Cluster_GetSettings_Request, callback: callbackFn<Cluster_GetSettings.Cluster_GetSettings_Response>): TransportRequestCallback;
    getSettings (params: Cluster_GetSettings.Cluster_GetSettings_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetSettings.Cluster_GetSettings_Response>): TransportRequestCallback;

    putSettings (params: Cluster_PutSettings.Cluster_PutSettings_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutSettings.Cluster_PutSettings_Response>;
    putSettings (params: Cluster_PutSettings.Cluster_PutSettings_Request, callback: callbackFn<Cluster_PutSettings.Cluster_PutSettings_Response>): TransportRequestCallback;
    putSettings (params: Cluster_PutSettings.Cluster_PutSettings_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutSettings.Cluster_PutSettings_Response>): TransportRequestCallback;

    state (params?: Cluster_State.Cluster_State_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_State.Cluster_State_Response>;
    state (callback: callbackFn<Cluster_State.Cluster_State_Response>): TransportRequestCallback;
    state (params: Cluster_State.Cluster_State_Request, callback: callbackFn<Cluster_State.Cluster_State_Response>): TransportRequestCallback;
    state (params: Cluster_State.Cluster_State_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_State.Cluster_State_Response>): TransportRequestCallback;

    stats (params?: Cluster_Stats.Cluster_Stats_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_Stats.Cluster_Stats_Response>;
    stats (callback: callbackFn<Cluster_Stats.Cluster_Stats_Response>): TransportRequestCallback;
    stats (params: Cluster_Stats.Cluster_Stats_Request, callback: callbackFn<Cluster_Stats.Cluster_Stats_Response>): TransportRequestCallback;
    stats (params: Cluster_Stats.Cluster_Stats_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_Stats.Cluster_Stats_Response>): TransportRequestCallback;

    deleteVotingConfigExclusions (params?: Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Response>;
    deleteVotingConfigExclusions (callback: callbackFn<Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Response>): TransportRequestCallback;
    deleteVotingConfigExclusions (params: Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Request, callback: callbackFn<Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Response>): TransportRequestCallback;
    deleteVotingConfigExclusions (params: Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteVotingConfigExclusions.Cluster_DeleteVotingConfigExclusions_Response>): TransportRequestCallback;

    postVotingConfigExclusions (params?: Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Response>;
    postVotingConfigExclusions (callback: callbackFn<Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Response>): TransportRequestCallback;
    postVotingConfigExclusions (params: Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Request, callback: callbackFn<Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Response>): TransportRequestCallback;
    postVotingConfigExclusions (params: Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PostVotingConfigExclusions.Cluster_PostVotingConfigExclusions_Response>): TransportRequestCallback;

    getComponentTemplate (params?: Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Response>;
    getComponentTemplate (callback: callbackFn<Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Response>): TransportRequestCallback;
    getComponentTemplate (params: Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Request, callback: callbackFn<Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Response>): TransportRequestCallback;
    getComponentTemplate (params: Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetComponentTemplate.Cluster_GetComponentTemplate_Response>): TransportRequestCallback;

    deleteComponentTemplate (params: Cluster_DeleteComponentTemplate.Cluster_DeleteComponentTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteComponentTemplate.Cluster_DeleteComponentTemplate_Response>;
    deleteComponentTemplate (params: Cluster_DeleteComponentTemplate.Cluster_DeleteComponentTemplate_Request, callback: callbackFn<Cluster_DeleteComponentTemplate.Cluster_DeleteComponentTemplate_Response>): TransportRequestCallback;
    deleteComponentTemplate (params: Cluster_DeleteComponentTemplate.Cluster_DeleteComponentTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteComponentTemplate.Cluster_DeleteComponentTemplate_Response>): TransportRequestCallback;

    existsComponentTemplate (params: Cluster_ExistsComponentTemplate.Cluster_ExistsComponentTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_ExistsComponentTemplate.Cluster_ExistsComponentTemplate_Response>;
    existsComponentTemplate (params: Cluster_ExistsComponentTemplate.Cluster_ExistsComponentTemplate_Request, callback: callbackFn<Cluster_ExistsComponentTemplate.Cluster_ExistsComponentTemplate_Response>): TransportRequestCallback;
    existsComponentTemplate (params: Cluster_ExistsComponentTemplate.Cluster_ExistsComponentTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_ExistsComponentTemplate.Cluster_ExistsComponentTemplate_Response>): TransportRequestCallback;

    putComponentTemplate (params: Cluster_PutComponentTemplate.Cluster_PutComponentTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutComponentTemplate.Cluster_PutComponentTemplate_Response>;
    putComponentTemplate (params: Cluster_PutComponentTemplate.Cluster_PutComponentTemplate_Request, callback: callbackFn<Cluster_PutComponentTemplate.Cluster_PutComponentTemplate_Response>): TransportRequestCallback;
    putComponentTemplate (params: Cluster_PutComponentTemplate.Cluster_PutComponentTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutComponentTemplate.Cluster_PutComponentTemplate_Response>): TransportRequestCallback;

    remoteInfo (params?: Cluster_RemoteInfo.Cluster_RemoteInfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_RemoteInfo.Cluster_RemoteInfo_Response>;
    remoteInfo (callback: callbackFn<Cluster_RemoteInfo.Cluster_RemoteInfo_Response>): TransportRequestCallback;
    remoteInfo (params: Cluster_RemoteInfo.Cluster_RemoteInfo_Request, callback: callbackFn<Cluster_RemoteInfo.Cluster_RemoteInfo_Response>): TransportRequestCallback;
    remoteInfo (params: Cluster_RemoteInfo.Cluster_RemoteInfo_Request, options: TransportRequestOptions, callback: callbackFn<Cluster_RemoteInfo.Cluster_RemoteInfo_Response>): TransportRequestCallback;

  };

  dangling_indices: {
    listDanglingIndices (params?: DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Request, options?: TransportRequestOptions): TransportRequestPromise<DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Response>;
    listDanglingIndices (callback: callbackFn<DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Response>): TransportRequestCallback;
    listDanglingIndices (params: DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Request, callback: callbackFn<DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Response>): TransportRequestCallback;
    listDanglingIndices (params: DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Request, options: TransportRequestOptions, callback: callbackFn<DanglingIndices_ListDanglingIndices.DanglingIndices_ListDanglingIndices_Response>): TransportRequestCallback;

    deleteDanglingIndex (params: DanglingIndices_DeleteDanglingIndex.DanglingIndices_DeleteDanglingIndex_Request, options?: TransportRequestOptions): TransportRequestPromise<DanglingIndices_DeleteDanglingIndex.DanglingIndices_DeleteDanglingIndex_Response>;
    deleteDanglingIndex (params: DanglingIndices_DeleteDanglingIndex.DanglingIndices_DeleteDanglingIndex_Request, callback: callbackFn<DanglingIndices_DeleteDanglingIndex.DanglingIndices_DeleteDanglingIndex_Response>): TransportRequestCallback;
    deleteDanglingIndex (params: DanglingIndices_DeleteDanglingIndex.DanglingIndices_DeleteDanglingIndex_Request, options: TransportRequestOptions, callback: callbackFn<DanglingIndices_DeleteDanglingIndex.DanglingIndices_DeleteDanglingIndex_Response>): TransportRequestCallback;

    importDanglingIndex (params: DanglingIndices_ImportDanglingIndex.DanglingIndices_ImportDanglingIndex_Request, options?: TransportRequestOptions): TransportRequestPromise<DanglingIndices_ImportDanglingIndex.DanglingIndices_ImportDanglingIndex_Response>;
    importDanglingIndex (params: DanglingIndices_ImportDanglingIndex.DanglingIndices_ImportDanglingIndex_Request, callback: callbackFn<DanglingIndices_ImportDanglingIndex.DanglingIndices_ImportDanglingIndex_Response>): TransportRequestCallback;
    importDanglingIndex (params: DanglingIndices_ImportDanglingIndex.DanglingIndices_ImportDanglingIndex_Request, options: TransportRequestOptions, callback: callbackFn<DanglingIndices_ImportDanglingIndex.DanglingIndices_ImportDanglingIndex_Response>): TransportRequestCallback;

  };

  indices: {
    getAlias (params?: Indices_GetAlias.Indices_GetAlias_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetAlias.Indices_GetAlias_Response>;
    getAlias (callback: callbackFn<Indices_GetAlias.Indices_GetAlias_Response>): TransportRequestCallback;
    getAlias (params: Indices_GetAlias.Indices_GetAlias_Request, callback: callbackFn<Indices_GetAlias.Indices_GetAlias_Response>): TransportRequestCallback;
    getAlias (params: Indices_GetAlias.Indices_GetAlias_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetAlias.Indices_GetAlias_Response>): TransportRequestCallback;

    putAlias (params?: Indices_PutAlias.Indices_PutAlias_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutAlias.Indices_PutAlias_Response>;
    putAlias (callback: callbackFn<Indices_PutAlias.Indices_PutAlias_Response>): TransportRequestCallback;
    putAlias (params: Indices_PutAlias.Indices_PutAlias_Request, callback: callbackFn<Indices_PutAlias.Indices_PutAlias_Response>): TransportRequestCallback;
    putAlias (params: Indices_PutAlias.Indices_PutAlias_Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutAlias.Indices_PutAlias_Response>): TransportRequestCallback;

    existsAlias (params: Indices_ExistsAlias.Indices_ExistsAlias_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ExistsAlias.Indices_ExistsAlias_Response>;
    existsAlias (params: Indices_ExistsAlias.Indices_ExistsAlias_Request, callback: callbackFn<Indices_ExistsAlias.Indices_ExistsAlias_Response>): TransportRequestCallback;
    existsAlias (params: Indices_ExistsAlias.Indices_ExistsAlias_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ExistsAlias.Indices_ExistsAlias_Response>): TransportRequestCallback;

    updateAliases (params: Indices_UpdateAliases.Indices_UpdateAliases_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_UpdateAliases.Indices_UpdateAliases_Response>;
    updateAliases (params: Indices_UpdateAliases.Indices_UpdateAliases_Request, callback: callbackFn<Indices_UpdateAliases.Indices_UpdateAliases_Response>): TransportRequestCallback;
    updateAliases (params: Indices_UpdateAliases.Indices_UpdateAliases_Request, options: TransportRequestOptions, callback: callbackFn<Indices_UpdateAliases.Indices_UpdateAliases_Response>): TransportRequestCallback;

    analyze (params?: Indices_Analyze.Indices_Analyze_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Analyze.Indices_Analyze_Response>;
    analyze (callback: callbackFn<Indices_Analyze.Indices_Analyze_Response>): TransportRequestCallback;
    analyze (params: Indices_Analyze.Indices_Analyze_Request, callback: callbackFn<Indices_Analyze.Indices_Analyze_Response>): TransportRequestCallback;
    analyze (params: Indices_Analyze.Indices_Analyze_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Analyze.Indices_Analyze_Response>): TransportRequestCallback;

    clearCache (params?: Indices_ClearCache.Indices_ClearCache_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ClearCache.Indices_ClearCache_Response>;
    clearCache (callback: callbackFn<Indices_ClearCache.Indices_ClearCache_Response>): TransportRequestCallback;
    clearCache (params: Indices_ClearCache.Indices_ClearCache_Request, callback: callbackFn<Indices_ClearCache.Indices_ClearCache_Response>): TransportRequestCallback;
    clearCache (params: Indices_ClearCache.Indices_ClearCache_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ClearCache.Indices_ClearCache_Response>): TransportRequestCallback;

    getDataStream (params?: Indices_GetDataStream.Indices_GetDataStream_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetDataStream.Indices_GetDataStream_Response>;
    getDataStream (callback: callbackFn<Indices_GetDataStream.Indices_GetDataStream_Response>): TransportRequestCallback;
    getDataStream (params: Indices_GetDataStream.Indices_GetDataStream_Request, callback: callbackFn<Indices_GetDataStream.Indices_GetDataStream_Response>): TransportRequestCallback;
    getDataStream (params: Indices_GetDataStream.Indices_GetDataStream_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetDataStream.Indices_GetDataStream_Response>): TransportRequestCallback;

    dataStreamsStats (params?: Indices_DataStreamsStats.Indices_DataStreamsStats_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DataStreamsStats.Indices_DataStreamsStats_Response>;
    dataStreamsStats (callback: callbackFn<Indices_DataStreamsStats.Indices_DataStreamsStats_Response>): TransportRequestCallback;
    dataStreamsStats (params: Indices_DataStreamsStats.Indices_DataStreamsStats_Request, callback: callbackFn<Indices_DataStreamsStats.Indices_DataStreamsStats_Response>): TransportRequestCallback;
    dataStreamsStats (params: Indices_DataStreamsStats.Indices_DataStreamsStats_Request, options: TransportRequestOptions, callback: callbackFn<Indices_DataStreamsStats.Indices_DataStreamsStats_Response>): TransportRequestCallback;

    deleteDataStream (params: Indices_DeleteDataStream.Indices_DeleteDataStream_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteDataStream.Indices_DeleteDataStream_Response>;
    deleteDataStream (params: Indices_DeleteDataStream.Indices_DeleteDataStream_Request, callback: callbackFn<Indices_DeleteDataStream.Indices_DeleteDataStream_Response>): TransportRequestCallback;
    deleteDataStream (params: Indices_DeleteDataStream.Indices_DeleteDataStream_Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteDataStream.Indices_DeleteDataStream_Response>): TransportRequestCallback;

    createDataStream (params: Indices_CreateDataStream.Indices_CreateDataStream_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_CreateDataStream.Indices_CreateDataStream_Response>;
    createDataStream (params: Indices_CreateDataStream.Indices_CreateDataStream_Request, callback: callbackFn<Indices_CreateDataStream.Indices_CreateDataStream_Response>): TransportRequestCallback;
    createDataStream (params: Indices_CreateDataStream.Indices_CreateDataStream_Request, options: TransportRequestOptions, callback: callbackFn<Indices_CreateDataStream.Indices_CreateDataStream_Response>): TransportRequestCallback;

    flush (params?: Indices_Flush.Indices_Flush_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Flush.Indices_Flush_Response>;
    flush (callback: callbackFn<Indices_Flush.Indices_Flush_Response>): TransportRequestCallback;
    flush (params: Indices_Flush.Indices_Flush_Request, callback: callbackFn<Indices_Flush.Indices_Flush_Response>): TransportRequestCallback;
    flush (params: Indices_Flush.Indices_Flush_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Flush.Indices_Flush_Response>): TransportRequestCallback;

    forcemerge (params?: Indices_Forcemerge.Indices_Forcemerge_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Forcemerge.Indices_Forcemerge_Response>;
    forcemerge (callback: callbackFn<Indices_Forcemerge.Indices_Forcemerge_Response>): TransportRequestCallback;
    forcemerge (params: Indices_Forcemerge.Indices_Forcemerge_Request, callback: callbackFn<Indices_Forcemerge.Indices_Forcemerge_Response>): TransportRequestCallback;
    forcemerge (params: Indices_Forcemerge.Indices_Forcemerge_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Forcemerge.Indices_Forcemerge_Response>): TransportRequestCallback;

    getIndexTemplate (params?: Indices_GetIndexTemplate.Indices_GetIndexTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetIndexTemplate.Indices_GetIndexTemplate_Response>;
    getIndexTemplate (callback: callbackFn<Indices_GetIndexTemplate.Indices_GetIndexTemplate_Response>): TransportRequestCallback;
    getIndexTemplate (params: Indices_GetIndexTemplate.Indices_GetIndexTemplate_Request, callback: callbackFn<Indices_GetIndexTemplate.Indices_GetIndexTemplate_Response>): TransportRequestCallback;
    getIndexTemplate (params: Indices_GetIndexTemplate.Indices_GetIndexTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetIndexTemplate.Indices_GetIndexTemplate_Response>): TransportRequestCallback;

    simulateTemplate (params?: Indices_SimulateTemplate.Indices_SimulateTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_SimulateTemplate.Indices_SimulateTemplate_Response>;
    simulateTemplate (callback: callbackFn<Indices_SimulateTemplate.Indices_SimulateTemplate_Response>): TransportRequestCallback;
    simulateTemplate (params: Indices_SimulateTemplate.Indices_SimulateTemplate_Request, callback: callbackFn<Indices_SimulateTemplate.Indices_SimulateTemplate_Response>): TransportRequestCallback;
    simulateTemplate (params: Indices_SimulateTemplate.Indices_SimulateTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_SimulateTemplate.Indices_SimulateTemplate_Response>): TransportRequestCallback;

    simulateIndexTemplate (params: Indices_SimulateIndexTemplate.Indices_SimulateIndexTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_SimulateIndexTemplate.Indices_SimulateIndexTemplate_Response>;
    simulateIndexTemplate (params: Indices_SimulateIndexTemplate.Indices_SimulateIndexTemplate_Request, callback: callbackFn<Indices_SimulateIndexTemplate.Indices_SimulateIndexTemplate_Response>): TransportRequestCallback;
    simulateIndexTemplate (params: Indices_SimulateIndexTemplate.Indices_SimulateIndexTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_SimulateIndexTemplate.Indices_SimulateIndexTemplate_Response>): TransportRequestCallback;

    deleteIndexTemplate (params: Indices_DeleteIndexTemplate.Indices_DeleteIndexTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteIndexTemplate.Indices_DeleteIndexTemplate_Response>;
    deleteIndexTemplate (params: Indices_DeleteIndexTemplate.Indices_DeleteIndexTemplate_Request, callback: callbackFn<Indices_DeleteIndexTemplate.Indices_DeleteIndexTemplate_Response>): TransportRequestCallback;
    deleteIndexTemplate (params: Indices_DeleteIndexTemplate.Indices_DeleteIndexTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteIndexTemplate.Indices_DeleteIndexTemplate_Response>): TransportRequestCallback;

    existsIndexTemplate (params: Indices_ExistsIndexTemplate.Indices_ExistsIndexTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ExistsIndexTemplate.Indices_ExistsIndexTemplate_Response>;
    existsIndexTemplate (params: Indices_ExistsIndexTemplate.Indices_ExistsIndexTemplate_Request, callback: callbackFn<Indices_ExistsIndexTemplate.Indices_ExistsIndexTemplate_Response>): TransportRequestCallback;
    existsIndexTemplate (params: Indices_ExistsIndexTemplate.Indices_ExistsIndexTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ExistsIndexTemplate.Indices_ExistsIndexTemplate_Response>): TransportRequestCallback;

    putIndexTemplate (params: Indices_PutIndexTemplate.Indices_PutIndexTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutIndexTemplate.Indices_PutIndexTemplate_Response>;
    putIndexTemplate (params: Indices_PutIndexTemplate.Indices_PutIndexTemplate_Request, callback: callbackFn<Indices_PutIndexTemplate.Indices_PutIndexTemplate_Response>): TransportRequestCallback;
    putIndexTemplate (params: Indices_PutIndexTemplate.Indices_PutIndexTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutIndexTemplate.Indices_PutIndexTemplate_Response>): TransportRequestCallback;

    getMapping (params?: Indices_GetMapping.Indices_GetMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetMapping.Indices_GetMapping_Response>;
    getMapping (callback: callbackFn<Indices_GetMapping.Indices_GetMapping_Response>): TransportRequestCallback;
    getMapping (params: Indices_GetMapping.Indices_GetMapping_Request, callback: callbackFn<Indices_GetMapping.Indices_GetMapping_Response>): TransportRequestCallback;
    getMapping (params: Indices_GetMapping.Indices_GetMapping_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetMapping.Indices_GetMapping_Response>): TransportRequestCallback;

    getFieldMapping (params: Indices_GetFieldMapping.Indices_GetFieldMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetFieldMapping.Indices_GetFieldMapping_Response>;
    getFieldMapping (params: Indices_GetFieldMapping.Indices_GetFieldMapping_Request, callback: callbackFn<Indices_GetFieldMapping.Indices_GetFieldMapping_Response>): TransportRequestCallback;
    getFieldMapping (params: Indices_GetFieldMapping.Indices_GetFieldMapping_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetFieldMapping.Indices_GetFieldMapping_Response>): TransportRequestCallback;

    recovery (params?: Indices_Recovery.Indices_Recovery_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Recovery.Indices_Recovery_Response>;
    recovery (callback: callbackFn<Indices_Recovery.Indices_Recovery_Response>): TransportRequestCallback;
    recovery (params: Indices_Recovery.Indices_Recovery_Request, callback: callbackFn<Indices_Recovery.Indices_Recovery_Response>): TransportRequestCallback;
    recovery (params: Indices_Recovery.Indices_Recovery_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Recovery.Indices_Recovery_Response>): TransportRequestCallback;

    refresh (params?: Indices_Refresh.Indices_Refresh_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Refresh.Indices_Refresh_Response>;
    refresh (callback: callbackFn<Indices_Refresh.Indices_Refresh_Response>): TransportRequestCallback;
    refresh (params: Indices_Refresh.Indices_Refresh_Request, callback: callbackFn<Indices_Refresh.Indices_Refresh_Response>): TransportRequestCallback;
    refresh (params: Indices_Refresh.Indices_Refresh_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Refresh.Indices_Refresh_Response>): TransportRequestCallback;

    resolveIndex (params: Indices_ResolveIndex.Indices_ResolveIndex_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ResolveIndex.Indices_ResolveIndex_Response>;
    resolveIndex (params: Indices_ResolveIndex.Indices_ResolveIndex_Request, callback: callbackFn<Indices_ResolveIndex.Indices_ResolveIndex_Response>): TransportRequestCallback;
    resolveIndex (params: Indices_ResolveIndex.Indices_ResolveIndex_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ResolveIndex.Indices_ResolveIndex_Response>): TransportRequestCallback;

    segments (params?: Indices_Segments.Indices_Segments_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Segments.Indices_Segments_Response>;
    segments (callback: callbackFn<Indices_Segments.Indices_Segments_Response>): TransportRequestCallback;
    segments (params: Indices_Segments.Indices_Segments_Request, callback: callbackFn<Indices_Segments.Indices_Segments_Response>): TransportRequestCallback;
    segments (params: Indices_Segments.Indices_Segments_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Segments.Indices_Segments_Response>): TransportRequestCallback;

    getSettings (params?: Indices_GetSettings.Indices_GetSettings_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetSettings.Indices_GetSettings_Response>;
    getSettings (callback: callbackFn<Indices_GetSettings.Indices_GetSettings_Response>): TransportRequestCallback;
    getSettings (params: Indices_GetSettings.Indices_GetSettings_Request, callback: callbackFn<Indices_GetSettings.Indices_GetSettings_Response>): TransportRequestCallback;
    getSettings (params: Indices_GetSettings.Indices_GetSettings_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetSettings.Indices_GetSettings_Response>): TransportRequestCallback;

    putSettings (params: Indices_PutSettings.Indices_PutSettings_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutSettings.Indices_PutSettings_Response>;
    putSettings (params: Indices_PutSettings.Indices_PutSettings_Request, callback: callbackFn<Indices_PutSettings.Indices_PutSettings_Response>): TransportRequestCallback;
    putSettings (params: Indices_PutSettings.Indices_PutSettings_Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutSettings.Indices_PutSettings_Response>): TransportRequestCallback;

    shardStores (params?: Indices_ShardStores.Indices_ShardStores_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ShardStores.Indices_ShardStores_Response>;
    shardStores (callback: callbackFn<Indices_ShardStores.Indices_ShardStores_Response>): TransportRequestCallback;
    shardStores (params: Indices_ShardStores.Indices_ShardStores_Request, callback: callbackFn<Indices_ShardStores.Indices_ShardStores_Response>): TransportRequestCallback;
    shardStores (params: Indices_ShardStores.Indices_ShardStores_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ShardStores.Indices_ShardStores_Response>): TransportRequestCallback;

    stats (params?: Indices_Stats.Indices_Stats_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Stats.Indices_Stats_Response>;
    stats (callback: callbackFn<Indices_Stats.Indices_Stats_Response>): TransportRequestCallback;
    stats (params: Indices_Stats.Indices_Stats_Request, callback: callbackFn<Indices_Stats.Indices_Stats_Response>): TransportRequestCallback;
    stats (params: Indices_Stats.Indices_Stats_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Stats.Indices_Stats_Response>): TransportRequestCallback;

    getTemplate (params?: Indices_GetTemplate.Indices_GetTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetTemplate.Indices_GetTemplate_Response>;
    getTemplate (callback: callbackFn<Indices_GetTemplate.Indices_GetTemplate_Response>): TransportRequestCallback;
    getTemplate (params: Indices_GetTemplate.Indices_GetTemplate_Request, callback: callbackFn<Indices_GetTemplate.Indices_GetTemplate_Response>): TransportRequestCallback;
    getTemplate (params: Indices_GetTemplate.Indices_GetTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetTemplate.Indices_GetTemplate_Response>): TransportRequestCallback;

    deleteTemplate (params: Indices_DeleteTemplate.Indices_DeleteTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteTemplate.Indices_DeleteTemplate_Response>;
    deleteTemplate (params: Indices_DeleteTemplate.Indices_DeleteTemplate_Request, callback: callbackFn<Indices_DeleteTemplate.Indices_DeleteTemplate_Response>): TransportRequestCallback;
    deleteTemplate (params: Indices_DeleteTemplate.Indices_DeleteTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteTemplate.Indices_DeleteTemplate_Response>): TransportRequestCallback;

    existsTemplate (params: Indices_ExistsTemplate.Indices_ExistsTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ExistsTemplate.Indices_ExistsTemplate_Response>;
    existsTemplate (params: Indices_ExistsTemplate.Indices_ExistsTemplate_Request, callback: callbackFn<Indices_ExistsTemplate.Indices_ExistsTemplate_Response>): TransportRequestCallback;
    existsTemplate (params: Indices_ExistsTemplate.Indices_ExistsTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ExistsTemplate.Indices_ExistsTemplate_Response>): TransportRequestCallback;

    putTemplate (params: Indices_PutTemplate.Indices_PutTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutTemplate.Indices_PutTemplate_Response>;
    putTemplate (params: Indices_PutTemplate.Indices_PutTemplate_Request, callback: callbackFn<Indices_PutTemplate.Indices_PutTemplate_Response>): TransportRequestCallback;
    putTemplate (params: Indices_PutTemplate.Indices_PutTemplate_Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutTemplate.Indices_PutTemplate_Response>): TransportRequestCallback;

    getUpgrade (params?: Indices_GetUpgrade.Indices_GetUpgrade_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetUpgrade.Indices_GetUpgrade_Response>;
    getUpgrade (callback: callbackFn<Indices_GetUpgrade.Indices_GetUpgrade_Response>): TransportRequestCallback;
    getUpgrade (params: Indices_GetUpgrade.Indices_GetUpgrade_Request, callback: callbackFn<Indices_GetUpgrade.Indices_GetUpgrade_Response>): TransportRequestCallback;
    getUpgrade (params: Indices_GetUpgrade.Indices_GetUpgrade_Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetUpgrade.Indices_GetUpgrade_Response>): TransportRequestCallback;

    upgrade (params?: Indices_Upgrade.Indices_Upgrade_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Upgrade.Indices_Upgrade_Response>;
    upgrade (callback: callbackFn<Indices_Upgrade.Indices_Upgrade_Response>): TransportRequestCallback;
    upgrade (params: Indices_Upgrade.Indices_Upgrade_Request, callback: callbackFn<Indices_Upgrade.Indices_Upgrade_Response>): TransportRequestCallback;
    upgrade (params: Indices_Upgrade.Indices_Upgrade_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Upgrade.Indices_Upgrade_Response>): TransportRequestCallback;

    validateQuery (params?: Indices_ValidateQuery.Indices_ValidateQuery_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ValidateQuery.Indices_ValidateQuery_Response>;
    validateQuery (callback: callbackFn<Indices_ValidateQuery.Indices_ValidateQuery_Response>): TransportRequestCallback;
    validateQuery (params: Indices_ValidateQuery.Indices_ValidateQuery_Request, callback: callbackFn<Indices_ValidateQuery.Indices_ValidateQuery_Response>): TransportRequestCallback;
    validateQuery (params: Indices_ValidateQuery.Indices_ValidateQuery_Request, options: TransportRequestOptions, callback: callbackFn<Indices_ValidateQuery.Indices_ValidateQuery_Response>): TransportRequestCallback;

    rollover (params: Indices_Rollover.Indices_Rollover_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Rollover.Indices_Rollover_Response>;
    rollover (params: Indices_Rollover.Indices_Rollover_Request, callback: callbackFn<Indices_Rollover.Indices_Rollover_Response>): TransportRequestCallback;
    rollover (params: Indices_Rollover.Indices_Rollover_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Rollover.Indices_Rollover_Response>): TransportRequestCallback;

    delete (params: Indices_Delete.Indices_Delete_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Delete.Indices_Delete_Response>;
    delete (params: Indices_Delete.Indices_Delete_Request, callback: callbackFn<Indices_Delete.Indices_Delete_Response>): TransportRequestCallback;
    delete (params: Indices_Delete.Indices_Delete_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Delete.Indices_Delete_Response>): TransportRequestCallback;

    get (params: Indices_Get.Indices_Get_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Get.Indices_Get_Response>;
    get (params: Indices_Get.Indices_Get_Request, callback: callbackFn<Indices_Get.Indices_Get_Response>): TransportRequestCallback;
    get (params: Indices_Get.Indices_Get_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Get.Indices_Get_Response>): TransportRequestCallback;

    exists (params: Indices_Exists.Indices_Exists_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Exists.Indices_Exists_Response>;
    exists (params: Indices_Exists.Indices_Exists_Request, callback: callbackFn<Indices_Exists.Indices_Exists_Response>): TransportRequestCallback;
    exists (params: Indices_Exists.Indices_Exists_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Exists.Indices_Exists_Response>): TransportRequestCallback;

    create (params: Indices_Create.Indices_Create_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Create.Indices_Create_Response>;
    create (params: Indices_Create.Indices_Create_Request, callback: callbackFn<Indices_Create.Indices_Create_Response>): TransportRequestCallback;
    create (params: Indices_Create.Indices_Create_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Create.Indices_Create_Response>): TransportRequestCallback;

    deleteAlias (params: Indices_DeleteAlias.Indices_DeleteAlias_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteAlias.Indices_DeleteAlias_Response>;
    deleteAlias (params: Indices_DeleteAlias.Indices_DeleteAlias_Request, callback: callbackFn<Indices_DeleteAlias.Indices_DeleteAlias_Response>): TransportRequestCallback;
    deleteAlias (params: Indices_DeleteAlias.Indices_DeleteAlias_Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteAlias.Indices_DeleteAlias_Response>): TransportRequestCallback;

    addBlock (params: Indices_AddBlock.Indices_AddBlock_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_AddBlock.Indices_AddBlock_Response>;
    addBlock (params: Indices_AddBlock.Indices_AddBlock_Request, callback: callbackFn<Indices_AddBlock.Indices_AddBlock_Response>): TransportRequestCallback;
    addBlock (params: Indices_AddBlock.Indices_AddBlock_Request, options: TransportRequestOptions, callback: callbackFn<Indices_AddBlock.Indices_AddBlock_Response>): TransportRequestCallback;

    clone (params: Indices_Clone.Indices_Clone_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Clone.Indices_Clone_Response>;
    clone (params: Indices_Clone.Indices_Clone_Request, callback: callbackFn<Indices_Clone.Indices_Clone_Response>): TransportRequestCallback;
    clone (params: Indices_Clone.Indices_Clone_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Clone.Indices_Clone_Response>): TransportRequestCallback;

    close (params: Indices_Close.Indices_Close_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Close.Indices_Close_Response>;
    close (params: Indices_Close.Indices_Close_Request, callback: callbackFn<Indices_Close.Indices_Close_Response>): TransportRequestCallback;
    close (params: Indices_Close.Indices_Close_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Close.Indices_Close_Response>): TransportRequestCallback;

    putMapping (params: Indices_PutMapping.Indices_PutMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutMapping.Indices_PutMapping_Response>;
    putMapping (params: Indices_PutMapping.Indices_PutMapping_Request, callback: callbackFn<Indices_PutMapping.Indices_PutMapping_Response>): TransportRequestCallback;
    putMapping (params: Indices_PutMapping.Indices_PutMapping_Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutMapping.Indices_PutMapping_Response>): TransportRequestCallback;

    open (params: Indices_Open.Indices_Open_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Open.Indices_Open_Response>;
    open (params: Indices_Open.Indices_Open_Request, callback: callbackFn<Indices_Open.Indices_Open_Response>): TransportRequestCallback;
    open (params: Indices_Open.Indices_Open_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Open.Indices_Open_Response>): TransportRequestCallback;

    shrink (params: Indices_Shrink.Indices_Shrink_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Shrink.Indices_Shrink_Response>;
    shrink (params: Indices_Shrink.Indices_Shrink_Request, callback: callbackFn<Indices_Shrink.Indices_Shrink_Response>): TransportRequestCallback;
    shrink (params: Indices_Shrink.Indices_Shrink_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Shrink.Indices_Shrink_Response>): TransportRequestCallback;

    split (params: Indices_Split.Indices_Split_Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Split.Indices_Split_Response>;
    split (params: Indices_Split.Indices_Split_Request, callback: callbackFn<Indices_Split.Indices_Split_Response>): TransportRequestCallback;
    split (params: Indices_Split.Indices_Split_Request, options: TransportRequestOptions, callback: callbackFn<Indices_Split.Indices_Split_Response>): TransportRequestCallback;

  };

  ingest: {
    getPipeline (params?: Ingest_GetPipeline.Ingest_GetPipeline_Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_GetPipeline.Ingest_GetPipeline_Response>;
    getPipeline (callback: callbackFn<Ingest_GetPipeline.Ingest_GetPipeline_Response>): TransportRequestCallback;
    getPipeline (params: Ingest_GetPipeline.Ingest_GetPipeline_Request, callback: callbackFn<Ingest_GetPipeline.Ingest_GetPipeline_Response>): TransportRequestCallback;
    getPipeline (params: Ingest_GetPipeline.Ingest_GetPipeline_Request, options: TransportRequestOptions, callback: callbackFn<Ingest_GetPipeline.Ingest_GetPipeline_Response>): TransportRequestCallback;

    simulate (params: Ingest_Simulate.Ingest_Simulate_Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_Simulate.Ingest_Simulate_Response>;
    simulate (params: Ingest_Simulate.Ingest_Simulate_Request, callback: callbackFn<Ingest_Simulate.Ingest_Simulate_Response>): TransportRequestCallback;
    simulate (params: Ingest_Simulate.Ingest_Simulate_Request, options: TransportRequestOptions, callback: callbackFn<Ingest_Simulate.Ingest_Simulate_Response>): TransportRequestCallback;

    deletePipeline (params: Ingest_DeletePipeline.Ingest_DeletePipeline_Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_DeletePipeline.Ingest_DeletePipeline_Response>;
    deletePipeline (params: Ingest_DeletePipeline.Ingest_DeletePipeline_Request, callback: callbackFn<Ingest_DeletePipeline.Ingest_DeletePipeline_Response>): TransportRequestCallback;
    deletePipeline (params: Ingest_DeletePipeline.Ingest_DeletePipeline_Request, options: TransportRequestOptions, callback: callbackFn<Ingest_DeletePipeline.Ingest_DeletePipeline_Response>): TransportRequestCallback;

    putPipeline (params: Ingest_PutPipeline.Ingest_PutPipeline_Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_PutPipeline.Ingest_PutPipeline_Response>;
    putPipeline (params: Ingest_PutPipeline.Ingest_PutPipeline_Request, callback: callbackFn<Ingest_PutPipeline.Ingest_PutPipeline_Response>): TransportRequestCallback;
    putPipeline (params: Ingest_PutPipeline.Ingest_PutPipeline_Request, options: TransportRequestOptions, callback: callbackFn<Ingest_PutPipeline.Ingest_PutPipeline_Response>): TransportRequestCallback;

    processorGrok (params?: Ingest_ProcessorGrok.Ingest_ProcessorGrok_Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_ProcessorGrok.Ingest_ProcessorGrok_Response>;
    processorGrok (callback: callbackFn<Ingest_ProcessorGrok.Ingest_ProcessorGrok_Response>): TransportRequestCallback;
    processorGrok (params: Ingest_ProcessorGrok.Ingest_ProcessorGrok_Request, callback: callbackFn<Ingest_ProcessorGrok.Ingest_ProcessorGrok_Response>): TransportRequestCallback;
    processorGrok (params: Ingest_ProcessorGrok.Ingest_ProcessorGrok_Request, options: TransportRequestOptions, callback: callbackFn<Ingest_ProcessorGrok.Ingest_ProcessorGrok_Response>): TransportRequestCallback;

  };

  knn: {
    stats (params?: Knn_Stats.Knn_Stats_Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_Stats.Knn_Stats_Response>;
    stats (callback: callbackFn<Knn_Stats.Knn_Stats_Response>): TransportRequestCallback;
    stats (params: Knn_Stats.Knn_Stats_Request, callback: callbackFn<Knn_Stats.Knn_Stats_Response>): TransportRequestCallback;
    stats (params: Knn_Stats.Knn_Stats_Request, options: TransportRequestOptions, callback: callbackFn<Knn_Stats.Knn_Stats_Response>): TransportRequestCallback;

    searchModels (params?: Knn_SearchModels.Knn_SearchModels_Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_SearchModels.Knn_SearchModels_Response>;
    searchModels (callback: callbackFn<Knn_SearchModels.Knn_SearchModels_Response>): TransportRequestCallback;
    searchModels (params: Knn_SearchModels.Knn_SearchModels_Request, callback: callbackFn<Knn_SearchModels.Knn_SearchModels_Response>): TransportRequestCallback;
    searchModels (params: Knn_SearchModels.Knn_SearchModels_Request, options: TransportRequestOptions, callback: callbackFn<Knn_SearchModels.Knn_SearchModels_Response>): TransportRequestCallback;

    trainModel (params: Knn_TrainModel.Knn_TrainModel_Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_TrainModel.Knn_TrainModel_Response>;
    trainModel (params: Knn_TrainModel.Knn_TrainModel_Request, callback: callbackFn<Knn_TrainModel.Knn_TrainModel_Response>): TransportRequestCallback;
    trainModel (params: Knn_TrainModel.Knn_TrainModel_Request, options: TransportRequestOptions, callback: callbackFn<Knn_TrainModel.Knn_TrainModel_Response>): TransportRequestCallback;

    deleteModel (params: Knn_DeleteModel.Knn_DeleteModel_Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_DeleteModel.Knn_DeleteModel_Response>;
    deleteModel (params: Knn_DeleteModel.Knn_DeleteModel_Request, callback: callbackFn<Knn_DeleteModel.Knn_DeleteModel_Response>): TransportRequestCallback;
    deleteModel (params: Knn_DeleteModel.Knn_DeleteModel_Request, options: TransportRequestOptions, callback: callbackFn<Knn_DeleteModel.Knn_DeleteModel_Response>): TransportRequestCallback;

    getModel (params: Knn_GetModel.Knn_GetModel_Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_GetModel.Knn_GetModel_Response>;
    getModel (params: Knn_GetModel.Knn_GetModel_Request, callback: callbackFn<Knn_GetModel.Knn_GetModel_Response>): TransportRequestCallback;
    getModel (params: Knn_GetModel.Knn_GetModel_Request, options: TransportRequestOptions, callback: callbackFn<Knn_GetModel.Knn_GetModel_Response>): TransportRequestCallback;

    warmup (params: Knn_Warmup.Knn_Warmup_Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_Warmup.Knn_Warmup_Response>;
    warmup (params: Knn_Warmup.Knn_Warmup_Request, callback: callbackFn<Knn_Warmup.Knn_Warmup_Response>): TransportRequestCallback;
    warmup (params: Knn_Warmup.Knn_Warmup_Request, options: TransportRequestOptions, callback: callbackFn<Knn_Warmup.Knn_Warmup_Response>): TransportRequestCallback;

  };

  ml: {
    registerModelGroup (params?: Ml_RegisterModelGroup.Ml_RegisterModelGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_RegisterModelGroup.Ml_RegisterModelGroup_Response>;
    registerModelGroup (callback: callbackFn<Ml_RegisterModelGroup.Ml_RegisterModelGroup_Response>): TransportRequestCallback;
    registerModelGroup (params: Ml_RegisterModelGroup.Ml_RegisterModelGroup_Request, callback: callbackFn<Ml_RegisterModelGroup.Ml_RegisterModelGroup_Response>): TransportRequestCallback;
    registerModelGroup (params: Ml_RegisterModelGroup.Ml_RegisterModelGroup_Request, options: TransportRequestOptions, callback: callbackFn<Ml_RegisterModelGroup.Ml_RegisterModelGroup_Response>): TransportRequestCallback;

    deleteModelGroup (params: Ml_DeleteModelGroup.Ml_DeleteModelGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_DeleteModelGroup.Ml_DeleteModelGroup_Response>;
    deleteModelGroup (params: Ml_DeleteModelGroup.Ml_DeleteModelGroup_Request, callback: callbackFn<Ml_DeleteModelGroup.Ml_DeleteModelGroup_Response>): TransportRequestCallback;
    deleteModelGroup (params: Ml_DeleteModelGroup.Ml_DeleteModelGroup_Request, options: TransportRequestOptions, callback: callbackFn<Ml_DeleteModelGroup.Ml_DeleteModelGroup_Response>): TransportRequestCallback;

    getModelGroup (params: Ml_GetModelGroup.Ml_GetModelGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_GetModelGroup.Ml_GetModelGroup_Response>;
    getModelGroup (params: Ml_GetModelGroup.Ml_GetModelGroup_Request, callback: callbackFn<Ml_GetModelGroup.Ml_GetModelGroup_Response>): TransportRequestCallback;
    getModelGroup (params: Ml_GetModelGroup.Ml_GetModelGroup_Request, options: TransportRequestOptions, callback: callbackFn<Ml_GetModelGroup.Ml_GetModelGroup_Response>): TransportRequestCallback;

    registerModel (params?: Ml_RegisterModel.Ml_RegisterModel_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_RegisterModel.Ml_RegisterModel_Response>;
    registerModel (callback: callbackFn<Ml_RegisterModel.Ml_RegisterModel_Response>): TransportRequestCallback;
    registerModel (params: Ml_RegisterModel.Ml_RegisterModel_Request, callback: callbackFn<Ml_RegisterModel.Ml_RegisterModel_Response>): TransportRequestCallback;
    registerModel (params: Ml_RegisterModel.Ml_RegisterModel_Request, options: TransportRequestOptions, callback: callbackFn<Ml_RegisterModel.Ml_RegisterModel_Response>): TransportRequestCallback;

    searchModels (params?: Ml_SearchModels.Ml_SearchModels_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_SearchModels.Ml_SearchModels_Response>;
    searchModels (callback: callbackFn<Ml_SearchModels.Ml_SearchModels_Response>): TransportRequestCallback;
    searchModels (params: Ml_SearchModels.Ml_SearchModels_Request, callback: callbackFn<Ml_SearchModels.Ml_SearchModels_Response>): TransportRequestCallback;
    searchModels (params: Ml_SearchModels.Ml_SearchModels_Request, options: TransportRequestOptions, callback: callbackFn<Ml_SearchModels.Ml_SearchModels_Response>): TransportRequestCallback;

    deleteModel (params: Ml_DeleteModel.Ml_DeleteModel_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_DeleteModel.Ml_DeleteModel_Response>;
    deleteModel (params: Ml_DeleteModel.Ml_DeleteModel_Request, callback: callbackFn<Ml_DeleteModel.Ml_DeleteModel_Response>): TransportRequestCallback;
    deleteModel (params: Ml_DeleteModel.Ml_DeleteModel_Request, options: TransportRequestOptions, callback: callbackFn<Ml_DeleteModel.Ml_DeleteModel_Response>): TransportRequestCallback;

    getTask (params: Ml_GetTask.Ml_GetTask_Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_GetTask.Ml_GetTask_Response>;
    getTask (params: Ml_GetTask.Ml_GetTask_Request, callback: callbackFn<Ml_GetTask.Ml_GetTask_Response>): TransportRequestCallback;
    getTask (params: Ml_GetTask.Ml_GetTask_Request, options: TransportRequestOptions, callback: callbackFn<Ml_GetTask.Ml_GetTask_Response>): TransportRequestCallback;

  };

  nodes: {
    info (params?: Nodes_Info.Nodes_Info_Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_Info.Nodes_Info_Response>;
    info (callback: callbackFn<Nodes_Info.Nodes_Info_Response>): TransportRequestCallback;
    info (params: Nodes_Info.Nodes_Info_Request, callback: callbackFn<Nodes_Info.Nodes_Info_Response>): TransportRequestCallback;
    info (params: Nodes_Info.Nodes_Info_Request, options: TransportRequestOptions, callback: callbackFn<Nodes_Info.Nodes_Info_Response>): TransportRequestCallback;

    hotThreads (params?: Nodes_HotThreads.Nodes_HotThreads_Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_HotThreads.Nodes_HotThreads_Response>;
    hotThreads (callback: callbackFn<Nodes_HotThreads.Nodes_HotThreads_Response>): TransportRequestCallback;
    hotThreads (params: Nodes_HotThreads.Nodes_HotThreads_Request, callback: callbackFn<Nodes_HotThreads.Nodes_HotThreads_Response>): TransportRequestCallback;
    hotThreads (params: Nodes_HotThreads.Nodes_HotThreads_Request, options: TransportRequestOptions, callback: callbackFn<Nodes_HotThreads.Nodes_HotThreads_Response>): TransportRequestCallback;

    reloadSecureSettings (params?: Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Response>;
    reloadSecureSettings (callback: callbackFn<Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Response>): TransportRequestCallback;
    reloadSecureSettings (params: Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Request, callback: callbackFn<Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Response>): TransportRequestCallback;
    reloadSecureSettings (params: Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Request, options: TransportRequestOptions, callback: callbackFn<Nodes_ReloadSecureSettings.Nodes_ReloadSecureSettings_Response>): TransportRequestCallback;

    stats (params?: Nodes_Stats.Nodes_Stats_Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_Stats.Nodes_Stats_Response>;
    stats (callback: callbackFn<Nodes_Stats.Nodes_Stats_Response>): TransportRequestCallback;
    stats (params: Nodes_Stats.Nodes_Stats_Request, callback: callbackFn<Nodes_Stats.Nodes_Stats_Response>): TransportRequestCallback;
    stats (params: Nodes_Stats.Nodes_Stats_Request, options: TransportRequestOptions, callback: callbackFn<Nodes_Stats.Nodes_Stats_Response>): TransportRequestCallback;

    usage (params?: Nodes_Usage.Nodes_Usage_Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_Usage.Nodes_Usage_Response>;
    usage (callback: callbackFn<Nodes_Usage.Nodes_Usage_Response>): TransportRequestCallback;
    usage (params: Nodes_Usage.Nodes_Usage_Request, callback: callbackFn<Nodes_Usage.Nodes_Usage_Response>): TransportRequestCallback;
    usage (params: Nodes_Usage.Nodes_Usage_Request, options: TransportRequestOptions, callback: callbackFn<Nodes_Usage.Nodes_Usage_Response>): TransportRequestCallback;

  };

  notifications: {
    listChannels (params?: Notifications_ListChannels.Notifications_ListChannels_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_ListChannels.Notifications_ListChannels_Response>;
    listChannels (callback: callbackFn<Notifications_ListChannels.Notifications_ListChannels_Response>): TransportRequestCallback;
    listChannels (params: Notifications_ListChannels.Notifications_ListChannels_Request, callback: callbackFn<Notifications_ListChannels.Notifications_ListChannels_Response>): TransportRequestCallback;
    listChannels (params: Notifications_ListChannels.Notifications_ListChannels_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_ListChannels.Notifications_ListChannels_Response>): TransportRequestCallback;

    deleteConfigs (params: Notifications_DeleteConfigs.Notifications_DeleteConfigs_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_DeleteConfigs.Notifications_DeleteConfigs_Response>;
    deleteConfigs (params: Notifications_DeleteConfigs.Notifications_DeleteConfigs_Request, callback: callbackFn<Notifications_DeleteConfigs.Notifications_DeleteConfigs_Response>): TransportRequestCallback;
    deleteConfigs (params: Notifications_DeleteConfigs.Notifications_DeleteConfigs_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_DeleteConfigs.Notifications_DeleteConfigs_Response>): TransportRequestCallback;

    getConfigs (params?: Notifications_GetConfigs.Notifications_GetConfigs_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_GetConfigs.Notifications_GetConfigs_Response>;
    getConfigs (callback: callbackFn<Notifications_GetConfigs.Notifications_GetConfigs_Response>): TransportRequestCallback;
    getConfigs (params: Notifications_GetConfigs.Notifications_GetConfigs_Request, callback: callbackFn<Notifications_GetConfigs.Notifications_GetConfigs_Response>): TransportRequestCallback;
    getConfigs (params: Notifications_GetConfigs.Notifications_GetConfigs_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_GetConfigs.Notifications_GetConfigs_Response>): TransportRequestCallback;

    createConfig (params: Notifications_CreateConfig.Notifications_CreateConfig_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_CreateConfig.Notifications_CreateConfig_Response>;
    createConfig (params: Notifications_CreateConfig.Notifications_CreateConfig_Request, callback: callbackFn<Notifications_CreateConfig.Notifications_CreateConfig_Response>): TransportRequestCallback;
    createConfig (params: Notifications_CreateConfig.Notifications_CreateConfig_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_CreateConfig.Notifications_CreateConfig_Response>): TransportRequestCallback;

    deleteConfig (params: Notifications_DeleteConfig.Notifications_DeleteConfig_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_DeleteConfig.Notifications_DeleteConfig_Response>;
    deleteConfig (params: Notifications_DeleteConfig.Notifications_DeleteConfig_Request, callback: callbackFn<Notifications_DeleteConfig.Notifications_DeleteConfig_Response>): TransportRequestCallback;
    deleteConfig (params: Notifications_DeleteConfig.Notifications_DeleteConfig_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_DeleteConfig.Notifications_DeleteConfig_Response>): TransportRequestCallback;

    getConfig (params: Notifications_GetConfig.Notifications_GetConfig_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_GetConfig.Notifications_GetConfig_Response>;
    getConfig (params: Notifications_GetConfig.Notifications_GetConfig_Request, callback: callbackFn<Notifications_GetConfig.Notifications_GetConfig_Response>): TransportRequestCallback;
    getConfig (params: Notifications_GetConfig.Notifications_GetConfig_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_GetConfig.Notifications_GetConfig_Response>): TransportRequestCallback;

    updateConfig (params: Notifications_UpdateConfig.Notifications_UpdateConfig_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_UpdateConfig.Notifications_UpdateConfig_Response>;
    updateConfig (params: Notifications_UpdateConfig.Notifications_UpdateConfig_Request, callback: callbackFn<Notifications_UpdateConfig.Notifications_UpdateConfig_Response>): TransportRequestCallback;
    updateConfig (params: Notifications_UpdateConfig.Notifications_UpdateConfig_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_UpdateConfig.Notifications_UpdateConfig_Response>): TransportRequestCallback;

    sendTest (params: Notifications_SendTest.Notifications_SendTest_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_SendTest.Notifications_SendTest_Response>;
    sendTest (params: Notifications_SendTest.Notifications_SendTest_Request, callback: callbackFn<Notifications_SendTest.Notifications_SendTest_Response>): TransportRequestCallback;
    sendTest (params: Notifications_SendTest.Notifications_SendTest_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_SendTest.Notifications_SendTest_Response>): TransportRequestCallback;

    listFeatures (params?: Notifications_ListFeatures.Notifications_ListFeatures_Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_ListFeatures.Notifications_ListFeatures_Response>;
    listFeatures (callback: callbackFn<Notifications_ListFeatures.Notifications_ListFeatures_Response>): TransportRequestCallback;
    listFeatures (params: Notifications_ListFeatures.Notifications_ListFeatures_Request, callback: callbackFn<Notifications_ListFeatures.Notifications_ListFeatures_Response>): TransportRequestCallback;
    listFeatures (params: Notifications_ListFeatures.Notifications_ListFeatures_Request, options: TransportRequestOptions, callback: callbackFn<Notifications_ListFeatures.Notifications_ListFeatures_Response>): TransportRequestCallback;

  };

  ppl: {
    query (params: Ppl_Query.Ppl_Query_Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_Query.Ppl_Query_Response>;
    query (params: Ppl_Query.Ppl_Query_Request, callback: callbackFn<Ppl_Query.Ppl_Query_Response>): TransportRequestCallback;
    query (params: Ppl_Query.Ppl_Query_Request, options: TransportRequestOptions, callback: callbackFn<Ppl_Query.Ppl_Query_Response>): TransportRequestCallback;

    explain (params: Ppl_Explain.Ppl_Explain_Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_Explain.Ppl_Explain_Response>;
    explain (params: Ppl_Explain.Ppl_Explain_Request, callback: callbackFn<Ppl_Explain.Ppl_Explain_Response>): TransportRequestCallback;
    explain (params: Ppl_Explain.Ppl_Explain_Request, options: TransportRequestOptions, callback: callbackFn<Ppl_Explain.Ppl_Explain_Response>): TransportRequestCallback;

    getStats (params?: Ppl_GetStats.Ppl_GetStats_Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_GetStats.Ppl_GetStats_Response>;
    getStats (callback: callbackFn<Ppl_GetStats.Ppl_GetStats_Response>): TransportRequestCallback;
    getStats (params: Ppl_GetStats.Ppl_GetStats_Request, callback: callbackFn<Ppl_GetStats.Ppl_GetStats_Response>): TransportRequestCallback;
    getStats (params: Ppl_GetStats.Ppl_GetStats_Request, options: TransportRequestOptions, callback: callbackFn<Ppl_GetStats.Ppl_GetStats_Response>): TransportRequestCallback;

    postStats (params: Ppl_PostStats.Ppl_PostStats_Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_PostStats.Ppl_PostStats_Response>;
    postStats (params: Ppl_PostStats.Ppl_PostStats_Request, callback: callbackFn<Ppl_PostStats.Ppl_PostStats_Response>): TransportRequestCallback;
    postStats (params: Ppl_PostStats.Ppl_PostStats_Request, options: TransportRequestOptions, callback: callbackFn<Ppl_PostStats.Ppl_PostStats_Response>): TransportRequestCallback;

  };

  remote_store: {
    restore (params: RemoteStore_Restore.RemoteStore_Restore_Request, options?: TransportRequestOptions): TransportRequestPromise<RemoteStore_Restore.RemoteStore_Restore_Response>;
    restore (params: RemoteStore_Restore.RemoteStore_Restore_Request, callback: callbackFn<RemoteStore_Restore.RemoteStore_Restore_Response>): TransportRequestCallback;
    restore (params: RemoteStore_Restore.RemoteStore_Restore_Request, options: TransportRequestOptions, callback: callbackFn<RemoteStore_Restore.RemoteStore_Restore_Response>): TransportRequestCallback;

  };

  rollups: {
    delete (params: Rollups_Delete.Rollups_Delete_Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Delete.Rollups_Delete_Response>;
    delete (params: Rollups_Delete.Rollups_Delete_Request, callback: callbackFn<Rollups_Delete.Rollups_Delete_Response>): TransportRequestCallback;
    delete (params: Rollups_Delete.Rollups_Delete_Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Delete.Rollups_Delete_Response>): TransportRequestCallback;

    get (params: Rollups_Get.Rollups_Get_Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Get.Rollups_Get_Response>;
    get (params: Rollups_Get.Rollups_Get_Request, callback: callbackFn<Rollups_Get.Rollups_Get_Response>): TransportRequestCallback;
    get (params: Rollups_Get.Rollups_Get_Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Get.Rollups_Get_Response>): TransportRequestCallback;

    put (params: Rollups_Put.Rollups_Put_Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Put.Rollups_Put_Response>;
    put (params: Rollups_Put.Rollups_Put_Request, callback: callbackFn<Rollups_Put.Rollups_Put_Response>): TransportRequestCallback;
    put (params: Rollups_Put.Rollups_Put_Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Put.Rollups_Put_Response>): TransportRequestCallback;

    explain (params: Rollups_Explain.Rollups_Explain_Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Explain.Rollups_Explain_Response>;
    explain (params: Rollups_Explain.Rollups_Explain_Request, callback: callbackFn<Rollups_Explain.Rollups_Explain_Response>): TransportRequestCallback;
    explain (params: Rollups_Explain.Rollups_Explain_Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Explain.Rollups_Explain_Response>): TransportRequestCallback;

    start (params: Rollups_Start.Rollups_Start_Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Start.Rollups_Start_Response>;
    start (params: Rollups_Start.Rollups_Start_Request, callback: callbackFn<Rollups_Start.Rollups_Start_Response>): TransportRequestCallback;
    start (params: Rollups_Start.Rollups_Start_Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Start.Rollups_Start_Response>): TransportRequestCallback;

    stop (params: Rollups_Stop.Rollups_Stop_Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Stop.Rollups_Stop_Response>;
    stop (params: Rollups_Stop.Rollups_Stop_Request, callback: callbackFn<Rollups_Stop.Rollups_Stop_Response>): TransportRequestCallback;
    stop (params: Rollups_Stop.Rollups_Stop_Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Stop.Rollups_Stop_Response>): TransportRequestCallback;

  };

  search_pipeline: {
    get (params?: SearchPipeline_Get.SearchPipeline_Get_Request, options?: TransportRequestOptions): TransportRequestPromise<SearchPipeline_Get.SearchPipeline_Get_Response>;
    get (callback: callbackFn<SearchPipeline_Get.SearchPipeline_Get_Response>): TransportRequestCallback;
    get (params: SearchPipeline_Get.SearchPipeline_Get_Request, callback: callbackFn<SearchPipeline_Get.SearchPipeline_Get_Response>): TransportRequestCallback;
    get (params: SearchPipeline_Get.SearchPipeline_Get_Request, options: TransportRequestOptions, callback: callbackFn<SearchPipeline_Get.SearchPipeline_Get_Response>): TransportRequestCallback;

    delete (params: SearchPipeline_Delete.SearchPipeline_Delete_Request, options?: TransportRequestOptions): TransportRequestPromise<SearchPipeline_Delete.SearchPipeline_Delete_Response>;
    delete (params: SearchPipeline_Delete.SearchPipeline_Delete_Request, callback: callbackFn<SearchPipeline_Delete.SearchPipeline_Delete_Response>): TransportRequestCallback;
    delete (params: SearchPipeline_Delete.SearchPipeline_Delete_Request, options: TransportRequestOptions, callback: callbackFn<SearchPipeline_Delete.SearchPipeline_Delete_Response>): TransportRequestCallback;

    put (params: SearchPipeline_Put.SearchPipeline_Put_Request, options?: TransportRequestOptions): TransportRequestPromise<SearchPipeline_Put.SearchPipeline_Put_Response>;
    put (params: SearchPipeline_Put.SearchPipeline_Put_Request, callback: callbackFn<SearchPipeline_Put.SearchPipeline_Put_Response>): TransportRequestCallback;
    put (params: SearchPipeline_Put.SearchPipeline_Put_Request, options: TransportRequestOptions, callback: callbackFn<SearchPipeline_Put.SearchPipeline_Put_Response>): TransportRequestCallback;

  };

  security: {
    getSslinfo (params?: Security_GetSslinfo.Security_GetSslinfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetSslinfo.Security_GetSslinfo_Response>;
    getSslinfo (callback: callbackFn<Security_GetSslinfo.Security_GetSslinfo_Response>): TransportRequestCallback;
    getSslinfo (params: Security_GetSslinfo.Security_GetSslinfo_Request, callback: callbackFn<Security_GetSslinfo.Security_GetSslinfo_Response>): TransportRequestCallback;
    getSslinfo (params: Security_GetSslinfo.Security_GetSslinfo_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetSslinfo.Security_GetSslinfo_Response>): TransportRequestCallback;

    configUpgradeCheck (params?: Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Response>;
    configUpgradeCheck (callback: callbackFn<Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Response>): TransportRequestCallback;
    configUpgradeCheck (params: Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Request, callback: callbackFn<Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Response>): TransportRequestCallback;
    configUpgradeCheck (params: Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Request, options: TransportRequestOptions, callback: callbackFn<Security_ConfigUpgradeCheck.Security_ConfigUpgradeCheck_Response>): TransportRequestCallback;

    configUpgradePerform (params?: Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Response>;
    configUpgradePerform (callback: callbackFn<Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Response>): TransportRequestCallback;
    configUpgradePerform (params: Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Request, callback: callbackFn<Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Response>): TransportRequestCallback;
    configUpgradePerform (params: Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Request, options: TransportRequestOptions, callback: callbackFn<Security_ConfigUpgradePerform.Security_ConfigUpgradePerform_Response>): TransportRequestCallback;

    getAccountDetails (params?: Security_GetAccountDetails.Security_GetAccountDetails_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetAccountDetails.Security_GetAccountDetails_Response>;
    getAccountDetails (callback: callbackFn<Security_GetAccountDetails.Security_GetAccountDetails_Response>): TransportRequestCallback;
    getAccountDetails (params: Security_GetAccountDetails.Security_GetAccountDetails_Request, callback: callbackFn<Security_GetAccountDetails.Security_GetAccountDetails_Response>): TransportRequestCallback;
    getAccountDetails (params: Security_GetAccountDetails.Security_GetAccountDetails_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetAccountDetails.Security_GetAccountDetails_Response>): TransportRequestCallback;

    changePassword (params: Security_ChangePassword.Security_ChangePassword_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ChangePassword.Security_ChangePassword_Response>;
    changePassword (params: Security_ChangePassword.Security_ChangePassword_Request, callback: callbackFn<Security_ChangePassword.Security_ChangePassword_Response>): TransportRequestCallback;
    changePassword (params: Security_ChangePassword.Security_ChangePassword_Request, options: TransportRequestOptions, callback: callbackFn<Security_ChangePassword.Security_ChangePassword_Response>): TransportRequestCallback;

    getActionGroups (params?: Security_GetActionGroups.Security_GetActionGroups_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetActionGroups.Security_GetActionGroups_Response>;
    getActionGroups (callback: callbackFn<Security_GetActionGroups.Security_GetActionGroups_Response>): TransportRequestCallback;
    getActionGroups (params: Security_GetActionGroups.Security_GetActionGroups_Request, callback: callbackFn<Security_GetActionGroups.Security_GetActionGroups_Response>): TransportRequestCallback;
    getActionGroups (params: Security_GetActionGroups.Security_GetActionGroups_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetActionGroups.Security_GetActionGroups_Response>): TransportRequestCallback;

    patchActionGroups (params: Security_PatchActionGroups.Security_PatchActionGroups_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchActionGroups.Security_PatchActionGroups_Response>;
    patchActionGroups (params: Security_PatchActionGroups.Security_PatchActionGroups_Request, callback: callbackFn<Security_PatchActionGroups.Security_PatchActionGroups_Response>): TransportRequestCallback;
    patchActionGroups (params: Security_PatchActionGroups.Security_PatchActionGroups_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchActionGroups.Security_PatchActionGroups_Response>): TransportRequestCallback;

    deleteActionGroup (params: Security_DeleteActionGroup.Security_DeleteActionGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteActionGroup.Security_DeleteActionGroup_Response>;
    deleteActionGroup (params: Security_DeleteActionGroup.Security_DeleteActionGroup_Request, callback: callbackFn<Security_DeleteActionGroup.Security_DeleteActionGroup_Response>): TransportRequestCallback;
    deleteActionGroup (params: Security_DeleteActionGroup.Security_DeleteActionGroup_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteActionGroup.Security_DeleteActionGroup_Response>): TransportRequestCallback;

    getActionGroup (params: Security_GetActionGroup.Security_GetActionGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetActionGroup.Security_GetActionGroup_Response>;
    getActionGroup (params: Security_GetActionGroup.Security_GetActionGroup_Request, callback: callbackFn<Security_GetActionGroup.Security_GetActionGroup_Response>): TransportRequestCallback;
    getActionGroup (params: Security_GetActionGroup.Security_GetActionGroup_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetActionGroup.Security_GetActionGroup_Response>): TransportRequestCallback;

    patchActionGroup (params: Security_PatchActionGroup.Security_PatchActionGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchActionGroup.Security_PatchActionGroup_Response>;
    patchActionGroup (params: Security_PatchActionGroup.Security_PatchActionGroup_Request, callback: callbackFn<Security_PatchActionGroup.Security_PatchActionGroup_Response>): TransportRequestCallback;
    patchActionGroup (params: Security_PatchActionGroup.Security_PatchActionGroup_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchActionGroup.Security_PatchActionGroup_Response>): TransportRequestCallback;

    createActionGroup (params: Security_CreateActionGroup.Security_CreateActionGroup_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateActionGroup.Security_CreateActionGroup_Response>;
    createActionGroup (params: Security_CreateActionGroup.Security_CreateActionGroup_Request, callback: callbackFn<Security_CreateActionGroup.Security_CreateActionGroup_Response>): TransportRequestCallback;
    createActionGroup (params: Security_CreateActionGroup.Security_CreateActionGroup_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateActionGroup.Security_CreateActionGroup_Response>): TransportRequestCallback;

    getAllowlist (params?: Security_GetAllowlist.Security_GetAllowlist_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetAllowlist.Security_GetAllowlist_Response>;
    getAllowlist (callback: callbackFn<Security_GetAllowlist.Security_GetAllowlist_Response>): TransportRequestCallback;
    getAllowlist (params: Security_GetAllowlist.Security_GetAllowlist_Request, callback: callbackFn<Security_GetAllowlist.Security_GetAllowlist_Response>): TransportRequestCallback;
    getAllowlist (params: Security_GetAllowlist.Security_GetAllowlist_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetAllowlist.Security_GetAllowlist_Response>): TransportRequestCallback;

    patchAllowlist (params: Security_PatchAllowlist.Security_PatchAllowlist_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchAllowlist.Security_PatchAllowlist_Response>;
    patchAllowlist (params: Security_PatchAllowlist.Security_PatchAllowlist_Request, callback: callbackFn<Security_PatchAllowlist.Security_PatchAllowlist_Response>): TransportRequestCallback;
    patchAllowlist (params: Security_PatchAllowlist.Security_PatchAllowlist_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchAllowlist.Security_PatchAllowlist_Response>): TransportRequestCallback;

    createAllowlist (params: Security_CreateAllowlist.Security_CreateAllowlist_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateAllowlist.Security_CreateAllowlist_Response>;
    createAllowlist (params: Security_CreateAllowlist.Security_CreateAllowlist_Request, callback: callbackFn<Security_CreateAllowlist.Security_CreateAllowlist_Response>): TransportRequestCallback;
    createAllowlist (params: Security_CreateAllowlist.Security_CreateAllowlist_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateAllowlist.Security_CreateAllowlist_Response>): TransportRequestCallback;

    getAuditConfiguration (params?: Security_GetAuditConfiguration.Security_GetAuditConfiguration_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetAuditConfiguration.Security_GetAuditConfiguration_Response>;
    getAuditConfiguration (callback: callbackFn<Security_GetAuditConfiguration.Security_GetAuditConfiguration_Response>): TransportRequestCallback;
    getAuditConfiguration (params: Security_GetAuditConfiguration.Security_GetAuditConfiguration_Request, callback: callbackFn<Security_GetAuditConfiguration.Security_GetAuditConfiguration_Response>): TransportRequestCallback;
    getAuditConfiguration (params: Security_GetAuditConfiguration.Security_GetAuditConfiguration_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetAuditConfiguration.Security_GetAuditConfiguration_Response>): TransportRequestCallback;

    patchAuditConfiguration (params: Security_PatchAuditConfiguration.Security_PatchAuditConfiguration_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchAuditConfiguration.Security_PatchAuditConfiguration_Response>;
    patchAuditConfiguration (params: Security_PatchAuditConfiguration.Security_PatchAuditConfiguration_Request, callback: callbackFn<Security_PatchAuditConfiguration.Security_PatchAuditConfiguration_Response>): TransportRequestCallback;
    patchAuditConfiguration (params: Security_PatchAuditConfiguration.Security_PatchAuditConfiguration_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchAuditConfiguration.Security_PatchAuditConfiguration_Response>): TransportRequestCallback;

    updateAuditConfiguration (params: Security_UpdateAuditConfiguration.Security_UpdateAuditConfiguration_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_UpdateAuditConfiguration.Security_UpdateAuditConfiguration_Response>;
    updateAuditConfiguration (params: Security_UpdateAuditConfiguration.Security_UpdateAuditConfiguration_Request, callback: callbackFn<Security_UpdateAuditConfiguration.Security_UpdateAuditConfiguration_Response>): TransportRequestCallback;
    updateAuditConfiguration (params: Security_UpdateAuditConfiguration.Security_UpdateAuditConfiguration_Request, options: TransportRequestOptions, callback: callbackFn<Security_UpdateAuditConfiguration.Security_UpdateAuditConfiguration_Response>): TransportRequestCallback;

    authtoken (params?: Security_Authtoken.Security_Authtoken_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Authtoken.Security_Authtoken_Response>;
    authtoken (callback: callbackFn<Security_Authtoken.Security_Authtoken_Response>): TransportRequestCallback;
    authtoken (params: Security_Authtoken.Security_Authtoken_Request, callback: callbackFn<Security_Authtoken.Security_Authtoken_Response>): TransportRequestCallback;
    authtoken (params: Security_Authtoken.Security_Authtoken_Request, options: TransportRequestOptions, callback: callbackFn<Security_Authtoken.Security_Authtoken_Response>): TransportRequestCallback;

    flushCache (params?: Security_FlushCache.Security_FlushCache_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_FlushCache.Security_FlushCache_Response>;
    flushCache (callback: callbackFn<Security_FlushCache.Security_FlushCache_Response>): TransportRequestCallback;
    flushCache (params: Security_FlushCache.Security_FlushCache_Request, callback: callbackFn<Security_FlushCache.Security_FlushCache_Response>): TransportRequestCallback;
    flushCache (params: Security_FlushCache.Security_FlushCache_Request, options: TransportRequestOptions, callback: callbackFn<Security_FlushCache.Security_FlushCache_Response>): TransportRequestCallback;

    generateOboToken (params: Security_GenerateOboToken.Security_GenerateOboToken_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GenerateOboToken.Security_GenerateOboToken_Response>;
    generateOboToken (params: Security_GenerateOboToken.Security_GenerateOboToken_Request, callback: callbackFn<Security_GenerateOboToken.Security_GenerateOboToken_Response>): TransportRequestCallback;
    generateOboToken (params: Security_GenerateOboToken.Security_GenerateOboToken_Request, options: TransportRequestOptions, callback: callbackFn<Security_GenerateOboToken.Security_GenerateOboToken_Response>): TransportRequestCallback;

    getUsers (params?: Security_GetUsers.Security_GetUsers_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUsers.Security_GetUsers_Response>;
    getUsers (callback: callbackFn<Security_GetUsers.Security_GetUsers_Response>): TransportRequestCallback;
    getUsers (params: Security_GetUsers.Security_GetUsers_Request, callback: callbackFn<Security_GetUsers.Security_GetUsers_Response>): TransportRequestCallback;
    getUsers (params: Security_GetUsers.Security_GetUsers_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUsers.Security_GetUsers_Response>): TransportRequestCallback;

    patchUsers (params: Security_PatchUsers.Security_PatchUsers_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchUsers.Security_PatchUsers_Response>;
    patchUsers (params: Security_PatchUsers.Security_PatchUsers_Request, callback: callbackFn<Security_PatchUsers.Security_PatchUsers_Response>): TransportRequestCallback;
    patchUsers (params: Security_PatchUsers.Security_PatchUsers_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchUsers.Security_PatchUsers_Response>): TransportRequestCallback;

    deleteUser (params: Security_DeleteUser.Security_DeleteUser_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteUser.Security_DeleteUser_Response>;
    deleteUser (params: Security_DeleteUser.Security_DeleteUser_Request, callback: callbackFn<Security_DeleteUser.Security_DeleteUser_Response>): TransportRequestCallback;
    deleteUser (params: Security_DeleteUser.Security_DeleteUser_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteUser.Security_DeleteUser_Response>): TransportRequestCallback;

    getUser (params: Security_GetUser.Security_GetUser_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUser.Security_GetUser_Response>;
    getUser (params: Security_GetUser.Security_GetUser_Request, callback: callbackFn<Security_GetUser.Security_GetUser_Response>): TransportRequestCallback;
    getUser (params: Security_GetUser.Security_GetUser_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUser.Security_GetUser_Response>): TransportRequestCallback;

    patchUser (params: Security_PatchUser.Security_PatchUser_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchUser.Security_PatchUser_Response>;
    patchUser (params: Security_PatchUser.Security_PatchUser_Request, callback: callbackFn<Security_PatchUser.Security_PatchUser_Response>): TransportRequestCallback;
    patchUser (params: Security_PatchUser.Security_PatchUser_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchUser.Security_PatchUser_Response>): TransportRequestCallback;

    createUser (params: Security_CreateUser.Security_CreateUser_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateUser.Security_CreateUser_Response>;
    createUser (params: Security_CreateUser.Security_CreateUser_Request, callback: callbackFn<Security_CreateUser.Security_CreateUser_Response>): TransportRequestCallback;
    createUser (params: Security_CreateUser.Security_CreateUser_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateUser.Security_CreateUser_Response>): TransportRequestCallback;

    generateUserToken (params: Security_GenerateUserToken.Security_GenerateUserToken_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GenerateUserToken.Security_GenerateUserToken_Response>;
    generateUserToken (params: Security_GenerateUserToken.Security_GenerateUserToken_Request, callback: callbackFn<Security_GenerateUserToken.Security_GenerateUserToken_Response>): TransportRequestCallback;
    generateUserToken (params: Security_GenerateUserToken.Security_GenerateUserToken_Request, options: TransportRequestOptions, callback: callbackFn<Security_GenerateUserToken.Security_GenerateUserToken_Response>): TransportRequestCallback;

    migrate (params?: Security_Migrate.Security_Migrate_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Migrate.Security_Migrate_Response>;
    migrate (callback: callbackFn<Security_Migrate.Security_Migrate_Response>): TransportRequestCallback;
    migrate (params: Security_Migrate.Security_Migrate_Request, callback: callbackFn<Security_Migrate.Security_Migrate_Response>): TransportRequestCallback;
    migrate (params: Security_Migrate.Security_Migrate_Request, options: TransportRequestOptions, callback: callbackFn<Security_Migrate.Security_Migrate_Response>): TransportRequestCallback;

    getDistinguishedNames (params?: Security_GetDistinguishedNames.Security_GetDistinguishedNames_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetDistinguishedNames.Security_GetDistinguishedNames_Response>;
    getDistinguishedNames (callback: callbackFn<Security_GetDistinguishedNames.Security_GetDistinguishedNames_Response>): TransportRequestCallback;
    getDistinguishedNames (params: Security_GetDistinguishedNames.Security_GetDistinguishedNames_Request, callback: callbackFn<Security_GetDistinguishedNames.Security_GetDistinguishedNames_Response>): TransportRequestCallback;
    getDistinguishedNames (params: Security_GetDistinguishedNames.Security_GetDistinguishedNames_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetDistinguishedNames.Security_GetDistinguishedNames_Response>): TransportRequestCallback;

    patchDistinguishedNames (params: Security_PatchDistinguishedNames.Security_PatchDistinguishedNames_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchDistinguishedNames.Security_PatchDistinguishedNames_Response>;
    patchDistinguishedNames (params: Security_PatchDistinguishedNames.Security_PatchDistinguishedNames_Request, callback: callbackFn<Security_PatchDistinguishedNames.Security_PatchDistinguishedNames_Response>): TransportRequestCallback;
    patchDistinguishedNames (params: Security_PatchDistinguishedNames.Security_PatchDistinguishedNames_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchDistinguishedNames.Security_PatchDistinguishedNames_Response>): TransportRequestCallback;

    deleteDistinguishedName (params: Security_DeleteDistinguishedName.Security_DeleteDistinguishedName_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteDistinguishedName.Security_DeleteDistinguishedName_Response>;
    deleteDistinguishedName (params: Security_DeleteDistinguishedName.Security_DeleteDistinguishedName_Request, callback: callbackFn<Security_DeleteDistinguishedName.Security_DeleteDistinguishedName_Response>): TransportRequestCallback;
    deleteDistinguishedName (params: Security_DeleteDistinguishedName.Security_DeleteDistinguishedName_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteDistinguishedName.Security_DeleteDistinguishedName_Response>): TransportRequestCallback;

    getDistinguishedName (params: Security_GetDistinguishedName.Security_GetDistinguishedName_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetDistinguishedName.Security_GetDistinguishedName_Response>;
    getDistinguishedName (params: Security_GetDistinguishedName.Security_GetDistinguishedName_Request, callback: callbackFn<Security_GetDistinguishedName.Security_GetDistinguishedName_Response>): TransportRequestCallback;
    getDistinguishedName (params: Security_GetDistinguishedName.Security_GetDistinguishedName_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetDistinguishedName.Security_GetDistinguishedName_Response>): TransportRequestCallback;

    patchDistinguishedName (params: Security_PatchDistinguishedName.Security_PatchDistinguishedName_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchDistinguishedName.Security_PatchDistinguishedName_Response>;
    patchDistinguishedName (params: Security_PatchDistinguishedName.Security_PatchDistinguishedName_Request, callback: callbackFn<Security_PatchDistinguishedName.Security_PatchDistinguishedName_Response>): TransportRequestCallback;
    patchDistinguishedName (params: Security_PatchDistinguishedName.Security_PatchDistinguishedName_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchDistinguishedName.Security_PatchDistinguishedName_Response>): TransportRequestCallback;

    updateDistinguishedName (params: Security_UpdateDistinguishedName.Security_UpdateDistinguishedName_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_UpdateDistinguishedName.Security_UpdateDistinguishedName_Response>;
    updateDistinguishedName (params: Security_UpdateDistinguishedName.Security_UpdateDistinguishedName_Request, callback: callbackFn<Security_UpdateDistinguishedName.Security_UpdateDistinguishedName_Response>): TransportRequestCallback;
    updateDistinguishedName (params: Security_UpdateDistinguishedName.Security_UpdateDistinguishedName_Request, options: TransportRequestOptions, callback: callbackFn<Security_UpdateDistinguishedName.Security_UpdateDistinguishedName_Response>): TransportRequestCallback;

    getPermissionsInfo (params?: Security_GetPermissionsInfo.Security_GetPermissionsInfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetPermissionsInfo.Security_GetPermissionsInfo_Response>;
    getPermissionsInfo (callback: callbackFn<Security_GetPermissionsInfo.Security_GetPermissionsInfo_Response>): TransportRequestCallback;
    getPermissionsInfo (params: Security_GetPermissionsInfo.Security_GetPermissionsInfo_Request, callback: callbackFn<Security_GetPermissionsInfo.Security_GetPermissionsInfo_Response>): TransportRequestCallback;
    getPermissionsInfo (params: Security_GetPermissionsInfo.Security_GetPermissionsInfo_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetPermissionsInfo.Security_GetPermissionsInfo_Response>): TransportRequestCallback;

    getRoles (params?: Security_GetRoles.Security_GetRoles_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRoles.Security_GetRoles_Response>;
    getRoles (callback: callbackFn<Security_GetRoles.Security_GetRoles_Response>): TransportRequestCallback;
    getRoles (params: Security_GetRoles.Security_GetRoles_Request, callback: callbackFn<Security_GetRoles.Security_GetRoles_Response>): TransportRequestCallback;
    getRoles (params: Security_GetRoles.Security_GetRoles_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRoles.Security_GetRoles_Response>): TransportRequestCallback;

    patchRoles (params: Security_PatchRoles.Security_PatchRoles_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRoles.Security_PatchRoles_Response>;
    patchRoles (params: Security_PatchRoles.Security_PatchRoles_Request, callback: callbackFn<Security_PatchRoles.Security_PatchRoles_Response>): TransportRequestCallback;
    patchRoles (params: Security_PatchRoles.Security_PatchRoles_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRoles.Security_PatchRoles_Response>): TransportRequestCallback;

    deleteRole (params: Security_DeleteRole.Security_DeleteRole_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteRole.Security_DeleteRole_Response>;
    deleteRole (params: Security_DeleteRole.Security_DeleteRole_Request, callback: callbackFn<Security_DeleteRole.Security_DeleteRole_Response>): TransportRequestCallback;
    deleteRole (params: Security_DeleteRole.Security_DeleteRole_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteRole.Security_DeleteRole_Response>): TransportRequestCallback;

    getRole (params: Security_GetRole.Security_GetRole_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRole.Security_GetRole_Response>;
    getRole (params: Security_GetRole.Security_GetRole_Request, callback: callbackFn<Security_GetRole.Security_GetRole_Response>): TransportRequestCallback;
    getRole (params: Security_GetRole.Security_GetRole_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRole.Security_GetRole_Response>): TransportRequestCallback;

    patchRole (params: Security_PatchRole.Security_PatchRole_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRole.Security_PatchRole_Response>;
    patchRole (params: Security_PatchRole.Security_PatchRole_Request, callback: callbackFn<Security_PatchRole.Security_PatchRole_Response>): TransportRequestCallback;
    patchRole (params: Security_PatchRole.Security_PatchRole_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRole.Security_PatchRole_Response>): TransportRequestCallback;

    createRole (params: Security_CreateRole.Security_CreateRole_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateRole.Security_CreateRole_Response>;
    createRole (params: Security_CreateRole.Security_CreateRole_Request, callback: callbackFn<Security_CreateRole.Security_CreateRole_Response>): TransportRequestCallback;
    createRole (params: Security_CreateRole.Security_CreateRole_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateRole.Security_CreateRole_Response>): TransportRequestCallback;

    getRoleMappings (params?: Security_GetRoleMappings.Security_GetRoleMappings_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRoleMappings.Security_GetRoleMappings_Response>;
    getRoleMappings (callback: callbackFn<Security_GetRoleMappings.Security_GetRoleMappings_Response>): TransportRequestCallback;
    getRoleMappings (params: Security_GetRoleMappings.Security_GetRoleMappings_Request, callback: callbackFn<Security_GetRoleMappings.Security_GetRoleMappings_Response>): TransportRequestCallback;
    getRoleMappings (params: Security_GetRoleMappings.Security_GetRoleMappings_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRoleMappings.Security_GetRoleMappings_Response>): TransportRequestCallback;

    patchRoleMappings (params: Security_PatchRoleMappings.Security_PatchRoleMappings_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRoleMappings.Security_PatchRoleMappings_Response>;
    patchRoleMappings (params: Security_PatchRoleMappings.Security_PatchRoleMappings_Request, callback: callbackFn<Security_PatchRoleMappings.Security_PatchRoleMappings_Response>): TransportRequestCallback;
    patchRoleMappings (params: Security_PatchRoleMappings.Security_PatchRoleMappings_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRoleMappings.Security_PatchRoleMappings_Response>): TransportRequestCallback;

    deleteRoleMapping (params: Security_DeleteRoleMapping.Security_DeleteRoleMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteRoleMapping.Security_DeleteRoleMapping_Response>;
    deleteRoleMapping (params: Security_DeleteRoleMapping.Security_DeleteRoleMapping_Request, callback: callbackFn<Security_DeleteRoleMapping.Security_DeleteRoleMapping_Response>): TransportRequestCallback;
    deleteRoleMapping (params: Security_DeleteRoleMapping.Security_DeleteRoleMapping_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteRoleMapping.Security_DeleteRoleMapping_Response>): TransportRequestCallback;

    getRoleMapping (params: Security_GetRoleMapping.Security_GetRoleMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRoleMapping.Security_GetRoleMapping_Response>;
    getRoleMapping (params: Security_GetRoleMapping.Security_GetRoleMapping_Request, callback: callbackFn<Security_GetRoleMapping.Security_GetRoleMapping_Response>): TransportRequestCallback;
    getRoleMapping (params: Security_GetRoleMapping.Security_GetRoleMapping_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRoleMapping.Security_GetRoleMapping_Response>): TransportRequestCallback;

    patchRoleMapping (params: Security_PatchRoleMapping.Security_PatchRoleMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRoleMapping.Security_PatchRoleMapping_Response>;
    patchRoleMapping (params: Security_PatchRoleMapping.Security_PatchRoleMapping_Request, callback: callbackFn<Security_PatchRoleMapping.Security_PatchRoleMapping_Response>): TransportRequestCallback;
    patchRoleMapping (params: Security_PatchRoleMapping.Security_PatchRoleMapping_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRoleMapping.Security_PatchRoleMapping_Response>): TransportRequestCallback;

    createRoleMapping (params: Security_CreateRoleMapping.Security_CreateRoleMapping_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateRoleMapping.Security_CreateRoleMapping_Response>;
    createRoleMapping (params: Security_CreateRoleMapping.Security_CreateRoleMapping_Request, callback: callbackFn<Security_CreateRoleMapping.Security_CreateRoleMapping_Response>): TransportRequestCallback;
    createRoleMapping (params: Security_CreateRoleMapping.Security_CreateRoleMapping_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateRoleMapping.Security_CreateRoleMapping_Response>): TransportRequestCallback;

    getConfiguration (params?: Security_GetConfiguration.Security_GetConfiguration_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetConfiguration.Security_GetConfiguration_Response>;
    getConfiguration (callback: callbackFn<Security_GetConfiguration.Security_GetConfiguration_Response>): TransportRequestCallback;
    getConfiguration (params: Security_GetConfiguration.Security_GetConfiguration_Request, callback: callbackFn<Security_GetConfiguration.Security_GetConfiguration_Response>): TransportRequestCallback;
    getConfiguration (params: Security_GetConfiguration.Security_GetConfiguration_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetConfiguration.Security_GetConfiguration_Response>): TransportRequestCallback;

    patchConfiguration (params: Security_PatchConfiguration.Security_PatchConfiguration_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchConfiguration.Security_PatchConfiguration_Response>;
    patchConfiguration (params: Security_PatchConfiguration.Security_PatchConfiguration_Request, callback: callbackFn<Security_PatchConfiguration.Security_PatchConfiguration_Response>): TransportRequestCallback;
    patchConfiguration (params: Security_PatchConfiguration.Security_PatchConfiguration_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchConfiguration.Security_PatchConfiguration_Response>): TransportRequestCallback;

    updateConfiguration (params: Security_UpdateConfiguration.Security_UpdateConfiguration_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_UpdateConfiguration.Security_UpdateConfiguration_Response>;
    updateConfiguration (params: Security_UpdateConfiguration.Security_UpdateConfiguration_Request, callback: callbackFn<Security_UpdateConfiguration.Security_UpdateConfiguration_Response>): TransportRequestCallback;
    updateConfiguration (params: Security_UpdateConfiguration.Security_UpdateConfiguration_Request, options: TransportRequestOptions, callback: callbackFn<Security_UpdateConfiguration.Security_UpdateConfiguration_Response>): TransportRequestCallback;

    getCertificates (params?: Security_GetCertificates.Security_GetCertificates_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetCertificates.Security_GetCertificates_Response>;
    getCertificates (callback: callbackFn<Security_GetCertificates.Security_GetCertificates_Response>): TransportRequestCallback;
    getCertificates (params: Security_GetCertificates.Security_GetCertificates_Request, callback: callbackFn<Security_GetCertificates.Security_GetCertificates_Response>): TransportRequestCallback;
    getCertificates (params: Security_GetCertificates.Security_GetCertificates_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetCertificates.Security_GetCertificates_Response>): TransportRequestCallback;

    reloadHttpCertificates (params?: Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Response>;
    reloadHttpCertificates (callback: callbackFn<Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Response>): TransportRequestCallback;
    reloadHttpCertificates (params: Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Request, callback: callbackFn<Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Response>): TransportRequestCallback;
    reloadHttpCertificates (params: Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Request, options: TransportRequestOptions, callback: callbackFn<Security_ReloadHttpCertificates.Security_ReloadHttpCertificates_Response>): TransportRequestCallback;

    reloadTransportCertificates (params?: Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Response>;
    reloadTransportCertificates (callback: callbackFn<Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Response>): TransportRequestCallback;
    reloadTransportCertificates (params: Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Request, callback: callbackFn<Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Response>): TransportRequestCallback;
    reloadTransportCertificates (params: Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Request, options: TransportRequestOptions, callback: callbackFn<Security_ReloadTransportCertificates.Security_ReloadTransportCertificates_Response>): TransportRequestCallback;

    getTenancyConfig (params?: Security_GetTenancyConfig.Security_GetTenancyConfig_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetTenancyConfig.Security_GetTenancyConfig_Response>;
    getTenancyConfig (callback: callbackFn<Security_GetTenancyConfig.Security_GetTenancyConfig_Response>): TransportRequestCallback;
    getTenancyConfig (params: Security_GetTenancyConfig.Security_GetTenancyConfig_Request, callback: callbackFn<Security_GetTenancyConfig.Security_GetTenancyConfig_Response>): TransportRequestCallback;
    getTenancyConfig (params: Security_GetTenancyConfig.Security_GetTenancyConfig_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetTenancyConfig.Security_GetTenancyConfig_Response>): TransportRequestCallback;

    createUpdateTenancyConfig (params: Security_CreateUpdateTenancyConfig.Security_CreateUpdateTenancyConfig_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateUpdateTenancyConfig.Security_CreateUpdateTenancyConfig_Response>;
    createUpdateTenancyConfig (params: Security_CreateUpdateTenancyConfig.Security_CreateUpdateTenancyConfig_Request, callback: callbackFn<Security_CreateUpdateTenancyConfig.Security_CreateUpdateTenancyConfig_Response>): TransportRequestCallback;
    createUpdateTenancyConfig (params: Security_CreateUpdateTenancyConfig.Security_CreateUpdateTenancyConfig_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateUpdateTenancyConfig.Security_CreateUpdateTenancyConfig_Response>): TransportRequestCallback;

    getTenants (params?: Security_GetTenants.Security_GetTenants_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetTenants.Security_GetTenants_Response>;
    getTenants (callback: callbackFn<Security_GetTenants.Security_GetTenants_Response>): TransportRequestCallback;
    getTenants (params: Security_GetTenants.Security_GetTenants_Request, callback: callbackFn<Security_GetTenants.Security_GetTenants_Response>): TransportRequestCallback;
    getTenants (params: Security_GetTenants.Security_GetTenants_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetTenants.Security_GetTenants_Response>): TransportRequestCallback;

    patchTenants (params: Security_PatchTenants.Security_PatchTenants_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchTenants.Security_PatchTenants_Response>;
    patchTenants (params: Security_PatchTenants.Security_PatchTenants_Request, callback: callbackFn<Security_PatchTenants.Security_PatchTenants_Response>): TransportRequestCallback;
    patchTenants (params: Security_PatchTenants.Security_PatchTenants_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchTenants.Security_PatchTenants_Response>): TransportRequestCallback;

    deleteTenant (params: Security_DeleteTenant.Security_DeleteTenant_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteTenant.Security_DeleteTenant_Response>;
    deleteTenant (params: Security_DeleteTenant.Security_DeleteTenant_Request, callback: callbackFn<Security_DeleteTenant.Security_DeleteTenant_Response>): TransportRequestCallback;
    deleteTenant (params: Security_DeleteTenant.Security_DeleteTenant_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteTenant.Security_DeleteTenant_Response>): TransportRequestCallback;

    getTenant (params: Security_GetTenant.Security_GetTenant_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetTenant.Security_GetTenant_Response>;
    getTenant (params: Security_GetTenant.Security_GetTenant_Request, callback: callbackFn<Security_GetTenant.Security_GetTenant_Response>): TransportRequestCallback;
    getTenant (params: Security_GetTenant.Security_GetTenant_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetTenant.Security_GetTenant_Response>): TransportRequestCallback;

    patchTenant (params: Security_PatchTenant.Security_PatchTenant_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchTenant.Security_PatchTenant_Response>;
    patchTenant (params: Security_PatchTenant.Security_PatchTenant_Request, callback: callbackFn<Security_PatchTenant.Security_PatchTenant_Response>): TransportRequestCallback;
    patchTenant (params: Security_PatchTenant.Security_PatchTenant_Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchTenant.Security_PatchTenant_Response>): TransportRequestCallback;

    createTenant (params: Security_CreateTenant.Security_CreateTenant_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateTenant.Security_CreateTenant_Response>;
    createTenant (params: Security_CreateTenant.Security_CreateTenant_Request, callback: callbackFn<Security_CreateTenant.Security_CreateTenant_Response>): TransportRequestCallback;
    createTenant (params: Security_CreateTenant.Security_CreateTenant_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateTenant.Security_CreateTenant_Response>): TransportRequestCallback;

    getUsersLegacy (params?: Security_GetUsersLegacy.Security_GetUsersLegacy_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUsersLegacy.Security_GetUsersLegacy_Response>;
    getUsersLegacy (callback: callbackFn<Security_GetUsersLegacy.Security_GetUsersLegacy_Response>): TransportRequestCallback;
    getUsersLegacy (params: Security_GetUsersLegacy.Security_GetUsersLegacy_Request, callback: callbackFn<Security_GetUsersLegacy.Security_GetUsersLegacy_Response>): TransportRequestCallback;
    getUsersLegacy (params: Security_GetUsersLegacy.Security_GetUsersLegacy_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUsersLegacy.Security_GetUsersLegacy_Response>): TransportRequestCallback;

    deleteUserLegacy (params: Security_DeleteUserLegacy.Security_DeleteUserLegacy_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteUserLegacy.Security_DeleteUserLegacy_Response>;
    deleteUserLegacy (params: Security_DeleteUserLegacy.Security_DeleteUserLegacy_Request, callback: callbackFn<Security_DeleteUserLegacy.Security_DeleteUserLegacy_Response>): TransportRequestCallback;
    deleteUserLegacy (params: Security_DeleteUserLegacy.Security_DeleteUserLegacy_Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteUserLegacy.Security_DeleteUserLegacy_Response>): TransportRequestCallback;

    getUserLegacy (params: Security_GetUserLegacy.Security_GetUserLegacy_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUserLegacy.Security_GetUserLegacy_Response>;
    getUserLegacy (params: Security_GetUserLegacy.Security_GetUserLegacy_Request, callback: callbackFn<Security_GetUserLegacy.Security_GetUserLegacy_Response>): TransportRequestCallback;
    getUserLegacy (params: Security_GetUserLegacy.Security_GetUserLegacy_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUserLegacy.Security_GetUserLegacy_Response>): TransportRequestCallback;

    createUserLegacy (params: Security_CreateUserLegacy.Security_CreateUserLegacy_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateUserLegacy.Security_CreateUserLegacy_Response>;
    createUserLegacy (params: Security_CreateUserLegacy.Security_CreateUserLegacy_Request, callback: callbackFn<Security_CreateUserLegacy.Security_CreateUserLegacy_Response>): TransportRequestCallback;
    createUserLegacy (params: Security_CreateUserLegacy.Security_CreateUserLegacy_Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateUserLegacy.Security_CreateUserLegacy_Response>): TransportRequestCallback;

    generateUserTokenLegacy (params: Security_GenerateUserTokenLegacy.Security_GenerateUserTokenLegacy_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GenerateUserTokenLegacy.Security_GenerateUserTokenLegacy_Response>;
    generateUserTokenLegacy (params: Security_GenerateUserTokenLegacy.Security_GenerateUserTokenLegacy_Request, callback: callbackFn<Security_GenerateUserTokenLegacy.Security_GenerateUserTokenLegacy_Response>): TransportRequestCallback;
    generateUserTokenLegacy (params: Security_GenerateUserTokenLegacy.Security_GenerateUserTokenLegacy_Request, options: TransportRequestOptions, callback: callbackFn<Security_GenerateUserTokenLegacy.Security_GenerateUserTokenLegacy_Response>): TransportRequestCallback;

    validate (params?: Security_Validate.Security_Validate_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Validate.Security_Validate_Response>;
    validate (callback: callbackFn<Security_Validate.Security_Validate_Response>): TransportRequestCallback;
    validate (params: Security_Validate.Security_Validate_Request, callback: callbackFn<Security_Validate.Security_Validate_Response>): TransportRequestCallback;
    validate (params: Security_Validate.Security_Validate_Request, options: TransportRequestOptions, callback: callbackFn<Security_Validate.Security_Validate_Response>): TransportRequestCallback;

    authinfo (params?: Security_Authinfo.Security_Authinfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Authinfo.Security_Authinfo_Response>;
    authinfo (callback: callbackFn<Security_Authinfo.Security_Authinfo_Response>): TransportRequestCallback;
    authinfo (params: Security_Authinfo.Security_Authinfo_Request, callback: callbackFn<Security_Authinfo.Security_Authinfo_Response>): TransportRequestCallback;
    authinfo (params: Security_Authinfo.Security_Authinfo_Request, options: TransportRequestOptions, callback: callbackFn<Security_Authinfo.Security_Authinfo_Response>): TransportRequestCallback;

    getDashboardsInfo (params?: Security_GetDashboardsInfo.Security_GetDashboardsInfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetDashboardsInfo.Security_GetDashboardsInfo_Response>;
    getDashboardsInfo (callback: callbackFn<Security_GetDashboardsInfo.Security_GetDashboardsInfo_Response>): TransportRequestCallback;
    getDashboardsInfo (params: Security_GetDashboardsInfo.Security_GetDashboardsInfo_Request, callback: callbackFn<Security_GetDashboardsInfo.Security_GetDashboardsInfo_Response>): TransportRequestCallback;
    getDashboardsInfo (params: Security_GetDashboardsInfo.Security_GetDashboardsInfo_Request, options: TransportRequestOptions, callback: callbackFn<Security_GetDashboardsInfo.Security_GetDashboardsInfo_Response>): TransportRequestCallback;

    postDashboardsInfo (params?: Security_PostDashboardsInfo.Security_PostDashboardsInfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PostDashboardsInfo.Security_PostDashboardsInfo_Response>;
    postDashboardsInfo (callback: callbackFn<Security_PostDashboardsInfo.Security_PostDashboardsInfo_Response>): TransportRequestCallback;
    postDashboardsInfo (params: Security_PostDashboardsInfo.Security_PostDashboardsInfo_Request, callback: callbackFn<Security_PostDashboardsInfo.Security_PostDashboardsInfo_Response>): TransportRequestCallback;
    postDashboardsInfo (params: Security_PostDashboardsInfo.Security_PostDashboardsInfo_Request, options: TransportRequestOptions, callback: callbackFn<Security_PostDashboardsInfo.Security_PostDashboardsInfo_Response>): TransportRequestCallback;

    health (params?: Security_Health.Security_Health_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Health.Security_Health_Response>;
    health (callback: callbackFn<Security_Health.Security_Health_Response>): TransportRequestCallback;
    health (params: Security_Health.Security_Health_Request, callback: callbackFn<Security_Health.Security_Health_Response>): TransportRequestCallback;
    health (params: Security_Health.Security_Health_Request, options: TransportRequestOptions, callback: callbackFn<Security_Health.Security_Health_Response>): TransportRequestCallback;

    tenantInfo (params?: Security_TenantInfo.Security_TenantInfo_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_TenantInfo.Security_TenantInfo_Response>;
    tenantInfo (callback: callbackFn<Security_TenantInfo.Security_TenantInfo_Response>): TransportRequestCallback;
    tenantInfo (params: Security_TenantInfo.Security_TenantInfo_Request, callback: callbackFn<Security_TenantInfo.Security_TenantInfo_Response>): TransportRequestCallback;
    tenantInfo (params: Security_TenantInfo.Security_TenantInfo_Request, options: TransportRequestOptions, callback: callbackFn<Security_TenantInfo.Security_TenantInfo_Response>): TransportRequestCallback;

    whoAmI (params?: Security_WhoAmI.Security_WhoAmI_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_WhoAmI.Security_WhoAmI_Response>;
    whoAmI (callback: callbackFn<Security_WhoAmI.Security_WhoAmI_Response>): TransportRequestCallback;
    whoAmI (params: Security_WhoAmI.Security_WhoAmI_Request, callback: callbackFn<Security_WhoAmI.Security_WhoAmI_Response>): TransportRequestCallback;
    whoAmI (params: Security_WhoAmI.Security_WhoAmI_Request, options: TransportRequestOptions, callback: callbackFn<Security_WhoAmI.Security_WhoAmI_Response>): TransportRequestCallback;

    whoAmIProtected (params?: Security_WhoAmIProtected.Security_WhoAmIProtected_Request, options?: TransportRequestOptions): TransportRequestPromise<Security_WhoAmIProtected.Security_WhoAmIProtected_Response>;
    whoAmIProtected (callback: callbackFn<Security_WhoAmIProtected.Security_WhoAmIProtected_Response>): TransportRequestCallback;
    whoAmIProtected (params: Security_WhoAmIProtected.Security_WhoAmIProtected_Request, callback: callbackFn<Security_WhoAmIProtected.Security_WhoAmIProtected_Response>): TransportRequestCallback;
    whoAmIProtected (params: Security_WhoAmIProtected.Security_WhoAmIProtected_Request, options: TransportRequestOptions, callback: callbackFn<Security_WhoAmIProtected.Security_WhoAmIProtected_Response>): TransportRequestCallback;

  };

  snapshot: {
    getRepository (params?: Snapshot_GetRepository.Snapshot_GetRepository_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_GetRepository.Snapshot_GetRepository_Response>;
    getRepository (callback: callbackFn<Snapshot_GetRepository.Snapshot_GetRepository_Response>): TransportRequestCallback;
    getRepository (params: Snapshot_GetRepository.Snapshot_GetRepository_Request, callback: callbackFn<Snapshot_GetRepository.Snapshot_GetRepository_Response>): TransportRequestCallback;
    getRepository (params: Snapshot_GetRepository.Snapshot_GetRepository_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_GetRepository.Snapshot_GetRepository_Response>): TransportRequestCallback;

    status (params?: Snapshot_Status.Snapshot_Status_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Status.Snapshot_Status_Response>;
    status (callback: callbackFn<Snapshot_Status.Snapshot_Status_Response>): TransportRequestCallback;
    status (params: Snapshot_Status.Snapshot_Status_Request, callback: callbackFn<Snapshot_Status.Snapshot_Status_Response>): TransportRequestCallback;
    status (params: Snapshot_Status.Snapshot_Status_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Status.Snapshot_Status_Response>): TransportRequestCallback;

    deleteRepository (params: Snapshot_DeleteRepository.Snapshot_DeleteRepository_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_DeleteRepository.Snapshot_DeleteRepository_Response>;
    deleteRepository (params: Snapshot_DeleteRepository.Snapshot_DeleteRepository_Request, callback: callbackFn<Snapshot_DeleteRepository.Snapshot_DeleteRepository_Response>): TransportRequestCallback;
    deleteRepository (params: Snapshot_DeleteRepository.Snapshot_DeleteRepository_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_DeleteRepository.Snapshot_DeleteRepository_Response>): TransportRequestCallback;

    createRepository (params: Snapshot_CreateRepository.Snapshot_CreateRepository_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_CreateRepository.Snapshot_CreateRepository_Response>;
    createRepository (params: Snapshot_CreateRepository.Snapshot_CreateRepository_Request, callback: callbackFn<Snapshot_CreateRepository.Snapshot_CreateRepository_Response>): TransportRequestCallback;
    createRepository (params: Snapshot_CreateRepository.Snapshot_CreateRepository_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_CreateRepository.Snapshot_CreateRepository_Response>): TransportRequestCallback;

    cleanupRepository (params: Snapshot_CleanupRepository.Snapshot_CleanupRepository_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_CleanupRepository.Snapshot_CleanupRepository_Response>;
    cleanupRepository (params: Snapshot_CleanupRepository.Snapshot_CleanupRepository_Request, callback: callbackFn<Snapshot_CleanupRepository.Snapshot_CleanupRepository_Response>): TransportRequestCallback;
    cleanupRepository (params: Snapshot_CleanupRepository.Snapshot_CleanupRepository_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_CleanupRepository.Snapshot_CleanupRepository_Response>): TransportRequestCallback;

    verifyRepository (params: Snapshot_VerifyRepository.Snapshot_VerifyRepository_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_VerifyRepository.Snapshot_VerifyRepository_Response>;
    verifyRepository (params: Snapshot_VerifyRepository.Snapshot_VerifyRepository_Request, callback: callbackFn<Snapshot_VerifyRepository.Snapshot_VerifyRepository_Response>): TransportRequestCallback;
    verifyRepository (params: Snapshot_VerifyRepository.Snapshot_VerifyRepository_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_VerifyRepository.Snapshot_VerifyRepository_Response>): TransportRequestCallback;

    delete (params: Snapshot_Delete.Snapshot_Delete_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Delete.Snapshot_Delete_Response>;
    delete (params: Snapshot_Delete.Snapshot_Delete_Request, callback: callbackFn<Snapshot_Delete.Snapshot_Delete_Response>): TransportRequestCallback;
    delete (params: Snapshot_Delete.Snapshot_Delete_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Delete.Snapshot_Delete_Response>): TransportRequestCallback;

    get (params: Snapshot_Get.Snapshot_Get_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Get.Snapshot_Get_Response>;
    get (params: Snapshot_Get.Snapshot_Get_Request, callback: callbackFn<Snapshot_Get.Snapshot_Get_Response>): TransportRequestCallback;
    get (params: Snapshot_Get.Snapshot_Get_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Get.Snapshot_Get_Response>): TransportRequestCallback;

    create (params: Snapshot_Create.Snapshot_Create_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Create.Snapshot_Create_Response>;
    create (params: Snapshot_Create.Snapshot_Create_Request, callback: callbackFn<Snapshot_Create.Snapshot_Create_Response>): TransportRequestCallback;
    create (params: Snapshot_Create.Snapshot_Create_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Create.Snapshot_Create_Response>): TransportRequestCallback;

    clone (params: Snapshot_Clone.Snapshot_Clone_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Clone.Snapshot_Clone_Response>;
    clone (params: Snapshot_Clone.Snapshot_Clone_Request, callback: callbackFn<Snapshot_Clone.Snapshot_Clone_Response>): TransportRequestCallback;
    clone (params: Snapshot_Clone.Snapshot_Clone_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Clone.Snapshot_Clone_Response>): TransportRequestCallback;

    restore (params: Snapshot_Restore.Snapshot_Restore_Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Restore.Snapshot_Restore_Response>;
    restore (params: Snapshot_Restore.Snapshot_Restore_Request, callback: callbackFn<Snapshot_Restore.Snapshot_Restore_Response>): TransportRequestCallback;
    restore (params: Snapshot_Restore.Snapshot_Restore_Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Restore.Snapshot_Restore_Response>): TransportRequestCallback;

  };

  sql: {
    settings (params: Sql_Settings.Sql_Settings_Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Settings.Sql_Settings_Response>;
    settings (params: Sql_Settings.Sql_Settings_Request, callback: callbackFn<Sql_Settings.Sql_Settings_Response>): TransportRequestCallback;
    settings (params: Sql_Settings.Sql_Settings_Request, options: TransportRequestOptions, callback: callbackFn<Sql_Settings.Sql_Settings_Response>): TransportRequestCallback;

    query (params: Sql_Query.Sql_Query_Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Query.Sql_Query_Response>;
    query (params: Sql_Query.Sql_Query_Request, callback: callbackFn<Sql_Query.Sql_Query_Response>): TransportRequestCallback;
    query (params: Sql_Query.Sql_Query_Request, options: TransportRequestOptions, callback: callbackFn<Sql_Query.Sql_Query_Response>): TransportRequestCallback;

    explain (params: Sql_Explain.Sql_Explain_Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Explain.Sql_Explain_Response>;
    explain (params: Sql_Explain.Sql_Explain_Request, callback: callbackFn<Sql_Explain.Sql_Explain_Response>): TransportRequestCallback;
    explain (params: Sql_Explain.Sql_Explain_Request, options: TransportRequestOptions, callback: callbackFn<Sql_Explain.Sql_Explain_Response>): TransportRequestCallback;

    close (params: Sql_Close.Sql_Close_Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Close.Sql_Close_Response>;
    close (params: Sql_Close.Sql_Close_Request, callback: callbackFn<Sql_Close.Sql_Close_Response>): TransportRequestCallback;
    close (params: Sql_Close.Sql_Close_Request, options: TransportRequestOptions, callback: callbackFn<Sql_Close.Sql_Close_Response>): TransportRequestCallback;

    getStats (params?: Sql_GetStats.Sql_GetStats_Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_GetStats.Sql_GetStats_Response>;
    getStats (callback: callbackFn<Sql_GetStats.Sql_GetStats_Response>): TransportRequestCallback;
    getStats (params: Sql_GetStats.Sql_GetStats_Request, callback: callbackFn<Sql_GetStats.Sql_GetStats_Response>): TransportRequestCallback;
    getStats (params: Sql_GetStats.Sql_GetStats_Request, options: TransportRequestOptions, callback: callbackFn<Sql_GetStats.Sql_GetStats_Response>): TransportRequestCallback;

    postStats (params: Sql_PostStats.Sql_PostStats_Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_PostStats.Sql_PostStats_Response>;
    postStats (params: Sql_PostStats.Sql_PostStats_Request, callback: callbackFn<Sql_PostStats.Sql_PostStats_Response>): TransportRequestCallback;
    postStats (params: Sql_PostStats.Sql_PostStats_Request, options: TransportRequestOptions, callback: callbackFn<Sql_PostStats.Sql_PostStats_Response>): TransportRequestCallback;

  };

  tasks: {
    list (params?: Tasks_List.Tasks_List_Request, options?: TransportRequestOptions): TransportRequestPromise<Tasks_List.Tasks_List_Response>;
    list (callback: callbackFn<Tasks_List.Tasks_List_Response>): TransportRequestCallback;
    list (params: Tasks_List.Tasks_List_Request, callback: callbackFn<Tasks_List.Tasks_List_Response>): TransportRequestCallback;
    list (params: Tasks_List.Tasks_List_Request, options: TransportRequestOptions, callback: callbackFn<Tasks_List.Tasks_List_Response>): TransportRequestCallback;

    cancel (params?: Tasks_Cancel.Tasks_Cancel_Request, options?: TransportRequestOptions): TransportRequestPromise<Tasks_Cancel.Tasks_Cancel_Response>;
    cancel (callback: callbackFn<Tasks_Cancel.Tasks_Cancel_Response>): TransportRequestCallback;
    cancel (params: Tasks_Cancel.Tasks_Cancel_Request, callback: callbackFn<Tasks_Cancel.Tasks_Cancel_Response>): TransportRequestCallback;
    cancel (params: Tasks_Cancel.Tasks_Cancel_Request, options: TransportRequestOptions, callback: callbackFn<Tasks_Cancel.Tasks_Cancel_Response>): TransportRequestCallback;

    get (params: Tasks_Get.Tasks_Get_Request, options?: TransportRequestOptions): TransportRequestPromise<Tasks_Get.Tasks_Get_Response>;
    get (params: Tasks_Get.Tasks_Get_Request, callback: callbackFn<Tasks_Get.Tasks_Get_Response>): TransportRequestCallback;
    get (params: Tasks_Get.Tasks_Get_Request, options: TransportRequestOptions, callback: callbackFn<Tasks_Get.Tasks_Get_Response>): TransportRequestCallback;

  };

  transforms: {
    search (params?: Transforms_Search.Transforms_Search_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Search.Transforms_Search_Response>;
    search (callback: callbackFn<Transforms_Search.Transforms_Search_Response>): TransportRequestCallback;
    search (params: Transforms_Search.Transforms_Search_Request, callback: callbackFn<Transforms_Search.Transforms_Search_Response>): TransportRequestCallback;
    search (params: Transforms_Search.Transforms_Search_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Search.Transforms_Search_Response>): TransportRequestCallback;

    preview (params?: Transforms_Preview.Transforms_Preview_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Preview.Transforms_Preview_Response>;
    preview (callback: callbackFn<Transforms_Preview.Transforms_Preview_Response>): TransportRequestCallback;
    preview (params: Transforms_Preview.Transforms_Preview_Request, callback: callbackFn<Transforms_Preview.Transforms_Preview_Response>): TransportRequestCallback;
    preview (params: Transforms_Preview.Transforms_Preview_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Preview.Transforms_Preview_Response>): TransportRequestCallback;

    delete (params: Transforms_Delete.Transforms_Delete_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Delete.Transforms_Delete_Response>;
    delete (params: Transforms_Delete.Transforms_Delete_Request, callback: callbackFn<Transforms_Delete.Transforms_Delete_Response>): TransportRequestCallback;
    delete (params: Transforms_Delete.Transforms_Delete_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Delete.Transforms_Delete_Response>): TransportRequestCallback;

    get (params: Transforms_Get.Transforms_Get_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Get.Transforms_Get_Response>;
    get (params: Transforms_Get.Transforms_Get_Request, callback: callbackFn<Transforms_Get.Transforms_Get_Response>): TransportRequestCallback;
    get (params: Transforms_Get.Transforms_Get_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Get.Transforms_Get_Response>): TransportRequestCallback;

    put (params: Transforms_Put.Transforms_Put_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Put.Transforms_Put_Response>;
    put (params: Transforms_Put.Transforms_Put_Request, callback: callbackFn<Transforms_Put.Transforms_Put_Response>): TransportRequestCallback;
    put (params: Transforms_Put.Transforms_Put_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Put.Transforms_Put_Response>): TransportRequestCallback;

    explain (params: Transforms_Explain.Transforms_Explain_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Explain.Transforms_Explain_Response>;
    explain (params: Transforms_Explain.Transforms_Explain_Request, callback: callbackFn<Transforms_Explain.Transforms_Explain_Response>): TransportRequestCallback;
    explain (params: Transforms_Explain.Transforms_Explain_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Explain.Transforms_Explain_Response>): TransportRequestCallback;

    start (params: Transforms_Start.Transforms_Start_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Start.Transforms_Start_Response>;
    start (params: Transforms_Start.Transforms_Start_Request, callback: callbackFn<Transforms_Start.Transforms_Start_Response>): TransportRequestCallback;
    start (params: Transforms_Start.Transforms_Start_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Start.Transforms_Start_Response>): TransportRequestCallback;

    stop (params: Transforms_Stop.Transforms_Stop_Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Stop.Transforms_Stop_Response>;
    stop (params: Transforms_Stop.Transforms_Stop_Request, callback: callbackFn<Transforms_Stop.Transforms_Stop_Response>): TransportRequestCallback;
    stop (params: Transforms_Stop.Transforms_Stop_Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Stop.Transforms_Stop_Response>): TransportRequestCallback;

  };


  http: {
    connect (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    connect (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    connect (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    delete (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    delete (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    delete (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    get (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    get (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    get (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    head (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    head (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    head (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    options (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    options (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    options (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    patch (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    patch (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    patch (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    post (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    post (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    post (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    put (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    put (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    put (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

    trace (params: HttpRequest, options?: TransportRequestOptions): TransportRequestPromise<ApiResponse>;
    trace (params: HttpRequest, callback: callbackFn<ApiResponse>): TransportRequestCallback;
    trace (params: HttpRequest, options: TransportRequestOptions, callback: callbackFn<ApiResponse>): TransportRequestCallback;

  };

  info (params?: Info.Info_Request, options?: TransportRequestOptions): TransportRequestPromise<Info.Info_Response>;
  info (callback: callbackFn<Info.Info_Response>): TransportRequestCallback;
  info (params: Info.Info_Request, callback: callbackFn<Info.Info_Response>): TransportRequestCallback;
  info (params: Info.Info_Request, options: TransportRequestOptions, callback: callbackFn<Info.Info_Response>): TransportRequestCallback;

  ping (params?: Ping.Ping_Request, options?: TransportRequestOptions): TransportRequestPromise<Ping.Ping_Response>;
  ping (callback: callbackFn<Ping.Ping_Response>): TransportRequestCallback;
  ping (params: Ping.Ping_Request, callback: callbackFn<Ping.Ping_Response>): TransportRequestCallback;
  ping (params: Ping.Ping_Request, options: TransportRequestOptions, callback: callbackFn<Ping.Ping_Response>): TransportRequestCallback;

  bulk (params: Bulk.Bulk_Request, options?: TransportRequestOptions): TransportRequestPromise<Bulk.Bulk_Response>;
  bulk (params: Bulk.Bulk_Request, callback: callbackFn<Bulk.Bulk_Response>): TransportRequestCallback;
  bulk (params: Bulk.Bulk_Request, options: TransportRequestOptions, callback: callbackFn<Bulk.Bulk_Response>): TransportRequestCallback;

  count (params?: Count.Count_Request, options?: TransportRequestOptions): TransportRequestPromise<Count.Count_Response>;
  count (callback: callbackFn<Count.Count_Response>): TransportRequestCallback;
  count (params: Count.Count_Request, callback: callbackFn<Count.Count_Response>): TransportRequestCallback;
  count (params: Count.Count_Request, options: TransportRequestOptions, callback: callbackFn<Count.Count_Response>): TransportRequestCallback;

  deleteByQueryRethrottle (params: DeleteByQueryRethrottle.DeleteByQueryRethrottle_Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteByQueryRethrottle.DeleteByQueryRethrottle_Response>;
  deleteByQueryRethrottle (params: DeleteByQueryRethrottle.DeleteByQueryRethrottle_Request, callback: callbackFn<DeleteByQueryRethrottle.DeleteByQueryRethrottle_Response>): TransportRequestCallback;
  deleteByQueryRethrottle (params: DeleteByQueryRethrottle.DeleteByQueryRethrottle_Request, options: TransportRequestOptions, callback: callbackFn<DeleteByQueryRethrottle.DeleteByQueryRethrottle_Response>): TransportRequestCallback;

  fieldCaps (params?: FieldCaps.FieldCaps_Request, options?: TransportRequestOptions): TransportRequestPromise<FieldCaps.FieldCaps_Response>;
  fieldCaps (callback: callbackFn<FieldCaps.FieldCaps_Response>): TransportRequestCallback;
  fieldCaps (params: FieldCaps.FieldCaps_Request, callback: callbackFn<FieldCaps.FieldCaps_Response>): TransportRequestCallback;
  fieldCaps (params: FieldCaps.FieldCaps_Request, options: TransportRequestOptions, callback: callbackFn<FieldCaps.FieldCaps_Response>): TransportRequestCallback;

  mget (params: Mget.Mget_Request, options?: TransportRequestOptions): TransportRequestPromise<Mget.Mget_Response>;
  mget (params: Mget.Mget_Request, callback: callbackFn<Mget.Mget_Response>): TransportRequestCallback;
  mget (params: Mget.Mget_Request, options: TransportRequestOptions, callback: callbackFn<Mget.Mget_Response>): TransportRequestCallback;

  msearch (params: Msearch.Msearch_Request, options?: TransportRequestOptions): TransportRequestPromise<Msearch.Msearch_Response>;
  msearch (params: Msearch.Msearch_Request, callback: callbackFn<Msearch.Msearch_Response>): TransportRequestCallback;
  msearch (params: Msearch.Msearch_Request, options: TransportRequestOptions, callback: callbackFn<Msearch.Msearch_Response>): TransportRequestCallback;

  msearchTemplate (params: MsearchTemplate.MsearchTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<MsearchTemplate.MsearchTemplate_Response>;
  msearchTemplate (params: MsearchTemplate.MsearchTemplate_Request, callback: callbackFn<MsearchTemplate.MsearchTemplate_Response>): TransportRequestCallback;
  msearchTemplate (params: MsearchTemplate.MsearchTemplate_Request, options: TransportRequestOptions, callback: callbackFn<MsearchTemplate.MsearchTemplate_Response>): TransportRequestCallback;

  mtermvectors (params?: Mtermvectors.Mtermvectors_Request, options?: TransportRequestOptions): TransportRequestPromise<Mtermvectors.Mtermvectors_Response>;
  mtermvectors (callback: callbackFn<Mtermvectors.Mtermvectors_Response>): TransportRequestCallback;
  mtermvectors (params: Mtermvectors.Mtermvectors_Request, callback: callbackFn<Mtermvectors.Mtermvectors_Response>): TransportRequestCallback;
  mtermvectors (params: Mtermvectors.Mtermvectors_Request, options: TransportRequestOptions, callback: callbackFn<Mtermvectors.Mtermvectors_Response>): TransportRequestCallback;

  rankEval (params: RankEval.RankEval_Request, options?: TransportRequestOptions): TransportRequestPromise<RankEval.RankEval_Response>;
  rankEval (params: RankEval.RankEval_Request, callback: callbackFn<RankEval.RankEval_Response>): TransportRequestCallback;
  rankEval (params: RankEval.RankEval_Request, options: TransportRequestOptions, callback: callbackFn<RankEval.RankEval_Response>): TransportRequestCallback;

  reindex (params: Reindex.Reindex_Request, options?: TransportRequestOptions): TransportRequestPromise<Reindex.Reindex_Response>;
  reindex (params: Reindex.Reindex_Request, callback: callbackFn<Reindex.Reindex_Response>): TransportRequestCallback;
  reindex (params: Reindex.Reindex_Request, options: TransportRequestOptions, callback: callbackFn<Reindex.Reindex_Response>): TransportRequestCallback;

  reindexRethrottle (params: ReindexRethrottle.ReindexRethrottle_Request, options?: TransportRequestOptions): TransportRequestPromise<ReindexRethrottle.ReindexRethrottle_Response>;
  reindexRethrottle (params: ReindexRethrottle.ReindexRethrottle_Request, callback: callbackFn<ReindexRethrottle.ReindexRethrottle_Response>): TransportRequestCallback;
  reindexRethrottle (params: ReindexRethrottle.ReindexRethrottle_Request, options: TransportRequestOptions, callback: callbackFn<ReindexRethrottle.ReindexRethrottle_Response>): TransportRequestCallback;

  renderSearchTemplate (params?: RenderSearchTemplate.RenderSearchTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<RenderSearchTemplate.RenderSearchTemplate_Response>;
  renderSearchTemplate (callback: callbackFn<RenderSearchTemplate.RenderSearchTemplate_Response>): TransportRequestCallback;
  renderSearchTemplate (params: RenderSearchTemplate.RenderSearchTemplate_Request, callback: callbackFn<RenderSearchTemplate.RenderSearchTemplate_Response>): TransportRequestCallback;
  renderSearchTemplate (params: RenderSearchTemplate.RenderSearchTemplate_Request, options: TransportRequestOptions, callback: callbackFn<RenderSearchTemplate.RenderSearchTemplate_Response>): TransportRequestCallback;

  getScriptContext (params?: GetScriptContext.GetScriptContext_Request, options?: TransportRequestOptions): TransportRequestPromise<GetScriptContext.GetScriptContext_Response>;
  getScriptContext (callback: callbackFn<GetScriptContext.GetScriptContext_Response>): TransportRequestCallback;
  getScriptContext (params: GetScriptContext.GetScriptContext_Request, callback: callbackFn<GetScriptContext.GetScriptContext_Response>): TransportRequestCallback;
  getScriptContext (params: GetScriptContext.GetScriptContext_Request, options: TransportRequestOptions, callback: callbackFn<GetScriptContext.GetScriptContext_Response>): TransportRequestCallback;

  getScriptLanguages (params?: GetScriptLanguages.GetScriptLanguages_Request, options?: TransportRequestOptions): TransportRequestPromise<GetScriptLanguages.GetScriptLanguages_Response>;
  getScriptLanguages (callback: callbackFn<GetScriptLanguages.GetScriptLanguages_Response>): TransportRequestCallback;
  getScriptLanguages (params: GetScriptLanguages.GetScriptLanguages_Request, callback: callbackFn<GetScriptLanguages.GetScriptLanguages_Response>): TransportRequestCallback;
  getScriptLanguages (params: GetScriptLanguages.GetScriptLanguages_Request, options: TransportRequestOptions, callback: callbackFn<GetScriptLanguages.GetScriptLanguages_Response>): TransportRequestCallback;

  deleteScript (params: DeleteScript.DeleteScript_Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteScript.DeleteScript_Response>;
  deleteScript (params: DeleteScript.DeleteScript_Request, callback: callbackFn<DeleteScript.DeleteScript_Response>): TransportRequestCallback;
  deleteScript (params: DeleteScript.DeleteScript_Request, options: TransportRequestOptions, callback: callbackFn<DeleteScript.DeleteScript_Response>): TransportRequestCallback;

  getScript (params: GetScript.GetScript_Request, options?: TransportRequestOptions): TransportRequestPromise<GetScript.GetScript_Response>;
  getScript (params: GetScript.GetScript_Request, callback: callbackFn<GetScript.GetScript_Response>): TransportRequestCallback;
  getScript (params: GetScript.GetScript_Request, options: TransportRequestOptions, callback: callbackFn<GetScript.GetScript_Response>): TransportRequestCallback;

  putScript (params: PutScript.PutScript_Request, options?: TransportRequestOptions): TransportRequestPromise<PutScript.PutScript_Response>;
  putScript (params: PutScript.PutScript_Request, callback: callbackFn<PutScript.PutScript_Response>): TransportRequestCallback;
  putScript (params: PutScript.PutScript_Request, options: TransportRequestOptions, callback: callbackFn<PutScript.PutScript_Response>): TransportRequestCallback;

  scriptsPainlessExecute (params?: ScriptsPainlessExecute.ScriptsPainlessExecute_Request, options?: TransportRequestOptions): TransportRequestPromise<ScriptsPainlessExecute.ScriptsPainlessExecute_Response>;
  scriptsPainlessExecute (callback: callbackFn<ScriptsPainlessExecute.ScriptsPainlessExecute_Response>): TransportRequestCallback;
  scriptsPainlessExecute (params: ScriptsPainlessExecute.ScriptsPainlessExecute_Request, callback: callbackFn<ScriptsPainlessExecute.ScriptsPainlessExecute_Response>): TransportRequestCallback;
  scriptsPainlessExecute (params: ScriptsPainlessExecute.ScriptsPainlessExecute_Request, options: TransportRequestOptions, callback: callbackFn<ScriptsPainlessExecute.ScriptsPainlessExecute_Response>): TransportRequestCallback;

  search (params?: Search.Search_Request, options?: TransportRequestOptions): TransportRequestPromise<Search.Search_Response>;
  search (callback: callbackFn<Search.Search_Response>): TransportRequestCallback;
  search (params: Search.Search_Request, callback: callbackFn<Search.Search_Response>): TransportRequestCallback;
  search (params: Search.Search_Request, options: TransportRequestOptions, callback: callbackFn<Search.Search_Response>): TransportRequestCallback;

  searchShards (params?: SearchShards.SearchShards_Request, options?: TransportRequestOptions): TransportRequestPromise<SearchShards.SearchShards_Response>;
  searchShards (callback: callbackFn<SearchShards.SearchShards_Response>): TransportRequestCallback;
  searchShards (params: SearchShards.SearchShards_Request, callback: callbackFn<SearchShards.SearchShards_Response>): TransportRequestCallback;
  searchShards (params: SearchShards.SearchShards_Request, options: TransportRequestOptions, callback: callbackFn<SearchShards.SearchShards_Response>): TransportRequestCallback;

  deletePit (params?: DeletePit.DeletePit_Request, options?: TransportRequestOptions): TransportRequestPromise<DeletePit.DeletePit_Response>;
  deletePit (callback: callbackFn<DeletePit.DeletePit_Response>): TransportRequestCallback;
  deletePit (params: DeletePit.DeletePit_Request, callback: callbackFn<DeletePit.DeletePit_Response>): TransportRequestCallback;
  deletePit (params: DeletePit.DeletePit_Request, options: TransportRequestOptions, callback: callbackFn<DeletePit.DeletePit_Response>): TransportRequestCallback;

  deleteAllPits (params?: DeleteAllPits.DeleteAllPits_Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteAllPits.DeleteAllPits_Response>;
  deleteAllPits (callback: callbackFn<DeleteAllPits.DeleteAllPits_Response>): TransportRequestCallback;
  deleteAllPits (params: DeleteAllPits.DeleteAllPits_Request, callback: callbackFn<DeleteAllPits.DeleteAllPits_Response>): TransportRequestCallback;
  deleteAllPits (params: DeleteAllPits.DeleteAllPits_Request, options: TransportRequestOptions, callback: callbackFn<DeleteAllPits.DeleteAllPits_Response>): TransportRequestCallback;

  getAllPits (params?: GetAllPits.GetAllPits_Request, options?: TransportRequestOptions): TransportRequestPromise<GetAllPits.GetAllPits_Response>;
  getAllPits (callback: callbackFn<GetAllPits.GetAllPits_Response>): TransportRequestCallback;
  getAllPits (params: GetAllPits.GetAllPits_Request, callback: callbackFn<GetAllPits.GetAllPits_Response>): TransportRequestCallback;
  getAllPits (params: GetAllPits.GetAllPits_Request, options: TransportRequestOptions, callback: callbackFn<GetAllPits.GetAllPits_Response>): TransportRequestCallback;

  clearScroll (params?: ClearScroll.ClearScroll_Request, options?: TransportRequestOptions): TransportRequestPromise<ClearScroll.ClearScroll_Response>;
  clearScroll (callback: callbackFn<ClearScroll.ClearScroll_Response>): TransportRequestCallback;
  clearScroll (params: ClearScroll.ClearScroll_Request, callback: callbackFn<ClearScroll.ClearScroll_Response>): TransportRequestCallback;
  clearScroll (params: ClearScroll.ClearScroll_Request, options: TransportRequestOptions, callback: callbackFn<ClearScroll.ClearScroll_Response>): TransportRequestCallback;

  scroll (params?: Scroll.Scroll_Request, options?: TransportRequestOptions): TransportRequestPromise<Scroll.Scroll_Response>;
  scroll (callback: callbackFn<Scroll.Scroll_Response>): TransportRequestCallback;
  scroll (params: Scroll.Scroll_Request, callback: callbackFn<Scroll.Scroll_Response>): TransportRequestCallback;
  scroll (params: Scroll.Scroll_Request, options: TransportRequestOptions, callback: callbackFn<Scroll.Scroll_Response>): TransportRequestCallback;

  searchTemplate (params: SearchTemplate.SearchTemplate_Request, options?: TransportRequestOptions): TransportRequestPromise<SearchTemplate.SearchTemplate_Response>;
  searchTemplate (params: SearchTemplate.SearchTemplate_Request, callback: callbackFn<SearchTemplate.SearchTemplate_Response>): TransportRequestCallback;
  searchTemplate (params: SearchTemplate.SearchTemplate_Request, options: TransportRequestOptions, callback: callbackFn<SearchTemplate.SearchTemplate_Response>): TransportRequestCallback;

  updateByQueryRethrottle (params: UpdateByQueryRethrottle.UpdateByQueryRethrottle_Request, options?: TransportRequestOptions): TransportRequestPromise<UpdateByQueryRethrottle.UpdateByQueryRethrottle_Response>;
  updateByQueryRethrottle (params: UpdateByQueryRethrottle.UpdateByQueryRethrottle_Request, callback: callbackFn<UpdateByQueryRethrottle.UpdateByQueryRethrottle_Response>): TransportRequestCallback;
  updateByQueryRethrottle (params: UpdateByQueryRethrottle.UpdateByQueryRethrottle_Request, options: TransportRequestOptions, callback: callbackFn<UpdateByQueryRethrottle.UpdateByQueryRethrottle_Response>): TransportRequestCallback;

  create (params: Create.Create_Request, options?: TransportRequestOptions): TransportRequestPromise<Create.Create_Response>;
  create (params: Create.Create_Request, callback: callbackFn<Create.Create_Response>): TransportRequestCallback;
  create (params: Create.Create_Request, options: TransportRequestOptions, callback: callbackFn<Create.Create_Response>): TransportRequestCallback;

  deleteByQuery (params: DeleteByQuery.DeleteByQuery_Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteByQuery.DeleteByQuery_Response>;
  deleteByQuery (params: DeleteByQuery.DeleteByQuery_Request, callback: callbackFn<DeleteByQuery.DeleteByQuery_Response>): TransportRequestCallback;
  deleteByQuery (params: DeleteByQuery.DeleteByQuery_Request, options: TransportRequestOptions, callback: callbackFn<DeleteByQuery.DeleteByQuery_Response>): TransportRequestCallback;

  index (params: Index.Index_Request, options?: TransportRequestOptions): TransportRequestPromise<Index.Index_Response>;
  index (params: Index.Index_Request, callback: callbackFn<Index.Index_Response>): TransportRequestCallback;
  index (params: Index.Index_Request, options: TransportRequestOptions, callback: callbackFn<Index.Index_Response>): TransportRequestCallback;

  delete (params: Delete.Delete_Request, options?: TransportRequestOptions): TransportRequestPromise<Delete.Delete_Response>;
  delete (params: Delete.Delete_Request, callback: callbackFn<Delete.Delete_Response>): TransportRequestCallback;
  delete (params: Delete.Delete_Request, options: TransportRequestOptions, callback: callbackFn<Delete.Delete_Response>): TransportRequestCallback;

  get (params: Get.Get_Request, options?: TransportRequestOptions): TransportRequestPromise<Get.Get_Response>;
  get (params: Get.Get_Request, callback: callbackFn<Get.Get_Response>): TransportRequestCallback;
  get (params: Get.Get_Request, options: TransportRequestOptions, callback: callbackFn<Get.Get_Response>): TransportRequestCallback;

  exists (params: Exists.Exists_Request, options?: TransportRequestOptions): TransportRequestPromise<Exists.Exists_Response>;
  exists (params: Exists.Exists_Request, callback: callbackFn<Exists.Exists_Response>): TransportRequestCallback;
  exists (params: Exists.Exists_Request, options: TransportRequestOptions, callback: callbackFn<Exists.Exists_Response>): TransportRequestCallback;

  explain (params: Explain.Explain_Request, options?: TransportRequestOptions): TransportRequestPromise<Explain.Explain_Response>;
  explain (params: Explain.Explain_Request, callback: callbackFn<Explain.Explain_Response>): TransportRequestCallback;
  explain (params: Explain.Explain_Request, options: TransportRequestOptions, callback: callbackFn<Explain.Explain_Response>): TransportRequestCallback;

  createPit (params: CreatePit.CreatePit_Request, options?: TransportRequestOptions): TransportRequestPromise<CreatePit.CreatePit_Response>;
  createPit (params: CreatePit.CreatePit_Request, callback: callbackFn<CreatePit.CreatePit_Response>): TransportRequestCallback;
  createPit (params: CreatePit.CreatePit_Request, options: TransportRequestOptions, callback: callbackFn<CreatePit.CreatePit_Response>): TransportRequestCallback;

  getSource (params: GetSource.GetSource_Request, options?: TransportRequestOptions): TransportRequestPromise<GetSource.GetSource_Response>;
  getSource (params: GetSource.GetSource_Request, callback: callbackFn<GetSource.GetSource_Response>): TransportRequestCallback;
  getSource (params: GetSource.GetSource_Request, options: TransportRequestOptions, callback: callbackFn<GetSource.GetSource_Response>): TransportRequestCallback;

  existsSource (params: ExistsSource.ExistsSource_Request, options?: TransportRequestOptions): TransportRequestPromise<ExistsSource.ExistsSource_Response>;
  existsSource (params: ExistsSource.ExistsSource_Request, callback: callbackFn<ExistsSource.ExistsSource_Response>): TransportRequestCallback;
  existsSource (params: ExistsSource.ExistsSource_Request, options: TransportRequestOptions, callback: callbackFn<ExistsSource.ExistsSource_Response>): TransportRequestCallback;

  termvectors (params: Termvectors.Termvectors_Request, options?: TransportRequestOptions): TransportRequestPromise<Termvectors.Termvectors_Response>;
  termvectors (params: Termvectors.Termvectors_Request, callback: callbackFn<Termvectors.Termvectors_Response>): TransportRequestCallback;
  termvectors (params: Termvectors.Termvectors_Request, options: TransportRequestOptions, callback: callbackFn<Termvectors.Termvectors_Response>): TransportRequestCallback;

  updateByQuery (params: UpdateByQuery.UpdateByQuery_Request, options?: TransportRequestOptions): TransportRequestPromise<UpdateByQuery.UpdateByQuery_Response>;
  updateByQuery (params: UpdateByQuery.UpdateByQuery_Request, callback: callbackFn<UpdateByQuery.UpdateByQuery_Response>): TransportRequestCallback;
  updateByQuery (params: UpdateByQuery.UpdateByQuery_Request, options: TransportRequestOptions, callback: callbackFn<UpdateByQuery.UpdateByQuery_Response>): TransportRequestCallback;

  update (params: Update.Update_Request, options?: TransportRequestOptions): TransportRequestPromise<Update.Update_Response>;
  update (params: Update.Update_Request, callback: callbackFn<Update.Update_Response>): TransportRequestCallback;
  update (params: Update.Update_Request, options: TransportRequestOptions, callback: callbackFn<Update.Update_Response>): TransportRequestCallback;

}

export { Client };
