import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Root from './components/Root';
import RootWithoutToken from './components/RootWithoutToken';

const token = localStorage.getItem('token');

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
  token
    ? (
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    )
    : <RootWithoutToken />,
  document.querySelector('#app'),
);
