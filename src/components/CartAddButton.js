import React from 'react';
import { Link } from 'react-router-dom';

class CartAddButton extends React.Component {


  render() {
    const { handleAddToCartButton } = this.props;

    return (
      <div>
        <button 
          data-testid="product-detail-add-to-cart"
          onClick={ handleAddToCartButton }
          >
            Adicionar Botão
        </button>
      </div>
  )}
};

export default CartAddButton;
