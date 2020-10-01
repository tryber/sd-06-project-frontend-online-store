import React from 'react';

class AddCartButton extends React.Component {
  constructor() {
    super();
    this.localStorageSave = this.localStorageSave.bind(this);
  }

  getLocalStorageProduct() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  localStorageSave() {
    const cartLocalStorage = this.getLocalStorageProduct();
    const { data } = this.props;
    const newLocalStorage = (cartLocalStorage) ? [ ...cartLocalStorage, data] : [data];
    const stringData = JSON.stringify(newLocalStorage);
    localStorage.setItem('cart', stringData);
  }

  localStorageRemove() {
    console.log('Remove item');
  }

  btHome() {
    return (
      <div id="cart-button">
        <button data-testid="product-add-to-cart" type="button" onClick={this.localStorageSave}>Adicionar ao Carrinho de Compras</button>
      </div>
    );
  }

  btRemove() {
    return (
      <div id="cart-button">
        <button data-testid="product-add-to-cart" type="button" onClick={this.localStorageRemove}>Remover</button>
      </div>
    );
  }

  render() {
    const { bt } = this.props;
    return (
      <div>
        {(bt === 'home') ? this.btHome() : this.btRemove()}
      </div>

    );
  }
};

export default AddCartButton;