import React from 'react';

class ProductList extends React.Component {
  render () {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
        </h1>
      </div>
    );
  }
}

export default ProductList;