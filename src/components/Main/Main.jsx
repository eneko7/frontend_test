import React, { Component } from 'react';
import RepositoriesList from './RepositoriesList';
import styles from './Main.scss';

class Main extends Component {
  // searchRef = React.createRef();
  state = {
    login: 'eneko7',
  };

  updateSearchName = (event) => {
    if (event.target.value === '') {
      this.setState({
        login: 'eneko7',
      });
    } else {
      this.setState({
        login: event.target.value,
      });
    }
  };

  searchAction = (event) => {
    event.preventDefault();
  };

  render() {
    const { login } = this.state;
    return (
      <main className={styles.main}>
        <form onSubmit={this.searchAction}>
          <span className={styles.labelSearch}>Git nickname</span>
          <input className={styles.inputSearch} type="text" onChange={this.updateSearchName} name="search" placeholder="enter user nickname" />
          <button className={styles.buttonSearch} type="submit">Search</button>
        </form>
        <RepositoriesList login={login} />
      </main>
    );
  }
}

export default Main;
