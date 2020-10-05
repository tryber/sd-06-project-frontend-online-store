import React, { Component } from 'react';
import InfoComprador from '../Components/InfoComprador';

class FinalizarCompra extends Component {
  render() {
    // Pra acessar o carrinho com produtos, vindo de Lista de produtos > Carrinho > Finalizar
    const { produtosNoCarrinho } = this.props.location.state;
    return (
      <div>
        <InfoComprador />
      </div>
    );
  }
}

export default FinalizarCompra;
