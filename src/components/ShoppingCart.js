import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      productTitle: '',
      productThumbnail: '',
      productPrice: 0,
      products: '',
      cart: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.addItemsToCart();
  }

  handleClick() {
    const { location: { state: {
      title, thumbnail, price, id,
    } } } = this.props;
    this.setState({
      empty: false,
      productTitle: title,
      productThumbnail: thumbnail,
      productPrice: price,
    });
  }

  addItemsToCart() {
    if (!localStorage.cart) localStorage.cart = JSON.stringify([]);
    const cart = JSON.parse(localStorage.cart);
    this.setState({ cart });
  }

  renderCart() {
    const { cart } = this.state;
    if (cart.length === 0 ) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      cart.map((item) => (
        <span key={ this.id } data-testid="shopping-cart-product-name">
          {item.title}
        </span>
      ))
    );
  }

  render() {
    return (
      <div data-testid="product-detail-add-to-cart">
        <h1>{ this.state.productTitle }</h1>
        <img
          src={ this.state.productThumbnail }
          alt={ `Imagem do produto ${this.state.productTitle}` }
        />
        <h2>{this.state.productPrice}</h2>
        {this.renderCart()}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ShoppingCart;
