/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

const { Client } = require('@opensearch-project/opensearch');

// Instantiate a client with basic auth as setup in the README.md file
const client = new Client({
  ssl: {
    rejectUnauthorized: false,
  },
  node: 'https://localhost:9200',
  auth: {
    username: 'admin',
    password: 'myStrongPassword123!',
  },
});

const start = async () => {
  const sourceIndex = 'sample-index';
  const rollupIndex = 'rollup-index';
  const jobId = 'my-rollup-job';

  ///////////////////  SETUP //////////////////
  // Create source index
  await client.indices.create({
    index: sourceIndex,
    body: {
      mappings: {
        properties: {
          timestamp: { type: 'date' },
          field1: { type: 'keyword' },
          field2: { type: 'integer' },
        },
      },
    },
  });

  // Add some documents to the index
  const now = Date.now();
  for (let i = 0; i < 100; i++) {
    await client.index({
      index: sourceIndex,
      body: {
        timestamp: new Date(now - i * 3600000), // Subtract 1 hour for each document
        field1: `field1_value_${i % 10}`, // Cycle through 10 different values
        field2: i,
      },
    });
  }

  // Refresh the index to make sure all documents are searchable
  await client.indices.refresh({ index: sourceIndex });
  ////////////  ROLLUP OPERATIONS ////////////
  // Create a rollup job
  await client.rollups.put({
    id: jobId,
    body: {
      rollup: {
        description: 'sample rollup',
        source_index: sourceIndex,
        target_index: rollupIndex,
        schedule: {
          interval: {
            period: 1,
            unit: 'Minutes',
            start_time: 1602100553,
          },
        },
        page_size: 10,
        delay: '0',
        continuous: false,
        dimensions: [
          {
            date_histogram: {
              source_field: 'timestamp',
              fixed_interval: '1440m',
              timezone: 'UTC',
            },
          },
          {
            terms: {
              source_field: 'field1',
            },
          },
        ],
        metrics: [
          {
            source_field: 'field2',
            metrics: [
              {
                avg: {},
              },
              {
                max: {},
              },
            ],
          },
        ],
      },
    },
  });

  // Start the rollup job
  await client.rollups.start({ id: jobId });

  // Check the rollup job
  const status = await client.rollups.get({ id: jobId });
  console.log('Running Rollup Job:');
  console.log(status.body);

  // Wait till the rollup index is created
  while (!(await client.indices.exists({ index: rollupIndex })).body) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  // Explain the rollup job
  const explain = await client.rollups.explain({ id: jobId });
  console.log('Rollup Job Explanation:');
  console.log(explain.body);

  // Stop the rollup job
  await client.rollups.stop({ id: jobId });

  // Delete the rollup job
  await client.rollups.delete({ id: jobId });

  /////////////////  TEAR DOWN ///////////////
  await client.indices.delete({ index: sourceIndex });
  await client.indices.delete({ index: rollupIndex });
};

start().then(() => console.log('done'));
