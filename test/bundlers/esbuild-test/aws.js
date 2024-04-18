const { AwsSigv4Signer } = require('../../../lib/aws/index');
const { Client } = require('../../../index');

new Client({
  ...AwsSigv4Signer({
    region: 'us-east-1',
    service: 'es',
  }),
  node: 'https://search-xxx.region.es.amazonaws.com',
});
