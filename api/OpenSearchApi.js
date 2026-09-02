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

'use strict';

const { kConfigErr } = require('./utils')
const kApiModules = Symbol('api modules')

// Namespace constructors and root function modules are required once at
// module load time (not per Client instance) to avoid paying `require()`
// resolution cost (and any installed require-hook overhead, e.g. APM/OTel
// auto-instrumentation) on every `new Client()` / `client.child()` call.
const asynchronousSearchCtor = require('./asynchronousSearch/_api');
const catCtor = require('./cat/_api');
const clusterCtor = require('./cluster/_api');
const danglingIndicesCtor = require('./danglingIndices/_api');
const flowFrameworkCtor = require('./flowFramework/_api');
const geospatialCtor = require('./geospatial/_api');
const httpCtor = require('./http/_api');
const indicesCtor = require('./indices/_api');
const ingestCtor = require('./ingest/_api');
const ingestionCtor = require('./ingestion/_api');
const insightsCtor = require('./insights/_api');
const ismCtor = require('./ism/_api');
const knnCtor = require('./knn/_api');
const listCtor = require('./list/_api');
const ltrCtor = require('./ltr/_api');
const mlCtor = require('./ml/_api');
const neuralCtor = require('./neural/_api');
const nodesCtor = require('./nodes/_api');
const notificationsCtor = require('./notifications/_api');
const observabilityCtor = require('./observability/_api');
const pplCtor = require('./ppl/_api');
const queryCtor = require('./query/_api');
const remoteStoreCtor = require('./remoteStore/_api');
const replicationCtor = require('./replication/_api');
const rollupsCtor = require('./rollups/_api');
const searchPipelineCtor = require('./searchPipeline/_api');
const searchRelevanceCtor = require('./searchRelevance/_api');
const securityAnalyticsCtor = require('./securityAnalytics/_api');
const securityCtor = require('./security/_api');
const smCtor = require('./sm/_api');
const snapshotCtor = require('./snapshot/_api');
const sqlCtor = require('./sql/_api');
const tasksCtor = require('./tasks/_api');
const transformsCtor = require('./transforms/_api');
const ubiCtor = require('./ubi/_api');
const wlmCtor = require('./wlm/_api');

const bulkFn = require('./_core/bulk');
const bulkStreamFn = require('./_core/bulkStream');
const clearScrollFn = require('./_core/clearScroll');
const countFn = require('./_core/count');
const createFn = require('./_core/create');
const createPitFn = require('./_core/createPit');
const deleteFn = require('./_core/delete');
const deleteAllPitsFn = require('./_core/deleteAllPits');
const deleteByQueryFn = require('./_core/deleteByQuery');
const deleteByQueryRethrottleFn = require('./_core/deleteByQueryRethrottle');
const deletePitFn = require('./_core/deletePit');
const deleteScriptFn = require('./_core/deleteScript');
const existsFn = require('./_core/exists');
const existsSourceFn = require('./_core/existsSource');
const explainFn = require('./_core/explain');
const fieldCapsFn = require('./_core/fieldCaps');
const getFn = require('./_core/get');
const getAllPitsFn = require('./_core/getAllPits');
const getScriptFn = require('./_core/getScript');
const getScriptContextFn = require('./_core/getScriptContext');
const getScriptLanguagesFn = require('./_core/getScriptLanguages');
const getSourceFn = require('./_core/getSource');
const indexFn = require('./_core/index');
const infoFn = require('./_core/info');
const mgetFn = require('./_core/mget');
const msearchFn = require('./_core/msearch');
const msearchTemplateFn = require('./_core/msearchTemplate');
const mtermvectorsFn = require('./_core/mtermvectors');
const pingFn = require('./_core/ping');
const putScriptFn = require('./_core/putScript');
const rankEvalFn = require('./_core/rankEval');
const reindexFn = require('./_core/reindex');
const reindexRethrottleFn = require('./_core/reindexRethrottle');
const renderSearchTemplateFn = require('./_core/renderSearchTemplate');
const scriptsPainlessExecuteFn = require('./_core/scriptsPainlessExecute');
const scrollFn = require('./_core/scroll');
const searchFn = require('./_core/search');
const searchShardsFn = require('./_core/searchShards');
const searchTemplateFn = require('./_core/searchTemplate');
const termvectorsFn = require('./_core/termvectors');
const updateFn = require('./_core/update');
const updateByQueryFn = require('./_core/updateByQuery');
const updateByQueryRethrottleFn = require('./_core/updateByQueryRethrottle');

