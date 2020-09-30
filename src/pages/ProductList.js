import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart.png';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } height="50" alt="carrinho de compras" />
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default ProductList;
