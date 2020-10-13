import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    const { closeInactiveDropdowns } = this.props;
    document.addEventListener('mousedown',
      (event) => closeInactiveDropdowns(event, this.wrapperRef));
  }

  componentWillUnmount() {
    const { closeInactiveDropdowns } = this.props;
    document.removeEventListener('mousedown',
      (event) => closeInactiveDropdowns(event, this.wrapperRef));
  }

  render() {
    const { cartList, cartDropdown, removeCartItem } = this.props;
    return (
      <div
        className={ cartDropdown ? 'dropdown-active' : 'dropdown' }
        ref={ this.wrapperRef }
      >
        <Link
          data-testid="shopping-cart-button"
          to={ { pathname: '/cart', state: cartList } }
        >
          <span>See details and proceed</span>
          {' '}
          <FontAwesomeIcon icon="shopping-cart" />
        </Link>

        {Object.values(cartList).map((product) => (
          <div key={ product.id } className="dropdown-items">
            <button
              type="button"
              onClick={ () => removeCartItem(product.id) }
              className={ cartDropdown ? 'remove-item' : 'none' }
            >
              <FontAwesomeIcon icon="times-circle" />
            </button>

            <img
              src={ product.thumbnail }
              alt="product"
              className="dropdown-item img"
            />
            <p className="dropdown-item dropdown-title">{product.title}</p>
            <p className="dropdown-item-qt">

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

      </div>
    );
  }
}

export default CartList;
