import React from 'react';

class ShopList extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input type="text" />
        Digite algum termo de pesquisa ou escolha uma categoria.
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        <button type="button" data-testid="shopping-cart-button">Carrinho</button>
      </div>
    );
  }
}

export default ShopList;
