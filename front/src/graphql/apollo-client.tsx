import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://dental-backend-anandochir.vercel.app",
  cache: new InMemoryCache(),
});
