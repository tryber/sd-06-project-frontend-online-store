import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarrinhoDeCompras extends Component {
  render() {
    const { produtosNoCarrinho } = this.props.location.state;
    return (
      <div>
        {produtosNoCarrinho.length === 0 ? (
          <p data-testid= "shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          produtosNoCarrinho.map((produto) => {
            return (
              <div>
                <p data-testid="shopping-cart-product-name">{produto.title}</p>
                <img src={produto.thumbnail} alt={produto.title} />
                <p>{produto.price}</p>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade: 1
                </p>
              </div>
            );
          })
        )}
        <Link
          data-testid="checkout-products"
          to={{
            pathname: '/FinalizarCompra',
            state: {
              produtosNoCarrinho: produtosNoCarrinho,
            },
          }}
        >
          <button>Finalizar Compra</button>
        </Link>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
