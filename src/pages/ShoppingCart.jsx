import React from 'react';
import QuantifyProducts from "../components/QuantifyProducts";

class ShoppingCart extends React.Component {
  render() {
    if (this.props.location.cartTotalItens === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div >
      )
    }
    const { cartProductList } = this.props.location;
    return (
      <div>
        {cartProductList.map((element) => (
          <div key={ element.id }>
            <p data-testid="shopping-cart-product-name">{ element.title }</p>
            <div data-testid="shopping-cart-product-quantity">
              <QuantifyProducts max={ element.available_quantity }/>
            </div>
          </div>
        )) }
      </div>
    )
  }
}

export default ShoppingCart;
