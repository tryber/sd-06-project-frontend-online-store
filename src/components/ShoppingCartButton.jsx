import React from 'react';
import { Link } from 'react-router-dom';

class MyCart extends React.Component {
  render() {
    return (
      <button type="button" className="my-button">
        <Link to="/shoppingcart" data-testid="shopping-cart-button" />
      </button>
    );
  }
}
  
export default MyCart;
