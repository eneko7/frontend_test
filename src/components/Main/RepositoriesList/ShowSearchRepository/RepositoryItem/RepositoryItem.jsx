/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import AddStar from '../../AddStar';
import RemoveStar from '../../RemoveStar';
import styles from './RepositoryItem.scss';

const RepositoryItem = ({ node, refetch }) => (
  <li key={node.name} className={styles.repositoryItem}>
    <span className={styles.lineMain}>
      <span className={styles.titleInfo}>{node.name}</span>
      {node.viewerHasStarred
        ? <RemoveStar id={node.id} refetch={refetch} />
        : <AddStar id={node.id} refetch={refetch} />
      }
    </span>
    <span className={styles.line}>
      <span className={styles.titleInfo}>ID: </span>
      <span className={styles.infoId}>{node.id}</span>
    </span>
    <span className={styles.line}>
      <span className={styles.titleInfo}>Description: </span>
      <span className={styles.info}>{node.description}</span>
    </span>
    <span className={styles.line}>
      <span className={styles.titleInfo}>Primary Language: </span>
      <span
        className={styles.titleInfo}
        style={{ color: node.primaryLanguage !== null ? node.primaryLanguage.color : '#0aaee4' }}
      >
        {node.primaryLanguage !== null ? node.primaryLanguage.name : 'empty language'}
      </span>
    </span>
    <span className={styles.line}>
      <span className={styles.titleInfo}>Created: </span>
      <span className={styles.info}>{node.createdAt}</span>
    </span>
  </li>
);

RepositoryItem.propTypes = {
  refetch: propTypes.func.isRequired,
};

export default RepositoryItem;
