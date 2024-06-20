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

'use strict'

const { kConfigErr, apiFunc } = require('./utils')
const kApiModules = Symbol('api modules')
const kApiLoader = Symbol('api loader')

function OpenSearchAPI (opts) {
  this[kConfigErr] = opts.ConfigurationError
  this[kApiModules] = {}
  this[kApiLoader] = function (path) {
    if (this[kApiModules][path] === undefined) {
      const ApiModule = require(path)
      this[kApiModules][path] = new ApiModule(this)
    }
    return this[kApiModules][path]
  }

  // Setup Root API Functions
  /** @namespace API-Core */
  const cache = {}
  this.bulk = apiFunc(this, cache, './_core/bulk')
  this.clearScroll = apiFunc(this, cache, './_core/clear_scroll')
  this.count = apiFunc(this, cache, './_core/count')
  this.create = apiFunc(this, cache, './_core/create')
  this.createPit = apiFunc(this, cache, './_core/create_pit')
  this.delete = apiFunc(this, cache, './_core/delete')
  this.deleteAllPits = apiFunc(this, cache, './_core/delete_all_pits')
  this.deleteByQuery = apiFunc(this, cache, './_core/delete_by_query')
  this.deleteByQueryRethrottle = apiFunc(this, cache, './_core/delete_by_query_rethrottle')
  this.deletePit = apiFunc(this, cache, './_core/delete_pit')
  this.deleteScript = apiFunc(this, cache, './_core/delete_script')
  this.exists = apiFunc(this, cache, './_core/exists')
  this.existsSource = apiFunc(this, cache, './_core/exists_source')
  this.explain = apiFunc(this, cache, './_core/explain')
  this.fieldCaps = apiFunc(this, cache, './_core/field_caps')
  this.get = apiFunc(this, cache, './_core/get')
  this.getAllPits = apiFunc(this, cache, './_core/get_all_pits')
  this.getScript = apiFunc(this, cache, './_core/get_script')
  this.getScriptContext = apiFunc(this, cache, './_core/get_script_context')
  this.getScriptLanguages = apiFunc(this, cache, './_core/get_script_languages')
  this.getSource = apiFunc(this, cache, './_core/get_source')
  this.index = apiFunc(this, cache, './_core/index')
  this.info = apiFunc(this, cache, './_core/info')
  this.mget = apiFunc(this, cache, './_core/mget')
  this.msearch = apiFunc(this, cache, './_core/msearch')
  this.msearchTemplate = apiFunc(this, cache, './_core/msearch_template')
  this.mtermvectors = apiFunc(this, cache, './_core/mtermvectors')
  this.ping = apiFunc(this, cache, './_core/ping')
  this.putScript = apiFunc(this, cache, './_core/put_script')
  this.rankEval = apiFunc(this, cache, './_core/rank_eval')
  this.reindex = apiFunc(this, cache, './_core/reindex')
  this.reindexRethrottle = apiFunc(this, cache, './_core/reindex_rethrottle')
  this.renderSearchTemplate = apiFunc(this, cache, './_core/render_search_template')
  this.scriptsPainlessExecute = apiFunc(this, cache, './_core/scripts_painless_execute')
  this.scroll = apiFunc(this, cache, './_core/scroll')
  this.search = apiFunc(this, cache, './_core/search')
  this.searchShards = apiFunc(this, cache, './_core/search_shards')
  this.searchTemplate = apiFunc(this, cache, './_core/search_template')
  this.termvectors = apiFunc(this, cache, './_core/termvectors')
  this.update = apiFunc(this, cache, './_core/update')
  this.updateByQuery = apiFunc(this, cache, './_core/update_by_query')
  this.updateByQueryRethrottle = apiFunc(this, cache, './_core/update_by_query_rethrottle')
}

// Setup API Modules
Object.defineProperties(OpenSearchAPI.prototype, {
  cat: { get() { return this[kApiLoader]('./cat/_api') } },
  cluster: { get() { return this[kApiLoader]('./cluster/_api') } },
  danglingIndices: { get() { return this[kApiLoader]('./dangling_indices/_api') } },
  http: { get() { return this[kApiLoader]('./http/_api') } },
  indices: { get() { return this[kApiLoader]('./indices/_api') } },
  ingest: { get() { return this[kApiLoader]('./ingest/_api') } },
  knn: { get() { return this[kApiLoader]('./knn/_api') } },
  ml: { get() { return this[kApiLoader]('./ml/_api') } },
  nodes: { get() { return this[kApiLoader]('./nodes/_api') } },
  notifications: { get() { return this[kApiLoader]('./notifications/_api') } },
  ppl: { get() { return this[kApiLoader]('./ppl/_api') } },
  remoteStore: { get() { return this[kApiLoader]('./remote_store/_api') } },
  rollups: { get() { return this[kApiLoader]('./rollups/_api') } },
  searchPipeline: { get() { return this[kApiLoader]('./search_pipeline/_api') } },
  security: { get() { return this[kApiLoader]('./security/_api') } },
  snapshot: { get() { return this[kApiLoader]('./snapshot/_api') } },
  sql: { get() { return this[kApiLoader]('./sql/_api') } },
  tasks: { get() { return this[kApiLoader]('./tasks/_api') } },
  transforms: { get() { return this[kApiLoader]('./transforms/_api') } },
})

module.exports = OpenSearchAPI;
