import React, { Component } from 'react';
import propTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import styles from './RemoveStar.scss';

const removeStarQuery = gql`
  mutation RemoveStar($repoid:ID!){
    removeStar(input:{starrableId:$repoid}){
      starrable{
        stargazers{
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

class RemoveStar extends Component {
  removeHandler = (removeStar) => {
    const { id, refetch } = this.props;
    removeStar({ variables: { repoid: id } })
      .then(() => {
        refetch();
      });
  };

  render() {
    return (
      <Mutation mutation={removeStarQuery}>
        {(removeStar, { loading, error }) => (
          <div>
            <button
              type="button"
              className={styles.star}
              onClick={() => this.removeHandler(removeStar)}
            />
            {loading && <p>remove...</p>}
            {error && <p>{error.message}</p>}
          </div>
        )}
      </Mutation>
    );
  }
}

RemoveStar.propTypes = {
  id: propTypes.string.isRequired,
  refetch: propTypes.func.isRequired,
};

export default RemoveStar;
