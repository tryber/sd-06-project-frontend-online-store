import React, { Component } from 'react';
import Formulario from '../Components/Formulario';

class DetalhesDoProduto extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    // console.log(this.props.location.state);
    const { title, thumbnail, price } = this.props.location.state.produto;
    return (
      <div className="detalhe-produto">
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } alt="produto" />
        <p>R$ { price }</p>
        <div>
          <Formulario />
        </div>
      </div>
    );
  }
}

export default DetalhesDoProduto;