class OpenSearchAPI {
  constructor (opts) {
    this[kConfigErr] = opts.ConfigurationError
    this[kApiModules] = {}

    // Setup Root API Functions
    /** @namespace API-Core */
    this.bulk = bulkFn.bind(this)
    this.bulkStream = bulkStreamFn.bind(this)
    this.clearScroll = clearScrollFn.bind(this)
    this.count = countFn.bind(this)
    this.create = createFn.bind(this)
    this.createPit = createPitFn.bind(this)
    this.delete = deleteFn.bind(this)
    this.deleteAllPits = deleteAllPitsFn.bind(this)
    this.deleteByQuery = deleteByQueryFn.bind(this)
    this.deleteByQueryRethrottle = deleteByQueryRethrottleFn.bind(this)
    this.deletePit = deletePitFn.bind(this)
    this.deleteScript = deleteScriptFn.bind(this)
    this.exists = existsFn.bind(this)
    this.existsSource = existsSourceFn.bind(this)
    this.explain = explainFn.bind(this)
    this.fieldCaps = fieldCapsFn.bind(this)
    this.get = getFn.bind(this)
    this.getAllPits = getAllPitsFn.bind(this)
    this.getScript = getScriptFn.bind(this)
    this.getScriptContext = getScriptContextFn.bind(this)
    this.getScriptLanguages = getScriptLanguagesFn.bind(this)
    this.getSource = getSourceFn.bind(this)
    this.index = indexFn.bind(this)
    this.info = infoFn.bind(this)
    this.mget = mgetFn.bind(this)
    this.msearch = msearchFn.bind(this)
    this.msearchTemplate = msearchTemplateFn.bind(this)
    this.mtermvectors = mtermvectorsFn.bind(this)
    this.ping = pingFn.bind(this)
    this.putScript = putScriptFn.bind(this)
    this.rankEval = rankEvalFn.bind(this)
    this.reindex = reindexFn.bind(this)
    this.reindexRethrottle = reindexRethrottleFn.bind(this)
    this.renderSearchTemplate = renderSearchTemplateFn.bind(this)
    this.scriptsPainlessExecute = scriptsPainlessExecuteFn.bind(this)
    this.scroll = scrollFn.bind(this)
    this.search = searchFn.bind(this)
    this.searchShards = searchShardsFn.bind(this)
    this.searchTemplate = searchTemplateFn.bind(this)
    this.termvectors = termvectorsFn.bind(this)
    this.update = updateFn.bind(this)
    this.updateByQuery = updateByQueryFn.bind(this)
    this.updateByQueryRethrottle = updateByQueryRethrottleFn.bind(this)

    // Deprecated: Use bulkStream instead.
    this.bulk_stream = bulkStreamFn.bind(this)
    // Deprecated: Use clearScroll instead.
    this.clear_scroll = clearScrollFn.bind(this)
    // Deprecated: Use createPit instead.
    this.create_pit = createPitFn.bind(this)
    // Deprecated: Use deleteAllPits instead.
    this.delete_all_pits = deleteAllPitsFn.bind(this)
    // Deprecated: Use deleteByQuery instead.
    this.delete_by_query = deleteByQueryFn.bind(this)
    // Deprecated: Use deleteByQueryRethrottle instead.
    this.delete_by_query_rethrottle = deleteByQueryRethrottleFn.bind(this)
    // Deprecated: Use deletePit instead.
    this.delete_pit = deletePitFn.bind(this)
    // Deprecated: Use deleteScript instead.
    this.delete_script = deleteScriptFn.bind(this)
    // Deprecated: Use existsSource instead.
    this.exists_source = existsSourceFn.bind(this)
    // Deprecated: Use fieldCaps instead.
    this.field_caps = fieldCapsFn.bind(this)
    // Deprecated: Use getAllPits instead.
    this.get_all_pits = getAllPitsFn.bind(this)
    // Deprecated: Use getScript instead.
    this.get_script = getScriptFn.bind(this)
    // Deprecated: Use getScriptContext instead.
    this.get_script_context = getScriptContextFn.bind(this)
    // Deprecated: Use getScriptLanguages instead.
    this.get_script_languages = getScriptLanguagesFn.bind(this)
    // Deprecated: Use getSource instead.
    this.get_source = getSourceFn.bind(this)
    // Deprecated: Use msearchTemplate instead.
    this.msearch_template = msearchTemplateFn.bind(this)
    // Deprecated: Use putScript instead.
    this.put_script = putScriptFn.bind(this)
    // Deprecated: Use rankEval instead.
    this.rank_eval = rankEvalFn.bind(this)
    // Deprecated: Use reindexRethrottle instead.
    this.reindex_rethrottle = reindexRethrottleFn.bind(this)
    // Deprecated: Use renderSearchTemplate instead.
    this.render_search_template = renderSearchTemplateFn.bind(this)
    // Deprecated: Use scriptsPainlessExecute instead.
    this.scripts_painless_execute = scriptsPainlessExecuteFn.bind(this)
    // Deprecated: Use searchShards instead.
    this.search_shards = searchShardsFn.bind(this)
    // Deprecated: Use searchTemplate instead.
    this.search_template = searchTemplateFn.bind(this)
    // Deprecated: Use updateByQuery instead.
    this.update_by_query = updateByQueryFn.bind(this)
    // Deprecated: Use updateByQueryRethrottle instead.
    this.update_by_query_rethrottle = updateByQueryRethrottleFn.bind(this)

    // Setup API Modules
    // Each namespace is instantiated lazily on first access
    const kApiModulesMap = this[kApiModules]
    const self = this
    Object.defineProperties(this, {
      asynchronousSearch: { get() { return kApiModulesMap.asynchronousSearch ?? (kApiModulesMap.asynchronousSearch = new asynchronousSearchCtor(self)) } },
      cat: { get() { return kApiModulesMap.cat ?? (kApiModulesMap.cat = new catCtor(self)) } },
      cluster: { get() { return kApiModulesMap.cluster ?? (kApiModulesMap.cluster = new clusterCtor(self)) } },
      danglingIndices: { get() { return kApiModulesMap.danglingIndices ?? (kApiModulesMap.danglingIndices = new danglingIndicesCtor(self)) } },
      flowFramework: { get() { return kApiModulesMap.flowFramework ?? (kApiModulesMap.flowFramework = new flowFrameworkCtor(self)) } },
      geospatial: { get() { return kApiModulesMap.geospatial ?? (kApiModulesMap.geospatial = new geospatialCtor(self)) } },
      http: { get() { return kApiModulesMap.http ?? (kApiModulesMap.http = new httpCtor(self)) } },
      indices: { get() { return kApiModulesMap.indices ?? (kApiModulesMap.indices = new indicesCtor(self)) } },
      ingest: { get() { return kApiModulesMap.ingest ?? (kApiModulesMap.ingest = new ingestCtor(self)) } },
      ingestion: { get() { return kApiModulesMap.ingestion ?? (kApiModulesMap.ingestion = new ingestionCtor(self)) } },
      insights: { get() { return kApiModulesMap.insights ?? (kApiModulesMap.insights = new insightsCtor(self)) } },
      ism: { get() { return kApiModulesMap.ism ?? (kApiModulesMap.ism = new ismCtor(self)) } },
      knn: { get() { return kApiModulesMap.knn ?? (kApiModulesMap.knn = new knnCtor(self)) } },
      list: { get() { return kApiModulesMap.list ?? (kApiModulesMap.list = new listCtor(self)) } },
      ltr: { get() { return kApiModulesMap.ltr ?? (kApiModulesMap.ltr = new ltrCtor(self)) } },
      ml: { get() { return kApiModulesMap.ml ?? (kApiModulesMap.ml = new mlCtor(self)) } },
      neural: { get() { return kApiModulesMap.neural ?? (kApiModulesMap.neural = new neuralCtor(self)) } },
      nodes: { get() { return kApiModulesMap.nodes ?? (kApiModulesMap.nodes = new nodesCtor(self)) } },
      notifications: { get() { return kApiModulesMap.notifications ?? (kApiModulesMap.notifications = new notificationsCtor(self)) } },
      observability: { get() { return kApiModulesMap.observability ?? (kApiModulesMap.observability = new observabilityCtor(self)) } },
      ppl: { get() { return kApiModulesMap.ppl ?? (kApiModulesMap.ppl = new pplCtor(self)) } },
      query: { get() { return kApiModulesMap.query ?? (kApiModulesMap.query = new queryCtor(self)) } },
      remoteStore: { get() { return kApiModulesMap.remoteStore ?? (kApiModulesMap.remoteStore = new remoteStoreCtor(self)) } },
      replication: { get() { return kApiModulesMap.replication ?? (kApiModulesMap.replication = new replicationCtor(self)) } },
      rollups: { get() { return kApiModulesMap.rollups ?? (kApiModulesMap.rollups = new rollupsCtor(self)) } },
      searchPipeline: { get() { return kApiModulesMap.searchPipeline ?? (kApiModulesMap.searchPipeline = new searchPipelineCtor(self)) } },
      searchRelevance: { get() { return kApiModulesMap.searchRelevance ?? (kApiModulesMap.searchRelevance = new searchRelevanceCtor(self)) } },
      securityAnalytics: { get() { return kApiModulesMap.securityAnalytics ?? (kApiModulesMap.securityAnalytics = new securityAnalyticsCtor(self)) } },
      security: { get() { return kApiModulesMap.security ?? (kApiModulesMap.security = new securityCtor(self)) } },
      sm: { get() { return kApiModulesMap.sm ?? (kApiModulesMap.sm = new smCtor(self)) } },
      snapshot: { get() { return kApiModulesMap.snapshot ?? (kApiModulesMap.snapshot = new snapshotCtor(self)) } },
      sql: { get() { return kApiModulesMap.sql ?? (kApiModulesMap.sql = new sqlCtor(self)) } },
      tasks: { get() { return kApiModulesMap.tasks ?? (kApiModulesMap.tasks = new tasksCtor(self)) } },
      transforms: { get() { return kApiModulesMap.transforms ?? (kApiModulesMap.transforms = new transformsCtor(self)) } },
      ubi: { get() { return kApiModulesMap.ubi ?? (kApiModulesMap.ubi = new ubiCtor(self)) } },
      wlm: { get() { return kApiModulesMap.wlm ?? (kApiModulesMap.wlm = new wlmCtor(self)) } },

      // Deprecated: Use asynchronousSearch instead.
      asynchronous_search: { get() { return kApiModulesMap.asynchronousSearch ?? (kApiModulesMap.asynchronousSearch = new asynchronousSearchCtor(self)) } },
      // Deprecated: Use danglingIndices instead.
      dangling_indices: { get() { return kApiModulesMap.danglingIndices ?? (kApiModulesMap.danglingIndices = new danglingIndicesCtor(self)) } },
      // Deprecated: Use flowFramework instead.
      flow_framework: { get() { return kApiModulesMap.flowFramework ?? (kApiModulesMap.flowFramework = new flowFrameworkCtor(self)) } },
      // Deprecated: Use remoteStore instead.
      remote_store: { get() { return kApiModulesMap.remoteStore ?? (kApiModulesMap.remoteStore = new remoteStoreCtor(self)) } },
      // Deprecated: Use searchPipeline instead.
      search_pipeline: { get() { return kApiModulesMap.searchPipeline ?? (kApiModulesMap.searchPipeline = new searchPipelineCtor(self)) } },
      // Deprecated: Use searchRelevance instead.
      search_relevance: { get() { return kApiModulesMap.searchRelevance ?? (kApiModulesMap.searchRelevance = new searchRelevanceCtor(self)) } },
      // Deprecated: Use securityAnalytics instead.
      security_analytics: { get() { return kApiModulesMap.securityAnalytics ?? (kApiModulesMap.securityAnalytics = new securityAnalyticsCtor(self)) } },
    })
  }
}

module.exports = OpenSearchAPI;
