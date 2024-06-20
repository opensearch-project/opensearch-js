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

const { kConfigErr, apiFunc } = require('../api/utils')
const kApiModules = Symbol('api modules')
const kApiLoader = Symbol('api loader')

class OpenSearchAPI {
  constructor (opts) {
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
    this.bulk = apiFunc(this, cache, '../api/_core/bulk')
    this.clearScroll = apiFunc(this, cache, '../api/_core/clearScroll')
    this.count = apiFunc(this, cache, '../api/_core/count')
    this.create = apiFunc(this, cache, '../api/_core/create')
    this.createPit = apiFunc(this, cache, '../api/_core/createPit')
    this.delete = apiFunc(this, cache, '../api/_core/delete')
    this.deleteAllPits = apiFunc(this, cache, '../api/_core/deleteAllPits')
    this.deleteByQuery = apiFunc(this, cache, '../api/_core/deleteByQuery')
    this.deleteByQueryRethrottle = apiFunc(this, cache, '../api/_core/deleteByQueryRethrottle')
    this.deletePit = apiFunc(this, cache, '../api/_core/deletePit')
    this.deleteScript = apiFunc(this, cache, '../api/_core/deleteScript')
    this.exists = apiFunc(this, cache, '../api/_core/exists')
    this.existsSource = apiFunc(this, cache, '../api/_core/existsSource')
    this.explain = apiFunc(this, cache, '../api/_core/explain')
    this.fieldCaps = apiFunc(this, cache, '../api/_core/fieldCaps')
    this.get = apiFunc(this, cache, '../api/_core/get')
    this.getAllPits = apiFunc(this, cache, '../api/_core/getAllPits')
    this.getScript = apiFunc(this, cache, '../api/_core/getScript')
    this.getScriptContext = apiFunc(this, cache, '../api/_core/getScriptContext')
    this.getScriptLanguages = apiFunc(this, cache, '../api/_core/getScriptLanguages')
    this.getSource = apiFunc(this, cache, '../api/_core/getSource')
    this.index = apiFunc(this, cache, '../api/_core/index')
    this.info = apiFunc(this, cache, '../api/_core/info')
    this.mget = apiFunc(this, cache, '../api/_core/mget')
    this.msearch = apiFunc(this, cache, '../api/_core/msearch')
    this.msearchTemplate = apiFunc(this, cache, '../api/_core/msearchTemplate')
    this.mtermvectors = apiFunc(this, cache, '../api/_core/mtermvectors')
    this.ping = apiFunc(this, cache, '../api/_core/ping')
    this.putScript = apiFunc(this, cache, '../api/_core/putScript')
    this.rankEval = apiFunc(this, cache, '../api/_core/rankEval')
    this.reindex = apiFunc(this, cache, '../api/_core/reindex')
    this.reindexRethrottle = apiFunc(this, cache, '../api/_core/reindexRethrottle')
    this.renderSearchTemplate = apiFunc(this, cache, '../api/_core/renderSearchTemplate')
    this.scriptsPainlessExecute = apiFunc(this, cache, '../api/_core/scriptsPainlessExecute')
    this.scroll = apiFunc(this, cache, '../api/_core/scroll')
    this.search = apiFunc(this, cache, '../api/_core/search')
    this.searchShards = apiFunc(this, cache, '../api/_core/searchShards')
    this.searchTemplate = apiFunc(this, cache, '../api/_core/searchTemplate')
    this.termvectors = apiFunc(this, cache, '../api/_core/termvectors')
    this.update = apiFunc(this, cache, '../api/_core/update')
    this.updateByQuery = apiFunc(this, cache, '../api/_core/updateByQuery')
    this.updateByQueryRethrottle = apiFunc(this, cache, '../api/_core/updateByQueryRethrottle')

    // Setup API Modules
    Object.defineProperties(this, {
      cat: { get() { return this[kApiLoader]('../api/cat/_api') } },
      cluster: { get() { return this[kApiLoader]('../api/cluster/_api') } },
      danglingIndices: { get() { return this[kApiLoader]('../api/danglingIndices/_api') } },
      http: { get() { return this[kApiLoader]('../api/http/_api') } },
      indices: { get() { return this[kApiLoader]('../api/indices/_api') } },
      ingest: { get() { return this[kApiLoader]('../api/ingest/_api') } },
      knn: { get() { return this[kApiLoader]('../api/knn/_api') } },
      ml: { get() { return this[kApiLoader]('../api/ml/_api') } },
      nodes: { get() { return this[kApiLoader]('../api/nodes/_api') } },
      notifications: { get() { return this[kApiLoader]('../api/notifications/_api') } },
      ppl: { get() { return this[kApiLoader]('../api/ppl/_api') } },
      remoteStore: { get() { return this[kApiLoader]('../api/remoteStore/_api') } },
      rollups: { get() { return this[kApiLoader]('../api/rollups/_api') } },
      searchPipeline: { get() { return this[kApiLoader]('../api/searchPipeline/_api') } },
      security: { get() { return this[kApiLoader]('../api/security/_api') } },
      snapshot: { get() { return this[kApiLoader]('../api/snapshot/_api') } },
      sql: { get() { return this[kApiLoader]('../api/sql/_api') } },
      tasks: { get() { return this[kApiLoader]('../api/tasks/_api') } },
      transforms: { get() { return this[kApiLoader]('../api/transforms/_api') } },
    })
  }
}

module.exports = OpenSearchAPI;
