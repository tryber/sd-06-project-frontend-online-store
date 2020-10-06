import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor() {
    super();
    this.quantityHandler = this.quantityHandler.bind(this);

    this.state = {
      quantity: 1,
      totalValue: undefined,
      minQuantity: 0,
    };
  }

  quantityHandler({ target }) {
    const { name } = target;
    const { quantity, minQuantity } = this.state;
    if (name === 'decrease') {
      if (quantity > minQuantity) {
        this.setState((previousState) => ({
          quantity: previousState.quantity - 1,
        }));
      }
    }

    if (name === 'increase') {
      this.setState((previousState) => ({
        quantity: previousState.quantity + 1,
      }));
    }
  }

  render() {
    const { item } = this.props;
    const { quantity, totalValue } = this.state;
    return (
      <div className="product-card">
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt="produto" />
        <p>{`Preço: R$ ${item.price}`}</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          name="decrease"
          onClick={ this.quantityHandler }
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          {`${quantity}`}
        </span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          name="increase"
          onClick={ this.quantityHandler }
        >
          +
        </button>
        <span>{`R$ ${totalValue}`}</span>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
