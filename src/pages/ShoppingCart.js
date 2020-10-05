import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../services/cart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = { checkout: false };
  }

  getTotalValue() {
    const productArray = Cart.getItemsFromLocalStorage();
    let totalValue = 1 - 1;
    productArray.forEach((product) => {
      totalValue += product.price;
    });
    return totalValue;
  }

  removeProduct(product) {
    if (product.amount > 1) {
      Cart.removeItem(product.id);
    } else {
      Cart.deleteItem(product.id);
    }
  }

  addProduct(product) {
    Cart.addItem(product);
  }

  checkoutFields() {
    return (
      <div>
        <ShoppingCart />
        <div>
          <span>Total a pagar: R$ </span>
          {this.getTotalValue()}
        </div>
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
      return this.checkoutFields();
    }
    const produtos = Cart.getItemsFromLocalStorage();
    return (
      produtos.length < 1
        ? (
          <div>
            <Link to="/">
              <button type="button">Página Inicial</button>
            </Link>
            <h1>Carrinho de Compras</h1>
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        )
        : (
          <div>
            <div>
              <Link to="/">
                <button type="button">Página Inicial</button>
              </Link>
              <h1>Carrinho de Compras</h1>
              <button
                onClick={ () => this.setState({ checkout: true }) }
                data-testid="checkout-products"
                type="button"
              >
                Finalizar Compra
              </button>
              <button
                type="button"
                onClick={ () => { Cart.removeAll(); this.forceUpdate(); } }
              >
                Limpar carrinho
              </button>
              {produtos.map((element) => (
                <div key={ element.id }>
                  <div data-testid="shopping-cart-product-name">
                    Produto:
                    {element.title}
                  </div>
                  <div>
                    <p>
                      Preço R$
                      {element.price}
                    </p>
                    <div data-testid="shopping-cart-product-quantity">
                      <p>
                        {element.amount}
                      </p>
                    </div>
                    <img src={ element.thumbnail } alt="product" />
                    <button
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ () => { this.addProduct(element); this.forceUpdate(); } }
                    >
                      +
                    </button>
                    <button
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ () => {
                        this.removeProduct(element); this.forceUpdate();
                      } }
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ));
  }
}

export default ShoppingCart;
