import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { removeStarQuery } from '../../../../utils/mutatinos';
import styles from './RemoveStar.scss';

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
