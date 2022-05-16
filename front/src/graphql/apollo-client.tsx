import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://dental-five.vercel.app",
  cache: new InMemoryCache(),
});
