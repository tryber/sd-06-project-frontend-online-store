import React from 'react';
import getProductsFromCategoryAndQuery from '../services/api'


class Home extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);


    this.state = {
      search: "",
    }
  }


  handleChanges({target}) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { search } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <input data-testid="query-input" type="text" name="search" value={search} onChange={this.handleChanges} />
          {/* aqui eu preciso fazer com que os valores digitados do search entrem nas condições dos parâmetros dessa função getProductsFromCategoryAndQuery, e resolva essa promise abaixo */}
          <button data-testid="query-button" onClick={getProductsFromCategoryAndQuery()}>Pesquisar</button>
          {/* Provavelmente aqui terei que renderizar cada card, recebendo os dados da API e fazendo um map no resultado da promise para gerar cada card com seu título, foto e preço. */}
          <li data-testid="product">Produto 1</li>
          <li data-testid="product">Produto 2</li>
          <li data-testid="product">Produto 3</li>
        </div>
      </div>
    );
  }
}

export default Home;
