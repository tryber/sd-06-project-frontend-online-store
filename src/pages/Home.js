import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductCard from '../components/ProductCard';

class Home extends Component {
  render() {
    const {
      handleInputSearchChange,
      handleClickSearchButton,
      handleListCategories,
      handleAddCart,
    } = this.props;
    const { products, cartList, isFail } = this.props;

    return (
      <main>
        <label
          htmlFor="input-message"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            name="query"
            data-testid="query-input"
            onChange={ handleInputSearchChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClickSearchButton }
        >
          BUSCAR
        </button>
        <div>
          <ListCategories handleListCategories={ handleListCategories } />
        </div>
        <ShoppingCartButton />
        <ProductCard
          products={ products }
          cartList={ cartList }
          isFail={ isFail }
          handleAddCart={ handleAddCart }
        />
      </main>
    );
  }
}

Home.propTypes = {
  handleInputSearchChange: PropTypes.func,
  handleClickSearchButton: PropTypes.func,
  handleListCategories: PropTypes.func,
  handleAddCart: PropTypes.func,
  products: PropTypes.object,
  cartList: PropTypes.array,
  isFail: PropTypes.bool,
}.isRequired;

export default Home;
