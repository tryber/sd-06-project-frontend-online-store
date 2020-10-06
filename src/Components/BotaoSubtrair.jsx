import React from 'react'
import Produto from './Produto';

class BotaoSubtrair extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleSoma(this.props.produto);
  }

  render() {
    return (
      <button data-testid="product-decrease-quantity" onClick={ this.onClick }>-</button>
    )
  }
}

export default BotaoSubtrair;
