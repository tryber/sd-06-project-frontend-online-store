import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCardButton extends React.Component {
  render() {
    return (
      <button type="button" className="my-button">
        <Link to="/shoppingCart" data-testid="shopping-cart-button" />
      </button>
    );
  }
}
  
export default ShoppingCardButton;
