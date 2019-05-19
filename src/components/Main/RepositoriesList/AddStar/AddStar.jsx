import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { addStarQuery } from '../../../../utils/mutatinos';
import styles from './AddStar.scss';

class AddStar extends Component {
  addHandler = (addStar) => {
    const { id, refetch } = this.props;
    addStar({ variables: { repoid: id } })
      .then(() => {
        refetch();
      });
  };

  render() {
    return (
      <Mutation mutation={addStarQuery}>
        {(addStar, { loading, error }) => (
          <div>
            <button
              type="button"
              className={styles.star}
              onClick={() => this.addHandler(addStar)}
            />
            {loading && <p>add...</p>}
            {error && <p>{error.message}</p>}
          </div>
        )}
      </Mutation>
    );
  }
}

AddStar.propTypes = {
  id: propTypes.string.isRequired,
  refetch: propTypes.func.isRequired,
};

export default AddStar;
