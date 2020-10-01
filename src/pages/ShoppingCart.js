import React from 'react';
import Cart from '../services/cart';

class ShoppingCart extends React.Component {
  render() {
    const produtos = Cart.getItemsFromLocalStorage();
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <h3 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
          {produtos.map((element) => (
            <div key={ element.id }>
              <div>
                <p>
                  ID:
                  {element.id}
                </p>
              </div>
              <div data-test-id="shopping-cart-product-name">
                <p>
                  Produto:
                  {element.title}
                </p>
              </div>
              <div>
                <p>
                  Preço R$:
                  {element.price}
                </p>
                <div data-test-id="shopping-cart-product-quantit">
                  <p>
                    Quantidade:
                    {element.amount}
                  </p>
                </div>
                <img src={ element.thumbnail } alt="product" />
              </div>
            </div>
          ))}
        </h3>
      </div>
    );
  }
}

export default ShoppingCart;
