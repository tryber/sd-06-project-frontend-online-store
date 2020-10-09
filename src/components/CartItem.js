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
      availableQuantity: 0,
    };
  }

  componentDidMount() {
    this.setInitialValue();
  }

  setInitialValue() {
    const { item } = this.props;
    const { available_quantity: availableQuantity, price } = item;
    const { quantity } = this.state;
    this.setState({
      totalValue: price,
      availableQuantity: availableQuantity - quantity,
    });
  }

  quantityHandler({ target }) {
    const num = 100;
    const { item } = this.props;
    const { price } = item;
    const { name } = target;
    const { quantity, minQuantity, availableQuantity } = this.state;
    if (name === 'decrease') {
      if (quantity > minQuantity) {
        this.setState((state) => ({
          quantity: state.quantity - 1,
          totalValue: Math.round((state.totalValue - price) * num) / num,
          availableQuantity: state.availableQuantity + 1,
        }));
      }
    }

    if (name === 'increase' && availableQuantity > minQuantity) {
      this.setState((state) => ({
        availableQuantity: state.availableQuantity - 1,
        quantity: state.quantity + 1,
        totalValue: Math.round((state.totalValue + price) * num) / num,
      }));
    }
  }

  render() {
    const { item } = this.props;
    const { quantity, totalValue, availableQuantity } = this.state;
    return (
      <div className="product-card">
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt="produto" />
        <p>{`Preço: R$ ${item.price}`}</p>
        <p className="item-quantity">
          { `Quantidade ainda disponível: ${availableQuantity}` }
        </p>
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
    available_quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
