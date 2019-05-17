/* eslint-disable react/prop-types */
import React from 'react';
import withFirebaseAuth from 'react-auth-firebase';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Main from '../../Main';
import firebase from './firebase';
import styles from './AuthGit.scss';

const AuthGit = ({
  signInWithGithub, githubAccessToken, user,
}) => {
  if (user) {
    localStorage.setItem('token', githubAccessToken);
    const httpLink = {
      uri: 'https://api.github.com/graphql',
      headers: {
        authorization: `Bearer ${githubAccessToken}`,
      },
    };
    const client = new ApolloClient({
      link: new HttpLink(httpLink),
      cache: new InMemoryCache(),
    });
    return (
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    );
  }
  return (
    <main className={styles.main}>
      <button className={styles.buttonAuth} type="button" onClick={signInWithGithub}>Signin with Github</button>
    </main>
  );
};

const authConfig = {
  github: {
    // redirect: true,
    returnAccessToken: true,
    saveUserInDatabase: true,
  },
};

export default withFirebaseAuth(AuthGit, firebase, authConfig);
