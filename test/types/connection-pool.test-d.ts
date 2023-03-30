/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { expectType, expectAssignable } from 'tsd';
import { URL } from 'url';
import { BaseConnectionPool, ConnectionPool, CloudConnectionPool, Connection } from '../../';
import { ConnectionOptions } from '../../lib/Connection';

{
  const pool = new BaseConnectionPool({
    Connection: Connection,
    ssl: { ca: 'stirng' },
    emit: (event, ...args) => true,
    agent: { keepAlive: true },
    auth: { username: 'username', password: 'password' },
  });

  expectType<BaseConnectionPool>(pool);
  expectType<Connection[]>(pool.connections);
  expectType<number>(pool.size);

  expectType<BaseConnectionPool>(pool.markAlive(new Connection()));
  expectType<BaseConnectionPool>(pool.markDead(new Connection()));
  expectType<Connection | null>(
    pool.getConnection({
      filter(node) {
        return true;
      },
      selector(connections) {
        return connections[0];
      },
      requestId: 'id',
      name: 'name',
      now: Date.now(),
    })
  );
  expectType<Connection>(pool.addConnection({ url: new URL('url') }));
  expectType<BaseConnectionPool>(pool.removeConnection(new Connection()));
  expectType<void>(pool.empty());
  expectType<BaseConnectionPool>(pool.update([]));
  expectType<any[]>(pool.nodesToHost([], 'https'));
  expectType<ConnectionOptions>(pool.urlToHost('url'));
}

{
  const pool = new ConnectionPool({
    Connection: Connection,
    ssl: { ca: 'stirng' },
    emit: (event, ...args) => true,
    agent: { keepAlive: true },
    auth: { username: 'username', password: 'password' },
    pingTimeout: 1000,
    resurrectStrategy: 'ping',
    sniffEnabled: true,
  });

  expectAssignable<ConnectionPool>(pool);
  expectType<Connection[]>(pool.connections);
  expectType<number>(pool.size);
  expectType<string[]>(pool.dead);

  expectAssignable<ConnectionPool>(pool.markAlive(new Connection()));
  expectAssignable<ConnectionPool>(pool.markDead(new Connection()));
  expectType<Connection | null>(
    pool.getConnection({
      filter(node) {
        return true;
      },
      selector(connections) {
        return connections[0];
      },
      requestId: 'id',
      name: 'name',
      now: Date.now(),
    })
  );
  expectType<Connection>(pool.addConnection({ url: new URL('url') }));
  expectAssignable<ConnectionPool>(pool.removeConnection(new Connection()));
  expectType<void>(pool.empty());
  expectAssignable<ConnectionPool>(pool.update([]));
  expectType<any[]>(pool.nodesToHost([], 'https'));
  expectType<ConnectionOptions>(pool.urlToHost('url'));
  expectType<void>(
    pool.resurrect({
      now: Date.now(),
      requestId: 'id',
      name: 'name',
    })
  );
}

{
  const pool = new CloudConnectionPool({
    Connection: Connection,
    ssl: { ca: 'stirng' },
    emit: (event, ...args) => true,
    agent: { keepAlive: true },
    auth: { username: 'username', password: 'password' },
  });

  expectAssignable<CloudConnectionPool>(pool);
  expectType<Connection | null>(pool.cloudConnection);
  expectType<Connection | null>(pool.getConnection());
}
