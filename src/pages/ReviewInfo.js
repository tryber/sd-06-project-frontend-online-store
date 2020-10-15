import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './ReviewInfo.css';


class ReviewInfo extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.state = {
      fullname: '',
      cpf: '',
      email: '',
      tel: '',
      address: '',
      number: '',
      comp: '',
      cep: '',
      city: '',
      state: 'AC',
      paymentMethod: '',
    };
  }

  componentDidMount() {
    const states = ['AC', 'AL', 'AP', 'AM', 'BA',
      'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT',
      'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ',
      'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE',
      'TO',
    ];
    states.map((state) => {
      const select = document.querySelector('select');
      const option = document.createElement('option');
      option.innerText = state;
      option.value = state;
      select.appendChild(option);
      return true;
    });
  }

  onInputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onSelectChange({ target }) {
    this.setState({ state: target.value });
  }

  render() {
    const { fullname, cpf, email, tel, address, number, comp, cep, city } = this.state;
    return (
      <div className="main">
        <section>Cart Review</section>
        <section>
          <form>
            <fieldset>
              <legend>Informacoes para contato:</legend>
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ fullname }
                name="fullname"
                id="fullname"
                placeholder="Nome Completo"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ cpf }
                name="cpf"
                id="cpf"
                placeholder="CPF"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ email }
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ tel }
                name="tel"
                id="tel"
                placeholder="Telefone"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ address }
                name="address"
                id="address"
                placeholder="Endereco"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ number }
                name="number"
                id="number"
                placeholder="Numero"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ comp }
                name="comp"
                id="comp"
                placeholder="Complemento"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ cep }
                name="cep"
                id="cep"
                placeholder="CEP"
              />
              <input
                type="text"
                onChange={ this.onInputChange }
                value={ city }
                name="city"
                id="city"
                placeholder="Cidade"
              />
              <select
                onChange={ this.onSelectChange }
                value={ this.setState.state }
              >
                oi
              </select>
            </fieldset>
          </form>
        </section>
        <section>Payment Method</section>
      </div>
    );
  }
}

export default ReviewInfo;
