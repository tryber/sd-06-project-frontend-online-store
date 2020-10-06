import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartItems';

class Cart extends React.Component {
  constructor(props) {
    super();

    const { location: { state: { data } } } = props;

    this.changeQuantity = this.changeQuantity.bind(this);
    this.changeState = this.changeState.bind(this);

    this.state = {
      loadMessage: true,
      cartItems: data,
    };
  }

  componentDidMount() {
    this.changeState();
  }

  changeState() {
    const { location: { state: { data } } } = this.props;
    if (Object.keys(data).length >= 1) {
      this.setState({
        loadMessage: false,
      });
    }
  }

  changeQuantity(name, title) {
    const zero = 0;

    if (name === 'increase') {
      this.setState((previous) => ({
        cartItems: {
          ...previous.cartItems,
          [title]: previous.cartItems[title] + 1 },
      }));
    } else {
      this.setState((previous) => ({
        cartItems: {
          ...previous.cartItems,
          [title]: previous.cartItems[title] === zero
            ? zero
            : previous.cartItems[title] - 1 },
      }));
    }
  }

  render() {
    const { loadMessage, cartItems } = this.state;
    const treatedData = Object.entries(cartItems);

    return (
      <div>
        {(loadMessage === true
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : treatedData.map((item) => (
            <CartItems
              key={ item[0] }
              title={ item[0] }
              quantity={ item[1] }
              changeQuantity={ this.changeQuantity }
            />
          ))
        )}
        <div>
          <Link to="/">Voltar para home</Link>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Cart;
