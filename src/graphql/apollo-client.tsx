import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://dental-backend.vercel.app/',
  cache: new InMemoryCache(),
});