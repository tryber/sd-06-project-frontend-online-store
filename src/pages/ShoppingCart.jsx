import React from 'react';
import { Link } from 'react-router-dom';


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const items = props.location.cartItems;

    this.state = {
      cartItems: items,
    }
    
  }
  
  render() {
    const { cartItems } = this.state;

    if (cartItems.length > 0) {
      return (
        <section>
          <section>
            {cartItems.map((item) => (
              <section className="card">
                <h4 data-testid="shopping-cart-product-name" key={item.id}>
                  {item.title}
                </h4>
                <img className="card-image" src={ item.thumbnail } alt="Item" />
              </section>
            ))}
            <h5 data-testid="shopping-cart-product-quantity">Item Count: {cartItems.length}</h5>
          </section>
          <section>
            <Link to="/">Voltar</Link>
          </section>
        </section>
      )
    } else {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <Link to="/">Voltar</Link>
      </section>
    )
    }
  }

}

export default ShoppingCart;
