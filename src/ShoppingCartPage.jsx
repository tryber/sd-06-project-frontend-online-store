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
    };
  }

  componentDidMount() {
    if (localStorage.Cart) {
      const cartItems = JSON.parse(localStorage.Cart).map((item) => item.cartProducts[0]);
      const quantity = JSON.parse(localStorage.Cart).map((item) => item.quantityCartProducts);
      const prices = cartItems.map((item, index) => item.price * quantity[index]);
      const totalPrices = prices.reduce((acc, curr) => acc + curr);
      console.log(prices);
      this.setState({ cartItems: [...cartItems], emptyCart: false, quantity, totalPrices });
    }
  }

  removeProduct(index) {
    const { cartItems } = this.state;
    cartItems.splice(index, 1);
    this.setState({ cartItems });
  }

  addProduct(index, price) {
    const { quantity, totalPrices } = this.state;
    const two = 2;
    const value = quantity[index] + 1;
    quantity[index] = value;
    this.setState({
      quantity,
      totalPrices: Number((totalPrices + price).toFixed(two)),
    });
  }

  subProduct(index, price) {
    const { quantity, totalPrices } = this.state;
    const two = 2;
    if (quantity[index] <= 1) {
      alert('quantidade menor que 1');
    } else {
      const value = quantity[index] - 1;
      quantity[index] = value;
      this.setState({
        quantity,
        totalPrices: Number((totalPrices - price).toFixed(two)),
      });
    }
  }

  render() {
    const { emptyCart, cartItems, quantity, totalPrices } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        {(emptyCart)
          ? <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </p>
          : cartItems.map((product, index) => (
            <div key={ product.id }>
              <button type="button" onClick={ () => this.removeProduct(index) }> Excluir </button>
              <Product
                id={ product.id }
                title={ product.title }
                image={ product.thumbnail }
                price={ product.price }
                product={ product }
              />
              <p>
                <button data-testid="product-increase-quantity" type="button" onClick={ () => this.addProduct(index, product.price) }> + </button>
                <span data-testid="shopping-cart-product-quantity">{ quantity[index] }</span>
                <button data-testid="product-decrease-quantity" type="button" onClick={ () => this.subProduct(index, product.price) }> - </button>
              </p>
            </div>
          )) }
        <span>
          `
          Valor Total:
          $
          {totalPrices}
          `
        </span>
        <button type="button"> Finalizar Compra </button>
      </div>
    );
  }
}

export default ShoppingCartPage;
