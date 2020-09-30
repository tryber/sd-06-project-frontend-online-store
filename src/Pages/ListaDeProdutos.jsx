import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CampoBusca from '../Components/CampoBusca';
import carrinho from '../img/shopping-cart.png';
import '../App.css'

class ListaDeProdutos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CampoBusca />
        <Link to="/CarrinhoDeCompras" data-testid="shopping-cart-button"><img src={ carrinho } class="cart-img" /></Link>
      </div>
    );
  }
}

export default ListaDeProdutos;


