import React, { Component } from 'react';
import CartButton from './CartButton';

class Header extends Component {
  render() {
    return (
      <div className="elements">
        <div id="box">
          <input data-testid="query-input" type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <button data-testid="query-button" type="button">Procurar</button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <CartButton />
      </div>
    );
  }
}
export default Header;
