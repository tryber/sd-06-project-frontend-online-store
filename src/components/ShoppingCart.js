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
    const decimals = 2;
    const initialTotalPrice = 0;
    let totalPrice = initialTotalPrice;
    items.forEach((item) => {
      const { price, id } = item;
      const quantity = addedItems[`${id}`];
      totalPrice += (quantity * price);
    });

    if (items.length === empty) {
      return (
        <div>
          <h2 className="titleCart" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
          <img className="imgCart" src={ imgCart } alt="shopping-cart-button" />
        </div>
      );
    }

    return (
      <div>
        {items.map((item) => {
          const { id, title, thumbnail, price } = item;

          return (
            <div className="product" key={ id }>
              <h3 data-testid="shopping-cart-product-name">{ title }</h3>
              <img alt="Product in the cart" src={ thumbnail } />
              <div className="buttonQuantityCart">
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.handleIncreaseQuantity(id) }
                >
                  {' '}
                  +
                </button>
                <p
                  className="buttonQuantityCart"
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
        <div>
          <span>
            { `Valor Total da Compra R$: ${totalPrice.toFixed(decimals)}` }
          </span>
        </div>
        <br />
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
