# Client model input (experimental)

`npm run generate_api -- --model` (or `npm run generate_api_from_model`) takes every type from the resolved client
model of opensearch-api-specification instead of interpreting `allOf`/`oneOf`/`anyOf` of
`opensearch-openapi.yaml`. Without `--model`, generation is unchanged.

The model is carried by `opensearch-openapi.yaml` itself, next to the JSON Schema it is built from
(opensearch-project/opensearch-api-specification#1329):

- `components.x-model` gives its format and version (`opensearch-client-model`, `0.2.0`);
- every component schema has `x-model` with its type;
- every response and request body component has `x-model` with its body.

`npm run merge` in opensearch-api-specification writes it; the spec published at api-spec.opensearch.org does not
have it yet, so `--model` fails on it with a clear error. To try it, copy a spec merged by that change over
`opensearch-openapi.yaml`:

```sh
# in a checkout of opensearch-api-specification with #1329
npm run merge
cp build/opensearch-openapi.yaml <opensearch-js>/api_generator/opensearch-openapi.yaml
```

`lower.ts` replaces the component schemas and the JSON bodies of the response and request body components with
schemas built from the model, in one canonical form the type renderer already reads:

- an object is one `$ref` per base, its own fields as one inline object, and one `oneOf`/`anyOf` per presence,
  container or other union constraint, each branch typed with the fields it requires;
- a union is a plain `oneOf`/`anyOf` of its members, with their titles;
- generic type parameters and the annotations of the original schemas (descriptions, defaults, `x-*` except
  `x-model`) are kept.

Operations, paths and parameters still come from `opensearch-openapi.yaml`.
