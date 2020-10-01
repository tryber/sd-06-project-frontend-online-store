import React from 'react';
import { Link } from 'react-router-dom';


class ShoppingCart extends React.Component {
  
  render() {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </section>
    )
  }

}

export default ShoppingCart;
