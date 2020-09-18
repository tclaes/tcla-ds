import { writable } from 'svelte/store';

import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";

export const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://tcla.prismic.io/graphql",
  }),
  cache: new InMemoryCache()
});

export const bgColor = writable('white');