# Generate API methods for JS client.

This script generates API methods for the JS client based on the OpenSearch REST API specification written in OpenAPI.

*This is still work-in-progress. It's being blocked by the lack of RequestBody and ResponseBody type definitions in the spec, which is currently being worked on*

## Usage
Install node.js dependencies:
```bash
npm install
```

Download the OpenSearch OpenAPI spec:
```bash
npm run download_spec
```

Generate the API:
```bash
npm run generate_api
```

