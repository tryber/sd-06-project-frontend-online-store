import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(prod) {
    const { cart } = this.state;
    this.setState({ cart: [...cart, prod] });
  }

  render() {
    return (
      <div>
        <header>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link to="/shopping-cart">
            <button data-testid="shopping-cart-button" type="button">
              Cart
            </button>
          </Link>
        </header>
        <main>
          <ProductList onClick={ this.addToCart } />
        </main>
      </div>
    );
  }
}

export default HomePage;
