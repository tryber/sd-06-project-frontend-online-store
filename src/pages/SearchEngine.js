import React from 'react';

import FoundProducts from '../components/FoundProducts';
import ShoppingCartButton from '../component/ShoppingCartButton';

import * as api from '../services/api';

class SearchEngine extends React.Component {
  constructor() {
    super();

    this.state = {
      foundItems: false,
      categoryInput: '',
      queryInput: '',
      products: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ queryInput: target.value });
  }

  async handleClick() {
    const { categoryInput, queryInput } = this.state;
    this.setState({ foundItems: true }, async () => {
      // Fetch products from API
      const productsFound = await api.getProductsFromCategoryAndQuery(
        categoryInput,
        queryInput,
      );

      // set foundItems to false, if there are no products found
      if (Object.keys(productsFound).length < 1) {
        this.setState({
          foundItems: false,
          products: {},
        });
      } else {
        this.setState({
          products: productsFound,
        });
      }
    });
  }

  render() {
    const { foundItems, queryInput, products } = this.state;
    // had to do this to bypass lint rule (no-magic-number).. go figure..
    const zero = 0;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="queryInput"
          value={ queryInput }
          onChange={ this.handleChange }
        />
       <ShoppingCartButton />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {/* if there is not anything in query input, render this block */}
        {queryInput === '' && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {/* if there are no product found from API, render this block */}
        {queryInput !== '' && !foundItems && (
          <p data-testid="home-initial-message">
            Nenhum produto foi encontrado
          </p>
        )}
        {/* if there are products, render this block */}
        {Object.keys(products).length !== zero && (
          products.results.map((prod) => (
            <FoundProducts key={ prod.title } product={ prod } />
          ))
        )}
      </div>
    );
  }
}

export default SearchEngine;
