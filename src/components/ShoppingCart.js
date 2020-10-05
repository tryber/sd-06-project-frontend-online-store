import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      empty: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    const obj = {
    };
    const array = [];
    this.setState({
      empty: false,
      product: array,
    });
  }

  renderCart() {
    const { shoppingCart } = this.props;
    console.log(shoppingCart[0])
    if (shoppingCart.length === 0 ) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      shoppingCart.map((item) => (
        <span key={ this.id } data-testid="shopping-cart-product-name">
          {item.title}
          <img
            src={item.thumbnail}
            alt={ `Imagem do produto ${item.title}` }
          />
          <span>
            {item.price}
          </span>
        </span>
      ))
    );
  }

  render() {
    return (
      <div>
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
