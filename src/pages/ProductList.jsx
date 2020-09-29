import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render () {
    return (
      <div>
        <input type="text" name="" id=""></input>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link to="/pages/ShoppingCart" data-testid="shopping-cart-button">Shopping Cart</Link>
      </div>
    );
  }
}

export default ProductList;