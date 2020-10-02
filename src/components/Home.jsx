import React from 'react';
import { Link } from 'react-router-dom';

import * as api from '../services/api';
import Search from './Search';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      productsFiltered: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async fetchProductsFromQueryAndCategory() {
    const { searchQuery } = this.state;

    const response = await api.getProductsFromCategoryAndQuery('', searchQuery);
    this.setState({
      productsFiltered: response.results,
    });
  }

  handleChange(query) {
    const { searchQuery } = this.state;

    this.setState({
      searchQuery: query,
    });

    this.fetchProductsFromQueryAndCategory(searchQuery);
  }

  render() {
    const { productsFiltered } = this.state;

    return (
      <div>
        <Search
          handleChange={ this.handleChange }
          fetchProductsFromQueryAndCategory={ this.fetchProductsFromQueryAndCategory }
        />
        <div>
          <Link data-testid="shopping-cart-button" to="/cart">Shopping Cart</Link>
        </div>
        <div>
          <CategoryList />
        </div>
        <div>
          { productsFiltered.length > 1 ? productsFiltered.map((product) => (
            <ProductList
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ product.price }
            />)) : 'Nenhum produto foi encontrado'}
        </div>
      </div>
    );
  }
}

export default Home;
