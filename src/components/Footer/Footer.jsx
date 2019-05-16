import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.footerTask}>Frontend Task</span>
    <span className={styles.footerCopyright}>
      Copyright ©
      {(new Date()).getFullYear()}
    </span>
  </footer>
);

export default Footer;
