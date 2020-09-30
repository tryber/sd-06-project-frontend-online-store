import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import CampoBusca from '../Components/CampoBusca';
import Produtos from '../Components/Produtos';
// import * as Api from '../services/api';

// eslint-disable-next-line react/prefer-stateless-function
class ListaDeProdutos extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  //   // this.handleAPI = this.handleAPI.bind(this);
  // }

  // async fetchProdutos (search) {
  //   await api.getProductsFromCategoryAndQuery(search).then(resolve => resolve.results);
  //   this.setState({})
  // };

  render() {
    const { produtos } = this.props;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* <CampoBusca onClick={this.fetchProdutos}/> */}
        <ul>
          {produtos.map((produto) => <Produtos key={ produto.id } produto={ produto } />)}
        </ul>
      </div>
    );
  }
}

ListaDeProdutos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListaDeProdutos;
