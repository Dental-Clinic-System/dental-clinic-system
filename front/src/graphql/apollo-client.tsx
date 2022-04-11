import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://dental-backend-bilguun1324.vercel.app/",
  cache: new InMemoryCache(),
});
