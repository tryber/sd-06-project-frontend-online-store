import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import * as api from '../services/api';
import imgCart from '../img/imgCart.jpg';
import CategoryList from './CategoryList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      ProductArray: [],
      inputQuery: 'query',
    };
  }

  handleClick() {
    const { history } = this.props;
    history.push('/cart');
  }

  async handleSearch() {
    const { inputQuery } = this.state;
    const resultApi = await api.getProductsFromCategoryAndQuery('categoryId', inputQuery);
    this.setState({ ProductArray: resultApi.results });
  }

  handleChange({ target }) {
    this.setState({ inputQuery: target.value });
  }

  render() {
    const { ProductArray, inputQuery } = this.state;
    return (
      <div>
        <input
          name="inputQuery"
          onChange={ this.handleChange }
          data-testid="query-input"
          type="text"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          BUSCAR
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList />
        <ProductList products={ ProductArray } query={ inputQuery } />
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.handleClick }
        >
          <img src={ imgCart } alt="shopping-cart-button" width="25" />
        </button>
      </div>
    );
  }
}

Home.propTypes = { history: PropTypes.shape({
  push: PropTypes.func.isRequired,
}).isRequired };

export default Home;
