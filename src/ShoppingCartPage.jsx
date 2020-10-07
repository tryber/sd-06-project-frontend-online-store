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
      totalPrices: '0',
      checkout: false
    }
  };

  componentDidMount() {
    if (localStorage.Cart) {
      if (JSON.parse(localStorage.Cart).length > 0) {
        const two = 2;
        const cartItems = JSON.parse(localStorage.Cart).map((item) => item.cartProducts[0]);
        const quantity = JSON.parse(localStorage.Cart).map((item) => item.quantityCartProducts);
        const prices = cartItems.map((item, index) => item.price * quantity[index]);
        let totalPrices = prices.reduce((acc, curr) => acc + curr);
        totalPrices = Number(totalPrices.toFixed(two));
        this.setState({ cartItems: [...cartItems], emptyCart: false, quantity, totalPrices });
      }
    }
  }

  removeProduct(index) {
    const { cartItems, quantity, totalPrices } = this.state;
    let total = totalPrices;
    cartItems.splice(index, 1);
    quantity.splice(index, 1);
    const zero = 0;
    if (cartItems.length === zero) {
      total = zero;
    }
    const updateStorage = JSON.parse(localStorage.Cart);
    updateStorage.splice(index, 1);
    localStorage.Cart = JSON.stringify(updateStorage);
    this.setState({
      cartItems,
      quantity,
      totalPrices: total
    }, () => { if (cartItems === []) localStorage.clear() });
  }

  addProduct(index, { price, available_quantity }, { target }) {
    const { quantity, totalPrices } = this.state;
    // console.log(available_quantity);
    if (available_quantity === quantity[index]) {
      target.disabled = true;
    } else {
      const two = 2;
      const value = quantity[index] + 1;
      quantity[index] = value;
      const updateStorage = JSON.parse(localStorage.Cart);
      updateStorage[index].quantityCartProducts = value;
      localStorage.Cart = JSON.stringify(updateStorage);
      this.setState({
        quantity,
        totalPrices: Number((totalPrices + price).toFixed(two)),
      });
    }
  }

  subProduct(index, price) {
    const { quantity, totalPrices } = this.state;
    const two = 2;
    if (quantity[index] <= 1) {
      alert('quantidade menor que 1');
    } else {
      document.getElementById('btn-plus').disabled = false;
      const value = quantity[index] - 1;
      quantity[index] = value;
      const updateStorage = JSON.parse(localStorage.Cart);
      updateStorage[index].quantityCartProducts = value;
      localStorage.Cart = JSON.stringify(updateStorage);
      this.setState({
        quantity,
        totalPrices: Number((totalPrices - price).toFixed(two)),
      });
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
    const { emptyCart, cartItems, quantity, totalPrices, checkout } = this.state;
    if (checkout) {
      return this.checkout();
    }
    return (
      <div>
        <Link to="/">Voltar</Link>
        {(emptyCart)
          ? <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
          : cartItems.map((product, index) => (
            <div key={ product.id }>
              <Product
                id={ product.id }
                title={ product.title }
                image={ product.thumbnail }
                price={ product.price }
                product={ product }
              />
              <p>
                <button data-testid="product-increase-quantity" type="button" id="btn-plus" onClick={ (event) => this.addProduct(index, product, event) }> + </button>
                <span data-testid="shopping-cart-product-quantity">{ quantity[index] }</span>
                <button data-testid="product-decrease-quantity" onClick={ () => this.subProduct(index, product.price) }> - </button>
              </p>
              <button type="button" onClick={ () => this.removeProduct(index) }> Delete </button>
            </div>
          )) }
        <span>
          Total Price: R$
          { totalPrices }
        </span>
        <button
          onClick={ () => this.setState({ checkout: true }) }
          data-testid="checkout-products"
          type="button"
        >
          Buy
        </button>
      </div>
    );
  }
}

export default ShoppingCartPage;
