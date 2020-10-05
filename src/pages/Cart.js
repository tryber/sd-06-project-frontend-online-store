import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import returnArrow from '../images/return-arrow.png';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.renderCart = this.renderCart.bind(this);
  }

  renderProduct(item) {
    return (
      <div className="product-card">
        <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
        <img src={ item.thumbnail } alt="produto" />
        <p>{`Preço: R$ ${item.price}`}</p>
      </div>
    );
  }

  renderCart() {
    const { cartItems } = this.props;
    if (cartItems.length < 1) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {cartItems.map((item) => (
          <div key={ item.id }>
            {this.renderProduct(item)}
          </div>
        ))}
        <p data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${cartItems.length}`}
        </p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link to="/">
          <img src={ returnArrow } alt="retornar" height="50" />
        </Link>
        {this.renderCart()}
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
};

Cart.defaultProps = {
  cartItems: PropTypes.shape({
    length: 1,
    map: () => 1,
  }),
};

export default Cart;
