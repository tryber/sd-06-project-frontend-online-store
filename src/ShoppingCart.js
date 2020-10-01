import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaArrowAltCircleLeft, FaBoxOpen } from 'react-icons/fa';
import CartProductCard from './CartProductCard';

class ShoppingCart extends React.Component {
  constructor(props) {
    super();
    const products = (props.location.state.productsOnCart !== undefined)
      ? props.location.state.productsOnCart : [];
    this.state = {
      cartProducts: products,
    };
  }

  render() {
    const { cartProducts } = this.state;
    const msgEmptyCart = 'Seu carrinho está vazio';
    return (
      <div>
        <div>
          <Link to="/"><FaArrowAltCircleLeft /></Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <FaShoppingCart />
            Carrinho de Compras
          </Link>
        </div>
        <div>
          { (cartProducts.length < 1) ? <FaBoxOpen /> : ''}
          { (cartProducts < 1)
            ? <p data-testid="shopping-cart-empty-message">{msgEmptyCart}</p> : '' }

          { cartProducts.map((product) => {
            const quantity = cartProducts.filter((prod) => prod.id === product.id).length;
            return CartProductCard(product, quantity);
          }) }
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

ShoppingCart.defaultProps = {
  location: {},
};

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productsOnCart: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};
