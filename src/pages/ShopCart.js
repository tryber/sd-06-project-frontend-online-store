import React from 'react';
import { PropTypes } from 'prop-types';

class ShopCart extends React.Component {
  render() {
    const empty = 0;
    const { location: { state: cartList } } = this.props;


    if (Object.values(cartList).length > empty) {
      return (
        <div>

          { Object.values(cartList).map((product) => (
            <div className="cartItem-container" key={ product.id }>
              <p data-testid="shopping-cart-product-name">
                {product.title}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                {product.quantity}
              </p>
            </div>


          ))}
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default ShopCart;
