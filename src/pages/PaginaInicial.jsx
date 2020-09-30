import React from 'react';
import CategoryList from '../functions/list_categories'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-label">
          <input type="text" id="search-label" />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <CategoryList />
      </div>
    );
  }
}

export default HomePage;
