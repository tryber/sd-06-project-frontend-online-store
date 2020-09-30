import React, { Component } from 'react';
import CampoBusca from '../Components/CampoBusca';
import Produtos from '../Components/Produtos';
import * as Api from '../services/api';

class ListaDeProdutos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
    };
    this.handleAPI = this.handleAPI.bind(this);
  }
  fetchProdutos = async (query) => {
    const getProdutos = await Api.getProductsFromCategoryAndQuery(query)
      .then(resolve => resolve.results);
  };

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CampoBusca />
        <Produtos />
      </div>
    );
  }
}

export default ListaDeProdutos;
