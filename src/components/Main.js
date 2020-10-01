import React, { Component } from 'react';

import ProductsList from './ProductsList';
import CategoriesList from './CategoriesList';
import ShoppingCartButton from './ShoppingCartButton';
import SearchBar from './SearchBar';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Main extends Component {
  constructor() {
    super();

    this.onSearchTextSubmit = this.onSearchTextSubmit.bind(this);

    this.state = {
      isSearching: false,
      products: [],
    };
  }

  onSearchTextSubmit(event) {
    event.preventDefault();
    const { value } = document.getElementById('search-input');
    this.setState({ isSearching: true }, async () => {
      const data = await getProductsFromCategoryAndQuery(value);
      const { results } = data;
      this.setState((prevState) => ({ products: [...results, ...prevState.products] }));
    });
  }

  render() {
    const { isSearching, products } = this.state;

    return (
      <div>
        <div>
          <SearchBar onSearchTextSubmit={ this.onSearchTextSubmit } />

          <CategoriesList />

          <ShoppingCartButton />
        </div>

        {(isSearching)
          ? <ProductsList products={ products } />
          : (
            (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          )}
      </div>
    );
  }
}


export default Main;
