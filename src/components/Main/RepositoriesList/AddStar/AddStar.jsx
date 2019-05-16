import React from 'react';
import propTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import styles from './AddStar.scss';

const addStarQuery = gql`
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

const AddStar = ({ id, refetch }) => (
  <Mutation mutation={addStarQuery}>
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

AddStar.propTypes = {
  id: propTypes.string.isRequired,
  refetch: propTypes.func.isRequired,
};

export default AddStar;
