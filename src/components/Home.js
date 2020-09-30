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
          {/* aqui eu preciso fazer com que os valores digitados do search entrem nas condições dos parâmetros dessa função, e resolva a promise e me traga os resultados */}
          <button data-testid="query-button" onClick={getProductsFromCategoryAndQuery()}>Pesquisar</button>
        </div>
      </div>
    );
  }
}

export default Home;
