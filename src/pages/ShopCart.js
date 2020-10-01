import React from 'react';
import { PropTypes } from 'prop-types';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: this.props.location.state,
    }
  }
  render() {
    const empty = 0;
    const { cartItems } = this.state;

    if (this.state.cartItems.length > empty) {
      return <div>
        <p data-testid="shopping-cart-product-quantity">
          {cartItems.length}
        </p>
        { cartItems.map((product) => (
          <p data-testid="shopping-cart-product-name" key={ product.id }>
            {product.title}
          </p>
          )
        )}
      </div>
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}

ShopCart.propTypes = {

}

export default ShopCart;
