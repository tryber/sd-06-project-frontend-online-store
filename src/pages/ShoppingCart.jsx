import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    if (this.props.location.cartTotalItens === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div >
      )
    } else {
      const { cartProductList } = this.props.location;
      return (
        <div>
          {cartProductList.map((element) => (
            <div key={element.id}>
              <p data-testid="shopping-cart-product-name">{ element.title }</p>
              <p data-testid="shopping-cart-product-quantity">{ this.props.location.cartTotalItens }</p>
            </div>
          )) }
        </div>
      )
    }
  }
}

export default ShoppingCart;
