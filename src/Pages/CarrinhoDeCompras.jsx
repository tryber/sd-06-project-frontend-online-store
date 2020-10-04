import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CarrinhoDeCompras extends Component {
  render() {
    // console.log(this.props.location.state.produtosNoCarrinho)
    const { produtosNoCarrinho } = this.props.location.state;
    return (
      // <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      <div>
        {produtosNoCarrinho.map(produto => {
          return <div>
            <p data-testid="shopping-cart-product-name">{ produto.title }</p>
            <img src={ produto.thumbnail } alt={ produto.title } />
            <p>{ produto.price }</p>
            <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
          </div>
        }) }
        <Link to='/'>Voltar</Link>
      </div>
    )
  }
}

export default CarrinhoDeCompras;
