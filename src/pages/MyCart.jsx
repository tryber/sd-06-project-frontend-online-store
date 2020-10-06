import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../imgs/cart5.png'

class MyCart extends React.Component {
  render() {
    return (
      <button type="button" className="my-button">
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img src={cart} alt="cart " width="50px" />
        </Link>
      </button>
    );
  }
}
  
export default MyCart;
