import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopping cart</h1>
        <p>{ this.props.location.state.cart }</p>

        <Link to='/'>Voltar</Link>
      </div>
    )
  }
}

export default ShoppingCart;
