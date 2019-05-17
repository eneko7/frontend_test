import React from 'react';
import styles from './AppLogin.scss';
import Header from '../Header';
import AuthGit from './AuthGit';
import Footer from '../Footer';

const App = () => (
  <div className={styles.mainContainer}>
    <Header />
    <AuthGit />
    <Footer />
  </div>
);

export default App;
