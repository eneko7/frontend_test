import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Root from './components/Root';

const token = '5a55f030baec427060667a12edc420290f195653';

const httpLink = {
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`,
  },
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.querySelector('#app'),
);
