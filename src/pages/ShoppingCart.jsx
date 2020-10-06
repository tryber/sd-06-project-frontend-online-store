import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.increaseButton = this.increaseButton.bind(this);
    this.decreaseButton = this.decreaseButton.bind(this);
    this.addShoppingCart = this.addShoppingCart.bind(this);
  }

  // emptyCart() {
  //   return (
  //     <p data-testid="shopping-cart-empty-message">
  //       Seu carrinho está vazio
  //     </p>
  //   );
  // }

  increaseButton() {
    return (
      <button type="button" data-testid="product-increase-quantity">
        +++
      </button>
    );
  }

  decreaseButton() {
    return (
      <button type="button" data-testid="product-decreate-quantity">
        --
      </button>
    );
  }

    addShoppingCart(cartItem, cartCount) {

      if (cartItem.length === 0) {
        return (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        );
      }
        return cartItem.map((product) => (
          <div key={ product.id }>
            <h3
              data-testid="shopping-cart-product-name"
            >
              {product.name}
            </h3>
            <h3
              data-testid="shopping-cart-product-quantity"
            >
              { cartCount }
            </h3>
          </div>
        ));
    }
  
    render() {
      const { location } = this.props;
      const { state } = location;
      const { cartItem, cartCount } = state;
  
      return (
        <div>
          <p>
            {this.addShoppingCart(cartItem, cartCount)}
            </p>
          {this.increaseButton()}
        {this.decreaseButton()}
        <button>
      <Link to={'/'} >Página inicial</Link>
      </button>
        </div>
      );
    }
  }
  
  ShoppingCart.propTypes = {
    cartItem: PropTypes.arrayOf.isRequired,
    cartCount: PropTypes.string.isRequired,
  };

export default ShoppingCart;
      