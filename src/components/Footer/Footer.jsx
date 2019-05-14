import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.footer_films}>Frontend Task</span>
    <span className={styles.footer_copyright}>
      Copyright ©
      {(new Date()).getFullYear()}
    </span>
  </footer>
);

export default Footer;
