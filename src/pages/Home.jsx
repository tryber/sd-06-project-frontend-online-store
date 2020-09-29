import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <label htmlFor="search-input" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.
        <input id="search-input" />
      </label>
    );
  }
}

export default Home;
