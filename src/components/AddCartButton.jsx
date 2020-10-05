import React from 'react';

class AddCartButton extends React.Component {
  constructor() {
    super();
    this.localStorageSave = this.localStorageSave.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
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
      (cartLocalStorage.some((item) => item.id === data.id))
        ? newLocalStorage = this.countLocalStorage(cartLocalStorage, data.id)
        : newLocalStorage = [...cartLocalStorage, data];
    } else {
      newLocalStorage = [data];
    }
    const stringData = JSON.stringify(newLocalStorage);
    localStorage.setItem('cart', stringData);
    console.log('Produto adicionado ao carrinho com sucesso!');
  }

  localStorageRemove() {
    console.log('Remove item');
  }

  btHome() {
    const { bt } = this.props;
    let testid;
    if (bt === 'home') testid = 'product-add-to-cart';
    if (bt === 'productDetails') testid = 'product-detail-add-to-cart';

    return (
      <div id="cart-button">
        <button data-testid={ testid } type="button" onClick={ this.localStorageSave }>
          Adicionar ao Carrinho de Compras
        </button>
      </div>
    );
  }
  changeItem(id , event, op) {
    const cartItems = this.getLocalStorageProduct();
    const newCartItems = cartItems.map(item => {
     if (item.id === id) {
      if (op === "plus") {
        item.qtd += 1
      } else {
        if (item.qtd > 1) {item.qtd -= 1}
      }       
      (op === "plus") 
        ? event.target.previousSibling.lastChild.innerText = item.qtd
        : event.target.previousSibling.previousSibling.lastChild.innerText = item.qtd;
      return item;
     }
     return item;
  })
   localStorage.cart = JSON.stringify(newCartItems);
  }
  
  removeItem(id, event) {
    const cartItems = this.getLocalStorageProduct();
    const newCartItems = cartItems.filter(item => item.id !== id);
    const item = event.target.parentNode.parentNode.parentNode;
    item.parentNode.removeChild(item);
    localStorage.cart = JSON.stringify(newCartItems);
  }

  btRemove() {
    const { data } = this.props;
    return (
      <div id="cart-button">

        <div>
          Quantidade:
          <div data-testid="shopping-cart-product-quantity"> 
            {data.qtd}
          </div>
         
        </div>
        <button data-testid="product-increase-quantity" type="button" onClick={ (event) => this.changeItem(data.id, event, "plus") }>
          +
        </button>
        <button data-testid="product-decrease-quantity" type="button" onClick={ (event) => this.changeItem(data.id, event, "test") }>
          -
        </button>
        <button data-testid="product-add-to-cart" type="button" onClick={ (event) => this.removeItem(data.id, event) }>
          Remover
        </button>
      </div>
    );
  }

  render() {
    const { bt } = this.props;
    return (
      <div>
        {(bt === 'cart') ? this.btRemove() : this.btHome()}
      </div>
    );
  }
}

export default AddCartButton;
