import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    
    this.removeItem = this.removeItem.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    this.state = {};
  }

  removeItem(i) {
    const getLocalStorage = JSON.parse(localStorage.getItem('cartProducts'));
    getLocalStorage.splice(i, 1);
    localStorage.setItem('cartProducts', JSON.stringify(getLocalStorage));
    this.setState({});
  }

  increase(item) {
    if(!this.state[item.id]) {
      this.setState({
        [item.id] : 1,
      })
    }
    this.setState((prevState) => ({
      [item.id] : prevState[item.id] + 1,
    }));
  }

  decrease(item) {
    if(this.state[item.id] === 0) {
      return alert('Já esta no minimo possivel');
    }
    this.setState((prevState) => ({
      [item.id] : prevState[item.id] - 1,
    })); 
  }

  render() {
    const product = JSON.parse(localStorage.getItem('cartProducts'));
    if(!product || product.length === 0) return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <button><Link to="/">Voltar</Link></button>
      </div>
    );
    return (
      <div>
        {product.map((item, i) => 
            <div data-testid="shopping-cart-product-name" key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.thumbnail} alt='product' />
              <div>
              <p data-testid="shopping-cart-product-quantity">Quantidade: {this.state[item.id] ? this.state[item.id] : 1}</p>
                <button data-testid="product-decrease-quantity" onClick={() => this.decrease(item)}>-</button>
                <button data-testid="product-increase-quantity" onClick={() => this.increase(item)}>+</button>
              </div>
              <p>{`R$ ${!this.state[item.id] ? item.price : item.price * this.state[item.id]}`}</p>
              <button onClick={() => this.removeItem(i)}>Remover</button>
            </div>
        )}
        <button><Link to="/">Voltar</Link></button>
      </div>
    );
  };
}

export default ShoppingCart;
