import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      fullname: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
  }


  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      fullname,
      cpf,
      email,
      phone,
      cep,
      address,
      complement,
      number,
      city } = this.state;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <div className="checkout-review">
          <section>
            Revise seus produtos
            <li>Produto 1</li>
            <li>Produto 2</li>
            <li>Produto 3</li>
          </section>
          <span>Total: </span>
        </div>
        <div className="checkout-info">
          Informações do comprador
          <form>
            <input
              onChange={ this.handleChanges }
              name="fullname"
              value={ fullname }
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
            />
            <input
              onChange={ this.handleChanges }
              name="cpf"
              value={ cpf }
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
            />
            <input
              onChange={ this.handleChanges }
              name="email"
              value={ email }
              data-testid="checkout-email"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={ this.handleChanges }
              name="phone"
              value={ phone }
              data-testid="checkout-phone"
              type="text"
              placeholder="Telefone"
            />
            <input
              onChange={ this.handleChanges }
              name="cep"
              value={ cep }
              data-testid="checkout-cep"
              type="text"
              placeholder="CEP"
            />
            <input
              onChange={ this.handleChanges }
              name="address"
              value={ address }
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço"
            />
            <input
              onChange={ this.handleChanges }
              name="complement"
              value={ complement }
              type="text"
              placeholder="Complemento"
            />
            <input
              onChange={ this.handleChanges }
              name="number"
              value={ number }
              type="text"
              placeholder="Número"
            />
            <input
              onChange={ this.handleChanges }
              name="city"
              value={ city }
              type="text"
              placeholder="Cidade"
            />
            <select
              placeholder="Estado"
            >
              <option>Estado</option>
            </select>
          </form>
        </div>
        <div className="checkout-payment">
          Método de pagamento
          <section>
            <input type="radio" />
            Boleto
            <input type="radio" />
            Visa
            <input type="radio" />
            MasterCard
            <input type="radio" />
            Elo
          </section>
        </div>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
