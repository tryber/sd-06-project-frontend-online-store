import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListCategory from '../components/ListCategory';
import ProductList from '../components/ProductList';

import SearchEngine from '../components/SearchEngine';
import ShoppingCartButton from '../components/ShoppingCartButton';

import '../styles/Home.css';

import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      foundItems: false,
      queryInput: '',
      categoryInput: '',
      products: [],
    };

    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickCategories = this.handleClickCategories.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(query) {
    this.setState({ queryInput: query });
  }

  handleClickCategories(categorySelected) {
    this.setState({ categoryInput: categorySelected }, async () => {
      const { categoryInput } = this.state;
      // Fetch products from API
      const productsFound = await api.getProductsFromCategoryAndQuery(
        categoryInput,
      );

      this.setState({
        products: productsFound.results,
      });
    });
  }

  async handleClickButton(searchEng) {
    const { queryInput } = searchEng;
    const { categoryInput } = this.state;
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
          products: [],
        });
      } else {
        this.setState({
          products: productsFound.results,
        });
      }
    });
  }

  render() {
    const {
      queryInput,
      foundItems,
      products, categoryInput } = this.state;
    const { updateCartListAndItens, cartProductItens, cartProductList } = this.props;
    return (
      <div className="home-page">
        <ListCategory onClick={ this.handleClickCategories } />
        <div className="right-column-container">
          <SearchEngine
            sendQueryInputToHome={ this.handleChangeInput }
            onClick={ this.handleClickButton }
          />
          <ShoppingCartButton
            cartProductItens={ cartProductItens }
            cartProductList={ cartProductList }
          />
          <div className="product-list-container">
            <ProductList
              queryInput={ queryInput }
              foundItems={ foundItems }
              products={ products }
              categoryInput={ categoryInput }
              updateCartListAndItens={ updateCartListAndItens }
            />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  cartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartProductItens: PropTypes.number.isRequired,
  updateCartListAndItens: PropTypes.func.isRequired,
};

export default Home;
