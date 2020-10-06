import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      quantity: [],
      emptyCart: true,
      checkout: false
    }
  };

  componentDidMount() {
    if (localStorage.Cart) {
      const cartItems = JSON.parse(localStorage.Cart).map(item => item.cartProducts[0]);
      const quantity = JSON.parse(localStorage.Cart).map(item => item.quantityCartProducts);
      this.setState({ cartItems: [...cartItems], emptyCart: false, quantity });
    }
  }

  checkout() {
    return (
      <div>
        <ShoppingCartPage />
        <div>
          <form>
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
          </form>
        </div>
      </div>
    );
  }

  render() {
    const { checkout } = this.state;
    if (checkout) {
      return this.checkout();
    }
    const { emptyCart, cartItems, quantity } = this.state;
    return (
      <div>
        <Link to="/" >Voltar</Link>
        {(emptyCart)
          ? < p data-testid="shopping-cart-empty-message" >
            Seu carrinho está vazio
            </p >
          : cartItems.map((product, index) => (
            <div key={ product.id }>
              <Product
                id={ product.id }
                title={ product.title }
                image={ product.thumbnail }npm
                price={ product.price }
                product={ product }
              />)
              <p>Quantidade: <span data-testid="shopping-cart-product-quantity">{ quantity[index] }</span></p>
              <button
                    onClick={ () => this.setState({ checkout: true }) }
                    data-testid="checkout-products"
                    type="button"
                  >
                    Comprar
                  </button>
            </div>
          )) }
      </div>
    );
  }
}

export default ShoppingCartPage