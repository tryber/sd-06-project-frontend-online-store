import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItems extends Component {
  // constructor() {
  //   super();
  //   this.renderProduct = this.renderProduct.bind(this);
  //   this.setShoppingCart = this.setShoppingCart.bind(this);

  //   this.state = {
  //     productCartState: [],
  //   };
  // }

  //  setStateCart() {
  //     const { productCart, countProducts } = this.props;
  //     this.setState({
  //       productCartState: productCart,
  //     });
  //   }
  setShoppingCart(productCart, countProducts) {
    const arrayEmpty = 0;
    if (productCart.length > arrayEmpty) {
      return productCart.map((product) => (
        <div style={ { background: 'yellow' } } key={ product.id }>
          <h3
            style={ { color: 'red' } }
            data-testid="shopping-cart-product-name"
          >
            {product.name}
          </h3>
          <h3
            style={ { color: 'blue' } }
            data-testid="shopping-cart-product-quantity"
          >
            { countProducts }
          </h3>
        </div>
      ));
    }
    return (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>
    );
  }

  render() {
    const { productCart, countProducts } = this.props;

    return (
      <div>
        {this.setShoppingCart(productCart, countProducts)}
      </div>
    );
  }
}

CartItems.propTypes = {
  productCart: PropTypes.arrayOf.isRequired,
  countProducts: PropTypes.string.isRequired,
};

export default CartItems;
