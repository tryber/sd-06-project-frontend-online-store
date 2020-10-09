import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

class Checkout extends Component {
  render() {
    const { handleCartItems, saveDetails, removeItem, cart: { products, totalPrice } } = this.props;
    const price = (totalPrice) ? totalPrice : 0;
    return (
      <div className="cart-product">
        {(products && products.length > 0)
          ? products.map((product) => <Product
            saveDetails={ saveDetails }
            removeItem={removeItem}
            handleCartItems={handleCartItems}
            bt="cart"
            key={ product.id }
            data={ product }
          />)
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <div>{`Total da compra: R$ ${price}`}</div>
        <form>
          <fieldset>
            <legend>Informações do Comprador</legend>
          </fieldset>
        </form>
        <Link to="/">Voltar para a Home</Link>
        <Link to="/">Comprar</Link>
      </div>
    );
  }
}

export default Checkout;