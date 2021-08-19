# OpenSearch proxy example

This folder contains an example of how to build a lightweight proxy
between your frontend code and OpenSearch if you don't
have a more sophisticated backend in place yet.

> **IMPORTANT:** This is not a production ready code and it is only for demonstration purposes,
> we make no guarantees on it's security and stability.

This project is designed to be deployed on [Vercel](https://vercel.com/), a cloud platform
for static sites and Serverless Functions. You can use other functions providers,
such as [Google Cloud functions](https://cloud.google.com/functions).

## Project structure

The project comes with four endpoints:

- `/api/search`: runs a search, requires `'read'` permission
- `/api/autocomplete`: runs an autocomplete suggestion, requires `'read'` permission
- `/api/index`:  indexes or updates a document, requires `'write'` permission
- `/api/delete`: deletes a document, requires `'write'` permission

Inside `utils/authorize.js` you can find the authorization logic for the endpoints.
In each endpoint you should configure the `INDEX` variable.

## How to use

Create an account on Vercel, then create a deployment.

### Configure OpenSearch

Once you have created a deployment on opensearch Cloud copy the generated Cloud Id and the credentials.
Then open `utils/prepare-opensearch.js` and fill your credentials. The script generates
an Api Key that you can use for authenticating your request. Based on the configuration of the Api Key, you will be able
to perform different operation on the specified indices or index pattern.

### Configure Vercel

Install the [Vercel CLI](https://vercel.com/docs/cli) to bootstrap the project,
or read the [quickstart](https://vercel.com/docs) documentation.


## Authentication

If you are using OpenSearch only for search purposes, such as a search box, you can create
an Api Key with `read` permissions and store it in your frontend app. Then you can send it
via `Authorization` header to the proxy and run your searches.

If you need to ingest data as well, it's more secure to have a strong authentication in your application.
For such cases, use an external authentication service, such as [Auth0](https://auth0.com/)
or [Magic Link](https://magic.link/). Then create a different Api Key with `read` and `write`
permissions for authenticated users, that will not be stored in the frontend app.

## License

This software is licensed under the [Apache 2 license](../../LICENSE).
