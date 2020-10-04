import React from 'react';

class CartProduct extends React.Component {
  render() {
    const { cartProduct } = this.props;
    const { title, thumbnail, cartQuantity } = cartProduct;

    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt="Foto do produto" />
        <p data-testid="shopping-cart-product-quantity">{cartQuantity}</p>
      </div>
    );
  }
}

export default CartProduct;
