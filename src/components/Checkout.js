import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import Header from './Header';

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
        <Header />
        <div className="checkout-review">
          <section>
            Revise seus produtos
            <div>
              <h1>insira os produtos aqui</h1>
            </div>
          </section>
          <span>Total: </span>
        </div>
        <div className="checkout-info">
          Informações do comprador
          <form className="form">
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
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
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
        <Link to="/shopping-cart"><button type="button">Voltar</button></Link>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
