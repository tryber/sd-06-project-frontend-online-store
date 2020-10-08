import React from 'react';

class ItemCheckOut extends React.Component {
  render () {
    const { id, title, price, quantity } = this.props.product;

    return (
      <div key={id} className="item-shopping-cart">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{`Un. R$ ${(price).toFixed(2)}`}</p>
        <p>{`Total R$ ${(price * quantity).toFixed(2)}`}</p>
        <div data-testid="shopping-cart-product-quantity">{quantity}</div>
      </div>
    );
  }
}

export default ItemCheckOut;
