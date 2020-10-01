import React, { Component } from 'react';

import ProductsList from './ProductsList';
import ProductList from './productList';
import ShoppingCartButton from './btn_cart';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      isSearching: false,
      products: [],
    };
  }

  onSearchTextChange(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const { value } = searchInput;
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
          <form>
            <input id="search-input" data-testid="query-input" placeholder="Search..." />
            <button
              data-testid="query-button"
              onClick={ this.onSearchTextChange }
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Não faria mais sentido chamar CategoriesList? */}
          <ProductList />
          {/*  */}

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


export default SearchBar;
