# OpenSearch JavaScript Samples

Most samples can be run using OpenSearch installed locally with docker.

```
docker pull opensearchproject/opensearch:latest
docker run -d -p 9200:9200 -p 9600:9600 -e "discovery.type=single-node" opensearchproject/opensearch:latest
```

## Run Samples

```
node json.js
```
