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
    help (params?: Cat_Help.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Help.Response>;
    help (callback: callbackFn<Cat_Help.Response>): TransportRequestCallback;
    help (params: Cat_Help.Request, callback: callbackFn<Cat_Help.Response>): TransportRequestCallback;
    help (params: Cat_Help.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Help.Response>): TransportRequestCallback;

    aliases (params?: Cat_Aliases.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Aliases.Response>;
    aliases (callback: callbackFn<Cat_Aliases.Response>): TransportRequestCallback;
    aliases (params: Cat_Aliases.Request, callback: callbackFn<Cat_Aliases.Response>): TransportRequestCallback;
    aliases (params: Cat_Aliases.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Aliases.Response>): TransportRequestCallback;

    allocation (params?: Cat_Allocation.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Allocation.Response>;
    allocation (callback: callbackFn<Cat_Allocation.Response>): TransportRequestCallback;
    allocation (params: Cat_Allocation.Request, callback: callbackFn<Cat_Allocation.Response>): TransportRequestCallback;
    allocation (params: Cat_Allocation.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Allocation.Response>): TransportRequestCallback;

    clusterManager (params?: Cat_ClusterManager.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_ClusterManager.Response>;
    clusterManager (callback: callbackFn<Cat_ClusterManager.Response>): TransportRequestCallback;
    clusterManager (params: Cat_ClusterManager.Request, callback: callbackFn<Cat_ClusterManager.Response>): TransportRequestCallback;
    clusterManager (params: Cat_ClusterManager.Request, options: TransportRequestOptions, callback: callbackFn<Cat_ClusterManager.Response>): TransportRequestCallback;

    count (params?: Cat_Count.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Count.Response>;
    count (callback: callbackFn<Cat_Count.Response>): TransportRequestCallback;
    count (params: Cat_Count.Request, callback: callbackFn<Cat_Count.Response>): TransportRequestCallback;
    count (params: Cat_Count.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Count.Response>): TransportRequestCallback;

    fielddata (params?: Cat_Fielddata.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Fielddata.Response>;
    fielddata (callback: callbackFn<Cat_Fielddata.Response>): TransportRequestCallback;
    fielddata (params: Cat_Fielddata.Request, callback: callbackFn<Cat_Fielddata.Response>): TransportRequestCallback;
    fielddata (params: Cat_Fielddata.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Fielddata.Response>): TransportRequestCallback;

    health (params?: Cat_Health.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Health.Response>;
    health (callback: callbackFn<Cat_Health.Response>): TransportRequestCallback;
    health (params: Cat_Health.Request, callback: callbackFn<Cat_Health.Response>): TransportRequestCallback;
    health (params: Cat_Health.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Health.Response>): TransportRequestCallback;

    indices (params?: Cat_Indices.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Indices.Response>;
    indices (callback: callbackFn<Cat_Indices.Response>): TransportRequestCallback;
    indices (params: Cat_Indices.Request, callback: callbackFn<Cat_Indices.Response>): TransportRequestCallback;
    indices (params: Cat_Indices.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Indices.Response>): TransportRequestCallback;

    master (params?: Cat_Master.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Master.Response>;
    master (callback: callbackFn<Cat_Master.Response>): TransportRequestCallback;
    master (params: Cat_Master.Request, callback: callbackFn<Cat_Master.Response>): TransportRequestCallback;
    master (params: Cat_Master.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Master.Response>): TransportRequestCallback;

    nodeattrs (params?: Cat_Nodeattrs.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Nodeattrs.Response>;
    nodeattrs (callback: callbackFn<Cat_Nodeattrs.Response>): TransportRequestCallback;
    nodeattrs (params: Cat_Nodeattrs.Request, callback: callbackFn<Cat_Nodeattrs.Response>): TransportRequestCallback;
    nodeattrs (params: Cat_Nodeattrs.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Nodeattrs.Response>): TransportRequestCallback;

    nodes (params?: Cat_Nodes.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Nodes.Response>;
    nodes (callback: callbackFn<Cat_Nodes.Response>): TransportRequestCallback;
    nodes (params: Cat_Nodes.Request, callback: callbackFn<Cat_Nodes.Response>): TransportRequestCallback;
    nodes (params: Cat_Nodes.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Nodes.Response>): TransportRequestCallback;

    pendingTasks (params?: Cat_PendingTasks.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_PendingTasks.Response>;
    pendingTasks (callback: callbackFn<Cat_PendingTasks.Response>): TransportRequestCallback;
    pendingTasks (params: Cat_PendingTasks.Request, callback: callbackFn<Cat_PendingTasks.Response>): TransportRequestCallback;
    pendingTasks (params: Cat_PendingTasks.Request, options: TransportRequestOptions, callback: callbackFn<Cat_PendingTasks.Response>): TransportRequestCallback;

    pitSegments (params?: Cat_PitSegments.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_PitSegments.Response>;
    pitSegments (callback: callbackFn<Cat_PitSegments.Response>): TransportRequestCallback;
    pitSegments (params: Cat_PitSegments.Request, callback: callbackFn<Cat_PitSegments.Response>): TransportRequestCallback;
    pitSegments (params: Cat_PitSegments.Request, options: TransportRequestOptions, callback: callbackFn<Cat_PitSegments.Response>): TransportRequestCallback;

    allPitSegments (params?: Cat_AllPitSegments.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_AllPitSegments.Response>;
    allPitSegments (callback: callbackFn<Cat_AllPitSegments.Response>): TransportRequestCallback;
    allPitSegments (params: Cat_AllPitSegments.Request, callback: callbackFn<Cat_AllPitSegments.Response>): TransportRequestCallback;
    allPitSegments (params: Cat_AllPitSegments.Request, options: TransportRequestOptions, callback: callbackFn<Cat_AllPitSegments.Response>): TransportRequestCallback;

    plugins (params?: Cat_Plugins.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Plugins.Response>;
    plugins (callback: callbackFn<Cat_Plugins.Response>): TransportRequestCallback;
    plugins (params: Cat_Plugins.Request, callback: callbackFn<Cat_Plugins.Response>): TransportRequestCallback;
    plugins (params: Cat_Plugins.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Plugins.Response>): TransportRequestCallback;

    recovery (params?: Cat_Recovery.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Recovery.Response>;
    recovery (callback: callbackFn<Cat_Recovery.Response>): TransportRequestCallback;
    recovery (params: Cat_Recovery.Request, callback: callbackFn<Cat_Recovery.Response>): TransportRequestCallback;
    recovery (params: Cat_Recovery.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Recovery.Response>): TransportRequestCallback;

    repositories (params?: Cat_Repositories.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Repositories.Response>;
    repositories (callback: callbackFn<Cat_Repositories.Response>): TransportRequestCallback;
    repositories (params: Cat_Repositories.Request, callback: callbackFn<Cat_Repositories.Response>): TransportRequestCallback;
    repositories (params: Cat_Repositories.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Repositories.Response>): TransportRequestCallback;

    segmentReplication (params?: Cat_SegmentReplication.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_SegmentReplication.Response>;
    segmentReplication (callback: callbackFn<Cat_SegmentReplication.Response>): TransportRequestCallback;
    segmentReplication (params: Cat_SegmentReplication.Request, callback: callbackFn<Cat_SegmentReplication.Response>): TransportRequestCallback;
    segmentReplication (params: Cat_SegmentReplication.Request, options: TransportRequestOptions, callback: callbackFn<Cat_SegmentReplication.Response>): TransportRequestCallback;

    segments (params?: Cat_Segments.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Segments.Response>;
    segments (callback: callbackFn<Cat_Segments.Response>): TransportRequestCallback;
    segments (params: Cat_Segments.Request, callback: callbackFn<Cat_Segments.Response>): TransportRequestCallback;
    segments (params: Cat_Segments.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Segments.Response>): TransportRequestCallback;

    shards (params?: Cat_Shards.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Shards.Response>;
    shards (callback: callbackFn<Cat_Shards.Response>): TransportRequestCallback;
    shards (params: Cat_Shards.Request, callback: callbackFn<Cat_Shards.Response>): TransportRequestCallback;
    shards (params: Cat_Shards.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Shards.Response>): TransportRequestCallback;

    snapshots (params?: Cat_Snapshots.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Snapshots.Response>;
    snapshots (callback: callbackFn<Cat_Snapshots.Response>): TransportRequestCallback;
    snapshots (params: Cat_Snapshots.Request, callback: callbackFn<Cat_Snapshots.Response>): TransportRequestCallback;
    snapshots (params: Cat_Snapshots.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Snapshots.Response>): TransportRequestCallback;

    tasks (params?: Cat_Tasks.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Tasks.Response>;
    tasks (callback: callbackFn<Cat_Tasks.Response>): TransportRequestCallback;
    tasks (params: Cat_Tasks.Request, callback: callbackFn<Cat_Tasks.Response>): TransportRequestCallback;
    tasks (params: Cat_Tasks.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Tasks.Response>): TransportRequestCallback;

    templates (params?: Cat_Templates.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_Templates.Response>;
    templates (callback: callbackFn<Cat_Templates.Response>): TransportRequestCallback;
    templates (params: Cat_Templates.Request, callback: callbackFn<Cat_Templates.Response>): TransportRequestCallback;
    templates (params: Cat_Templates.Request, options: TransportRequestOptions, callback: callbackFn<Cat_Templates.Response>): TransportRequestCallback;

    threadPool (params?: Cat_ThreadPool.Request, options?: TransportRequestOptions): TransportRequestPromise<Cat_ThreadPool.Response>;
    threadPool (callback: callbackFn<Cat_ThreadPool.Response>): TransportRequestCallback;
    threadPool (params: Cat_ThreadPool.Request, callback: callbackFn<Cat_ThreadPool.Response>): TransportRequestCallback;
    threadPool (params: Cat_ThreadPool.Request, options: TransportRequestOptions, callback: callbackFn<Cat_ThreadPool.Response>): TransportRequestCallback;

  };

  cluster: {
    allocationExplain (params?: Cluster_AllocationExplain.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_AllocationExplain.Response>;
    allocationExplain (callback: callbackFn<Cluster_AllocationExplain.Response>): TransportRequestCallback;
    allocationExplain (params: Cluster_AllocationExplain.Request, callback: callbackFn<Cluster_AllocationExplain.Response>): TransportRequestCallback;
    allocationExplain (params: Cluster_AllocationExplain.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_AllocationExplain.Response>): TransportRequestCallback;

    deleteDecommissionAwareness (params?: Cluster_DeleteDecommissionAwareness.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteDecommissionAwareness.Response>;
    deleteDecommissionAwareness (callback: callbackFn<Cluster_DeleteDecommissionAwareness.Response>): TransportRequestCallback;
    deleteDecommissionAwareness (params: Cluster_DeleteDecommissionAwareness.Request, callback: callbackFn<Cluster_DeleteDecommissionAwareness.Response>): TransportRequestCallback;
    deleteDecommissionAwareness (params: Cluster_DeleteDecommissionAwareness.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteDecommissionAwareness.Response>): TransportRequestCallback;

    getDecommissionAwareness (params: Cluster_GetDecommissionAwareness.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetDecommissionAwareness.Response>;
    getDecommissionAwareness (params: Cluster_GetDecommissionAwareness.Request, callback: callbackFn<Cluster_GetDecommissionAwareness.Response>): TransportRequestCallback;
    getDecommissionAwareness (params: Cluster_GetDecommissionAwareness.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetDecommissionAwareness.Response>): TransportRequestCallback;

    putDecommissionAwareness (params: Cluster_PutDecommissionAwareness.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutDecommissionAwareness.Response>;
    putDecommissionAwareness (params: Cluster_PutDecommissionAwareness.Request, callback: callbackFn<Cluster_PutDecommissionAwareness.Response>): TransportRequestCallback;
    putDecommissionAwareness (params: Cluster_PutDecommissionAwareness.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutDecommissionAwareness.Response>): TransportRequestCallback;

    health (params?: Cluster_Health.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_Health.Response>;
    health (callback: callbackFn<Cluster_Health.Response>): TransportRequestCallback;
    health (params: Cluster_Health.Request, callback: callbackFn<Cluster_Health.Response>): TransportRequestCallback;
    health (params: Cluster_Health.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_Health.Response>): TransportRequestCallback;

    pendingTasks (params?: Cluster_PendingTasks.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PendingTasks.Response>;
    pendingTasks (callback: callbackFn<Cluster_PendingTasks.Response>): TransportRequestCallback;
    pendingTasks (params: Cluster_PendingTasks.Request, callback: callbackFn<Cluster_PendingTasks.Response>): TransportRequestCallback;
    pendingTasks (params: Cluster_PendingTasks.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PendingTasks.Response>): TransportRequestCallback;

    reroute (params?: Cluster_Reroute.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_Reroute.Response>;
    reroute (callback: callbackFn<Cluster_Reroute.Response>): TransportRequestCallback;
    reroute (params: Cluster_Reroute.Request, callback: callbackFn<Cluster_Reroute.Response>): TransportRequestCallback;
    reroute (params: Cluster_Reroute.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_Reroute.Response>): TransportRequestCallback;

    getWeightedRouting (params: Cluster_GetWeightedRouting.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetWeightedRouting.Response>;
    getWeightedRouting (params: Cluster_GetWeightedRouting.Request, callback: callbackFn<Cluster_GetWeightedRouting.Response>): TransportRequestCallback;
    getWeightedRouting (params: Cluster_GetWeightedRouting.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetWeightedRouting.Response>): TransportRequestCallback;

    putWeightedRouting (params: Cluster_PutWeightedRouting.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutWeightedRouting.Response>;
    putWeightedRouting (params: Cluster_PutWeightedRouting.Request, callback: callbackFn<Cluster_PutWeightedRouting.Response>): TransportRequestCallback;
    putWeightedRouting (params: Cluster_PutWeightedRouting.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutWeightedRouting.Response>): TransportRequestCallback;

    deleteWeightedRouting (params?: Cluster_DeleteWeightedRouting.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteWeightedRouting.Response>;
    deleteWeightedRouting (callback: callbackFn<Cluster_DeleteWeightedRouting.Response>): TransportRequestCallback;
    deleteWeightedRouting (params: Cluster_DeleteWeightedRouting.Request, callback: callbackFn<Cluster_DeleteWeightedRouting.Response>): TransportRequestCallback;
    deleteWeightedRouting (params: Cluster_DeleteWeightedRouting.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteWeightedRouting.Response>): TransportRequestCallback;

    getSettings (params?: Cluster_GetSettings.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetSettings.Response>;
    getSettings (callback: callbackFn<Cluster_GetSettings.Response>): TransportRequestCallback;
    getSettings (params: Cluster_GetSettings.Request, callback: callbackFn<Cluster_GetSettings.Response>): TransportRequestCallback;
    getSettings (params: Cluster_GetSettings.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetSettings.Response>): TransportRequestCallback;

    putSettings (params: Cluster_PutSettings.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutSettings.Response>;
    putSettings (params: Cluster_PutSettings.Request, callback: callbackFn<Cluster_PutSettings.Response>): TransportRequestCallback;
    putSettings (params: Cluster_PutSettings.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutSettings.Response>): TransportRequestCallback;

    state (params?: Cluster_State.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_State.Response>;
    state (callback: callbackFn<Cluster_State.Response>): TransportRequestCallback;
    state (params: Cluster_State.Request, callback: callbackFn<Cluster_State.Response>): TransportRequestCallback;
    state (params: Cluster_State.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_State.Response>): TransportRequestCallback;

    stats (params?: Cluster_Stats.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_Stats.Response>;
    stats (callback: callbackFn<Cluster_Stats.Response>): TransportRequestCallback;
    stats (params: Cluster_Stats.Request, callback: callbackFn<Cluster_Stats.Response>): TransportRequestCallback;
    stats (params: Cluster_Stats.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_Stats.Response>): TransportRequestCallback;

    deleteVotingConfigExclusions (params?: Cluster_DeleteVotingConfigExclusions.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteVotingConfigExclusions.Response>;
    deleteVotingConfigExclusions (callback: callbackFn<Cluster_DeleteVotingConfigExclusions.Response>): TransportRequestCallback;
    deleteVotingConfigExclusions (params: Cluster_DeleteVotingConfigExclusions.Request, callback: callbackFn<Cluster_DeleteVotingConfigExclusions.Response>): TransportRequestCallback;
    deleteVotingConfigExclusions (params: Cluster_DeleteVotingConfigExclusions.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteVotingConfigExclusions.Response>): TransportRequestCallback;

    postVotingConfigExclusions (params?: Cluster_PostVotingConfigExclusions.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PostVotingConfigExclusions.Response>;
    postVotingConfigExclusions (callback: callbackFn<Cluster_PostVotingConfigExclusions.Response>): TransportRequestCallback;
    postVotingConfigExclusions (params: Cluster_PostVotingConfigExclusions.Request, callback: callbackFn<Cluster_PostVotingConfigExclusions.Response>): TransportRequestCallback;
    postVotingConfigExclusions (params: Cluster_PostVotingConfigExclusions.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PostVotingConfigExclusions.Response>): TransportRequestCallback;

    getComponentTemplate (params?: Cluster_GetComponentTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_GetComponentTemplate.Response>;
    getComponentTemplate (callback: callbackFn<Cluster_GetComponentTemplate.Response>): TransportRequestCallback;
    getComponentTemplate (params: Cluster_GetComponentTemplate.Request, callback: callbackFn<Cluster_GetComponentTemplate.Response>): TransportRequestCallback;
    getComponentTemplate (params: Cluster_GetComponentTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_GetComponentTemplate.Response>): TransportRequestCallback;

    deleteComponentTemplate (params: Cluster_DeleteComponentTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_DeleteComponentTemplate.Response>;
    deleteComponentTemplate (params: Cluster_DeleteComponentTemplate.Request, callback: callbackFn<Cluster_DeleteComponentTemplate.Response>): TransportRequestCallback;
    deleteComponentTemplate (params: Cluster_DeleteComponentTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_DeleteComponentTemplate.Response>): TransportRequestCallback;

    existsComponentTemplate (params: Cluster_ExistsComponentTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_ExistsComponentTemplate.Response>;
    existsComponentTemplate (params: Cluster_ExistsComponentTemplate.Request, callback: callbackFn<Cluster_ExistsComponentTemplate.Response>): TransportRequestCallback;
    existsComponentTemplate (params: Cluster_ExistsComponentTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_ExistsComponentTemplate.Response>): TransportRequestCallback;

    putComponentTemplate (params: Cluster_PutComponentTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_PutComponentTemplate.Response>;
    putComponentTemplate (params: Cluster_PutComponentTemplate.Request, callback: callbackFn<Cluster_PutComponentTemplate.Response>): TransportRequestCallback;
    putComponentTemplate (params: Cluster_PutComponentTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_PutComponentTemplate.Response>): TransportRequestCallback;

    remoteInfo (params?: Cluster_RemoteInfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Cluster_RemoteInfo.Response>;
    remoteInfo (callback: callbackFn<Cluster_RemoteInfo.Response>): TransportRequestCallback;
    remoteInfo (params: Cluster_RemoteInfo.Request, callback: callbackFn<Cluster_RemoteInfo.Response>): TransportRequestCallback;
    remoteInfo (params: Cluster_RemoteInfo.Request, options: TransportRequestOptions, callback: callbackFn<Cluster_RemoteInfo.Response>): TransportRequestCallback;

  };

  dangling_indices: {
    listDanglingIndices (params?: DanglingIndices_ListDanglingIndices.Request, options?: TransportRequestOptions): TransportRequestPromise<DanglingIndices_ListDanglingIndices.Response>;
    listDanglingIndices (callback: callbackFn<DanglingIndices_ListDanglingIndices.Response>): TransportRequestCallback;
    listDanglingIndices (params: DanglingIndices_ListDanglingIndices.Request, callback: callbackFn<DanglingIndices_ListDanglingIndices.Response>): TransportRequestCallback;
    listDanglingIndices (params: DanglingIndices_ListDanglingIndices.Request, options: TransportRequestOptions, callback: callbackFn<DanglingIndices_ListDanglingIndices.Response>): TransportRequestCallback;

    deleteDanglingIndex (params: DanglingIndices_DeleteDanglingIndex.Request, options?: TransportRequestOptions): TransportRequestPromise<DanglingIndices_DeleteDanglingIndex.Response>;
    deleteDanglingIndex (params: DanglingIndices_DeleteDanglingIndex.Request, callback: callbackFn<DanglingIndices_DeleteDanglingIndex.Response>): TransportRequestCallback;
    deleteDanglingIndex (params: DanglingIndices_DeleteDanglingIndex.Request, options: TransportRequestOptions, callback: callbackFn<DanglingIndices_DeleteDanglingIndex.Response>): TransportRequestCallback;

    importDanglingIndex (params: DanglingIndices_ImportDanglingIndex.Request, options?: TransportRequestOptions): TransportRequestPromise<DanglingIndices_ImportDanglingIndex.Response>;
    importDanglingIndex (params: DanglingIndices_ImportDanglingIndex.Request, callback: callbackFn<DanglingIndices_ImportDanglingIndex.Response>): TransportRequestCallback;
    importDanglingIndex (params: DanglingIndices_ImportDanglingIndex.Request, options: TransportRequestOptions, callback: callbackFn<DanglingIndices_ImportDanglingIndex.Response>): TransportRequestCallback;

  };

  indices: {
    getAlias (params?: Indices_GetAlias.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetAlias.Response>;
    getAlias (callback: callbackFn<Indices_GetAlias.Response>): TransportRequestCallback;
    getAlias (params: Indices_GetAlias.Request, callback: callbackFn<Indices_GetAlias.Response>): TransportRequestCallback;
    getAlias (params: Indices_GetAlias.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetAlias.Response>): TransportRequestCallback;

    putAlias (params?: Indices_PutAlias.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutAlias.Response>;
    putAlias (callback: callbackFn<Indices_PutAlias.Response>): TransportRequestCallback;
    putAlias (params: Indices_PutAlias.Request, callback: callbackFn<Indices_PutAlias.Response>): TransportRequestCallback;
    putAlias (params: Indices_PutAlias.Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutAlias.Response>): TransportRequestCallback;

    existsAlias (params: Indices_ExistsAlias.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ExistsAlias.Response>;
    existsAlias (params: Indices_ExistsAlias.Request, callback: callbackFn<Indices_ExistsAlias.Response>): TransportRequestCallback;
    existsAlias (params: Indices_ExistsAlias.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ExistsAlias.Response>): TransportRequestCallback;

    updateAliases (params: Indices_UpdateAliases.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_UpdateAliases.Response>;
    updateAliases (params: Indices_UpdateAliases.Request, callback: callbackFn<Indices_UpdateAliases.Response>): TransportRequestCallback;
    updateAliases (params: Indices_UpdateAliases.Request, options: TransportRequestOptions, callback: callbackFn<Indices_UpdateAliases.Response>): TransportRequestCallback;

    analyze (params?: Indices_Analyze.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Analyze.Response>;
    analyze (callback: callbackFn<Indices_Analyze.Response>): TransportRequestCallback;
    analyze (params: Indices_Analyze.Request, callback: callbackFn<Indices_Analyze.Response>): TransportRequestCallback;
    analyze (params: Indices_Analyze.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Analyze.Response>): TransportRequestCallback;

    clearCache (params?: Indices_ClearCache.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ClearCache.Response>;
    clearCache (callback: callbackFn<Indices_ClearCache.Response>): TransportRequestCallback;
    clearCache (params: Indices_ClearCache.Request, callback: callbackFn<Indices_ClearCache.Response>): TransportRequestCallback;
    clearCache (params: Indices_ClearCache.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ClearCache.Response>): TransportRequestCallback;

    getDataStream (params?: Indices_GetDataStream.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetDataStream.Response>;
    getDataStream (callback: callbackFn<Indices_GetDataStream.Response>): TransportRequestCallback;
    getDataStream (params: Indices_GetDataStream.Request, callback: callbackFn<Indices_GetDataStream.Response>): TransportRequestCallback;
    getDataStream (params: Indices_GetDataStream.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetDataStream.Response>): TransportRequestCallback;

    dataStreamsStats (params?: Indices_DataStreamsStats.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DataStreamsStats.Response>;
    dataStreamsStats (callback: callbackFn<Indices_DataStreamsStats.Response>): TransportRequestCallback;
    dataStreamsStats (params: Indices_DataStreamsStats.Request, callback: callbackFn<Indices_DataStreamsStats.Response>): TransportRequestCallback;
    dataStreamsStats (params: Indices_DataStreamsStats.Request, options: TransportRequestOptions, callback: callbackFn<Indices_DataStreamsStats.Response>): TransportRequestCallback;

    deleteDataStream (params: Indices_DeleteDataStream.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteDataStream.Response>;
    deleteDataStream (params: Indices_DeleteDataStream.Request, callback: callbackFn<Indices_DeleteDataStream.Response>): TransportRequestCallback;
    deleteDataStream (params: Indices_DeleteDataStream.Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteDataStream.Response>): TransportRequestCallback;

    createDataStream (params: Indices_CreateDataStream.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_CreateDataStream.Response>;
    createDataStream (params: Indices_CreateDataStream.Request, callback: callbackFn<Indices_CreateDataStream.Response>): TransportRequestCallback;
    createDataStream (params: Indices_CreateDataStream.Request, options: TransportRequestOptions, callback: callbackFn<Indices_CreateDataStream.Response>): TransportRequestCallback;

    flush (params?: Indices_Flush.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Flush.Response>;
    flush (callback: callbackFn<Indices_Flush.Response>): TransportRequestCallback;
    flush (params: Indices_Flush.Request, callback: callbackFn<Indices_Flush.Response>): TransportRequestCallback;
    flush (params: Indices_Flush.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Flush.Response>): TransportRequestCallback;

    forcemerge (params?: Indices_Forcemerge.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Forcemerge.Response>;
    forcemerge (callback: callbackFn<Indices_Forcemerge.Response>): TransportRequestCallback;
    forcemerge (params: Indices_Forcemerge.Request, callback: callbackFn<Indices_Forcemerge.Response>): TransportRequestCallback;
    forcemerge (params: Indices_Forcemerge.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Forcemerge.Response>): TransportRequestCallback;

    getIndexTemplate (params?: Indices_GetIndexTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetIndexTemplate.Response>;
    getIndexTemplate (callback: callbackFn<Indices_GetIndexTemplate.Response>): TransportRequestCallback;
    getIndexTemplate (params: Indices_GetIndexTemplate.Request, callback: callbackFn<Indices_GetIndexTemplate.Response>): TransportRequestCallback;
    getIndexTemplate (params: Indices_GetIndexTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetIndexTemplate.Response>): TransportRequestCallback;

    simulateTemplate (params?: Indices_SimulateTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_SimulateTemplate.Response>;
    simulateTemplate (callback: callbackFn<Indices_SimulateTemplate.Response>): TransportRequestCallback;
    simulateTemplate (params: Indices_SimulateTemplate.Request, callback: callbackFn<Indices_SimulateTemplate.Response>): TransportRequestCallback;
    simulateTemplate (params: Indices_SimulateTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_SimulateTemplate.Response>): TransportRequestCallback;

    simulateIndexTemplate (params: Indices_SimulateIndexTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_SimulateIndexTemplate.Response>;
    simulateIndexTemplate (params: Indices_SimulateIndexTemplate.Request, callback: callbackFn<Indices_SimulateIndexTemplate.Response>): TransportRequestCallback;
    simulateIndexTemplate (params: Indices_SimulateIndexTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_SimulateIndexTemplate.Response>): TransportRequestCallback;

    deleteIndexTemplate (params: Indices_DeleteIndexTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteIndexTemplate.Response>;
    deleteIndexTemplate (params: Indices_DeleteIndexTemplate.Request, callback: callbackFn<Indices_DeleteIndexTemplate.Response>): TransportRequestCallback;
    deleteIndexTemplate (params: Indices_DeleteIndexTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteIndexTemplate.Response>): TransportRequestCallback;

    existsIndexTemplate (params: Indices_ExistsIndexTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ExistsIndexTemplate.Response>;
    existsIndexTemplate (params: Indices_ExistsIndexTemplate.Request, callback: callbackFn<Indices_ExistsIndexTemplate.Response>): TransportRequestCallback;
    existsIndexTemplate (params: Indices_ExistsIndexTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ExistsIndexTemplate.Response>): TransportRequestCallback;

    putIndexTemplate (params: Indices_PutIndexTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutIndexTemplate.Response>;
    putIndexTemplate (params: Indices_PutIndexTemplate.Request, callback: callbackFn<Indices_PutIndexTemplate.Response>): TransportRequestCallback;
    putIndexTemplate (params: Indices_PutIndexTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutIndexTemplate.Response>): TransportRequestCallback;

    getMapping (params?: Indices_GetMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetMapping.Response>;
    getMapping (callback: callbackFn<Indices_GetMapping.Response>): TransportRequestCallback;
    getMapping (params: Indices_GetMapping.Request, callback: callbackFn<Indices_GetMapping.Response>): TransportRequestCallback;
    getMapping (params: Indices_GetMapping.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetMapping.Response>): TransportRequestCallback;

    getFieldMapping (params: Indices_GetFieldMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetFieldMapping.Response>;
    getFieldMapping (params: Indices_GetFieldMapping.Request, callback: callbackFn<Indices_GetFieldMapping.Response>): TransportRequestCallback;
    getFieldMapping (params: Indices_GetFieldMapping.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetFieldMapping.Response>): TransportRequestCallback;

    recovery (params?: Indices_Recovery.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Recovery.Response>;
    recovery (callback: callbackFn<Indices_Recovery.Response>): TransportRequestCallback;
    recovery (params: Indices_Recovery.Request, callback: callbackFn<Indices_Recovery.Response>): TransportRequestCallback;
    recovery (params: Indices_Recovery.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Recovery.Response>): TransportRequestCallback;

    refresh (params?: Indices_Refresh.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Refresh.Response>;
    refresh (callback: callbackFn<Indices_Refresh.Response>): TransportRequestCallback;
    refresh (params: Indices_Refresh.Request, callback: callbackFn<Indices_Refresh.Response>): TransportRequestCallback;
    refresh (params: Indices_Refresh.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Refresh.Response>): TransportRequestCallback;

    resolveIndex (params: Indices_ResolveIndex.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ResolveIndex.Response>;
    resolveIndex (params: Indices_ResolveIndex.Request, callback: callbackFn<Indices_ResolveIndex.Response>): TransportRequestCallback;
    resolveIndex (params: Indices_ResolveIndex.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ResolveIndex.Response>): TransportRequestCallback;

    segments (params?: Indices_Segments.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Segments.Response>;
    segments (callback: callbackFn<Indices_Segments.Response>): TransportRequestCallback;
    segments (params: Indices_Segments.Request, callback: callbackFn<Indices_Segments.Response>): TransportRequestCallback;
    segments (params: Indices_Segments.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Segments.Response>): TransportRequestCallback;

    getSettings (params?: Indices_GetSettings.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetSettings.Response>;
    getSettings (callback: callbackFn<Indices_GetSettings.Response>): TransportRequestCallback;
    getSettings (params: Indices_GetSettings.Request, callback: callbackFn<Indices_GetSettings.Response>): TransportRequestCallback;
    getSettings (params: Indices_GetSettings.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetSettings.Response>): TransportRequestCallback;

    putSettings (params: Indices_PutSettings.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutSettings.Response>;
    putSettings (params: Indices_PutSettings.Request, callback: callbackFn<Indices_PutSettings.Response>): TransportRequestCallback;
    putSettings (params: Indices_PutSettings.Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutSettings.Response>): TransportRequestCallback;

    shardStores (params?: Indices_ShardStores.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ShardStores.Response>;
    shardStores (callback: callbackFn<Indices_ShardStores.Response>): TransportRequestCallback;
    shardStores (params: Indices_ShardStores.Request, callback: callbackFn<Indices_ShardStores.Response>): TransportRequestCallback;
    shardStores (params: Indices_ShardStores.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ShardStores.Response>): TransportRequestCallback;

    stats (params?: Indices_Stats.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Stats.Response>;
    stats (callback: callbackFn<Indices_Stats.Response>): TransportRequestCallback;
    stats (params: Indices_Stats.Request, callback: callbackFn<Indices_Stats.Response>): TransportRequestCallback;
    stats (params: Indices_Stats.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Stats.Response>): TransportRequestCallback;

    getTemplate (params?: Indices_GetTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetTemplate.Response>;
    getTemplate (callback: callbackFn<Indices_GetTemplate.Response>): TransportRequestCallback;
    getTemplate (params: Indices_GetTemplate.Request, callback: callbackFn<Indices_GetTemplate.Response>): TransportRequestCallback;
    getTemplate (params: Indices_GetTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetTemplate.Response>): TransportRequestCallback;

    deleteTemplate (params: Indices_DeleteTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteTemplate.Response>;
    deleteTemplate (params: Indices_DeleteTemplate.Request, callback: callbackFn<Indices_DeleteTemplate.Response>): TransportRequestCallback;
    deleteTemplate (params: Indices_DeleteTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteTemplate.Response>): TransportRequestCallback;

    existsTemplate (params: Indices_ExistsTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ExistsTemplate.Response>;
    existsTemplate (params: Indices_ExistsTemplate.Request, callback: callbackFn<Indices_ExistsTemplate.Response>): TransportRequestCallback;
    existsTemplate (params: Indices_ExistsTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ExistsTemplate.Response>): TransportRequestCallback;

    putTemplate (params: Indices_PutTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutTemplate.Response>;
    putTemplate (params: Indices_PutTemplate.Request, callback: callbackFn<Indices_PutTemplate.Response>): TransportRequestCallback;
    putTemplate (params: Indices_PutTemplate.Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutTemplate.Response>): TransportRequestCallback;

    getUpgrade (params?: Indices_GetUpgrade.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_GetUpgrade.Response>;
    getUpgrade (callback: callbackFn<Indices_GetUpgrade.Response>): TransportRequestCallback;
    getUpgrade (params: Indices_GetUpgrade.Request, callback: callbackFn<Indices_GetUpgrade.Response>): TransportRequestCallback;
    getUpgrade (params: Indices_GetUpgrade.Request, options: TransportRequestOptions, callback: callbackFn<Indices_GetUpgrade.Response>): TransportRequestCallback;

    upgrade (params?: Indices_Upgrade.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Upgrade.Response>;
    upgrade (callback: callbackFn<Indices_Upgrade.Response>): TransportRequestCallback;
    upgrade (params: Indices_Upgrade.Request, callback: callbackFn<Indices_Upgrade.Response>): TransportRequestCallback;
    upgrade (params: Indices_Upgrade.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Upgrade.Response>): TransportRequestCallback;

    validateQuery (params?: Indices_ValidateQuery.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_ValidateQuery.Response>;
    validateQuery (callback: callbackFn<Indices_ValidateQuery.Response>): TransportRequestCallback;
    validateQuery (params: Indices_ValidateQuery.Request, callback: callbackFn<Indices_ValidateQuery.Response>): TransportRequestCallback;
    validateQuery (params: Indices_ValidateQuery.Request, options: TransportRequestOptions, callback: callbackFn<Indices_ValidateQuery.Response>): TransportRequestCallback;

    rollover (params: Indices_Rollover.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Rollover.Response>;
    rollover (params: Indices_Rollover.Request, callback: callbackFn<Indices_Rollover.Response>): TransportRequestCallback;
    rollover (params: Indices_Rollover.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Rollover.Response>): TransportRequestCallback;

    delete (params: Indices_Delete.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Delete.Response>;
    delete (params: Indices_Delete.Request, callback: callbackFn<Indices_Delete.Response>): TransportRequestCallback;
    delete (params: Indices_Delete.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Delete.Response>): TransportRequestCallback;

    get (params: Indices_Get.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Get.Response>;
    get (params: Indices_Get.Request, callback: callbackFn<Indices_Get.Response>): TransportRequestCallback;
    get (params: Indices_Get.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Get.Response>): TransportRequestCallback;

    exists (params: Indices_Exists.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Exists.Response>;
    exists (params: Indices_Exists.Request, callback: callbackFn<Indices_Exists.Response>): TransportRequestCallback;
    exists (params: Indices_Exists.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Exists.Response>): TransportRequestCallback;

    create (params: Indices_Create.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Create.Response>;
    create (params: Indices_Create.Request, callback: callbackFn<Indices_Create.Response>): TransportRequestCallback;
    create (params: Indices_Create.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Create.Response>): TransportRequestCallback;

    deleteAlias (params: Indices_DeleteAlias.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_DeleteAlias.Response>;
    deleteAlias (params: Indices_DeleteAlias.Request, callback: callbackFn<Indices_DeleteAlias.Response>): TransportRequestCallback;
    deleteAlias (params: Indices_DeleteAlias.Request, options: TransportRequestOptions, callback: callbackFn<Indices_DeleteAlias.Response>): TransportRequestCallback;

    addBlock (params: Indices_AddBlock.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_AddBlock.Response>;
    addBlock (params: Indices_AddBlock.Request, callback: callbackFn<Indices_AddBlock.Response>): TransportRequestCallback;
    addBlock (params: Indices_AddBlock.Request, options: TransportRequestOptions, callback: callbackFn<Indices_AddBlock.Response>): TransportRequestCallback;

    clone (params: Indices_Clone.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Clone.Response>;
    clone (params: Indices_Clone.Request, callback: callbackFn<Indices_Clone.Response>): TransportRequestCallback;
    clone (params: Indices_Clone.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Clone.Response>): TransportRequestCallback;

    close (params: Indices_Close.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Close.Response>;
    close (params: Indices_Close.Request, callback: callbackFn<Indices_Close.Response>): TransportRequestCallback;
    close (params: Indices_Close.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Close.Response>): TransportRequestCallback;

    putMapping (params: Indices_PutMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_PutMapping.Response>;
    putMapping (params: Indices_PutMapping.Request, callback: callbackFn<Indices_PutMapping.Response>): TransportRequestCallback;
    putMapping (params: Indices_PutMapping.Request, options: TransportRequestOptions, callback: callbackFn<Indices_PutMapping.Response>): TransportRequestCallback;

    open (params: Indices_Open.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Open.Response>;
    open (params: Indices_Open.Request, callback: callbackFn<Indices_Open.Response>): TransportRequestCallback;
    open (params: Indices_Open.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Open.Response>): TransportRequestCallback;

    shrink (params: Indices_Shrink.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Shrink.Response>;
    shrink (params: Indices_Shrink.Request, callback: callbackFn<Indices_Shrink.Response>): TransportRequestCallback;
    shrink (params: Indices_Shrink.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Shrink.Response>): TransportRequestCallback;

    split (params: Indices_Split.Request, options?: TransportRequestOptions): TransportRequestPromise<Indices_Split.Response>;
    split (params: Indices_Split.Request, callback: callbackFn<Indices_Split.Response>): TransportRequestCallback;
    split (params: Indices_Split.Request, options: TransportRequestOptions, callback: callbackFn<Indices_Split.Response>): TransportRequestCallback;

  };

  ingest: {
    getPipeline (params?: Ingest_GetPipeline.Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_GetPipeline.Response>;
    getPipeline (callback: callbackFn<Ingest_GetPipeline.Response>): TransportRequestCallback;
    getPipeline (params: Ingest_GetPipeline.Request, callback: callbackFn<Ingest_GetPipeline.Response>): TransportRequestCallback;
    getPipeline (params: Ingest_GetPipeline.Request, options: TransportRequestOptions, callback: callbackFn<Ingest_GetPipeline.Response>): TransportRequestCallback;

    simulate (params: Ingest_Simulate.Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_Simulate.Response>;
    simulate (params: Ingest_Simulate.Request, callback: callbackFn<Ingest_Simulate.Response>): TransportRequestCallback;
    simulate (params: Ingest_Simulate.Request, options: TransportRequestOptions, callback: callbackFn<Ingest_Simulate.Response>): TransportRequestCallback;

    deletePipeline (params: Ingest_DeletePipeline.Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_DeletePipeline.Response>;
    deletePipeline (params: Ingest_DeletePipeline.Request, callback: callbackFn<Ingest_DeletePipeline.Response>): TransportRequestCallback;
    deletePipeline (params: Ingest_DeletePipeline.Request, options: TransportRequestOptions, callback: callbackFn<Ingest_DeletePipeline.Response>): TransportRequestCallback;

    putPipeline (params: Ingest_PutPipeline.Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_PutPipeline.Response>;
    putPipeline (params: Ingest_PutPipeline.Request, callback: callbackFn<Ingest_PutPipeline.Response>): TransportRequestCallback;
    putPipeline (params: Ingest_PutPipeline.Request, options: TransportRequestOptions, callback: callbackFn<Ingest_PutPipeline.Response>): TransportRequestCallback;

    processorGrok (params?: Ingest_ProcessorGrok.Request, options?: TransportRequestOptions): TransportRequestPromise<Ingest_ProcessorGrok.Response>;
    processorGrok (callback: callbackFn<Ingest_ProcessorGrok.Response>): TransportRequestCallback;
    processorGrok (params: Ingest_ProcessorGrok.Request, callback: callbackFn<Ingest_ProcessorGrok.Response>): TransportRequestCallback;
    processorGrok (params: Ingest_ProcessorGrok.Request, options: TransportRequestOptions, callback: callbackFn<Ingest_ProcessorGrok.Response>): TransportRequestCallback;

  };

  knn: {
    stats (params?: Knn_Stats.Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_Stats.Response>;
    stats (callback: callbackFn<Knn_Stats.Response>): TransportRequestCallback;
    stats (params: Knn_Stats.Request, callback: callbackFn<Knn_Stats.Response>): TransportRequestCallback;
    stats (params: Knn_Stats.Request, options: TransportRequestOptions, callback: callbackFn<Knn_Stats.Response>): TransportRequestCallback;

    searchModels (params?: Knn_SearchModels.Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_SearchModels.Response>;
    searchModels (callback: callbackFn<Knn_SearchModels.Response>): TransportRequestCallback;
    searchModels (params: Knn_SearchModels.Request, callback: callbackFn<Knn_SearchModels.Response>): TransportRequestCallback;
    searchModels (params: Knn_SearchModels.Request, options: TransportRequestOptions, callback: callbackFn<Knn_SearchModels.Response>): TransportRequestCallback;

    trainModel (params: Knn_TrainModel.Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_TrainModel.Response>;
    trainModel (params: Knn_TrainModel.Request, callback: callbackFn<Knn_TrainModel.Response>): TransportRequestCallback;
    trainModel (params: Knn_TrainModel.Request, options: TransportRequestOptions, callback: callbackFn<Knn_TrainModel.Response>): TransportRequestCallback;

    deleteModel (params: Knn_DeleteModel.Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_DeleteModel.Response>;
    deleteModel (params: Knn_DeleteModel.Request, callback: callbackFn<Knn_DeleteModel.Response>): TransportRequestCallback;
    deleteModel (params: Knn_DeleteModel.Request, options: TransportRequestOptions, callback: callbackFn<Knn_DeleteModel.Response>): TransportRequestCallback;

    getModel (params: Knn_GetModel.Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_GetModel.Response>;
    getModel (params: Knn_GetModel.Request, callback: callbackFn<Knn_GetModel.Response>): TransportRequestCallback;
    getModel (params: Knn_GetModel.Request, options: TransportRequestOptions, callback: callbackFn<Knn_GetModel.Response>): TransportRequestCallback;

    warmup (params: Knn_Warmup.Request, options?: TransportRequestOptions): TransportRequestPromise<Knn_Warmup.Response>;
    warmup (params: Knn_Warmup.Request, callback: callbackFn<Knn_Warmup.Response>): TransportRequestCallback;
    warmup (params: Knn_Warmup.Request, options: TransportRequestOptions, callback: callbackFn<Knn_Warmup.Response>): TransportRequestCallback;

  };

  ml: {
    registerModelGroup (params?: Ml_RegisterModelGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_RegisterModelGroup.Response>;
    registerModelGroup (callback: callbackFn<Ml_RegisterModelGroup.Response>): TransportRequestCallback;
    registerModelGroup (params: Ml_RegisterModelGroup.Request, callback: callbackFn<Ml_RegisterModelGroup.Response>): TransportRequestCallback;
    registerModelGroup (params: Ml_RegisterModelGroup.Request, options: TransportRequestOptions, callback: callbackFn<Ml_RegisterModelGroup.Response>): TransportRequestCallback;

    deleteModelGroup (params: Ml_DeleteModelGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_DeleteModelGroup.Response>;
    deleteModelGroup (params: Ml_DeleteModelGroup.Request, callback: callbackFn<Ml_DeleteModelGroup.Response>): TransportRequestCallback;
    deleteModelGroup (params: Ml_DeleteModelGroup.Request, options: TransportRequestOptions, callback: callbackFn<Ml_DeleteModelGroup.Response>): TransportRequestCallback;

    getModelGroup (params: Ml_GetModelGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_GetModelGroup.Response>;
    getModelGroup (params: Ml_GetModelGroup.Request, callback: callbackFn<Ml_GetModelGroup.Response>): TransportRequestCallback;
    getModelGroup (params: Ml_GetModelGroup.Request, options: TransportRequestOptions, callback: callbackFn<Ml_GetModelGroup.Response>): TransportRequestCallback;

    registerModel (params?: Ml_RegisterModel.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_RegisterModel.Response>;
    registerModel (callback: callbackFn<Ml_RegisterModel.Response>): TransportRequestCallback;
    registerModel (params: Ml_RegisterModel.Request, callback: callbackFn<Ml_RegisterModel.Response>): TransportRequestCallback;
    registerModel (params: Ml_RegisterModel.Request, options: TransportRequestOptions, callback: callbackFn<Ml_RegisterModel.Response>): TransportRequestCallback;

    searchModels (params?: Ml_SearchModels.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_SearchModels.Response>;
    searchModels (callback: callbackFn<Ml_SearchModels.Response>): TransportRequestCallback;
    searchModels (params: Ml_SearchModels.Request, callback: callbackFn<Ml_SearchModels.Response>): TransportRequestCallback;
    searchModels (params: Ml_SearchModels.Request, options: TransportRequestOptions, callback: callbackFn<Ml_SearchModels.Response>): TransportRequestCallback;

    deleteModel (params: Ml_DeleteModel.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_DeleteModel.Response>;
    deleteModel (params: Ml_DeleteModel.Request, callback: callbackFn<Ml_DeleteModel.Response>): TransportRequestCallback;
    deleteModel (params: Ml_DeleteModel.Request, options: TransportRequestOptions, callback: callbackFn<Ml_DeleteModel.Response>): TransportRequestCallback;

    getTask (params: Ml_GetTask.Request, options?: TransportRequestOptions): TransportRequestPromise<Ml_GetTask.Response>;
    getTask (params: Ml_GetTask.Request, callback: callbackFn<Ml_GetTask.Response>): TransportRequestCallback;
    getTask (params: Ml_GetTask.Request, options: TransportRequestOptions, callback: callbackFn<Ml_GetTask.Response>): TransportRequestCallback;

  };

  nodes: {
    info (params?: Nodes_Info.Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_Info.Response>;
    info (callback: callbackFn<Nodes_Info.Response>): TransportRequestCallback;
    info (params: Nodes_Info.Request, callback: callbackFn<Nodes_Info.Response>): TransportRequestCallback;
    info (params: Nodes_Info.Request, options: TransportRequestOptions, callback: callbackFn<Nodes_Info.Response>): TransportRequestCallback;

    hotThreads (params?: Nodes_HotThreads.Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_HotThreads.Response>;
    hotThreads (callback: callbackFn<Nodes_HotThreads.Response>): TransportRequestCallback;
    hotThreads (params: Nodes_HotThreads.Request, callback: callbackFn<Nodes_HotThreads.Response>): TransportRequestCallback;
    hotThreads (params: Nodes_HotThreads.Request, options: TransportRequestOptions, callback: callbackFn<Nodes_HotThreads.Response>): TransportRequestCallback;

    reloadSecureSettings (params?: Nodes_ReloadSecureSettings.Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_ReloadSecureSettings.Response>;
    reloadSecureSettings (callback: callbackFn<Nodes_ReloadSecureSettings.Response>): TransportRequestCallback;
    reloadSecureSettings (params: Nodes_ReloadSecureSettings.Request, callback: callbackFn<Nodes_ReloadSecureSettings.Response>): TransportRequestCallback;
    reloadSecureSettings (params: Nodes_ReloadSecureSettings.Request, options: TransportRequestOptions, callback: callbackFn<Nodes_ReloadSecureSettings.Response>): TransportRequestCallback;

    stats (params?: Nodes_Stats.Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_Stats.Response>;
    stats (callback: callbackFn<Nodes_Stats.Response>): TransportRequestCallback;
    stats (params: Nodes_Stats.Request, callback: callbackFn<Nodes_Stats.Response>): TransportRequestCallback;
    stats (params: Nodes_Stats.Request, options: TransportRequestOptions, callback: callbackFn<Nodes_Stats.Response>): TransportRequestCallback;

    usage (params?: Nodes_Usage.Request, options?: TransportRequestOptions): TransportRequestPromise<Nodes_Usage.Response>;
    usage (callback: callbackFn<Nodes_Usage.Response>): TransportRequestCallback;
    usage (params: Nodes_Usage.Request, callback: callbackFn<Nodes_Usage.Response>): TransportRequestCallback;
    usage (params: Nodes_Usage.Request, options: TransportRequestOptions, callback: callbackFn<Nodes_Usage.Response>): TransportRequestCallback;

  };

  notifications: {
    listChannels (params?: Notifications_ListChannels.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_ListChannels.Response>;
    listChannels (callback: callbackFn<Notifications_ListChannels.Response>): TransportRequestCallback;
    listChannels (params: Notifications_ListChannels.Request, callback: callbackFn<Notifications_ListChannels.Response>): TransportRequestCallback;
    listChannels (params: Notifications_ListChannels.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_ListChannels.Response>): TransportRequestCallback;

    deleteConfigs (params: Notifications_DeleteConfigs.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_DeleteConfigs.Response>;
    deleteConfigs (params: Notifications_DeleteConfigs.Request, callback: callbackFn<Notifications_DeleteConfigs.Response>): TransportRequestCallback;
    deleteConfigs (params: Notifications_DeleteConfigs.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_DeleteConfigs.Response>): TransportRequestCallback;

    getConfigs (params?: Notifications_GetConfigs.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_GetConfigs.Response>;
    getConfigs (callback: callbackFn<Notifications_GetConfigs.Response>): TransportRequestCallback;
    getConfigs (params: Notifications_GetConfigs.Request, callback: callbackFn<Notifications_GetConfigs.Response>): TransportRequestCallback;
    getConfigs (params: Notifications_GetConfigs.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_GetConfigs.Response>): TransportRequestCallback;

    createConfig (params: Notifications_CreateConfig.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_CreateConfig.Response>;
    createConfig (params: Notifications_CreateConfig.Request, callback: callbackFn<Notifications_CreateConfig.Response>): TransportRequestCallback;
    createConfig (params: Notifications_CreateConfig.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_CreateConfig.Response>): TransportRequestCallback;

    deleteConfig (params: Notifications_DeleteConfig.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_DeleteConfig.Response>;
    deleteConfig (params: Notifications_DeleteConfig.Request, callback: callbackFn<Notifications_DeleteConfig.Response>): TransportRequestCallback;
    deleteConfig (params: Notifications_DeleteConfig.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_DeleteConfig.Response>): TransportRequestCallback;

    getConfig (params: Notifications_GetConfig.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_GetConfig.Response>;
    getConfig (params: Notifications_GetConfig.Request, callback: callbackFn<Notifications_GetConfig.Response>): TransportRequestCallback;
    getConfig (params: Notifications_GetConfig.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_GetConfig.Response>): TransportRequestCallback;

    updateConfig (params: Notifications_UpdateConfig.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_UpdateConfig.Response>;
    updateConfig (params: Notifications_UpdateConfig.Request, callback: callbackFn<Notifications_UpdateConfig.Response>): TransportRequestCallback;
    updateConfig (params: Notifications_UpdateConfig.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_UpdateConfig.Response>): TransportRequestCallback;

    sendTest (params: Notifications_SendTest.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_SendTest.Response>;
    sendTest (params: Notifications_SendTest.Request, callback: callbackFn<Notifications_SendTest.Response>): TransportRequestCallback;
    sendTest (params: Notifications_SendTest.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_SendTest.Response>): TransportRequestCallback;

    listFeatures (params?: Notifications_ListFeatures.Request, options?: TransportRequestOptions): TransportRequestPromise<Notifications_ListFeatures.Response>;
    listFeatures (callback: callbackFn<Notifications_ListFeatures.Response>): TransportRequestCallback;
    listFeatures (params: Notifications_ListFeatures.Request, callback: callbackFn<Notifications_ListFeatures.Response>): TransportRequestCallback;
    listFeatures (params: Notifications_ListFeatures.Request, options: TransportRequestOptions, callback: callbackFn<Notifications_ListFeatures.Response>): TransportRequestCallback;

  };

  ppl: {
    query (params: Ppl_Query.Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_Query.Response>;
    query (params: Ppl_Query.Request, callback: callbackFn<Ppl_Query.Response>): TransportRequestCallback;
    query (params: Ppl_Query.Request, options: TransportRequestOptions, callback: callbackFn<Ppl_Query.Response>): TransportRequestCallback;

    explain (params: Ppl_Explain.Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_Explain.Response>;
    explain (params: Ppl_Explain.Request, callback: callbackFn<Ppl_Explain.Response>): TransportRequestCallback;
    explain (params: Ppl_Explain.Request, options: TransportRequestOptions, callback: callbackFn<Ppl_Explain.Response>): TransportRequestCallback;

    getStats (params?: Ppl_GetStats.Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_GetStats.Response>;
    getStats (callback: callbackFn<Ppl_GetStats.Response>): TransportRequestCallback;
    getStats (params: Ppl_GetStats.Request, callback: callbackFn<Ppl_GetStats.Response>): TransportRequestCallback;
    getStats (params: Ppl_GetStats.Request, options: TransportRequestOptions, callback: callbackFn<Ppl_GetStats.Response>): TransportRequestCallback;

    postStats (params: Ppl_PostStats.Request, options?: TransportRequestOptions): TransportRequestPromise<Ppl_PostStats.Response>;
    postStats (params: Ppl_PostStats.Request, callback: callbackFn<Ppl_PostStats.Response>): TransportRequestCallback;
    postStats (params: Ppl_PostStats.Request, options: TransportRequestOptions, callback: callbackFn<Ppl_PostStats.Response>): TransportRequestCallback;

  };

  remote_store: {
    restore (params: RemoteStore_Restore.Request, options?: TransportRequestOptions): TransportRequestPromise<RemoteStore_Restore.Response>;
    restore (params: RemoteStore_Restore.Request, callback: callbackFn<RemoteStore_Restore.Response>): TransportRequestCallback;
    restore (params: RemoteStore_Restore.Request, options: TransportRequestOptions, callback: callbackFn<RemoteStore_Restore.Response>): TransportRequestCallback;

  };

  rollups: {
    delete (params: Rollups_Delete.Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Delete.Response>;
    delete (params: Rollups_Delete.Request, callback: callbackFn<Rollups_Delete.Response>): TransportRequestCallback;
    delete (params: Rollups_Delete.Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Delete.Response>): TransportRequestCallback;

    get (params: Rollups_Get.Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Get.Response>;
    get (params: Rollups_Get.Request, callback: callbackFn<Rollups_Get.Response>): TransportRequestCallback;
    get (params: Rollups_Get.Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Get.Response>): TransportRequestCallback;

    put (params: Rollups_Put.Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Put.Response>;
    put (params: Rollups_Put.Request, callback: callbackFn<Rollups_Put.Response>): TransportRequestCallback;
    put (params: Rollups_Put.Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Put.Response>): TransportRequestCallback;

    explain (params: Rollups_Explain.Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Explain.Response>;
    explain (params: Rollups_Explain.Request, callback: callbackFn<Rollups_Explain.Response>): TransportRequestCallback;
    explain (params: Rollups_Explain.Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Explain.Response>): TransportRequestCallback;

    start (params: Rollups_Start.Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Start.Response>;
    start (params: Rollups_Start.Request, callback: callbackFn<Rollups_Start.Response>): TransportRequestCallback;
    start (params: Rollups_Start.Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Start.Response>): TransportRequestCallback;

    stop (params: Rollups_Stop.Request, options?: TransportRequestOptions): TransportRequestPromise<Rollups_Stop.Response>;
    stop (params: Rollups_Stop.Request, callback: callbackFn<Rollups_Stop.Response>): TransportRequestCallback;
    stop (params: Rollups_Stop.Request, options: TransportRequestOptions, callback: callbackFn<Rollups_Stop.Response>): TransportRequestCallback;

  };

  search_pipeline: {
    get (params?: SearchPipeline_Get.Request, options?: TransportRequestOptions): TransportRequestPromise<SearchPipeline_Get.Response>;
    get (callback: callbackFn<SearchPipeline_Get.Response>): TransportRequestCallback;
    get (params: SearchPipeline_Get.Request, callback: callbackFn<SearchPipeline_Get.Response>): TransportRequestCallback;
    get (params: SearchPipeline_Get.Request, options: TransportRequestOptions, callback: callbackFn<SearchPipeline_Get.Response>): TransportRequestCallback;

    delete (params: SearchPipeline_Delete.Request, options?: TransportRequestOptions): TransportRequestPromise<SearchPipeline_Delete.Response>;
    delete (params: SearchPipeline_Delete.Request, callback: callbackFn<SearchPipeline_Delete.Response>): TransportRequestCallback;
    delete (params: SearchPipeline_Delete.Request, options: TransportRequestOptions, callback: callbackFn<SearchPipeline_Delete.Response>): TransportRequestCallback;

    put (params: SearchPipeline_Put.Request, options?: TransportRequestOptions): TransportRequestPromise<SearchPipeline_Put.Response>;
    put (params: SearchPipeline_Put.Request, callback: callbackFn<SearchPipeline_Put.Response>): TransportRequestCallback;
    put (params: SearchPipeline_Put.Request, options: TransportRequestOptions, callback: callbackFn<SearchPipeline_Put.Response>): TransportRequestCallback;

  };

  security: {
    getSslinfo (params?: Security_GetSslinfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetSslinfo.Response>;
    getSslinfo (callback: callbackFn<Security_GetSslinfo.Response>): TransportRequestCallback;
    getSslinfo (params: Security_GetSslinfo.Request, callback: callbackFn<Security_GetSslinfo.Response>): TransportRequestCallback;
    getSslinfo (params: Security_GetSslinfo.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetSslinfo.Response>): TransportRequestCallback;

    configUpgradeCheck (params?: Security_ConfigUpgradeCheck.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ConfigUpgradeCheck.Response>;
    configUpgradeCheck (callback: callbackFn<Security_ConfigUpgradeCheck.Response>): TransportRequestCallback;
    configUpgradeCheck (params: Security_ConfigUpgradeCheck.Request, callback: callbackFn<Security_ConfigUpgradeCheck.Response>): TransportRequestCallback;
    configUpgradeCheck (params: Security_ConfigUpgradeCheck.Request, options: TransportRequestOptions, callback: callbackFn<Security_ConfigUpgradeCheck.Response>): TransportRequestCallback;

    configUpgradePerform (params?: Security_ConfigUpgradePerform.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ConfigUpgradePerform.Response>;
    configUpgradePerform (callback: callbackFn<Security_ConfigUpgradePerform.Response>): TransportRequestCallback;
    configUpgradePerform (params: Security_ConfigUpgradePerform.Request, callback: callbackFn<Security_ConfigUpgradePerform.Response>): TransportRequestCallback;
    configUpgradePerform (params: Security_ConfigUpgradePerform.Request, options: TransportRequestOptions, callback: callbackFn<Security_ConfigUpgradePerform.Response>): TransportRequestCallback;

    getAccountDetails (params?: Security_GetAccountDetails.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetAccountDetails.Response>;
    getAccountDetails (callback: callbackFn<Security_GetAccountDetails.Response>): TransportRequestCallback;
    getAccountDetails (params: Security_GetAccountDetails.Request, callback: callbackFn<Security_GetAccountDetails.Response>): TransportRequestCallback;
    getAccountDetails (params: Security_GetAccountDetails.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetAccountDetails.Response>): TransportRequestCallback;

    changePassword (params: Security_ChangePassword.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ChangePassword.Response>;
    changePassword (params: Security_ChangePassword.Request, callback: callbackFn<Security_ChangePassword.Response>): TransportRequestCallback;
    changePassword (params: Security_ChangePassword.Request, options: TransportRequestOptions, callback: callbackFn<Security_ChangePassword.Response>): TransportRequestCallback;

    getActionGroups (params?: Security_GetActionGroups.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetActionGroups.Response>;
    getActionGroups (callback: callbackFn<Security_GetActionGroups.Response>): TransportRequestCallback;
    getActionGroups (params: Security_GetActionGroups.Request, callback: callbackFn<Security_GetActionGroups.Response>): TransportRequestCallback;
    getActionGroups (params: Security_GetActionGroups.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetActionGroups.Response>): TransportRequestCallback;

    patchActionGroups (params: Security_PatchActionGroups.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchActionGroups.Response>;
    patchActionGroups (params: Security_PatchActionGroups.Request, callback: callbackFn<Security_PatchActionGroups.Response>): TransportRequestCallback;
    patchActionGroups (params: Security_PatchActionGroups.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchActionGroups.Response>): TransportRequestCallback;

    deleteActionGroup (params: Security_DeleteActionGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteActionGroup.Response>;
    deleteActionGroup (params: Security_DeleteActionGroup.Request, callback: callbackFn<Security_DeleteActionGroup.Response>): TransportRequestCallback;
    deleteActionGroup (params: Security_DeleteActionGroup.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteActionGroup.Response>): TransportRequestCallback;

    getActionGroup (params: Security_GetActionGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetActionGroup.Response>;
    getActionGroup (params: Security_GetActionGroup.Request, callback: callbackFn<Security_GetActionGroup.Response>): TransportRequestCallback;
    getActionGroup (params: Security_GetActionGroup.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetActionGroup.Response>): TransportRequestCallback;

    patchActionGroup (params: Security_PatchActionGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchActionGroup.Response>;
    patchActionGroup (params: Security_PatchActionGroup.Request, callback: callbackFn<Security_PatchActionGroup.Response>): TransportRequestCallback;
    patchActionGroup (params: Security_PatchActionGroup.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchActionGroup.Response>): TransportRequestCallback;

    createActionGroup (params: Security_CreateActionGroup.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateActionGroup.Response>;
    createActionGroup (params: Security_CreateActionGroup.Request, callback: callbackFn<Security_CreateActionGroup.Response>): TransportRequestCallback;
    createActionGroup (params: Security_CreateActionGroup.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateActionGroup.Response>): TransportRequestCallback;

    getAllowlist (params?: Security_GetAllowlist.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetAllowlist.Response>;
    getAllowlist (callback: callbackFn<Security_GetAllowlist.Response>): TransportRequestCallback;
    getAllowlist (params: Security_GetAllowlist.Request, callback: callbackFn<Security_GetAllowlist.Response>): TransportRequestCallback;
    getAllowlist (params: Security_GetAllowlist.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetAllowlist.Response>): TransportRequestCallback;

    patchAllowlist (params: Security_PatchAllowlist.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchAllowlist.Response>;
    patchAllowlist (params: Security_PatchAllowlist.Request, callback: callbackFn<Security_PatchAllowlist.Response>): TransportRequestCallback;
    patchAllowlist (params: Security_PatchAllowlist.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchAllowlist.Response>): TransportRequestCallback;

    createAllowlist (params: Security_CreateAllowlist.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateAllowlist.Response>;
    createAllowlist (params: Security_CreateAllowlist.Request, callback: callbackFn<Security_CreateAllowlist.Response>): TransportRequestCallback;
    createAllowlist (params: Security_CreateAllowlist.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateAllowlist.Response>): TransportRequestCallback;

    getAuditConfiguration (params?: Security_GetAuditConfiguration.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetAuditConfiguration.Response>;
    getAuditConfiguration (callback: callbackFn<Security_GetAuditConfiguration.Response>): TransportRequestCallback;
    getAuditConfiguration (params: Security_GetAuditConfiguration.Request, callback: callbackFn<Security_GetAuditConfiguration.Response>): TransportRequestCallback;
    getAuditConfiguration (params: Security_GetAuditConfiguration.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetAuditConfiguration.Response>): TransportRequestCallback;

    patchAuditConfiguration (params: Security_PatchAuditConfiguration.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchAuditConfiguration.Response>;
    patchAuditConfiguration (params: Security_PatchAuditConfiguration.Request, callback: callbackFn<Security_PatchAuditConfiguration.Response>): TransportRequestCallback;
    patchAuditConfiguration (params: Security_PatchAuditConfiguration.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchAuditConfiguration.Response>): TransportRequestCallback;

    updateAuditConfiguration (params: Security_UpdateAuditConfiguration.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_UpdateAuditConfiguration.Response>;
    updateAuditConfiguration (params: Security_UpdateAuditConfiguration.Request, callback: callbackFn<Security_UpdateAuditConfiguration.Response>): TransportRequestCallback;
    updateAuditConfiguration (params: Security_UpdateAuditConfiguration.Request, options: TransportRequestOptions, callback: callbackFn<Security_UpdateAuditConfiguration.Response>): TransportRequestCallback;

    authtoken (params?: Security_Authtoken.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Authtoken.Response>;
    authtoken (callback: callbackFn<Security_Authtoken.Response>): TransportRequestCallback;
    authtoken (params: Security_Authtoken.Request, callback: callbackFn<Security_Authtoken.Response>): TransportRequestCallback;
    authtoken (params: Security_Authtoken.Request, options: TransportRequestOptions, callback: callbackFn<Security_Authtoken.Response>): TransportRequestCallback;

    flushCache (params?: Security_FlushCache.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_FlushCache.Response>;
    flushCache (callback: callbackFn<Security_FlushCache.Response>): TransportRequestCallback;
    flushCache (params: Security_FlushCache.Request, callback: callbackFn<Security_FlushCache.Response>): TransportRequestCallback;
    flushCache (params: Security_FlushCache.Request, options: TransportRequestOptions, callback: callbackFn<Security_FlushCache.Response>): TransportRequestCallback;

    generateOboToken (params: Security_GenerateOboToken.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GenerateOboToken.Response>;
    generateOboToken (params: Security_GenerateOboToken.Request, callback: callbackFn<Security_GenerateOboToken.Response>): TransportRequestCallback;
    generateOboToken (params: Security_GenerateOboToken.Request, options: TransportRequestOptions, callback: callbackFn<Security_GenerateOboToken.Response>): TransportRequestCallback;

    getUsers (params?: Security_GetUsers.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUsers.Response>;
    getUsers (callback: callbackFn<Security_GetUsers.Response>): TransportRequestCallback;
    getUsers (params: Security_GetUsers.Request, callback: callbackFn<Security_GetUsers.Response>): TransportRequestCallback;
    getUsers (params: Security_GetUsers.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUsers.Response>): TransportRequestCallback;

    patchUsers (params: Security_PatchUsers.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchUsers.Response>;
    patchUsers (params: Security_PatchUsers.Request, callback: callbackFn<Security_PatchUsers.Response>): TransportRequestCallback;
    patchUsers (params: Security_PatchUsers.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchUsers.Response>): TransportRequestCallback;

    deleteUser (params: Security_DeleteUser.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteUser.Response>;
    deleteUser (params: Security_DeleteUser.Request, callback: callbackFn<Security_DeleteUser.Response>): TransportRequestCallback;
    deleteUser (params: Security_DeleteUser.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteUser.Response>): TransportRequestCallback;

    getUser (params: Security_GetUser.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUser.Response>;
    getUser (params: Security_GetUser.Request, callback: callbackFn<Security_GetUser.Response>): TransportRequestCallback;
    getUser (params: Security_GetUser.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUser.Response>): TransportRequestCallback;

    patchUser (params: Security_PatchUser.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchUser.Response>;
    patchUser (params: Security_PatchUser.Request, callback: callbackFn<Security_PatchUser.Response>): TransportRequestCallback;
    patchUser (params: Security_PatchUser.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchUser.Response>): TransportRequestCallback;

    createUser (params: Security_CreateUser.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateUser.Response>;
    createUser (params: Security_CreateUser.Request, callback: callbackFn<Security_CreateUser.Response>): TransportRequestCallback;
    createUser (params: Security_CreateUser.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateUser.Response>): TransportRequestCallback;

    generateUserToken (params: Security_GenerateUserToken.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GenerateUserToken.Response>;
    generateUserToken (params: Security_GenerateUserToken.Request, callback: callbackFn<Security_GenerateUserToken.Response>): TransportRequestCallback;
    generateUserToken (params: Security_GenerateUserToken.Request, options: TransportRequestOptions, callback: callbackFn<Security_GenerateUserToken.Response>): TransportRequestCallback;

    migrate (params?: Security_Migrate.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Migrate.Response>;
    migrate (callback: callbackFn<Security_Migrate.Response>): TransportRequestCallback;
    migrate (params: Security_Migrate.Request, callback: callbackFn<Security_Migrate.Response>): TransportRequestCallback;
    migrate (params: Security_Migrate.Request, options: TransportRequestOptions, callback: callbackFn<Security_Migrate.Response>): TransportRequestCallback;

    getDistinguishedNames (params?: Security_GetDistinguishedNames.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetDistinguishedNames.Response>;
    getDistinguishedNames (callback: callbackFn<Security_GetDistinguishedNames.Response>): TransportRequestCallback;
    getDistinguishedNames (params: Security_GetDistinguishedNames.Request, callback: callbackFn<Security_GetDistinguishedNames.Response>): TransportRequestCallback;
    getDistinguishedNames (params: Security_GetDistinguishedNames.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetDistinguishedNames.Response>): TransportRequestCallback;

    patchDistinguishedNames (params: Security_PatchDistinguishedNames.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchDistinguishedNames.Response>;
    patchDistinguishedNames (params: Security_PatchDistinguishedNames.Request, callback: callbackFn<Security_PatchDistinguishedNames.Response>): TransportRequestCallback;
    patchDistinguishedNames (params: Security_PatchDistinguishedNames.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchDistinguishedNames.Response>): TransportRequestCallback;

    deleteDistinguishedName (params: Security_DeleteDistinguishedName.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteDistinguishedName.Response>;
    deleteDistinguishedName (params: Security_DeleteDistinguishedName.Request, callback: callbackFn<Security_DeleteDistinguishedName.Response>): TransportRequestCallback;
    deleteDistinguishedName (params: Security_DeleteDistinguishedName.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteDistinguishedName.Response>): TransportRequestCallback;

    getDistinguishedName (params: Security_GetDistinguishedName.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetDistinguishedName.Response>;
    getDistinguishedName (params: Security_GetDistinguishedName.Request, callback: callbackFn<Security_GetDistinguishedName.Response>): TransportRequestCallback;
    getDistinguishedName (params: Security_GetDistinguishedName.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetDistinguishedName.Response>): TransportRequestCallback;

    patchDistinguishedName (params: Security_PatchDistinguishedName.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchDistinguishedName.Response>;
    patchDistinguishedName (params: Security_PatchDistinguishedName.Request, callback: callbackFn<Security_PatchDistinguishedName.Response>): TransportRequestCallback;
    patchDistinguishedName (params: Security_PatchDistinguishedName.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchDistinguishedName.Response>): TransportRequestCallback;

    updateDistinguishedName (params: Security_UpdateDistinguishedName.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_UpdateDistinguishedName.Response>;
    updateDistinguishedName (params: Security_UpdateDistinguishedName.Request, callback: callbackFn<Security_UpdateDistinguishedName.Response>): TransportRequestCallback;
    updateDistinguishedName (params: Security_UpdateDistinguishedName.Request, options: TransportRequestOptions, callback: callbackFn<Security_UpdateDistinguishedName.Response>): TransportRequestCallback;

    getPermissionsInfo (params?: Security_GetPermissionsInfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetPermissionsInfo.Response>;
    getPermissionsInfo (callback: callbackFn<Security_GetPermissionsInfo.Response>): TransportRequestCallback;
    getPermissionsInfo (params: Security_GetPermissionsInfo.Request, callback: callbackFn<Security_GetPermissionsInfo.Response>): TransportRequestCallback;
    getPermissionsInfo (params: Security_GetPermissionsInfo.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetPermissionsInfo.Response>): TransportRequestCallback;

    getRoles (params?: Security_GetRoles.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRoles.Response>;
    getRoles (callback: callbackFn<Security_GetRoles.Response>): TransportRequestCallback;
    getRoles (params: Security_GetRoles.Request, callback: callbackFn<Security_GetRoles.Response>): TransportRequestCallback;
    getRoles (params: Security_GetRoles.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRoles.Response>): TransportRequestCallback;

    patchRoles (params: Security_PatchRoles.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRoles.Response>;
    patchRoles (params: Security_PatchRoles.Request, callback: callbackFn<Security_PatchRoles.Response>): TransportRequestCallback;
    patchRoles (params: Security_PatchRoles.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRoles.Response>): TransportRequestCallback;

    deleteRole (params: Security_DeleteRole.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteRole.Response>;
    deleteRole (params: Security_DeleteRole.Request, callback: callbackFn<Security_DeleteRole.Response>): TransportRequestCallback;
    deleteRole (params: Security_DeleteRole.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteRole.Response>): TransportRequestCallback;

    getRole (params: Security_GetRole.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRole.Response>;
    getRole (params: Security_GetRole.Request, callback: callbackFn<Security_GetRole.Response>): TransportRequestCallback;
    getRole (params: Security_GetRole.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRole.Response>): TransportRequestCallback;

    patchRole (params: Security_PatchRole.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRole.Response>;
    patchRole (params: Security_PatchRole.Request, callback: callbackFn<Security_PatchRole.Response>): TransportRequestCallback;
    patchRole (params: Security_PatchRole.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRole.Response>): TransportRequestCallback;

    createRole (params: Security_CreateRole.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateRole.Response>;
    createRole (params: Security_CreateRole.Request, callback: callbackFn<Security_CreateRole.Response>): TransportRequestCallback;
    createRole (params: Security_CreateRole.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateRole.Response>): TransportRequestCallback;

    getRoleMappings (params?: Security_GetRoleMappings.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRoleMappings.Response>;
    getRoleMappings (callback: callbackFn<Security_GetRoleMappings.Response>): TransportRequestCallback;
    getRoleMappings (params: Security_GetRoleMappings.Request, callback: callbackFn<Security_GetRoleMappings.Response>): TransportRequestCallback;
    getRoleMappings (params: Security_GetRoleMappings.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRoleMappings.Response>): TransportRequestCallback;

    patchRoleMappings (params: Security_PatchRoleMappings.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRoleMappings.Response>;
    patchRoleMappings (params: Security_PatchRoleMappings.Request, callback: callbackFn<Security_PatchRoleMappings.Response>): TransportRequestCallback;
    patchRoleMappings (params: Security_PatchRoleMappings.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRoleMappings.Response>): TransportRequestCallback;

    deleteRoleMapping (params: Security_DeleteRoleMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteRoleMapping.Response>;
    deleteRoleMapping (params: Security_DeleteRoleMapping.Request, callback: callbackFn<Security_DeleteRoleMapping.Response>): TransportRequestCallback;
    deleteRoleMapping (params: Security_DeleteRoleMapping.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteRoleMapping.Response>): TransportRequestCallback;

    getRoleMapping (params: Security_GetRoleMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetRoleMapping.Response>;
    getRoleMapping (params: Security_GetRoleMapping.Request, callback: callbackFn<Security_GetRoleMapping.Response>): TransportRequestCallback;
    getRoleMapping (params: Security_GetRoleMapping.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetRoleMapping.Response>): TransportRequestCallback;

    patchRoleMapping (params: Security_PatchRoleMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchRoleMapping.Response>;
    patchRoleMapping (params: Security_PatchRoleMapping.Request, callback: callbackFn<Security_PatchRoleMapping.Response>): TransportRequestCallback;
    patchRoleMapping (params: Security_PatchRoleMapping.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchRoleMapping.Response>): TransportRequestCallback;

    createRoleMapping (params: Security_CreateRoleMapping.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateRoleMapping.Response>;
    createRoleMapping (params: Security_CreateRoleMapping.Request, callback: callbackFn<Security_CreateRoleMapping.Response>): TransportRequestCallback;
    createRoleMapping (params: Security_CreateRoleMapping.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateRoleMapping.Response>): TransportRequestCallback;

    getConfiguration (params?: Security_GetConfiguration.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetConfiguration.Response>;
    getConfiguration (callback: callbackFn<Security_GetConfiguration.Response>): TransportRequestCallback;
    getConfiguration (params: Security_GetConfiguration.Request, callback: callbackFn<Security_GetConfiguration.Response>): TransportRequestCallback;
    getConfiguration (params: Security_GetConfiguration.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetConfiguration.Response>): TransportRequestCallback;

    patchConfiguration (params: Security_PatchConfiguration.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchConfiguration.Response>;
    patchConfiguration (params: Security_PatchConfiguration.Request, callback: callbackFn<Security_PatchConfiguration.Response>): TransportRequestCallback;
    patchConfiguration (params: Security_PatchConfiguration.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchConfiguration.Response>): TransportRequestCallback;

    updateConfiguration (params: Security_UpdateConfiguration.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_UpdateConfiguration.Response>;
    updateConfiguration (params: Security_UpdateConfiguration.Request, callback: callbackFn<Security_UpdateConfiguration.Response>): TransportRequestCallback;
    updateConfiguration (params: Security_UpdateConfiguration.Request, options: TransportRequestOptions, callback: callbackFn<Security_UpdateConfiguration.Response>): TransportRequestCallback;

    getCertificates (params?: Security_GetCertificates.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetCertificates.Response>;
    getCertificates (callback: callbackFn<Security_GetCertificates.Response>): TransportRequestCallback;
    getCertificates (params: Security_GetCertificates.Request, callback: callbackFn<Security_GetCertificates.Response>): TransportRequestCallback;
    getCertificates (params: Security_GetCertificates.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetCertificates.Response>): TransportRequestCallback;

    reloadHttpCertificates (params?: Security_ReloadHttpCertificates.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ReloadHttpCertificates.Response>;
    reloadHttpCertificates (callback: callbackFn<Security_ReloadHttpCertificates.Response>): TransportRequestCallback;
    reloadHttpCertificates (params: Security_ReloadHttpCertificates.Request, callback: callbackFn<Security_ReloadHttpCertificates.Response>): TransportRequestCallback;
    reloadHttpCertificates (params: Security_ReloadHttpCertificates.Request, options: TransportRequestOptions, callback: callbackFn<Security_ReloadHttpCertificates.Response>): TransportRequestCallback;

    reloadTransportCertificates (params?: Security_ReloadTransportCertificates.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_ReloadTransportCertificates.Response>;
    reloadTransportCertificates (callback: callbackFn<Security_ReloadTransportCertificates.Response>): TransportRequestCallback;
    reloadTransportCertificates (params: Security_ReloadTransportCertificates.Request, callback: callbackFn<Security_ReloadTransportCertificates.Response>): TransportRequestCallback;
    reloadTransportCertificates (params: Security_ReloadTransportCertificates.Request, options: TransportRequestOptions, callback: callbackFn<Security_ReloadTransportCertificates.Response>): TransportRequestCallback;

    getTenancyConfig (params?: Security_GetTenancyConfig.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetTenancyConfig.Response>;
    getTenancyConfig (callback: callbackFn<Security_GetTenancyConfig.Response>): TransportRequestCallback;
    getTenancyConfig (params: Security_GetTenancyConfig.Request, callback: callbackFn<Security_GetTenancyConfig.Response>): TransportRequestCallback;
    getTenancyConfig (params: Security_GetTenancyConfig.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetTenancyConfig.Response>): TransportRequestCallback;

    createUpdateTenancyConfig (params: Security_CreateUpdateTenancyConfig.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateUpdateTenancyConfig.Response>;
    createUpdateTenancyConfig (params: Security_CreateUpdateTenancyConfig.Request, callback: callbackFn<Security_CreateUpdateTenancyConfig.Response>): TransportRequestCallback;
    createUpdateTenancyConfig (params: Security_CreateUpdateTenancyConfig.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateUpdateTenancyConfig.Response>): TransportRequestCallback;

    getTenants (params?: Security_GetTenants.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetTenants.Response>;
    getTenants (callback: callbackFn<Security_GetTenants.Response>): TransportRequestCallback;
    getTenants (params: Security_GetTenants.Request, callback: callbackFn<Security_GetTenants.Response>): TransportRequestCallback;
    getTenants (params: Security_GetTenants.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetTenants.Response>): TransportRequestCallback;

    patchTenants (params: Security_PatchTenants.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchTenants.Response>;
    patchTenants (params: Security_PatchTenants.Request, callback: callbackFn<Security_PatchTenants.Response>): TransportRequestCallback;
    patchTenants (params: Security_PatchTenants.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchTenants.Response>): TransportRequestCallback;

    deleteTenant (params: Security_DeleteTenant.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteTenant.Response>;
    deleteTenant (params: Security_DeleteTenant.Request, callback: callbackFn<Security_DeleteTenant.Response>): TransportRequestCallback;
    deleteTenant (params: Security_DeleteTenant.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteTenant.Response>): TransportRequestCallback;

    getTenant (params: Security_GetTenant.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetTenant.Response>;
    getTenant (params: Security_GetTenant.Request, callback: callbackFn<Security_GetTenant.Response>): TransportRequestCallback;
    getTenant (params: Security_GetTenant.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetTenant.Response>): TransportRequestCallback;

    patchTenant (params: Security_PatchTenant.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PatchTenant.Response>;
    patchTenant (params: Security_PatchTenant.Request, callback: callbackFn<Security_PatchTenant.Response>): TransportRequestCallback;
    patchTenant (params: Security_PatchTenant.Request, options: TransportRequestOptions, callback: callbackFn<Security_PatchTenant.Response>): TransportRequestCallback;

    createTenant (params: Security_CreateTenant.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateTenant.Response>;
    createTenant (params: Security_CreateTenant.Request, callback: callbackFn<Security_CreateTenant.Response>): TransportRequestCallback;
    createTenant (params: Security_CreateTenant.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateTenant.Response>): TransportRequestCallback;

    getUsersLegacy (params?: Security_GetUsersLegacy.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUsersLegacy.Response>;
    getUsersLegacy (callback: callbackFn<Security_GetUsersLegacy.Response>): TransportRequestCallback;
    getUsersLegacy (params: Security_GetUsersLegacy.Request, callback: callbackFn<Security_GetUsersLegacy.Response>): TransportRequestCallback;
    getUsersLegacy (params: Security_GetUsersLegacy.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUsersLegacy.Response>): TransportRequestCallback;

    deleteUserLegacy (params: Security_DeleteUserLegacy.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_DeleteUserLegacy.Response>;
    deleteUserLegacy (params: Security_DeleteUserLegacy.Request, callback: callbackFn<Security_DeleteUserLegacy.Response>): TransportRequestCallback;
    deleteUserLegacy (params: Security_DeleteUserLegacy.Request, options: TransportRequestOptions, callback: callbackFn<Security_DeleteUserLegacy.Response>): TransportRequestCallback;

    getUserLegacy (params: Security_GetUserLegacy.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetUserLegacy.Response>;
    getUserLegacy (params: Security_GetUserLegacy.Request, callback: callbackFn<Security_GetUserLegacy.Response>): TransportRequestCallback;
    getUserLegacy (params: Security_GetUserLegacy.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetUserLegacy.Response>): TransportRequestCallback;

    createUserLegacy (params: Security_CreateUserLegacy.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_CreateUserLegacy.Response>;
    createUserLegacy (params: Security_CreateUserLegacy.Request, callback: callbackFn<Security_CreateUserLegacy.Response>): TransportRequestCallback;
    createUserLegacy (params: Security_CreateUserLegacy.Request, options: TransportRequestOptions, callback: callbackFn<Security_CreateUserLegacy.Response>): TransportRequestCallback;

    generateUserTokenLegacy (params: Security_GenerateUserTokenLegacy.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GenerateUserTokenLegacy.Response>;
    generateUserTokenLegacy (params: Security_GenerateUserTokenLegacy.Request, callback: callbackFn<Security_GenerateUserTokenLegacy.Response>): TransportRequestCallback;
    generateUserTokenLegacy (params: Security_GenerateUserTokenLegacy.Request, options: TransportRequestOptions, callback: callbackFn<Security_GenerateUserTokenLegacy.Response>): TransportRequestCallback;

    validate (params?: Security_Validate.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Validate.Response>;
    validate (callback: callbackFn<Security_Validate.Response>): TransportRequestCallback;
    validate (params: Security_Validate.Request, callback: callbackFn<Security_Validate.Response>): TransportRequestCallback;
    validate (params: Security_Validate.Request, options: TransportRequestOptions, callback: callbackFn<Security_Validate.Response>): TransportRequestCallback;

    authinfo (params?: Security_Authinfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Authinfo.Response>;
    authinfo (callback: callbackFn<Security_Authinfo.Response>): TransportRequestCallback;
    authinfo (params: Security_Authinfo.Request, callback: callbackFn<Security_Authinfo.Response>): TransportRequestCallback;
    authinfo (params: Security_Authinfo.Request, options: TransportRequestOptions, callback: callbackFn<Security_Authinfo.Response>): TransportRequestCallback;

    getDashboardsInfo (params?: Security_GetDashboardsInfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_GetDashboardsInfo.Response>;
    getDashboardsInfo (callback: callbackFn<Security_GetDashboardsInfo.Response>): TransportRequestCallback;
    getDashboardsInfo (params: Security_GetDashboardsInfo.Request, callback: callbackFn<Security_GetDashboardsInfo.Response>): TransportRequestCallback;
    getDashboardsInfo (params: Security_GetDashboardsInfo.Request, options: TransportRequestOptions, callback: callbackFn<Security_GetDashboardsInfo.Response>): TransportRequestCallback;

    postDashboardsInfo (params?: Security_PostDashboardsInfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_PostDashboardsInfo.Response>;
    postDashboardsInfo (callback: callbackFn<Security_PostDashboardsInfo.Response>): TransportRequestCallback;
    postDashboardsInfo (params: Security_PostDashboardsInfo.Request, callback: callbackFn<Security_PostDashboardsInfo.Response>): TransportRequestCallback;
    postDashboardsInfo (params: Security_PostDashboardsInfo.Request, options: TransportRequestOptions, callback: callbackFn<Security_PostDashboardsInfo.Response>): TransportRequestCallback;

    health (params?: Security_Health.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_Health.Response>;
    health (callback: callbackFn<Security_Health.Response>): TransportRequestCallback;
    health (params: Security_Health.Request, callback: callbackFn<Security_Health.Response>): TransportRequestCallback;
    health (params: Security_Health.Request, options: TransportRequestOptions, callback: callbackFn<Security_Health.Response>): TransportRequestCallback;

    tenantInfo (params?: Security_TenantInfo.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_TenantInfo.Response>;
    tenantInfo (callback: callbackFn<Security_TenantInfo.Response>): TransportRequestCallback;
    tenantInfo (params: Security_TenantInfo.Request, callback: callbackFn<Security_TenantInfo.Response>): TransportRequestCallback;
    tenantInfo (params: Security_TenantInfo.Request, options: TransportRequestOptions, callback: callbackFn<Security_TenantInfo.Response>): TransportRequestCallback;

    whoAmI (params?: Security_WhoAmI.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_WhoAmI.Response>;
    whoAmI (callback: callbackFn<Security_WhoAmI.Response>): TransportRequestCallback;
    whoAmI (params: Security_WhoAmI.Request, callback: callbackFn<Security_WhoAmI.Response>): TransportRequestCallback;
    whoAmI (params: Security_WhoAmI.Request, options: TransportRequestOptions, callback: callbackFn<Security_WhoAmI.Response>): TransportRequestCallback;

    whoAmIProtected (params?: Security_WhoAmIProtected.Request, options?: TransportRequestOptions): TransportRequestPromise<Security_WhoAmIProtected.Response>;
    whoAmIProtected (callback: callbackFn<Security_WhoAmIProtected.Response>): TransportRequestCallback;
    whoAmIProtected (params: Security_WhoAmIProtected.Request, callback: callbackFn<Security_WhoAmIProtected.Response>): TransportRequestCallback;
    whoAmIProtected (params: Security_WhoAmIProtected.Request, options: TransportRequestOptions, callback: callbackFn<Security_WhoAmIProtected.Response>): TransportRequestCallback;

  };

  snapshot: {
    getRepository (params?: Snapshot_GetRepository.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_GetRepository.Response>;
    getRepository (callback: callbackFn<Snapshot_GetRepository.Response>): TransportRequestCallback;
    getRepository (params: Snapshot_GetRepository.Request, callback: callbackFn<Snapshot_GetRepository.Response>): TransportRequestCallback;
    getRepository (params: Snapshot_GetRepository.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_GetRepository.Response>): TransportRequestCallback;

    status (params?: Snapshot_Status.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Status.Response>;
    status (callback: callbackFn<Snapshot_Status.Response>): TransportRequestCallback;
    status (params: Snapshot_Status.Request, callback: callbackFn<Snapshot_Status.Response>): TransportRequestCallback;
    status (params: Snapshot_Status.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Status.Response>): TransportRequestCallback;

    deleteRepository (params: Snapshot_DeleteRepository.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_DeleteRepository.Response>;
    deleteRepository (params: Snapshot_DeleteRepository.Request, callback: callbackFn<Snapshot_DeleteRepository.Response>): TransportRequestCallback;
    deleteRepository (params: Snapshot_DeleteRepository.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_DeleteRepository.Response>): TransportRequestCallback;

    createRepository (params: Snapshot_CreateRepository.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_CreateRepository.Response>;
    createRepository (params: Snapshot_CreateRepository.Request, callback: callbackFn<Snapshot_CreateRepository.Response>): TransportRequestCallback;
    createRepository (params: Snapshot_CreateRepository.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_CreateRepository.Response>): TransportRequestCallback;

    cleanupRepository (params: Snapshot_CleanupRepository.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_CleanupRepository.Response>;
    cleanupRepository (params: Snapshot_CleanupRepository.Request, callback: callbackFn<Snapshot_CleanupRepository.Response>): TransportRequestCallback;
    cleanupRepository (params: Snapshot_CleanupRepository.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_CleanupRepository.Response>): TransportRequestCallback;

    verifyRepository (params: Snapshot_VerifyRepository.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_VerifyRepository.Response>;
    verifyRepository (params: Snapshot_VerifyRepository.Request, callback: callbackFn<Snapshot_VerifyRepository.Response>): TransportRequestCallback;
    verifyRepository (params: Snapshot_VerifyRepository.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_VerifyRepository.Response>): TransportRequestCallback;

    delete (params: Snapshot_Delete.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Delete.Response>;
    delete (params: Snapshot_Delete.Request, callback: callbackFn<Snapshot_Delete.Response>): TransportRequestCallback;
    delete (params: Snapshot_Delete.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Delete.Response>): TransportRequestCallback;

    get (params: Snapshot_Get.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Get.Response>;
    get (params: Snapshot_Get.Request, callback: callbackFn<Snapshot_Get.Response>): TransportRequestCallback;
    get (params: Snapshot_Get.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Get.Response>): TransportRequestCallback;

    create (params: Snapshot_Create.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Create.Response>;
    create (params: Snapshot_Create.Request, callback: callbackFn<Snapshot_Create.Response>): TransportRequestCallback;
    create (params: Snapshot_Create.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Create.Response>): TransportRequestCallback;

    clone (params: Snapshot_Clone.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Clone.Response>;
    clone (params: Snapshot_Clone.Request, callback: callbackFn<Snapshot_Clone.Response>): TransportRequestCallback;
    clone (params: Snapshot_Clone.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Clone.Response>): TransportRequestCallback;

    restore (params: Snapshot_Restore.Request, options?: TransportRequestOptions): TransportRequestPromise<Snapshot_Restore.Response>;
    restore (params: Snapshot_Restore.Request, callback: callbackFn<Snapshot_Restore.Response>): TransportRequestCallback;
    restore (params: Snapshot_Restore.Request, options: TransportRequestOptions, callback: callbackFn<Snapshot_Restore.Response>): TransportRequestCallback;

  };

  sql: {
    settings (params: Sql_Settings.Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Settings.Response>;
    settings (params: Sql_Settings.Request, callback: callbackFn<Sql_Settings.Response>): TransportRequestCallback;
    settings (params: Sql_Settings.Request, options: TransportRequestOptions, callback: callbackFn<Sql_Settings.Response>): TransportRequestCallback;

    query (params: Sql_Query.Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Query.Response>;
    query (params: Sql_Query.Request, callback: callbackFn<Sql_Query.Response>): TransportRequestCallback;
    query (params: Sql_Query.Request, options: TransportRequestOptions, callback: callbackFn<Sql_Query.Response>): TransportRequestCallback;

    explain (params: Sql_Explain.Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Explain.Response>;
    explain (params: Sql_Explain.Request, callback: callbackFn<Sql_Explain.Response>): TransportRequestCallback;
    explain (params: Sql_Explain.Request, options: TransportRequestOptions, callback: callbackFn<Sql_Explain.Response>): TransportRequestCallback;

    close (params: Sql_Close.Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_Close.Response>;
    close (params: Sql_Close.Request, callback: callbackFn<Sql_Close.Response>): TransportRequestCallback;
    close (params: Sql_Close.Request, options: TransportRequestOptions, callback: callbackFn<Sql_Close.Response>): TransportRequestCallback;

    getStats (params?: Sql_GetStats.Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_GetStats.Response>;
    getStats (callback: callbackFn<Sql_GetStats.Response>): TransportRequestCallback;
    getStats (params: Sql_GetStats.Request, callback: callbackFn<Sql_GetStats.Response>): TransportRequestCallback;
    getStats (params: Sql_GetStats.Request, options: TransportRequestOptions, callback: callbackFn<Sql_GetStats.Response>): TransportRequestCallback;

    postStats (params: Sql_PostStats.Request, options?: TransportRequestOptions): TransportRequestPromise<Sql_PostStats.Response>;
    postStats (params: Sql_PostStats.Request, callback: callbackFn<Sql_PostStats.Response>): TransportRequestCallback;
    postStats (params: Sql_PostStats.Request, options: TransportRequestOptions, callback: callbackFn<Sql_PostStats.Response>): TransportRequestCallback;

  };

  tasks: {
    list (params?: Tasks_List.Request, options?: TransportRequestOptions): TransportRequestPromise<Tasks_List.Response>;
    list (callback: callbackFn<Tasks_List.Response>): TransportRequestCallback;
    list (params: Tasks_List.Request, callback: callbackFn<Tasks_List.Response>): TransportRequestCallback;
    list (params: Tasks_List.Request, options: TransportRequestOptions, callback: callbackFn<Tasks_List.Response>): TransportRequestCallback;

    cancel (params?: Tasks_Cancel.Request, options?: TransportRequestOptions): TransportRequestPromise<Tasks_Cancel.Response>;
    cancel (callback: callbackFn<Tasks_Cancel.Response>): TransportRequestCallback;
    cancel (params: Tasks_Cancel.Request, callback: callbackFn<Tasks_Cancel.Response>): TransportRequestCallback;
    cancel (params: Tasks_Cancel.Request, options: TransportRequestOptions, callback: callbackFn<Tasks_Cancel.Response>): TransportRequestCallback;

    get (params: Tasks_Get.Request, options?: TransportRequestOptions): TransportRequestPromise<Tasks_Get.Response>;
    get (params: Tasks_Get.Request, callback: callbackFn<Tasks_Get.Response>): TransportRequestCallback;
    get (params: Tasks_Get.Request, options: TransportRequestOptions, callback: callbackFn<Tasks_Get.Response>): TransportRequestCallback;

  };

  transforms: {
    search (params?: Transforms_Search.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Search.Response>;
    search (callback: callbackFn<Transforms_Search.Response>): TransportRequestCallback;
    search (params: Transforms_Search.Request, callback: callbackFn<Transforms_Search.Response>): TransportRequestCallback;
    search (params: Transforms_Search.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Search.Response>): TransportRequestCallback;

    preview (params?: Transforms_Preview.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Preview.Response>;
    preview (callback: callbackFn<Transforms_Preview.Response>): TransportRequestCallback;
    preview (params: Transforms_Preview.Request, callback: callbackFn<Transforms_Preview.Response>): TransportRequestCallback;
    preview (params: Transforms_Preview.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Preview.Response>): TransportRequestCallback;

    delete (params: Transforms_Delete.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Delete.Response>;
    delete (params: Transforms_Delete.Request, callback: callbackFn<Transforms_Delete.Response>): TransportRequestCallback;
    delete (params: Transforms_Delete.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Delete.Response>): TransportRequestCallback;

    get (params: Transforms_Get.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Get.Response>;
    get (params: Transforms_Get.Request, callback: callbackFn<Transforms_Get.Response>): TransportRequestCallback;
    get (params: Transforms_Get.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Get.Response>): TransportRequestCallback;

    put (params: Transforms_Put.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Put.Response>;
    put (params: Transforms_Put.Request, callback: callbackFn<Transforms_Put.Response>): TransportRequestCallback;
    put (params: Transforms_Put.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Put.Response>): TransportRequestCallback;

    explain (params: Transforms_Explain.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Explain.Response>;
    explain (params: Transforms_Explain.Request, callback: callbackFn<Transforms_Explain.Response>): TransportRequestCallback;
    explain (params: Transforms_Explain.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Explain.Response>): TransportRequestCallback;

    start (params: Transforms_Start.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Start.Response>;
    start (params: Transforms_Start.Request, callback: callbackFn<Transforms_Start.Response>): TransportRequestCallback;
    start (params: Transforms_Start.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Start.Response>): TransportRequestCallback;

    stop (params: Transforms_Stop.Request, options?: TransportRequestOptions): TransportRequestPromise<Transforms_Stop.Response>;
    stop (params: Transforms_Stop.Request, callback: callbackFn<Transforms_Stop.Response>): TransportRequestCallback;
    stop (params: Transforms_Stop.Request, options: TransportRequestOptions, callback: callbackFn<Transforms_Stop.Response>): TransportRequestCallback;

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

  info (params?: Info.Request, options?: TransportRequestOptions): TransportRequestPromise<Info.Response>;
  info (callback: callbackFn<Info.Response>): TransportRequestCallback;
  info (params: Info.Request, callback: callbackFn<Info.Response>): TransportRequestCallback;
  info (params: Info.Request, options: TransportRequestOptions, callback: callbackFn<Info.Response>): TransportRequestCallback;

  ping (params?: Ping.Request, options?: TransportRequestOptions): TransportRequestPromise<Ping.Response>;
  ping (callback: callbackFn<Ping.Response>): TransportRequestCallback;
  ping (params: Ping.Request, callback: callbackFn<Ping.Response>): TransportRequestCallback;
  ping (params: Ping.Request, options: TransportRequestOptions, callback: callbackFn<Ping.Response>): TransportRequestCallback;

  bulk (params: Bulk.Request, options?: TransportRequestOptions): TransportRequestPromise<Bulk.Response>;
  bulk (params: Bulk.Request, callback: callbackFn<Bulk.Response>): TransportRequestCallback;
  bulk (params: Bulk.Request, options: TransportRequestOptions, callback: callbackFn<Bulk.Response>): TransportRequestCallback;

  count (params?: Count.Request, options?: TransportRequestOptions): TransportRequestPromise<Count.Response>;
  count (callback: callbackFn<Count.Response>): TransportRequestCallback;
  count (params: Count.Request, callback: callbackFn<Count.Response>): TransportRequestCallback;
  count (params: Count.Request, options: TransportRequestOptions, callback: callbackFn<Count.Response>): TransportRequestCallback;

  deleteByQueryRethrottle (params: DeleteByQueryRethrottle.Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteByQueryRethrottle.Response>;
  deleteByQueryRethrottle (params: DeleteByQueryRethrottle.Request, callback: callbackFn<DeleteByQueryRethrottle.Response>): TransportRequestCallback;
  deleteByQueryRethrottle (params: DeleteByQueryRethrottle.Request, options: TransportRequestOptions, callback: callbackFn<DeleteByQueryRethrottle.Response>): TransportRequestCallback;

  fieldCaps (params?: FieldCaps.Request, options?: TransportRequestOptions): TransportRequestPromise<FieldCaps.Response>;
  fieldCaps (callback: callbackFn<FieldCaps.Response>): TransportRequestCallback;
  fieldCaps (params: FieldCaps.Request, callback: callbackFn<FieldCaps.Response>): TransportRequestCallback;
  fieldCaps (params: FieldCaps.Request, options: TransportRequestOptions, callback: callbackFn<FieldCaps.Response>): TransportRequestCallback;

  mget (params: Mget.Request, options?: TransportRequestOptions): TransportRequestPromise<Mget.Response>;
  mget (params: Mget.Request, callback: callbackFn<Mget.Response>): TransportRequestCallback;
  mget (params: Mget.Request, options: TransportRequestOptions, callback: callbackFn<Mget.Response>): TransportRequestCallback;

  msearch (params: Msearch.Request, options?: TransportRequestOptions): TransportRequestPromise<Msearch.Response>;
  msearch (params: Msearch.Request, callback: callbackFn<Msearch.Response>): TransportRequestCallback;
  msearch (params: Msearch.Request, options: TransportRequestOptions, callback: callbackFn<Msearch.Response>): TransportRequestCallback;

  msearchTemplate (params: MsearchTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<MsearchTemplate.Response>;
  msearchTemplate (params: MsearchTemplate.Request, callback: callbackFn<MsearchTemplate.Response>): TransportRequestCallback;
  msearchTemplate (params: MsearchTemplate.Request, options: TransportRequestOptions, callback: callbackFn<MsearchTemplate.Response>): TransportRequestCallback;

  mtermvectors (params?: Mtermvectors.Request, options?: TransportRequestOptions): TransportRequestPromise<Mtermvectors.Response>;
  mtermvectors (callback: callbackFn<Mtermvectors.Response>): TransportRequestCallback;
  mtermvectors (params: Mtermvectors.Request, callback: callbackFn<Mtermvectors.Response>): TransportRequestCallback;
  mtermvectors (params: Mtermvectors.Request, options: TransportRequestOptions, callback: callbackFn<Mtermvectors.Response>): TransportRequestCallback;

  rankEval (params: RankEval.Request, options?: TransportRequestOptions): TransportRequestPromise<RankEval.Response>;
  rankEval (params: RankEval.Request, callback: callbackFn<RankEval.Response>): TransportRequestCallback;
  rankEval (params: RankEval.Request, options: TransportRequestOptions, callback: callbackFn<RankEval.Response>): TransportRequestCallback;

  reindex (params: Reindex.Request, options?: TransportRequestOptions): TransportRequestPromise<Reindex.Response>;
  reindex (params: Reindex.Request, callback: callbackFn<Reindex.Response>): TransportRequestCallback;
  reindex (params: Reindex.Request, options: TransportRequestOptions, callback: callbackFn<Reindex.Response>): TransportRequestCallback;

  reindexRethrottle (params: ReindexRethrottle.Request, options?: TransportRequestOptions): TransportRequestPromise<ReindexRethrottle.Response>;
  reindexRethrottle (params: ReindexRethrottle.Request, callback: callbackFn<ReindexRethrottle.Response>): TransportRequestCallback;
  reindexRethrottle (params: ReindexRethrottle.Request, options: TransportRequestOptions, callback: callbackFn<ReindexRethrottle.Response>): TransportRequestCallback;

  renderSearchTemplate (params?: RenderSearchTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<RenderSearchTemplate.Response>;
  renderSearchTemplate (callback: callbackFn<RenderSearchTemplate.Response>): TransportRequestCallback;
  renderSearchTemplate (params: RenderSearchTemplate.Request, callback: callbackFn<RenderSearchTemplate.Response>): TransportRequestCallback;
  renderSearchTemplate (params: RenderSearchTemplate.Request, options: TransportRequestOptions, callback: callbackFn<RenderSearchTemplate.Response>): TransportRequestCallback;

  getScriptContext (params?: GetScriptContext.Request, options?: TransportRequestOptions): TransportRequestPromise<GetScriptContext.Response>;
  getScriptContext (callback: callbackFn<GetScriptContext.Response>): TransportRequestCallback;
  getScriptContext (params: GetScriptContext.Request, callback: callbackFn<GetScriptContext.Response>): TransportRequestCallback;
  getScriptContext (params: GetScriptContext.Request, options: TransportRequestOptions, callback: callbackFn<GetScriptContext.Response>): TransportRequestCallback;

  getScriptLanguages (params?: GetScriptLanguages.Request, options?: TransportRequestOptions): TransportRequestPromise<GetScriptLanguages.Response>;
  getScriptLanguages (callback: callbackFn<GetScriptLanguages.Response>): TransportRequestCallback;
  getScriptLanguages (params: GetScriptLanguages.Request, callback: callbackFn<GetScriptLanguages.Response>): TransportRequestCallback;
  getScriptLanguages (params: GetScriptLanguages.Request, options: TransportRequestOptions, callback: callbackFn<GetScriptLanguages.Response>): TransportRequestCallback;

  deleteScript (params: DeleteScript.Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteScript.Response>;
  deleteScript (params: DeleteScript.Request, callback: callbackFn<DeleteScript.Response>): TransportRequestCallback;
  deleteScript (params: DeleteScript.Request, options: TransportRequestOptions, callback: callbackFn<DeleteScript.Response>): TransportRequestCallback;

  getScript (params: GetScript.Request, options?: TransportRequestOptions): TransportRequestPromise<GetScript.Response>;
  getScript (params: GetScript.Request, callback: callbackFn<GetScript.Response>): TransportRequestCallback;
  getScript (params: GetScript.Request, options: TransportRequestOptions, callback: callbackFn<GetScript.Response>): TransportRequestCallback;

  putScript (params: PutScript.Request, options?: TransportRequestOptions): TransportRequestPromise<PutScript.Response>;
  putScript (params: PutScript.Request, callback: callbackFn<PutScript.Response>): TransportRequestCallback;
  putScript (params: PutScript.Request, options: TransportRequestOptions, callback: callbackFn<PutScript.Response>): TransportRequestCallback;

  scriptsPainlessExecute (params?: ScriptsPainlessExecute.Request, options?: TransportRequestOptions): TransportRequestPromise<ScriptsPainlessExecute.Response>;
  scriptsPainlessExecute (callback: callbackFn<ScriptsPainlessExecute.Response>): TransportRequestCallback;
  scriptsPainlessExecute (params: ScriptsPainlessExecute.Request, callback: callbackFn<ScriptsPainlessExecute.Response>): TransportRequestCallback;
  scriptsPainlessExecute (params: ScriptsPainlessExecute.Request, options: TransportRequestOptions, callback: callbackFn<ScriptsPainlessExecute.Response>): TransportRequestCallback;

  search (params?: Search.Request, options?: TransportRequestOptions): TransportRequestPromise<Search.Response>;
  search (callback: callbackFn<Search.Response>): TransportRequestCallback;
  search (params: Search.Request, callback: callbackFn<Search.Response>): TransportRequestCallback;
  search (params: Search.Request, options: TransportRequestOptions, callback: callbackFn<Search.Response>): TransportRequestCallback;

  searchShards (params?: SearchShards.Request, options?: TransportRequestOptions): TransportRequestPromise<SearchShards.Response>;
  searchShards (callback: callbackFn<SearchShards.Response>): TransportRequestCallback;
  searchShards (params: SearchShards.Request, callback: callbackFn<SearchShards.Response>): TransportRequestCallback;
  searchShards (params: SearchShards.Request, options: TransportRequestOptions, callback: callbackFn<SearchShards.Response>): TransportRequestCallback;

  deletePit (params?: DeletePit.Request, options?: TransportRequestOptions): TransportRequestPromise<DeletePit.Response>;
  deletePit (callback: callbackFn<DeletePit.Response>): TransportRequestCallback;
  deletePit (params: DeletePit.Request, callback: callbackFn<DeletePit.Response>): TransportRequestCallback;
  deletePit (params: DeletePit.Request, options: TransportRequestOptions, callback: callbackFn<DeletePit.Response>): TransportRequestCallback;

  deleteAllPits (params?: DeleteAllPits.Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteAllPits.Response>;
  deleteAllPits (callback: callbackFn<DeleteAllPits.Response>): TransportRequestCallback;
  deleteAllPits (params: DeleteAllPits.Request, callback: callbackFn<DeleteAllPits.Response>): TransportRequestCallback;
  deleteAllPits (params: DeleteAllPits.Request, options: TransportRequestOptions, callback: callbackFn<DeleteAllPits.Response>): TransportRequestCallback;

  getAllPits (params?: GetAllPits.Request, options?: TransportRequestOptions): TransportRequestPromise<GetAllPits.Response>;
  getAllPits (callback: callbackFn<GetAllPits.Response>): TransportRequestCallback;
  getAllPits (params: GetAllPits.Request, callback: callbackFn<GetAllPits.Response>): TransportRequestCallback;
  getAllPits (params: GetAllPits.Request, options: TransportRequestOptions, callback: callbackFn<GetAllPits.Response>): TransportRequestCallback;

  clearScroll (params?: ClearScroll.Request, options?: TransportRequestOptions): TransportRequestPromise<ClearScroll.Response>;
  clearScroll (callback: callbackFn<ClearScroll.Response>): TransportRequestCallback;
  clearScroll (params: ClearScroll.Request, callback: callbackFn<ClearScroll.Response>): TransportRequestCallback;
  clearScroll (params: ClearScroll.Request, options: TransportRequestOptions, callback: callbackFn<ClearScroll.Response>): TransportRequestCallback;

  scroll (params?: Scroll.Request, options?: TransportRequestOptions): TransportRequestPromise<Scroll.Response>;
  scroll (callback: callbackFn<Scroll.Response>): TransportRequestCallback;
  scroll (params: Scroll.Request, callback: callbackFn<Scroll.Response>): TransportRequestCallback;
  scroll (params: Scroll.Request, options: TransportRequestOptions, callback: callbackFn<Scroll.Response>): TransportRequestCallback;

  searchTemplate (params: SearchTemplate.Request, options?: TransportRequestOptions): TransportRequestPromise<SearchTemplate.Response>;
  searchTemplate (params: SearchTemplate.Request, callback: callbackFn<SearchTemplate.Response>): TransportRequestCallback;
  searchTemplate (params: SearchTemplate.Request, options: TransportRequestOptions, callback: callbackFn<SearchTemplate.Response>): TransportRequestCallback;

  updateByQueryRethrottle (params: UpdateByQueryRethrottle.Request, options?: TransportRequestOptions): TransportRequestPromise<UpdateByQueryRethrottle.Response>;
  updateByQueryRethrottle (params: UpdateByQueryRethrottle.Request, callback: callbackFn<UpdateByQueryRethrottle.Response>): TransportRequestCallback;
  updateByQueryRethrottle (params: UpdateByQueryRethrottle.Request, options: TransportRequestOptions, callback: callbackFn<UpdateByQueryRethrottle.Response>): TransportRequestCallback;

  create (params: Create.Request, options?: TransportRequestOptions): TransportRequestPromise<Create.Response>;
  create (params: Create.Request, callback: callbackFn<Create.Response>): TransportRequestCallback;
  create (params: Create.Request, options: TransportRequestOptions, callback: callbackFn<Create.Response>): TransportRequestCallback;

  deleteByQuery (params: DeleteByQuery.Request, options?: TransportRequestOptions): TransportRequestPromise<DeleteByQuery.Response>;
  deleteByQuery (params: DeleteByQuery.Request, callback: callbackFn<DeleteByQuery.Response>): TransportRequestCallback;
  deleteByQuery (params: DeleteByQuery.Request, options: TransportRequestOptions, callback: callbackFn<DeleteByQuery.Response>): TransportRequestCallback;

  index (params: Index.Request, options?: TransportRequestOptions): TransportRequestPromise<Index.Response>;
  index (params: Index.Request, callback: callbackFn<Index.Response>): TransportRequestCallback;
  index (params: Index.Request, options: TransportRequestOptions, callback: callbackFn<Index.Response>): TransportRequestCallback;

  delete (params: Delete.Request, options?: TransportRequestOptions): TransportRequestPromise<Delete.Response>;
  delete (params: Delete.Request, callback: callbackFn<Delete.Response>): TransportRequestCallback;
  delete (params: Delete.Request, options: TransportRequestOptions, callback: callbackFn<Delete.Response>): TransportRequestCallback;

  get (params: Get.Request, options?: TransportRequestOptions): TransportRequestPromise<Get.Response>;
  get (params: Get.Request, callback: callbackFn<Get.Response>): TransportRequestCallback;
  get (params: Get.Request, options: TransportRequestOptions, callback: callbackFn<Get.Response>): TransportRequestCallback;

  exists (params: Exists.Request, options?: TransportRequestOptions): TransportRequestPromise<Exists.Response>;
  exists (params: Exists.Request, callback: callbackFn<Exists.Response>): TransportRequestCallback;
  exists (params: Exists.Request, options: TransportRequestOptions, callback: callbackFn<Exists.Response>): TransportRequestCallback;

  explain (params: Explain.Request, options?: TransportRequestOptions): TransportRequestPromise<Explain.Response>;
  explain (params: Explain.Request, callback: callbackFn<Explain.Response>): TransportRequestCallback;
  explain (params: Explain.Request, options: TransportRequestOptions, callback: callbackFn<Explain.Response>): TransportRequestCallback;

  createPit (params: CreatePit.Request, options?: TransportRequestOptions): TransportRequestPromise<CreatePit.Response>;
  createPit (params: CreatePit.Request, callback: callbackFn<CreatePit.Response>): TransportRequestCallback;
  createPit (params: CreatePit.Request, options: TransportRequestOptions, callback: callbackFn<CreatePit.Response>): TransportRequestCallback;

  getSource (params: GetSource.Request, options?: TransportRequestOptions): TransportRequestPromise<GetSource.Response>;
  getSource (params: GetSource.Request, callback: callbackFn<GetSource.Response>): TransportRequestCallback;
  getSource (params: GetSource.Request, options: TransportRequestOptions, callback: callbackFn<GetSource.Response>): TransportRequestCallback;

  existsSource (params: ExistsSource.Request, options?: TransportRequestOptions): TransportRequestPromise<ExistsSource.Response>;
  existsSource (params: ExistsSource.Request, callback: callbackFn<ExistsSource.Response>): TransportRequestCallback;
  existsSource (params: ExistsSource.Request, options: TransportRequestOptions, callback: callbackFn<ExistsSource.Response>): TransportRequestCallback;

  termvectors (params: Termvectors.Request, options?: TransportRequestOptions): TransportRequestPromise<Termvectors.Response>;
  termvectors (params: Termvectors.Request, callback: callbackFn<Termvectors.Response>): TransportRequestCallback;
  termvectors (params: Termvectors.Request, options: TransportRequestOptions, callback: callbackFn<Termvectors.Response>): TransportRequestCallback;

  updateByQuery (params: UpdateByQuery.Request, options?: TransportRequestOptions): TransportRequestPromise<UpdateByQuery.Response>;
  updateByQuery (params: UpdateByQuery.Request, callback: callbackFn<UpdateByQuery.Response>): TransportRequestCallback;
  updateByQuery (params: UpdateByQuery.Request, options: TransportRequestOptions, callback: callbackFn<UpdateByQuery.Response>): TransportRequestCallback;

  update (params: Update.Request, options?: TransportRequestOptions): TransportRequestPromise<Update.Response>;
  update (params: Update.Request, callback: callbackFn<Update.Response>): TransportRequestCallback;
  update (params: Update.Request, options: TransportRequestOptions, callback: callbackFn<Update.Response>): TransportRequestCallback;

}

export { Client };
