/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

// const {Client} = require('../index.js')
const { Client } = require('@opensearch-project/opensearch');

const faker = require('faker');

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
  const transformIndex = 'transform-index';
  const transformJob = 'my-transform-job';

  ///////////////////  SETUP //////////////////
  // Create source index
  await client.indices.create({
    index: sourceIndex,
    body: {
      mappings: {
        properties: {
          name: { type: 'keyword' },
          age: { type: 'integer' },
          gender: { type: 'keyword' },
          salary: { type: 'integer' },
        },
      },
    },
  });

  // Create 100 documents
  for (let i = 0; i < 100; i++) {
    // Generate random data for each field
    const name = faker.name.findName(); // generates a random name
    const age = faker.datatype.number({ min: 20, max: 60 }); // generates a random age between 20 and 60
    const gender = faker.random.arrayElement(['Male', 'Female']); // randomly selects 'Male' or 'Female'
    const salary = faker.datatype.number({ min: 30000, max: 100000 }); // generates a random salary between 30000 and 100000

    // Index the document
    await client.index({
      index: sourceIndex,
      body: {
        name,
        age,
        gender,
        salary,
      },
    });
  }

  // Refresh the index to make sure all documents are searchable
  await client.indices.refresh({ index: sourceIndex });

  ////////////  TRANSFORM OPERATIONS ////////////
  // Create transform
  await client.transforms.put({
    id: transformJob,
    body: {
      transform: {
        enabled: true,
        continuous: true,
        schedule: {
          interval: {
            period: 1,
            unit: 'Minutes',
            start_time: 0
          }
        },
        description: 'Sample transform job',
        source_index: sourceIndex,
        target_index: transformIndex,
        data_selection_query: {
          match_all: {}
        },
        page_size: 1,
        groups: [
          {
            terms: {
              source_field: 'gender',
              target_field: 'gender'
            }
          },
          {
            terms: {
              source_field: 'age',
              target_field: 'age'
            }
          }
        ],
        aggregations: {
          quantity: {
            sum: {
              field: 'salary'
            }
          }
        }
      }
    },
  });

  // Start transform
  await client.transforms.start({ id: transformJob });

  // Get transform
  const transform = await client.transforms.get({ id: transformJob });
  console.log(transform.body);

  // Wait till the transform index is created
  while (!(await client.indices.exists({ index: transformIndex })).body) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  // Get transform status
  const explain = await client.transforms.explain({ id: transformJob });
  console.log(explain.body);

  // Stop transform
  await client.transforms.stop({ id: transformJob });

  // Delete the transform job
  await client.transforms.delete({ id: transformJob });

  /////////////////  TEAR DOWN ///////////////
  await client.indices.delete({ index: sourceIndex });
  // await client.indices.delete({ index: transformIndex });
};

start().then(() => console.log('done'));
