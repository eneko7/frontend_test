/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import styles from './AddStar.scss';

const addStarquery = gql`
  mutation AddStar($repoid:ID!){
    addStar(input:{starrableId:$repoid}){
      starrable{
        stargazers{
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

class AddStar extends Component {
  render() {
    const { id, refetch } = this.props;
    return (
      <Mutation mutation={addStarquery}>

        {(addStar, { loading, error }) => (
          <div>
            <button
              type="button"
              className={styles.star}
              onClick={() => {
                addStar({ variables: { repoid: id } })
                  .then(() => {
                    refetch();
                  });
              }}
            />

            {loading && <p>add...</p>}
            {error && <p>{error.message}</p>}
          </div>
        )}

      </Mutation>
    );
  }
}

export default AddStar;
