import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      empty: true,
      product: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    const { location: { state: {
      title, thumbnail, price, id,
    } } } = this.props;
    const obj = {
      title: title,
      thumbnail: thumbnail,
      price: price,
    };
    const array = [];
    array.push(obj);
    console.log(obj);
    this.setState({
      empty: false,
      product: array,
    });
  }

  renderCart() {
    const { product } = this.state;
    console.log(product);
    if (product.length === 0 ) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      product.map((item) => (
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
