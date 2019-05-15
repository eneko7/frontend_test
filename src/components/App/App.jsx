import React from 'react';
import styles from './App.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

const App = () => (
  <div className={styles.main_container}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
