import { Componet } from 'react';

class addItem extends Componet {
  constructor() {
    super();

    this.addItem = this.addItem.bind(this);

    this.state = {
      cartList: [],
    }
  }

  addItem(title, price) {
    const newItem = { title, price };
  
    this.setState((previousState) => ({
      cartList: previousState.cartList.concat(newItem),
    }));
  }
}

export default addItem;
