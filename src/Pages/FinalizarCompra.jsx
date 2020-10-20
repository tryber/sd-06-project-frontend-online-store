import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormadePagamento from '../Components/FormadePagamento';
import InfoComprador from '../Components/InfoComprador';

// eslint-disable-next-line react/prefer-stateless-function
class FinalizarCompra extends Component {
  render() {
    // Pra acessar o carrinho com produtos, vindo de Lista de produtos > Carrinho > Finalizar
    const { produtosNoCarrinho } = this.props.location.state;
    return (
      <div>
        {/* O mesmo código que tá no Carrinho, pra fazer aparecer os produtos */}
        { produtosNoCarrinho.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          produtosNoCarrinho.map((produto) => {
            return (
              <div>
                <p data-testid="shopping-cart-product-name">{ produto.title }</p>
                <img src={ produto.thumbnail } alt={ produto.title } />
                <p>{ produto.price }</p>
                <p data-testid="shopping-cart-product-quantity">
                  Quantidade: 1
                </p>
              </div>
            );
          })
        )}
        <InfoComprador />
        <br />
        <FormadePagamento />
        <br />
        <Link to="/">
          <button type="submit" onClick={ this.confirmBuy }>
            Confirmar
          </button>
        </Link>
      </div>
    );
  }
}

// FinalizarCompra.propTypes = {
//   location: PropTypes..isRequired,
// };

export default FinalizarCompra;
