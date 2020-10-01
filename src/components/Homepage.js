import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';
import CategoryDisplay from './CategoryDisplay';

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchbar: '',
    };

    this.handleChanges = this.handleChanges.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { searchbar } = this.state;

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
        </section>
        <section className="shopping-car-button">
          <ShoppingCartButton />
        </section>
        <section className="category-display">
          <CategoryDisplay query={ searchbar } />
        </section>
      </div>
    );
  }
}

export default Homepage;
