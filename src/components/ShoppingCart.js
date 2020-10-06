import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  }

  decreaseQuantity() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity - 1,
    });
  }

  renderCart() {
    const { shoppingCart } = this.props;
    const { quantity } = this.state;
    if (!shoppingCart.length) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      shoppingCart.map((item) => (
        <div key={ this.id }>
          <div className="shoppingcart-content">
            <div
              key={ this.id }
              data-testid="shopping-cart-product-img"
              className="detail-img-div"
            >
              <img
                src={ item.product.thumbnail }
                alt={ `Imagem do produto ${item.product.title}` }
              />
            </div>
            <div className="right-content" data-testid="shopping-cart-product-name">
              <h3>{item.product.title}</h3>
              <div className="quantity-div">
                <p data-testid="shopping-cart-product-quantity">
                  {`Qtd: ${quantity}`}
                </p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ this.increaseQuantity }
                >
                  +
                </button>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ this.decreaseQuantity }
                >
                  -
                </button>
              </div>
              <div className="price-div">
                <p className="detail-price">
                  {`Preço: ${item.product.price}`}
                </p>
              </div>
            </div>
          </div>
          <hr className="hr" />
        </div>
      ))
    );
  }

  render() {
    return (
      <div className="shoppingcart-container">
        {this.renderCart()}
        <div className="details-backarrow-div">
          <Link to="/">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/0/340.svg"
              alt="back-arrow"
              width="50"
            />
          </Link>
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = { shoppingCart: PropTypes.string.isRequired };
export default ShoppingCart;
