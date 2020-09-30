import React, { Component } from 'react';
import CampoBusca from '../Components/CampoBusca';
import ListaCategorias from '../Components/ListaCategorias'

class ListaDeProdutos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ListaCategorias />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CampoBusca />
      </div>
    );
  }
}

export default ListaDeProdutos;
