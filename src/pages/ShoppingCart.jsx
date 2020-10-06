import React from 'react';
import Cartlist from '../components/CartProductList';


class ShoppingCart extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Cartlist />
        <section>
          <p>Total: </p>
          <button>Finalizar Compra</button>
        </section>
      </section>
    )
  }

}

export default ShoppingCart;
