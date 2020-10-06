import React from 'react';
import Cart from '../services/cart';

class Checkout extends React.Component {

  getTotalValue() {
    const productArray = Cart.getItemsFromLocalStorage();
    let totalValue = 1 - 1;
    productArray.forEach((product) => {
      totalValue += product.price;
    });
    return totalValue;
  }

  render() {
    const produtos = Cart.getItemsFromLocalStorage();

    return (
      <form>
        <fieldset>
          <legend>Revise seus produtos</legend>
          { produtos.map((produto) =>
            <label key={ produto.id }>
              { produto.amount }
              &nbsp;
              <img src={ produto.thumbnail } alt="imagem produto" />
              &nbsp;
              { produto.title }
              &nbsp;
              R$
              { produto.price }
              &nbsp;
              <br />
            </label>) }
            <br />
            <span>Total a pagar: R$ </span>
            { this.getTotalValue() }
        </fieldset>
        <br />
        <fieldset>
          <legend>Informações do comprador</legend>
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
          />
          <input
            type="text"
            data-testid="
            checkout-email"
            placeholder="Email:
            exemplo@exem.com"
          />
          <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Telefone (XX) XXXX-XXXX"
          />
          <input type="text" data-testid="checkout-cep" placeholder="CEP" />
          <input type="text" data-testid="checkout-address" placeholder="Endereço" />
        </fieldset>
        <br />
        <fieldset>
          <legend>Método de pagamento</legend>
          <input type="radio" id="boleto"></input>
          <label for="boleto">Boleto</label>
          &nbsp;
          <input type="radio" id="visa"></input>
          <label for="visa">Visa</label>
          &nbsp;
          <input type="radio" id="mastercard"></input>
          <label for="mastercard">MasterCard</label>
          &nbsp;
          <input type="radio" id="elo"></input>
          <label for="elo">Elo</label>
        </fieldset>
        <br />
        <button type="button">COMPRAR</button>
      </form>
    );
  }
}

export default Checkout;
