import React from 'react';
import { Link } from 'react-router-dom';

class DetalhesDoProduto extends React.Component {
  render() {
    const { produto } = this.props.location.state;
    // console.log(produto);
    return (
      <div>
        <h1 data-testid="product-detail-name">{ produto.title }</h1>
        <img src={ produto.thumbnail } />
        <p>{ produto.price }</p>
        <Link to="/">Voltar</Link>
      </div>
    )

  }
}

export default DetalhesDoProduto;
