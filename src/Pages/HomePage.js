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
      <div className="homepage-container">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          // integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <header>
          <p hidden data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
        <main className="homepage-main">
          <nav className="homepage-nav">
            <h2>Projeto Agile Store</h2>
            <Link to="/shopping-cart">
              <button data-testid="shopping-cart-button" type="button">
                <i className="fa fa-shopping-cart" />
              </button>
            </Link>
          </nav>
          <ProductList onClick={ this.addToCart } />
        </main>
      </div>
    );
  }
}

export default HomePage;
