import React, { Component } from 'react';
import CampoBusca from '../Components/CampoBusca';
import Produtos from '../Components/Produtos';
import * as Api from '../services/api';

// eslint-disable-next-line react/prefer-stateless-function
class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      categoryId: '',
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const { categoryId, search } = this.state;
    const response = await Api.getProductsFromCategoryAndQuery(
      categoryId,
      search,
    );
    const { results } = response;
    this.setState({
      produtos: results,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <CampoBusca onClick={ this.handleClick } />
        <ul>
          {produtos.map((produto) => (
            <Produtos key={ produto.id } produto={ produto } />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaDeProdutos;
