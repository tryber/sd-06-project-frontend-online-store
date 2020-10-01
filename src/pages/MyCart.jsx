import React from 'react';
import { Link } from 'react-router-dom';

class MyCart extends React.Component {
  render() {
    return (
      <button type="button">
        <Link to="/cart" data-testid="shopping-cart-button">
          My Cart
        </Link>
    </button>
    );
  }
}
  
export default MyCart;
