import React from 'react';
import Cart from '../services/cart';

class Checkout extends React.Component {
  getTotalValue() {
    const productArray = Cart.getItemsFromLocalStorage();
    let totalValue = 1 - 1;
    productArray.forEach((product) => {
      totalValue += (product.price * product.amount);
    });
    return totalValue;
  }

  render() {
    const produtos = Cart.getItemsFromLocalStorage();
    const number2 = 2;
    return (
      <div>
        <h1>MLB - Compra 100% segura</h1>
        <br />
        <form>
          <fieldset>
            <legend>Revise seus produtos</legend>
            { produtos.map((produto) => (
              <div key={ produto.id }>
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
              </div>
            )) }
            <br />
            <span>Total a pagar: R$ </span>
            { this.getTotalValue().toFixed(number2) }
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
            <label htmlFor="boleto">
              Boleto
              <input type="radio" id="boleto" value="bo" name="payment" checked />
            </label>
            &nbsp;
            <label htmlFor="visa">
              Visa
              <input type="radio" id="visa" value="cardVisa" name="payment" />
            </label>
            &nbsp;
            <label htmlFor="mastercard">
              MasterCard
              <input type="radio" id="mastercard" value="cardMaster" name="payment" />
            </label>
            &nbsp;
            <label htmlFor="elo">
              Elo
              <input type="radio" id="elo" value="cardElo" name="payment" />
            </label>
          </fieldset>
        </form>
        <br />
        <button type="button">COMPRAR</button>
      </div>
    );
  }
}

export default Checkout;
