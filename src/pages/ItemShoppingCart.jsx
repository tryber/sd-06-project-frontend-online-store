import React from 'react';

class ItemShoppingCart extends React.Component {
  constructor(props) {
    super();
    this.changeQuantity = this.changeQuantity.bind(this);
    this.state = {
      quantity: 0,
    }
  }

  componentDidMount() {
    const { id } = this.props.product;
    const cartProducts = JSON.parse(localStorage.getItem('myCartList'));
    const myProductIndex = cartProducts.findIndex((item) => item.id === id);
  
    this.setState({ quantity: cartProducts[myProductIndex].quantity })
  }

  changeQuantity(id, action) {
    // Recupera array a partir do LocalStorage "ou" cria um array vazia
    const cartProducts = JSON.parse(localStorage.getItem('myCartList'));
    const myProductIndex = cartProducts.findIndex((item) => item.id === id);

    if (action === '+') {
      cartProducts[myProductIndex].quantity += 1;
    } else if (cartProducts[myProductIndex].quantity > 0) { 
      cartProducts[myProductIndex].quantity -= 1;
    }
    
    localStorage.setItem('myCartList', JSON.stringify(cartProducts));
    this.setState({ quantity: cartProducts[myProductIndex].quantity })
  }


  render () {
    const { id, title, price } = this.props.product;
    const { remove } = this.props;
    const { quantity } = this.state;

    return (
      <div key={id} className="item-shopping-cart">
      <button 
      type="button" className="btn btn-green"
      onClick={() => remove(id)}>X
      </button>
      <p data-testid="shopping-cart-product-name" className="item-shopping-cart-title">{title}</p>
      <p className="item-shopping-cart-unitary-price">{`Un. R$ ${(price).toFixed(2)}`}</p>
      <p className="item-shopping-cart-total-price">{`Total R$ ${(price * quantity).toFixed(2)}`}</p>
      <button 
      type="button" className="btn btn-green" data-testid="product-decrease-quantity"
      onClick={() => this.changeQuantity(id, '-')}>(-)
      </button>
      <div data-testid="shopping-cart-product-quantity" className="circulo">{quantity}</div>
      <button 
      type="button" className="btn btn-green" data-testid="product-increase-quantity"
      onClick={() => this.changeQuantity(id, '+')}>(+)
      </button>
      </div>
    );
  }
}

export default ItemShoppingCart;