import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://dental-clinic-back.vercel.app/",
  cache: new InMemoryCache(),
});
