import React, { Component } from 'react';
import CartButton from '../components/CartButton';

class Header extends Component {
  render() {
    return (
      <div className="elements">
        <div id="box">
          <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div id="cart-button">
          <CartButton />
        </div>
      </div>
    );
  }
}
export default Header;
