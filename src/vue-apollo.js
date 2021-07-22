import { ApolloClient } from "@apollo/client/core";
import { createHttpLink } from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";

const httpLink = createHttpLink({
  url: 'http://localhost:8080/gql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

function getApolloClient() {
  return apolloClient;
}

export default getApolloClient;