import React from 'react';


class AddItemCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceItem: 0,
      quantity: 0,
      cartList: '',
    };
    this.handleCartIncrease = this.handleCartIncrease.bind(this);
    this.handleCartDecrease = this.handleCartDecrease.bind(this);
    this.handleRemoveItemCart = this.handleRemoveItemCart.bind(this);
  }

  handleCartIncrease() {
    this.setState(() => ({
      quantity: quantity + 1,
    }));
  }

  handleCartDecrease() {
    this.setState(() => ({
      quantity: quantity - 1,
    }));
  }

  handleRemoveItemCart() {
    deleteItem = document.getElementById('increase');
    deleteItem.remove();
  }


  render() {
    return (
      <div>
        <ol id="cartList" />
        <button
          type="button"
          data-testid="product-increase-quantity" 
          id="increase"
          onClick={ this.handleCartIncrease }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decreate-quantity"
          id="decrease"
          onClick={ this.handleCartDecrease }
        >
          -
        </button>
        <button
          type="button"
          id="removeItemCart"
          onClick={ this.handleRemoveItemCart }
        >
          x
        </button>
        <button type="button" id="buyList">Finalizar Compra</button>
      </div>);
  }
}

export default AddItemCart;


// function createCartItemElement(item) {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = `SKU: ${item.id} | NAME: ${item.title} | PRICE: $${item.price}`;
//   const cartItems = document.querySelector('.cart__items').appendChild(li);
//   li.addEventListener('click', cartItemClickListener);
//   sum(item.price);
//   return cartItems;
// }

// function sum(priceItem) {
//   totalPrice += priceItem;
//   document.querySelector('.total-price').innerHTML = totalPrice;
// }

// function cartItemClickListener(event) {
//   const deleteItem = event.target;
//   deleteItem.remove();
// }
