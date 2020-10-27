import React, { Component } from 'react';
import { BsCreditCard } from 'react-icons/bs';
import { FaCcMastercard, FaCreditCard, FaBarcode } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './ReviewInfo.css';


class ReviewInfo extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
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

  onRadioChange(event) {
    this.setState({ paymentMethod: event.target.id });
  }

  render() {
    const { fullname, cpf, email, tel,
      address, number, comp, cep, city, state, paymentMethod } = this.state;
    return (
      <div className="main">
        <section>Cart Review</section>
        <section>
          <form>
            <fieldset>
              <legend>Informacoes para contato:</legend>
              <input
                data-testid="checkout-fullname"
                type="text"
                onChange={ this.onInputChange }
                value={ fullname }
                name="fullname"
                id="fullname"
                placeholder="Nome Completo"
              />
              <input
                data-testid="checkout-cpf"
                type="text"
                onChange={ this.onInputChange }
                value={ cpf }
                name="cpf"
                id="cpf"
                placeholder="CPF"
              />
              <input
                data-testid="checkout-email"
                type="text"
                onChange={ this.onInputChange }
                value={ email }
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                data-testid="checkout-phone"
                type="text"
                onChange={ this.onInputChange }
                value={ tel }
                name="tel"
                id="tel"
                placeholder="Telefone"
              />
              <input
                data-testid="checkout-address"
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
                data-testid="checkout-cep"
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
                value={ state }
              >
                oi
              </select>
            </fieldset>
          </form>
        </section>
        <section>
          <form>
            <fieldset>
              <legend>Metodo de pagamento:</legend>
              <div className="payment-methods">
                <div className="payment-methods-billet">
                  <p>Boleto</p>
                  <label htmlFor="boleto">
                    <IconContext.Provider value={ { className: 'react-icons' } }>
                      <FaBarcode />
                    </IconContext.Provider>
                    <input
                      type="radio"
                      value={ paymentMethod }
                      onChange={ this.onRadioChange }
                      id="boleto"
                      name="paymentMethod"
                    />
                  </label>
                </div>
                <div className="payment-methods-cards">
                  <p>Cartoes de credito</p>
                  <div>
                    <IconContext.Provider value={ { className: 'react-icons' } }>
                      <BsCreditCard />
                    </IconContext.Provider>
                    <label htmlFor="visa">
                      Visa
                      <input
                        type="radio"
                        value={ paymentMethod }
                        onChange={ this.onRadioChange }
                        id="visa"
                        name="paymentMethod"
                      />
                    </label>
                    <IconContext.Provider value={ { className: 'react-icons' } }>
                      <FaCcMastercard />
                    </IconContext.Provider>
                    <label htmlFor="master">
                      Master
                      <input
                        type="radio"
                        value={ paymentMethod }
                        onChange={ this.onRadioChange }
                        id="master"
                        name="paymentMethod"
                      />
                    </label>
                    <IconContext.Provider value={ { className: 'react-icons' } }>
                      <FaCreditCard />
                    </IconContext.Provider>
                    <label htmlFor="elo">
                      Elo
                      <input
                        type="radio"
                        value={ paymentMethod }
                        onChange={ this.onRadioChange }
                        id="elo"
                        name="paymentMethod"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
}

export default ReviewInfo;
