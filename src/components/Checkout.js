import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Checkout.css'

class Checkout extends React.Component {

  render() {

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div className="checkout-review">
          <label>Revise seus produtos</label>
          <section>
            <li>Produto 1</li>
            <li>Produto 2</li>
            <li>Produto 3</li>
          </section>
          <label>Total: </label>
        </div>
        <div className="checkout-info">
          <label>Informações do comprador</label>
          <form>
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo" />
            <input
              data-testid="checkout-cpf"
              type="number"
              placeholder="CPF" />
            <input
              data-testid="checkout-email"
              type="text"
              placeholder="Email" />
            <input
              data-testid="checkout-phone"
              type="number"
              placeholder="Telefone" />
            <input
              data-testid="checkout-cep"
              type="number"
              placeholder="CEP" />
            <input
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço" />
            <input
              type="text"
              placeholder="Complemento" />
            <input
              type="number"
              placeholder="Número" />
            <input
              type="text"
              placeholder="Cidade" />
            <select
              placeholder="Estado">
              <option>Estado</option>
            </select>
          </form>
        </div>
        <div className="checkout-payment">
          <label>Método de pagamento</label>
          <section>
            <label>Boleto</label>
            <input type="radio" />
            <br /><br />
            <label>Cartão de Crédito</label>
            <br />
            <input type="radio" />Visa
            <input type="radio" />MasterCard
            <input type="radio" />Elo
        </section>
        </div>
        <button type="button" onClick={<Redirect to="/" />}>Comprar</button>
      </div>
    );
  }
}

export default Checkout;
