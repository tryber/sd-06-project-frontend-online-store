import React from 'react';

class AddCartButton extends React.Component {
  constructor() {
    super();
    this.cartStateSave = this.cartStateSave.bind(this);
  }
         
  cartStateSave(op) {
    const { data, handleCartItems } = this.props;
    handleCartItems(data, op);
  }

  btHome() {
    const { bt, data, handleCartItems } = this.props;
    let testid;
    if (bt === 'home') testid = 'product-add-to-cart';
    if (bt === 'productDetails') testid = 'product-detail-add-to-cart';

    return (
      <div id="cart-button">
        <button data-testid={ testid } type="button" onClick={ () => handleCartItems(data, 'plus') }>
          Adicionar ao Carrinho de Compras
        </button>
      </div>
    );
  }

  btRemove() {
    const { data, handleCartItems, removeItem } = this.props;
    return (
      <div id="cart-button">
        <div>
          Quantidade:
          <div data-testid="shopping-cart-product-quantity"> 
            {data.aqtd}
          </div>
        </div>
        <button data-testid="product-increase-quantity" type="button" onClick={ () => handleCartItems(data, 'plus') }>
          +
        </button>
        <button data-testid="product-decrease-quantity" type="button" onClick={ (event) => handleCartItems(data, 'minus') }>
          -
        </button>
        <button data-testid="product-add-to-cart" type="button" onClick={ (event) => removeItem(data.id) }>
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
