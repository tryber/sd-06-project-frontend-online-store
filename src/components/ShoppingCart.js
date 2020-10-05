import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: this.props.cartList,
    };
  }
  
  render() {
    const { productList } = this.state;
    if (productList.length === 0)
    return (
      <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
    );

    return (
      <div>
        <span>Empty List</span>
      </div>
    );
  }
}

export default ShoppingCart;
export { ShoppingCart as addItem };
