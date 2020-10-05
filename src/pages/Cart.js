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
    const { location } = this.props;
    const { getItems } = location;
    const cart = getItems();
    if (cart.length < 1) {
      return <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>;
    }
    return (
      <div>
        {cart.map((item) => (
          <div key={ item.id }>
            {this.renderProduct(item)}
          </div>
        ))}
        <p data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${cart.length}`}
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
  location: PropTypes.shape(),
};

Cart.defaultProps = {
  location: {},
};

export default Cart;
