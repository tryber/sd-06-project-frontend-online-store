import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CartList extends React.Component {
  render() {
    const { cartList, dropdown } = this.props;
    console.log(cartList);
    return (
      <div className={ dropdown ? 'dropdown-active' : 'dropdown' }>
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/cart', state: cartList } }
        />
        {Object.values(cartList).map((product) => (
          <div key={ product.id } className="dropdown-items">
            <span className={ dropdown ? 'remove-item' : 'none' }>
              <FontAwesomeIcon icon="times-circle" />
            </span>

            <img
              src={ product.thumbnail }
              alt="product"
              className="dropdown-item img"
            />
            <p className="dropdown-item">{product.title}</p>
            <p className="dropdown-item">

              {`${product.quantity} und`}
              <br />

            </p>
            <p className="dropdown-item">
              {
                (product.price * product.quantity)
                  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
              }
            </p>
          </div>))}
        <button type="button">buttonA</button>
      </div>
    );
  }
}

export default CartList;
