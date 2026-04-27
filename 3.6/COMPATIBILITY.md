# Compatibility with OpenSearch

The below matrix shows the compatibility of the [`opensearch-js`](https://www.npmjs.com/package/@opensearch-project/opensearch) with versions of [`OpenSearch`](https://opensearch.org/downloads.html#opensearch). In the vast majority of cases, a minor version upgrade of the OpenSearch Server does not affect how your application's existing features interact with the cluster via the JavaScript client. However, such an upgrade can introduce new endpoints that your current version of the client does not support. In this case, you must upgrade the client to the version shown in the table below (or higher) to use the new endpoints.

If your Server Version is higher than those listed in the table below, you should use the newest client. If the newest client still does not support the endpoint you need, please open an issue and let us know.

| Server Version | Client Version |
|----------------|----------------|
| 1.x            | 1.x            |
| 2.x            | 2.x            |

## Upgrading
Major versions of OpenSearch introduce breaking changes that require careful upgrades of the client. While `opensearch-js` 2.x works against the latest OpenSearch 1.x, certain deprecated features removed in OpenSearch 2.0 have also been removed from the client. Please refer to the [OpenSearch documentation](https://opensearch.org/docs/latest/clients/index/) for more information.
