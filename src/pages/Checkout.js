import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import boleto from '../img/boleto.jpeg';
import cartao from '../img/cartao.jpeg';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    const { location: { state: { produtos } } } = this.props;
    return (
      <div className="checkout-container">
        <div className="checkout-top-content">
          <h3>Revise seus Produtos</h3>
          {produtos.map((item) => (
            <div key={ this.id }>
              <div className="checkout-product-container">
                <img src={ item.product.thumbnail } alt="imagem do procuto" />
                <h3>{item.product.title}</h3>
                <h4>{item.product.price}</h4>
              </div>
              <hr className="checkout-hr" />
            </div>
          ))}
        </div>
        <form className="form-container">
          <h3>Informações do Comprador</h3>
          <div className="form-top-content">
            <input placeholder="Nome Completo" />
            <input placeholder="CPF" />
            <input placeholder="Email" />
            <input placeholder="Telefone" />
          </div>
          <div className="form-middle-content">
            <input placeholder="CEP" />
            <input placeholder="Endereço" />
          </div>
          <div className="form-bottom-content">
            <input placeholder="Complemento" />
            <input placeholder="Número" />
            <input placeholder="Cidade" />
            <input placeholder="Estado" />
          </div>
        </form>
        <div className="payment-container">
          <h3>Método de pagamento</h3>
          <div className="payment-methods">
            <div>
              <p>Boleto</p>
              <div className="boleto-div">
                <label htmlFor="boleto">
                  <input id="boleto" type="radio" name="boleto" />
                </label>
                <img
                  src={ boleto }
                  width="100"
                  alt="imagem de boleto"
                />
              </div>
            </div>
            <div className="creditcard">
              <p>Cartão de Crédito</p>
              <div className="card-div">
                <label htmlFor="visa">
                  <input id="visa" type="radio" name="card" />
                  Visa
                </label>
                <img src={ cartao } width="100" alt="imagem de cartao" />
                <label htmlFor="mastercard">
                  <input id="mastercard" type="radio" name="card" />
                  Mastercard
                </label>
                <img src={ cartao } width="100" alt="imagem de cartao" />
                <label htmlFor="elo">
                  <input id="elo" type="radio" name="card" />
                  Elo
                </label>
                <img src={ cartao } width="100" alt="imagem de cartao" />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-buttons">
          <Link to="/">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/0/340.svg"
              alt="back-arrow"
              width="50"
            />
          </Link>
          <button type="submit" className="checkout-button">Comprar</button>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: propTypes.arrayOf(propTypes.object).isRequired,
  state: propTypes.string.isRequired,
};

export default Checkout;
