import React, { Component } from 'react';

class SearchProduct extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria</h1>
      </form>
    );
  }
}

export default SearchProduct;
