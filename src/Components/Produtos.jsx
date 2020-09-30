import React, { Component } from 'react';


class Produtos extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props.product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt={ title } />
        <h3>{ title }</h3>
        <p>{ price }</p>
      </div>
    );
  }
}


export default Produtos;
