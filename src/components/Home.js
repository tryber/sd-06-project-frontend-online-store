import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import * as api from '../services/api';
import imgCart from '../img/imgCart.jpg';
import CategoryList from './CategoryList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.state = {
      ProductArray: [],
      inputQuery: '',
      idCategory: '',
    };
  }

  async handleSearch() {
    const { inputQuery, idCategory } = this.state;
    const resultApi = await api.getProductsFromCategoryAndQuery(idCategory, inputQuery);
    this.setState({ ProductArray: resultApi.results });
  }

  handleChange({ target }) {
    this.setState({ inputQuery: target.value });
  }

  async handleCategory({ target }) {
    const IdTarget = target.id;
    await this.setState({ idCategory: IdTarget });
    await this.handleSearch();
  }

  render() {
    const { ProductArray, inputQuery } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <Link to="/cart">
          <button
            className="shoppingCartButton"
            data-testid="shopping-cart-button"
            type="button"
            onClick={ this.handleClick }
          >
            <img src={ imgCart } alt="shopping-cart-button" width="50" />
          </button>
        </Link>
        <p className="homeMessage" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          className="inputQuery"
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
        <CategoryList handleCategory={ this.handleCategory } />
        <ProductList
          products={ ProductArray }
          addFromList={ addToCart }
          query={ inputQuery }
        />
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Home;
