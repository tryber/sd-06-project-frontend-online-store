import React from 'react';

class CartAddButton extends React.Component {


  render() {
    const { handleAddToCartButton } = this.props;
    return (
      <div>
        <button 
          data-testid="product-detail-add-to-cart"
          onClick={ handleAddToCartButton }
          >
            Adicionar ao Carrinho
        </button>
      </div>
    )}
};

export default CartAddButton;
