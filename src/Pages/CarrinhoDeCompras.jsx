import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BotaoSomar from '../Components/BotaoSomar';
import BotaoSubtrair from '../Components/BotaoSubtrair';

class CarrinhoDeCompras extends Component {
  constructor() {
    super();

    this.state = {

    }

    this.handleSoma = this.handleSoma.bind(this);
    this.handleSubtracao = this.handleSubtracao.bind(this);
  }

  handleSoma(produto) {
    this.setState(state => ({
      [ produto.id ]: state[ produto.id ] + 1,
    }))
    // this.state[ produto.id ] += 1
    console.log(this.state)
  }

  handleSubtracao(produto) {
    this.setState(state => ({
      [ produto.id ]: state[ produto.id ] - 1,
    }))
    // this.state[ produto.id ] += 1
    console.log(this.state)
  }

  render() {
    const { produtosNoCarrinho } = this.props.location.state;
    return (
      <div>
        {produtosNoCarrinho.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
            produtosNoCarrinho.map((produto) => {
              // this.state[ produto.id ] = 1;
              if (!this.state[ produto.id ]) {
                this.setState({
                  [ produto.id ]: 1,
                })
              }
              return (
                <div>
                  <p data-testid="shopping-cart-product-name">{ produto.title }</p>
                  <img src={ produto.thumbnail } alt={ produto.title } />
                  <p>{ produto.price }</p>
                  <p data-testid="shopping-cart-product-quantity">{ this.state[ produto.id ] }</p>
                  <BotaoSubtrair produto={ produto } handleSoma={ this.handleSubtracao } />
                  <BotaoSomar produto={ produto } handleSoma={ this.handleSoma } />
                  {/* <button onClick={ this.onClick }>+</button> */ }
                </div>
              );
            })
          ) }
        <Link
          data-testid="checkout-products"
          to={ {
            pathname: '/FinalizarCompra',
            state: {
              produtosNoCarrinho: produtosNoCarrinho,
            },
          } }
        >
          <button>Finalizar Compra</button>
        </Link>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

export default CarrinhoDeCompras;
