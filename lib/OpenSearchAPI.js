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

const { kConfigErr } = require('../api/utils')
const kApiModules = Symbol('api modules')

class OpenSearchAPI {
  constructor (opts) {
    this[kConfigErr] = opts.ConfigurationError
    this[kApiModules] = {
      cat: new(require('../api/cat/_api'))(this),
      cluster: new(require('../api/cluster/_api'))(this),
      danglingIndices: new(require('../api/danglingIndices/_api'))(this),
      http: new(require('../api/http/_api'))(this),
      indices: new(require('../api/indices/_api'))(this),
      ingest: new(require('../api/ingest/_api'))(this),
      knn: new(require('../api/knn/_api'))(this),
      ml: new(require('../api/ml/_api'))(this),
      nodes: new(require('../api/nodes/_api'))(this),
      notifications: new(require('../api/notifications/_api'))(this),
      ppl: new(require('../api/ppl/_api'))(this),
      remoteStore: new(require('../api/remoteStore/_api'))(this),
      rollups: new(require('../api/rollups/_api'))(this),
      searchPipeline: new(require('../api/searchPipeline/_api'))(this),
      security: new(require('../api/security/_api'))(this),
      snapshot: new(require('../api/snapshot/_api'))(this),
      sql: new(require('../api/sql/_api'))(this),
      tasks: new(require('../api/tasks/_api'))(this),
      transforms: new(require('../api/transforms/_api'))(this),
    }

    // Setup Root API Functions
    /** @namespace API-Core */
    const cache = {}
    this.bulk = require('../api/_core/bulk').bind(this)
    this.clearScroll = require('../api/_core/clearScroll').bind(this)
    this.count = require('../api/_core/count').bind(this)
    this.create = require('../api/_core/create').bind(this)
    this.createPit = require('../api/_core/createPit').bind(this)
    this.delete = require('../api/_core/delete').bind(this)
    this.deleteAllPits = require('../api/_core/deleteAllPits').bind(this)
    this.deleteByQuery = require('../api/_core/deleteByQuery').bind(this)
    this.deleteByQueryRethrottle = require('../api/_core/deleteByQueryRethrottle').bind(this)
    this.deletePit = require('../api/_core/deletePit').bind(this)
    this.deleteScript = require('../api/_core/deleteScript').bind(this)
    this.exists = require('../api/_core/exists').bind(this)
    this.existsSource = require('../api/_core/existsSource').bind(this)
    this.explain = require('../api/_core/explain').bind(this)
    this.fieldCaps = require('../api/_core/fieldCaps').bind(this)
    this.get = require('../api/_core/get').bind(this)
    this.getAllPits = require('../api/_core/getAllPits').bind(this)
    this.getScript = require('../api/_core/getScript').bind(this)
    this.getScriptContext = require('../api/_core/getScriptContext').bind(this)
    this.getScriptLanguages = require('../api/_core/getScriptLanguages').bind(this)
    this.getSource = require('../api/_core/getSource').bind(this)
    this.index = require('../api/_core/index').bind(this)
    this.info = require('../api/_core/info').bind(this)
    this.mget = require('../api/_core/mget').bind(this)
    this.msearch = require('../api/_core/msearch').bind(this)
    this.msearchTemplate = require('../api/_core/msearchTemplate').bind(this)
    this.mtermvectors = require('../api/_core/mtermvectors').bind(this)
    this.ping = require('../api/_core/ping').bind(this)
    this.putScript = require('../api/_core/putScript').bind(this)
    this.rankEval = require('../api/_core/rankEval').bind(this)
    this.reindex = require('../api/_core/reindex').bind(this)
    this.reindexRethrottle = require('../api/_core/reindexRethrottle').bind(this)
    this.renderSearchTemplate = require('../api/_core/renderSearchTemplate').bind(this)
    this.scriptsPainlessExecute = require('../api/_core/scriptsPainlessExecute').bind(this)
    this.scroll = require('../api/_core/scroll').bind(this)
    this.search = require('../api/_core/search').bind(this)
    this.searchShards = require('../api/_core/searchShards').bind(this)
    this.searchTemplate = require('../api/_core/searchTemplate').bind(this)
    this.termvectors = require('../api/_core/termvectors').bind(this)
    this.update = require('../api/_core/update').bind(this)
    this.updateByQuery = require('../api/_core/updateByQuery').bind(this)
    this.updateByQueryRethrottle = require('../api/_core/updateByQueryRethrottle').bind(this)

    // Setup API Modules
    Object.defineProperties(this, {
      cat: { get() { return this[kApiModules].cat } },
      cluster: { get() { return this[kApiModules].cluster } },
      danglingIndices: { get() { return this[kApiModules].danglingIndices } },
      http: { get() { return this[kApiModules].http } },
      indices: { get() { return this[kApiModules].indices } },
      ingest: { get() { return this[kApiModules].ingest } },
      knn: { get() { return this[kApiModules].knn } },
      ml: { get() { return this[kApiModules].ml } },
      nodes: { get() { return this[kApiModules].nodes } },
      notifications: { get() { return this[kApiModules].notifications } },
      ppl: { get() { return this[kApiModules].ppl } },
      remoteStore: { get() { return this[kApiModules].remoteStore } },
      rollups: { get() { return this[kApiModules].rollups } },
      searchPipeline: { get() { return this[kApiModules].searchPipeline } },
      security: { get() { return this[kApiModules].security } },
      snapshot: { get() { return this[kApiModules].snapshot } },
      sql: { get() { return this[kApiModules].sql } },
      tasks: { get() { return this[kApiModules].tasks } },
      transforms: { get() { return this[kApiModules].transforms } },
    })
  }
}

module.exports = OpenSearchAPI;
