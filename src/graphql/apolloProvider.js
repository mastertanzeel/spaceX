import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "https://spacexdata.herokuapp.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false, //Removes unwanted __typename.
  }),
});

// HOC apollo provider.
export default function apolloProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
