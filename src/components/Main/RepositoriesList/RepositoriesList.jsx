import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import propTypes from 'prop-types';
import styles from './RepositoriesList.scss';

const reposQuery = gql`
  query Myrepositories($first: Int!, $login: String!) {
    user(login: $login) {
      id,
      repositories(first: $first, isLocked: false, orderBy: {field: CREATED_AT, direction: ASC}) {
        edges {
          node {
            id,
            name,
            createdAt
          }
        }
      },
    }
  }
`;

class RepositoriesList extends Component {
  handleMore = (data, fetchMore, current) => {
    const { login } = this.props;
    console.log(login);
    fetchMore({
      variables: { first: current + 10, login },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(fetchMoreResult);
        console.log(prev);
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign(prev, fetchMoreResult);
      },
    });
  };

  render() {
    const { login } = this.props;
    return (
      <Query query={reposQuery} variables={{ first: 10, login }}>
        {({
          data, loading, error, fetchMore,
        }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;
          const current = data.user.repositories.edges.length;
          return (
            <div>
              <ul>
                <h2>{`First ${current} repositories`}</h2>
                {data.user.repositories.edges.map(({ node }) => (
                  <li key={node.name}>{node.name}</li>
                ))}
              </ul>

              <button className={styles.button___load_more} type="button" onClick={() => this.handleMore(data, fetchMore, current)}>
                Load more
              </button>
            </div>
          );
        }}
      </Query>
    );
  }
}

RepositoriesList.defaultProps = {
  login: 'eneko7',
};

RepositoriesList.propTypes = {
  login: propTypes.string,
};

export default RepositoriesList;
