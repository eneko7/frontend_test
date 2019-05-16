/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import AddStar from '../AddStar';
import RemoveStar from '../RemoveStar';
import styles from './ShowSearchRepository.scss';

const ShowSearchRepository = ({
  all, current, data, handleMore, user, refetch,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.account}>
      <div className={styles.account_info}>
        <img src={user.avatarUrl} alt={user.login} className={styles.avatar} />
        <hr />
        <span className={styles.line}>
          <span className={styles.title_info}>Login: </span>
          <span className={styles.info}>{user.login}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.title_info}>Name: </span>
          <span className={styles.info}>{user.name}</span>
        </span>
        <span className={styles.line}>
          <span className={styles.title_info}>Link: </span>
          <span className={styles.info}><a target="_blank" rel="noopener noreferrer" href={user.url}>{user.url}</a></span>
        </span>
      </div>
      <div className={styles.wrapper_repos}>
        <span className={styles.counter_repos}>{`First ${current} repositories out of ${all}`}</span>
        <ul className={styles.list_repos}>
          {data.user.repositories.edges.map(({ node }) => (
            <li key={node.name} className={styles.repository_item}>
              <span className={styles.lineMain}>
                <span className={styles.title_info}>{node.name}</span>
                {node.viewerHasStarred
                  ? <RemoveStar id={node.id} refetch={refetch} />
                  : <AddStar id={node.id} refetch={refetch} />
                }
              </span>
              <span className={styles.line}>
                <span className={styles.title_info}>ID: </span>
                <span className={styles.info_id}>{node.id}</span>
              </span>
              <span className={styles.line}>
                <span className={styles.title_info}>Description: </span>
                <span className={styles.info}>{node.description}</span>
              </span>
              <span className={styles.line}>
                <span className={styles.title_info}>Primary Language: </span>
                <span
                  className={styles.title_info}
                  style={{ color: node.primaryLanguage !== null ? node.primaryLanguage.color : '#0aaee4' }}
                >
                  {node.primaryLanguage !== null ? node.primaryLanguage.name : 'empty language'}
                </span>
              </span>
              <span className={styles.line}>
                <span className={styles.title_info}>Created: </span>
                <span className={styles.info}>{node.createdAt}</span>
              </span>
            </li>
          ))}
        </ul>
        <button className={styles.button___load_more} type="button" onClick={handleMore} style={{ display: all === current ? 'none' : 'block' }}>
          show more
        </button>
      </div>
    </div>
  </div>
);

ShowSearchRepository.propTypes = {
  all: propTypes.number.isRequired,
  current: propTypes.number.isRequired,
  handleMore: propTypes.func.isRequired,
  user: propTypes.objectOf(propTypes.string).isRequired,
  refetch: propTypes.func.isRequired,
};

export default ShowSearchRepository;
