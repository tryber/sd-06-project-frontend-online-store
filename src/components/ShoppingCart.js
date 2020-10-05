import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgCart from '../img/imgCart.jpg';

class ShoppingCart extends React.Component {
  constructor(props) {
    super();
    const { cartItems, addedItems } = props;
    this.state = {
      items: [...cartItems],
      addedItems,
    };

    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleIncreaseQuantity(id) {
    const { addedItems } = this.state;
    let quantity = addedItems[id];
    quantity += 1;
    addedItems[id] = quantity;
    this.setState({
      addedItems,
    });
  }

  handleDecreaseQuantity(id) {
    const { addedItems } = this.state;
    let quantity = addedItems[id];
    quantity -= 1;

    const zero = 0;
    if (quantity < zero) {
      quantity = zero;
    }
    addedItems[id] = quantity;

    this.setState({
      addedItems,
    });
  }

  removeItem(id) {
    const { addedItems, items } = this.state;
    addedItems[id] = 0;
    const itemsFiltered = items.filter((item) => item.id !== id);
    this.setState({
      addedItems,
      items: itemsFiltered,
    });
  }

  render() {
    const { items, addedItems } = this.state;
    const empty = 0;

    if (items.length === empty) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          <img src={ imgCart } alt="shopping-cart-button" />
        </div>
      );
    }

    return (
      <div>
        {items.map((item) => {
          const { id, title, thumbnail, price } = item;

          return (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img alt="Product in the cart" src={ thumbnail } />
              <div>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.handleIncreaseQuantity(id) }
                >
                  {' '}
                  +
                </button>
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  { addedItems[`${id}`] }
                </p>

                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.handleDecreaseQuantity(id) }
                >
                  {' '}
                  -
                </button>
              </div>
              <div>
                R$:
                {' '}
                { price * addedItems[`${id}`] }
              </div>
              <button
                type="button"
                onClick={ () => this.removeItem(id) }
              >
                {' '}
                X
              </button>
            </div>
          );
        })}
        <span>Valor Total da Compra R$:</span>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addedItems: PropTypes.shape().isRequired,
};

export default ShoppingCart;
