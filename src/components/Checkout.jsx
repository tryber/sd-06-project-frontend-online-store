import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts';
import FormCheckout from './FormCheckout';

class Checkout extends Component {
  constructor() {
    super();

    this.sumTotalPrice = this.sumTotalPrice.bind(this);

    this.state = {
      totalPrice: 0,
    }
  }
  
  componentDidMount() {
    this.sumTotalPrice();
  }

  sumTotalPrice() {
    const { cartList } = this.props;
    this.setState({
      totalPrice: cartList.reduce((acc, curr) => acc + curr.price, 0),
    });
  }

  render() {
    const { totalPrice } = this.state;
    const { cartList, cartQuantity } = this.props;
    return (
      <div>
        { cartList.map((product) => (
          <CheckoutProducts product={product} key={product.id} />
        )) }
          <p>Total de itens: {cartQuantity}</p>
        <p>Preço total do carrinho: {totalPrice}</p>
        <FormCheckout />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Checkout;
