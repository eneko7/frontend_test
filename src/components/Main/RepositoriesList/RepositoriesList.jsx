import React, { Component } from 'react';
import { Query } from 'react-apollo';
import propTypes from 'prop-types';
import ShowSearchRepository from './ShowSearchRepository';
import repositoriesQuery from './queries';

class RepositoriesList extends Component {
  handleMore = (data, fetchMore, current) => {
    const { login } = this.props;
    fetchMore({
      variables: { first: current + 6, login },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return { ...prev, ...fetchMoreResult };
      },
    });
  };

  render() {
    const { login } = this.props;
    return (
      <Query query={repositoriesQuery} variables={{ first: 6, login }}>
        {({
          data, loading, error, fetchMore, refetch,
        }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>{error.message}</p>;
          const current = data.user.repositories.edges.length;
          const all = data.user.repositories.totalCount;
          const user = {
            avatarUrl: data.user.avatarUrl,
            name: data.user.name,
            login: data.user.login,
            email: data.user.email,
            url: data.user.url,
          };
          return (
            <ShowSearchRepository
              refetch={refetch}
              all={all}
              current={current}
              data={data}
              user={user}
              fetchMore={fetchMore}
              onClick={this.handleMore}
              // handleMore={() => this.handleMore(data, fetchMore, current)}
            />
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
