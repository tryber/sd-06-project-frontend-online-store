import React, { Component } from 'react';
import CampoBusca from '../Components/CampoBusca';

class ListaDeProdutos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CampoBusca />
      </div>
    );
  }
}

export default ListaDeProdutos;
