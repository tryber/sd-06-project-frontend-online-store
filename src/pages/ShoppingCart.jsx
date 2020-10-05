import React from 'react';
import { Link } from "react-router-dom";

import QuantifyProducts from "../components/QuantifyProducts";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <QuantifyProducts />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}

export default ShoppingCart;
