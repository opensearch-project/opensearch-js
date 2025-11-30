# Hybrid Search with OpenSearch JavaScript Client

This guide demonstrates how to implement hybrid search functionality using the OpenSearch JavaScript client and build a complete search service in a NestJS application.

## Background

Hybrid Search combines the strengths of traditional keyword-based search and neural search, handling both exact matches and semantic relevance to provide more accurate search results. In e-commerce platforms, this search approach significantly improves the efficiency for users to find relevant products.

## Client Configuration

Initialize the OpenSearch client to establish connection with the service:

```typescript
import { Client } from '@opensearch-project/opensearch';

export const initializeOpenSearchClient = () => {
  const headers = { "Content-Type": "application/json" };
  const host = "example.com";
  const modelId = "exampleModelId";  // Model ID for neural search
  
  const auth = {
    username: "admin",
    password: "password"
  };
  
  const client = new Client({
    node: `https://${host}`,
    auth: auth,
    headers: headers
  });
  
  return { client, modelId };
};
```

## Building Hybrid Queries

Hybrid queries are the core strategy for improving search quality. By combining multiple types of queries, hybrid search can provide broader coverage of results while maintaining high precision.

### Query Builder Implementation

The query builder is responsible for generating appropriate hybrid queries based on different business scenarios. In our implementation, the `QueryBuilder` class encapsulates the query building logic for different index types:

```typescript
class QueryBuilder {
  private modelId: string;
  
  constructor(modelId: string) {
    this.modelId = modelId;
  }
  
  buildProductQuery(query: string) {
    return {
      hybrid: {
        queries: [
          {
            // Exact match on title field
            match: {
              title: {
                query: query,
                boost: 1.0
              }
            }
          },
          {
            // Neural search on product description
            neural: {
              description_vector: {
                query_text: query,
                model_id: this.modelId,
                k: 10,  // Return top 10 closest results
                boost: 2.0  // Higher weight for neural search results
              }
            }
          }
        ]
      }
    };
  }
  
  buildBlogQuery(query: string) {
    return {
      hybrid: {
        queries: [
          {
            // Match blog title
            match: {
              blog_title: {
                query: query,
                boost: 1.5  // Higher weight for blog title matches
              }
            }
          },
          {
            // Match blog content
            match: {
              content: {
                query: query,
                boost: 0.8
              }
            }
          },
          {
            // Neural search on blog content
            neural: {
              content_vector: {
                query_text: query,
                model_id: this.modelId,
                k: 5,
                boost: 1.8
              }
            }
          }
        ]
      }
    };
  }
}
```

### Advantages and Considerations for Hybrid Queries

Hybrid queries combine the advantages of multiple search techniques:

1. **Exact Matching**: Performs exact matching on keywords, ensuring directly relevant results appear at the top
2. **Semantic Understanding**: Captures the semantic intent of queries through neural search, finding semantically relevant results even if they don't contain the query terms
3. **Adjustable Weights**: Different query components can be assigned different weights, allowing result ranking to be adjusted based on business needs

When using hybrid queries, consider the following:

- **Model Selection**: Neural search relies on pre-trained models; ensure you use models appropriate for your domain
- **Weight Adjustment**: Requires repeated testing and adjustment of weights for different components to achieve optimal results
- **Query Complexity**: Complex hybrid queries may increase query latency; balance performance and relevance
- **Index Requirements**: Neural search requires corresponding vector fields; ensure your index is properly configured

### Query Building in Practice

In practical applications, we dynamically build queries based on different conditions:

```typescript
async searchIndex(query, shopifyDomain, indexName, usePipeline, pageSize, currentPage, sortOption) {
  // Handle empty query case
  let queryParams;
  if (!query || query.trim() === '') {
    console.log('Using match_all query for empty search');
    queryParams = { match_all: {} };
  } else {
    console.log(`Using hybrid query for keyword: ${query}`);
    // Use different query building strategies based on index type
    queryParams = indexName === 'product_index'
      ? this.queryBuilder.buildProductQuery(query)
      : this.queryBuilder.buildBlogQuery(query);
  }
  
  // Build complete query payload
  const payload = {
    _source: indexName === 'product_index'
      ? ['handle', 'price'] 
      : ['unique_handle', 'article_id', 'published_at'],
    query: queryParams,
    post_filter: {
      term: { shopify_domain: shopifyDomain }
    },
    size: pageSize * currentPage,
    track_total_hits: true
  };
  
  // Add sorting logic
  if (sortOption && sortOption !== 'relevance') {
    payload.sort = getSortConditions(indexName, sortOption);
  }
  
  // Execute query
  return await executeSearchQuery(this.client, indexName, payload, usePipeline);
}
```

### Query Parameter Differences for Different Indices

In e-commerce applications, products and content (such as blogs) are typically stored in different indices and require different query strategies:

- **Product Index**: Greater emphasis on title matching and attributes like price and inventory
- **Blog Index**: Greater emphasis on content relevance and publication date
- **Custom Sorting**: Products may be sorted by price, blogs by publication date

These differences need to be considered when building hybrid queries:

```typescript
// Example helper function for getting sort conditions
function getSortConditions(indexName, sortOption) {
  if (indexName === 'product_index') {
    switch (sortOption) {
      case 'price_asc':
        return [{ price: { order: 'asc' } }];
      case 'price_desc':
        return [{ price: { order: 'desc' } }];
      case 'newest':
        return [{ created_at: { order: 'desc' } }];
      default:
        return [];
    }
  } else { // Blog index
    switch (sortOption) {
      case 'date_desc':
        return [{ published_at: { order: 'desc' } }];
      case 'date_asc':
        return [{ published_at: { order: 'asc' } }];
      default:
        return [];
    }
  }
}
```

## Search Pipeline Integration

OpenSearch search pipelines allow preprocessing of queries or postprocessing of results, further enhancing hybrid search capabilities:

```typescript
// Function to execute queries, supporting search pipelines
async function executeSearchQuery(client, indexName, payload, usePipeline) {
  try {
    let response;
    
    if (usePipeline) {
      console.log('Processing query with NLP search pipeline');
      response = await client.transport.request({
        method: 'GET',
        path: `/${indexName}/_search`,
        querystring: 'search_pipeline=nlp-search-pipeline',
        body: payload
      });
    } else {
      console.log('Using standard search API');
      response = await client.search({
        index: indexName,
        body: payload
      });
    }
    
    return processResponse(response.body);
  } catch (error) {
    console.error('Search execution failed:', error);
    throw new Error(`Search failed: ${error.message}`);
  }
}
```

## Conclusion

Implementing high-quality hybrid search requires carefully designed query strategies that consider both exact matching and semantic relevance. By leveraging OpenSearch's hybrid query functionality and the JavaScript client, you can build powerful search experiences in applications such as e-commerce, helping users find what they're looking for more quickly.

In practical applications, continuous testing and adjustment of query parameters, weights, and index structures are key to improving search quality.