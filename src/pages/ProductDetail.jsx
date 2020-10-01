import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  constructor() {
    super();
    this.handleProductQuantityAltering = this.handleProductQuantityAltering.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  addItemToCart(product, id, quantity) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemAlreadyInCart = cartItems.findIndex(({ product: item }) => item.id === id);
    if (cartItems[itemAlreadyInCart]) {
      cartItems[itemAlreadyInCart].quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  handleProductQuantityAltering({ target }) {
    let { quantity } = this.state;
    const { name } = target;
    if (name === 'plus') {
      quantity += 1;
    } else {
      quantity = quantity === 1 ? 1 : quantity - 1;
    }
    this.setState({ quantity });
  }

  render() {
    const { products } = this.props.location.state;
    const { id } = this.props.match.params;
    const product = products.find((productItem) => id === productItem.id);
    const { quantity } = this.state;
    return (
      <>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">cart</Link>
        <div data-testid="product-detail-name">
          <h2>{product.title}</h2>
          <span>
            R$
            {' '}
            {product.price}
          </span>
          <img src={ product.thumbnail } alt="imagem do produto" />
          <div>
            <p>Adicionar ao carrinho</p>
            <div>
              <button
                type="button"
                onClick={ this.handleProductQuantityAltering }
                name="minus"
              >
                -

              </button>
              <input type="number" min={ 1 } step={ 1 } value={ quantity } />
              <button
                type="button"
                onClick={ this.handleProductQuantityAltering }
                name="plus"
              >
                +

              </button>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => this.addItemToCart(product, id, quantity) }
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string,
  }) }).isRequired,
  location: PropTypes.shape({ state: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })) }) }).isRequired,
};

export default ProductDetail;
