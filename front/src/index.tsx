import App from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Router>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Router>
  </StrictMode>,
);