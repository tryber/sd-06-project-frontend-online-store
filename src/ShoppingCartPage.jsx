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
    }
  };

  componentDidMount() {
    if (localStorage.Cart) {
      const cartItems = JSON.parse(localStorage.Cart).map(item => item.cartProducts[0]);
      const quantity = JSON.parse(localStorage.Cart).map(item => item.quantityCartProducts);
      this.setState({ cartItems: [...cartItems], emptyCart: false, quantity });
    }
  }

  render() {
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
                image={ product.thumbnail }
                price={ product.price }
                product={ product }
              />)
              <p>Quantidade: <span data-testid="shopping-cart-product-quantity">{ quantity[index] }</span></p>
            </div>
          )) }
      </div>
    );
  }
}

export default ShoppingCartPage