import React from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

class EmptyProductList extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api}</p>
        <input />
        <button><Link data-testid="shopping-cart-button" to="/shopping-cart">Seu carrinho está vazio</Link></button>
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default EmptyProductList;