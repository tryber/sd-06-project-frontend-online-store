import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import CategoryDisplay from './CategoryDisplay';
import ProductList from './ProductList';
import * as Api from '../services/api';

class Homepage extends React.Component {
  constructor() {
    super()

    this.state = {
      searchbar: '',
      items: [],
    }

    this.handleChanges = this.handleChanges.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    Api.getProductsFromCategoryAndQuery().then((result) => {
      this.setState({
        items: result.results,
      });
    });
    console.log(Api.getCategories())
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
    return (
      <div className="search">
        <section className="search-box">
          <label
            htmlFor="query-input " data-testid="home-initial-message"
            className="search-text"
          >Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <input type="text" name="searchbar" data-testid="query-input"
            value={this.state.searchbar} onChange={this.handleChanges}
            className="search-input"
          />
          <button type="button" onClick={this.handleClick} data-testid="query-button">Buscar</button>
        </section>
        <section className="shopping-car-button">
          <ShoppingCartButton />
        </section>
        <CategoryDisplay />
        <ProductList items={this.state.items} />
      </div>
    )
  }

}

export default Homepage;
