import React from 'react'
import Produto from './Produto';

class BotaoSomar extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleSoma(this.props.produto);
  }

  render() {
    return (
      <button data-testid="product-increase-quantity" onClick={ this.onClick }>+</button>
    )
  }
}

export default BotaoSomar;
