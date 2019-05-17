/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import RepositoryItem from './RepositoryItem';
import styles from './ShowSearchRepository.scss';

class ShowSearchRepository extends Component {
  renderRepository = ({ node }) => {
    const { refetch } = this.props;
    return (
      <RepositoryItem key={node.name} node={node} refetch={refetch} />
    );
  };

  render() {
    const {
      all, current, data, handleMore, user,
    } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.account}>
          <div className={styles.accountInfo}>
            <img src={user.avatarUrl} alt={user.login} className={styles.avatar} />
            <hr />
            <span className={styles.line}>
              <span className={styles.titleInfo}>Login: </span>
              <span className={styles.info}>{user.login}</span>
            </span>
            <span className={styles.line}>
              <span className={styles.titleInfo}>Name: </span>
              <span className={styles.info}>{user.name}</span>
            </span>
            <span className={styles.line}>
              <span className={styles.titleInfo}>Link: </span>
              <span className={styles.info}><a target="_blank" rel="noopener noreferrer" href={user.url}>{user.url}</a></span>
            </span>
          </div>
          <div className={styles.wrapperRepos}>
            <span className={styles.counterRepos}>{`First ${current} repositories out of ${all}`}</span>
            <ul className={styles.listRepos}>
              {data.user.repositories.edges.map(this.renderRepository)}
            </ul>
            <button className={styles.buttonLoadMore} type="button" onClick={handleMore} style={{ display: all === current ? 'none' : 'block' }}>
              show more
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ShowSearchRepository.propTypes = {
  all: propTypes.number.isRequired,
  current: propTypes.number.isRequired,
  handleMore: propTypes.func.isRequired,
  user: propTypes.objectOf(propTypes.string).isRequired,
  refetch: propTypes.func.isRequired,
};

export default ShowSearchRepository;
