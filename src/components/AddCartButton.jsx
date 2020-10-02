import React from 'react';

class AddCartButton extends React.Component {
  constructor() {
    super();
    this.localStorageSave = this.localStorageSave.bind(this);
  }

  getLocalStorageProduct() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  countLocalStorage(cartLocalStorage, id) {
    const newLocalStorage = cartLocalStorage.map((item) => {
      if (item.id === id) item.qtd += 1;
      return item;
    });
    return newLocalStorage;
  }

  localStorageSave() {
    const { data } = this.props;
    data.qtd = 1;
    const cartLocalStorage = this.getLocalStorageProduct();
    let newLocalStorage;
    if (cartLocalStorage) {
      (cartLocalStorage.some((item) => item.id === data.id ))
        ? newLocalStorage = this.countLocalStorage(cartLocalStorage, data.id)
        : newLocalStorage = [ ...cartLocalStorage, data];
    } else {
      newLocalStorage = [data];
    }
    const stringData = JSON.stringify(newLocalStorage);
    localStorage.setItem('cart', stringData);
    console.log('Produto adicionado ao carrinho com sucesso!')
  }

  localStorageRemove() {
    console.log('Remove item');
  }

  btHome() {
    return (
      <div id="cart-button">
        <button data-testid="product-add-to-cart" data-testid="product-detail-add-to-cart" type="button" onClick={this.localStorageSave}>Adicionar ao Carrinho de Compras</button>
      </div>
    );
  }

  btRemove() {
    const { data } = this.props;
    return (
      <div id="cart-button">
        <div data-testid="shopping-cart-product-quantity">Quantidade: {data.qtd}</div>
        <button data-testid="product-add-to-cart" type="button" onClick={this.localStorageRemove}>+</button>
        <button data-testid="product-add-to-cart" type="button" onClick={this.localStorageRemove}>-</button>
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