import React, { Component } from 'react';

class DetalhesDoProduto extends Component {
  constructor(props) {
    super()

    this.state = {

    }
  }
  render() {
    // console.log(this.props.location.state);
    const { title, thumbnail, price } = this.props.location.state.produto;
    return (
      <div className="detalhe-produto">
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } />
        <p>R$ { price }</p>
      </div >
    );
  }
}

export default DetalhesDoProduto;
