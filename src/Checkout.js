import React from 'react';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      quantity: 0,
    };

    this.loadStorage = this.loadStorage.bind(this);
  }

  componentDidMount() {
    this.loadStorage();
  }

  loadStorage() {
    const arrayProducts = JSON.parse(localStorage.Cart);
    const products = arrayProducts.map((product) => product.cartProducts[0]);
    const quantity = arrayProducts.map((product) => product.quantityCartProducts);
    this.setState({ products, quantity });
  }

  render() {
    const { products, quantity } = this.state;
    return (
      <div>
        <Link to="/shoppingcart">Voltar</Link>
        <form>
          <fieldset>
            <h3>Revise seus produtos</h3>
            { products.map((product, index) => (
              <div key={ product.id }>
                <img src={ product.thumbnail } alt={ product.title } />
                <h4>{ product.title }</h4>
                <p>
                  Quantidade:
                  { quantity[index] }
                </p>
                <p>{ (product.price * quantity[index]) }</p>
              </div>
            )) }
            <p>Total:</p>
          </fieldset>
          <fieldset>
            <h3>Informações do comprador</h3>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              required
            />
            <input
              type="text"
              data-testid="
              checkout-email"
              placeholder="Email:
              exemplo@exem.com"
              required
            />
            <input
              type="text"
              data-testid="checkout-cpf"
              placeholder="CPF"
              required
            />
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone (XX) XXXX-XXXX"
              required
            />
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              required
            />
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              required
            />
          </fieldset>
          <fieldset>
            <h3>Método de pagamento</h3>
          </fieldset>
          <button type="submit">Buy</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
