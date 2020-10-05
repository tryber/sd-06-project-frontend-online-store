import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formulario from '../Components/Formulario';

class DetalhesDoProduto extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { produto } = this.props.location.state;
    // console.log(produto);
    return (
      <div>
        <h1 data-testid="product-detail-name" className="detalhe-produto">{ produto.title }</h1>
        <img src={ produto.thumbnail } alt="produto" />
        <p>R$ { produto.price }</p>
        <div>
          <Formulario />
        </div>
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}

export default DetalhesDoProduto;
