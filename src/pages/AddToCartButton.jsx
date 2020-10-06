import React from 'react';

class AddToCartButton extends React.Component {
  constructor() {
    super();
    this.saveShoppingCart = this.saveShoppingCart.bind(this);
  }


  saveShoppingCart() {
    // Recupera array a partir do LocalStorage "ou" cria um array vazia
    const cartProducts = JSON.parse(localStorage.getItem('myCartList') || '[]');
    const { id, title, thumbnail, price } = this.props.product;
    const quantity = 1;
    const myProductIndex = cartProducts.findIndex((item) => item.id === id);
    
    if (myProductIndex >= 0) {
      cartProducts[myProductIndex].quantity += 1;
    } else {
      const myClickedProduct = { id, title, thumbnail, price, quantity };
      cartProducts.push(myClickedProduct);
    }
    
    localStorage.setItem('myCartList', JSON.stringify(cartProducts));
    // console.log('array final', cartProducts);
  }
 
  render () {
    const {testId} = this.props;
    return (
      <div>
        <button
          className="my-button"
          type="button"
          data-testid={ testId }
          onClick={ this.saveShoppingCart }
        >
          Add to Cart!
        </button>
      </div>
    );
  }
}

export default AddToCartButton;