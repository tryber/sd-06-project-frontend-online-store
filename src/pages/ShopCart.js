import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class ShopCart extends React.Component {
  constructor(props) {
    super(props);

    const { location: { state: cartList } } = this.props;
    this.state = {
      cartList,
    };
    this.addCartItem = this.addCartItem.bind(this);
    this.reduceCartItem = this.reduceCartItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { cartList } = this.state;
    const { cartList: prevCartList } = prevState;

    const prevQuantity = this.sumAllCartItemsQuantity(prevCartList);
    const currentQuantity = this.sumAllCartItemsQuantity(cartList);
    if (prevQuantity !== currentQuantity) {
      localStorage.setItem('cartlist', JSON.stringify(cartList));
    }
  }

  sumAllCartItemsQuantity(cartList) {
    const zero = 0;
    return Object.values(cartList)
      .reduce((prev, product) => product.quantity + prev, zero);
  }


  addCartItem(id) {
    const { cartList } = this.state;
    const copyCartList = { ...cartList };

    copyCartList[id].quantity += 1;
    return copyCartList;
  }

  reduceCartItem(id) {
    const { cartList } = this.state;
    const copyCartList = { ...cartList };
    const zero = 0;
    if (copyCartList[id].quantity > zero) copyCartList[id].quantity -= 1;
    return copyCartList;
  }

  handleChange(id, action) {
    const cartList = action(id);
    this.setState({ cartList });
  }

  render() {
    const empty = 0;

    const { cartList } = this.state;

    if (Object.values(cartList).length > empty) {
      return (
        <div>
          <Link to={ { pathname: '/', state: { cartList } } }>voltar</Link>
          { Object.values(cartList).map((product) => (
            <div className="cartItem-container" key={ product.id }>
              <p data-testid="shopping-cart-product-name">
                {product.title}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.handleChange(product.id, this.reduceCartItem) }
                >
                  {' '}
                  remover
                </button>
                {product.quantity}
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.handleChange(product.id, this.addCartItem) }
                >
                  {' '}
                  adicionar
                </button>
              </p>
            </div>


          ))}
          <Link
            to={ { pathname: '/checkout', state: { cartList } } }
            data-testid="checkout-products"
          >
            Finalizar Compra
          </Link>
        </div>
      );
    }
    return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ cartList: PropTypes.objectOf(PropTypes.any).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShopCart;
