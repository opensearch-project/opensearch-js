# OpenSearch JavaScript Samples

The following will set up a single node OpenSearch instance with the default admin password `myStrongPassword123!`, which we will use to instantiate a client in all samples.

```shell
docker pull opensearchproject/opensearch:latest
docker run -d -p 9200:9200 -p 9600:9600 \
  -e 'discovery.type=single-node' -e 'OPENSEARCH_INITIAL_ADMIN_PASSWORD=myStrongPassword123!' \
  opensearchproject/opensearch:latest
```

## Run Samples

To run the `json.js` sample:
```shell
node json.js
```
