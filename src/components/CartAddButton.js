import React from 'react';
import { Link } from 'react-router-dom';

class CartAddButton extends React.Component {
  render() {
    return (
      <div>
        <button 
          data-testid="product-detail-add-to-cart">
            Adicionar Botão
        </button>
      </div>
  )}
};

export default CartAddButton;
