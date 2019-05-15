/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import styles from './RemoveStar.scss';

const removeStarquery = gql`
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
  render() {
    const { id, refetch } = this.props;
    return (
      <Mutation mutation={removeStarquery}>

        {(removeStar, { loading, error }) => (
          <div>
            <button
              type="button"
              className={styles.star}
              onClick={() => {
                removeStar({ variables: { repoid: id } })
                  .then(() => {
                    refetch();
                  });
              }}
            />

            {loading && <p>remove...</p>}
            {error && <p>{error.message}</p>}
          </div>
        )}

      </Mutation>
    );
  }
}

export default RemoveStar;
