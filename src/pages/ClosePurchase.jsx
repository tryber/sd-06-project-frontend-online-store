import React from 'react';
import boleto from '../imgs/boleto.png';
import visa from '../imgs/visa-icon.png';
import master from '../imgs/Master-Card-icon.png';
import elo from '../imgs/Elo.png';
import ItemClosePurchase from './ItemClosePurchase';

class ClosePurchase extends React.Component {
  constructor() {
    super();
    this.showCart = this.showCart.bind(this);

    // this.state = {
    //   products: [],
    // }
 
  }

showCart(item) {
  return (
    <ItemClosePurchase key={item.id} product={item} />
  )
}

render () {
  const products = this.props.location.state.products;
  return (
    <div>
      <h2>Itens Selecionados</h2>
      <div>
        {products.length > 0 ? products.map((item) => this.showCart(item)) : this.emptyCart() }
      </div>
      <div className="buyer-informations">
        <form>
          <h2>Informações do comprador</h2>
          <label className="name-container" htmlFor="checkout-fullname">
            <input
              type="text"
              name="checkout-fullname"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
            />
          </label>
          <label className="cpf-container" htmlFor="checkout-cpf">
            <input
              type="text"
              name="checkout-cpf"
              data-testid="checkout-cpf"
              placeholder="CPF"
            />        
          </label>        
          <label className="email-container" htmlFor="checkout-email">
            <input
              type="text"
              name="checkout-email"
              data-testid="checkout-email" 
              placeholder="Email"
            />
          </label>
          <label className="phone-container" htmlFor="checkout-phone">
            <input
              type="text"
              name="checkout-phone"
              data-testid="checkout-phone"
              placeholder="Telefone"
            />
          </label>
          <label className="cep-container" htmlFor="checkout-cep">
            <input
              type="text"
              name="checkout-cep"
              data-testid="checkout-cep"
              placeholder="CEP"
            />
          </label>
          <label className="address-container" htmlFor="checkout-address">
            <input
              type="text"
              name="checkout-address"
              data-testid="checkout-address"
              placeholder="Endereço"
            />
          </label>                 
        </form>
      </div>
      <h2>Método de pagamento</h2>
      <div className="buyer-informations">
        <label htmlFor="payment">
          <input name="payment" id="boleto" value="Boleto" type="radio" /> 
             <img src={boleto} alt="boleto" width="50px" />

          <input name="payment" value="Visa" type="radio" />
              <img src={visa} alt="visa" width="50px" />

          <input name="payment" value="MasterCard" type="radio" />
              <img src={master} alt="master " width="50px" />
          <input name="payment" value="Elo" type="radio" />
              <img src={elo} alt="elo" width="50px" />

        </label>
      </div>

  
      <button className="btn btn-green">Comprar</button>

    </div>

  );
}
}

export default ClosePurchase;