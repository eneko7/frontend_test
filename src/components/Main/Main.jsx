import React, { Component } from 'react';
import RepositoriesList from './RepositoriesList';
import styles from './Main.scss';

class Main extends Component {
  searchRef = React.createRef();

  state = {
    login: 'eneko7',
  };

  searchAction = (event) => {
    event.preventDefault();
    this.setState({
      login: this.searchRef.current.value,
    });
  };

  render() {
    const { login } = this.state;
    return (
      <main className={styles.main}>
        <form onSubmit={this.searchAction}>
          <span className={styles.label_search}>Git nickname</span>
          <input className={styles.input_search} type="text" ref={this.searchRef} name="search" placeholder="enter user nickname" />
          <button className={styles.button_search} type="submit">Search</button>
        </form>
        <RepositoriesList login={login} />
      </main>
    );
  }
}

export default Main;
