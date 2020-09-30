import React from 'react';
import * as api from '../services/api';
import ItemCard from './ItemCard';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAPI = this.handleAPI.bind(this);


    this.state = {
      search: '',
      products: [],
    };
  }


  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleAPI() {
    const { search } = this.state;
    const result = await api.getProductsFromCategoryAndQuery('', search);
    console.log(result)
    this.setState({
      products: result.results,
    });
  }

  render() {
    const { search, products } = this.state;

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <input
            data-testid="query-input"
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChanges }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleAPI }
          >
            Pesquisar
          </button>
          <div>
            {search === undefined
              ? <p data-testid="home-initial-message">Nenhum produto foi encontrado</p>
              : products.map((product) => 
                <ItemCard key={ product.id } product={ product } />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
