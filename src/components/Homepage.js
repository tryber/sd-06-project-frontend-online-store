import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import CategoryDisplay from './CategoryDisplay';
import ProductList from './ProductList';
import * as Api from '../services/api';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchbar: '',
      items: [],
    };

    this.handleChanges = this.handleChanges.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Api.getProductsFromCategoryAndQuery().then((result) => {
      this.setState({
        items: result.results,
      });
    });
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // async handleClick() {
  //   const word = JSON.stringify(this.state.searchbar);
  //   const getQuery = await Api.getAllProduct(word);
  //   this.setState({ items: getQuery});
  //   console.log(getQuery)
  // }

  render() {
    const { searchbar, items } = this.state;

    return (
      <div className="search">
        <section className="search-box">
          <h3
            data-testid="home-initial-message"
            className="search-text"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
          <input
            type="text"
            name="searchbar"
            data-testid="query-input"
            value={ searchbar }
            onChange={ this.handleChanges }
            className="search-input"
            id="query-input"
          />
          <button
            type="button"
            onClick={ this.handleClick }
            data-testid="query-button"
          >
            Buscar
          </button>
        </section>
        <section className="shopping-car-button">
          <ShoppingCartButton />
        </section>
        <CategoryDisplay />
        <ProductList items={ items } />
      </div>
    );
  }
}

export default Homepage;
