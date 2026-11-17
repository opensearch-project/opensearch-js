# Client model input (experimental)

`npm run generate_api -- --model <opensearch-client-model.json>` takes every type from the resolved client
model of opensearch-api-specification instead of interpreting `allOf`/`oneOf`/`anyOf` of
`opensearch-openapi.yaml`. Without `--model`, generation is unchanged.

The model must describe the same spec as `opensearch-openapi.yaml`. Build it from that file with the
specification repository's tooling (opensearch-project/opensearch-api-specification#1329):

```sh
# in a checkout of opensearch-api-specification
npm run model -- --label -i <opensearch-js>/api_generator/opensearch-openapi.yaml -o <path>/opensearch-client-model.json
```

`lower.ts` replaces the component schemas and the JSON bodies of the response and request body components with
schemas built from the model, in one canonical form the type renderer already reads:

- an object is one `$ref` per base, its own fields as one inline object, and one `oneOf`/`anyOf` per presence,
  container or other union constraint, each branch typed with the fields it requires;
- a union is a plain `oneOf`/`anyOf` of its members, with their titles;
- generic type parameters and the annotations of the original schemas (descriptions, defaults, `x-*`) are kept.

Operations, paths and parameters still come from `opensearch-openapi.yaml`.
