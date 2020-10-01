import React, { Component } from 'react';

import ListCategory from '../../components/ListCategory';
import ProductList from '../../components/ProductList';

import SearchEngine from '../../components/SearchEngine';

import './styles.css';

import * as api from '../../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      foundItems: false,
      queryInput: '',
      categoryInput: '',
      products: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(query) {
    this.setState({ queryInput: query });
  }

  async handleClick(searchEng) {
    const { queryInput } = searchEng;
    const { categoryInput } = this.state;
    this.setState({ foundItems: true }, async () => {
      // Fetch products from API
      const productsFound = await api.getProductsFromCategoryAndQuery(
        categoryInput,
        queryInput
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
    const { queryInput, foundItems, products } = this.state;
    return (
      <div className="home-page">
        <ListCategory />
        <SearchEngine
          sendQueryInputToHome={ this.handleChangeInput }
          onClick={ this.handleClick }
        />
        <ProductList
          queryInput={ queryInput }
          foundItems={ foundItems }
          products={ products }
        />
      </div>
    );
  }
}

export default Home;
