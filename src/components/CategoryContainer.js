import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CategoryList from './CategoryList';
import FilterSearch from './FilterSearch';
import Cart from './Cart';

class CategoryContainer extends React.Component {
  showCategories() {
    const {
      categories,
      categoryDropdown,
      handleSelect,
      closeInactiveDropdowns,
      handleCategoryDropdown,
    } = this.props;
    if (categoryDropdown) {
      return (
        <CategoryList
          categoryDropdown={ categoryDropdown }
          handleCategoryDropdown={ handleCategoryDropdown }
          closeInactiveDropdowns={ closeInactiveDropdowns }
          categories={ categories }
          handleSelect={ handleSelect }
        />
      );
    }
  }

  render() {
    const { cartList,
      removeCartItem,
      handleCartDropdown,
      cartDropdown,
      closeInactiveDropdowns,
      handleCategoryDropdown,
      filterDropdown,
      handleFilterDropdown,
      handleClick,
      handleChange } = this.props;
    return (
      <div className="nav-bar">
        <div className="category-container">
          <button
            className="icon-bars category"
            type="button"
            onClick={ () => handleCategoryDropdown() }
          >
            <div className="img-bars">
              <FontAwesomeIcon
                icon="bars"
              />
            </div>
          </button>
        </div>
        <div data-testid="home-initial-message" className="search-container">
          <input
            placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
            className="searchBar"
            data-testid="query-input"
            type="text"
            onChange={ handleChange }
          />
          <FilterSearch
            filterDropdown={ filterDropdown }
            handleFilterDropdown={ handleFilterDropdown }
            closeInactiveDropdowns={ closeInactiveDropdowns }
          />
          <button
            className="button__inSearch"
            data-testid="query-button"
            onClick={ handleClick }
            type="button"
          >
            <FontAwesomeIcon icon="search" />
          </button>
          <Cart
            closeInactiveDropdowns={ closeInactiveDropdowns }
            cartList={ cartList }
            handleCartDropdown={ handleCartDropdown }
            removeCartItem={ removeCartItem }
            cartDropdown={ cartDropdown }
          />
        </div>
        {this.showCategories()}
      </div>
    );
  }
}

export default CategoryContainer;
