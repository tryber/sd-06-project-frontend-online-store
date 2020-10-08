import React from 'react';
import ItemCheckOut from '../components/ItemCheckOut';

class CheckOut extends React.Component {
  constructor() {
    super();
    this.showCart = this.showCart.bind(this);
  }

showCart(item) {
  return (
    <ItemCheckOut key={item.id} product={item} />
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
      <div>
        <label htmlFor="payment">
          <input name="payment" id="boleto" value="Boleto" type="radio" /> 
          <input name="payment" value="Visa" type="radio" />
          <input name="payment" value="MasterCard" type="radio" />
          <input name="payment" value="Elo" type="radio" />
        </label>
      </div>

  
      <button className="btn btn-green">Comprar</button>

    </div>

  );
}
}

export default CheckOut;
