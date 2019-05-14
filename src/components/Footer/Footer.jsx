import React from 'react';
import style from './Footer.scss';

const Footer = () => (
  <footer className={style.footer}>
    <span className={style.footer_films}>Frontend Task</span>
    <span className={style.footer_copyright}>
      Copyright ©
      {(new Date()).getFullYear()}
    </span>
  </footer>
);

export default Footer;
