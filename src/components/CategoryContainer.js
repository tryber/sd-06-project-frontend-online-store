import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryList from './CategoryList';
import FilterSearch from './FilterSearch';
import Cart from './Cart';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickIcon = this.handleClickIcon.bind(this);
    this.state = {
      showSideBar: false,
    };
  }

  handleClickIcon() {
    const { showSideBar } = this.state;
    this.setState({ showSideBar: !showSideBar });
  }

  showCategories() {
    const { showSideBar } = this.state;
    const { categories, handleSelect } = this.props;
    if (showSideBar) {
      return (

        <CategoryList
          showSideBar={ showSideBar }
          categories={ categories }
          handleSelect={ handleSelect }
        />
      );
    }
  }

  render() {
    const { cartList } = this.props;
    return (
      <div className="nav-bar">
        <div className="category-container">
          <button
            className="icon-bars"
            type="button"
            onClick={ () => this.handleClickIcon() }
          >
            <FontAwesomeIcon
              icon="bars"
            />
          </button>
        </div>

        <div data-testid="home-initial-message" className="search-container">
          <input
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            className="searchBar"
            data-testid="query-input"
            type="text"
            onChange={ this.handleChange }
          />
          <FilterSearch />

          <button
            className="button__inSearch"
            data-testid="query-button"
            onClick={ this.handleClick }
            type="button"
          >
            <FontAwesomeIcon icon="search" />

          </button>
          <Cart cartList={ cartList } />
        </div>
        {this.showCategories()}
      </div>
    );
  }
}

export default CategoryContainer;
