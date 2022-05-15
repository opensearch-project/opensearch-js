If a type is incorrect, you should add a comment // @ts-expect-error @opensearch-project/opensearch 
telling TypeScript that you are aware of the warning and you would like to temporarily suppress it.
In this way, your code will compile until the type is fixed, and when it happens, you’ll only need to remove the 
// @ts-expect-error @opensearch-project/opensearch comment (TypeScript will let you know when it is time).

import { Client } from "@opensearch-project/opensearch";
import type { Client as NewTypes } from "@opensearch-project/opensearch/api/new";

// @ts-expect-error @opensearch-project/opensearch
const client: NewTypes = new Client({
  node: 'http://localhost:9200'
})
