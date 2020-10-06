import React from 'react';

import PropTypes from 'prop-types';
import * as api from '../services/api';
import { CategoryList, RenderProduct, Cart } from '../components';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadCategories = this.loadCategories.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleResetCategory = this.handleResetCategory.bind(this);
    const { location } = this.props;
    let currentCart = {};

    if (location.state) {
      const { location: { state: { cartList } } } = this.props;
      currentCart = cartList;
    }
    this.state = {
      categories: [],
      query: '',
      products: [],
      cartList: currentCart,
      selectedCategory: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.loadCategories();
    this.updateCartListFromLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory } = this.state;
    if (selectedCategory !== prevState.selectedCategory) this.handleClick();
  }


  updateCartListFromLocalStorage() {
    const zero = 0;
    const { cartList } = this.state;
    const storageCartList = JSON.parse(localStorage.getItem('cartlist'));

    if (storageCartList && Object.values(cartList).length === zero) {
      this.setState({ cartList: storageCartList });
    }
  }


  async loadCategories() {
    const categories = await api.getCategories();
    this.setState({ categories });
  }

  async handleSelect({ target }) {
    const labels = document.querySelectorAll('.category-list label');
    labels.forEach((label) => label.classList.remove('checked'));
    target.parentElement.classList.add('checked');
    this.setState({ selectedCategory: target.id }, async () => {
      await this.handleClick();
    });
  }

  handleChange({ target }) {
    this.setState({
      query: target.value,
    });
  }

  async handleClick() {
    this.setState({ loading: true });
    const { query, selectedCategory } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(selectedCategory, query);
    this.setState({
      products: products.results,
      loading: false,
    });
  }

  handleResetCategory() {
    const labels = document.querySelectorAll('.category-list label');
    labels.forEach((label) => label.classList.remove('checked'));
    const checkedCategory = document.querySelector('input[name="category"]:checked');
    if (checkedCategory) checkedCategory.checked = false;
    this.setState({ products: [], selectedCategory: '' });
  }

  addToCart(product) {
    const { cartList } = this.state;
    const ourProduct = product;
    const item = cartList[product.id];
    if (item && item.available_quantity > item.quantity) {
      item.quantity += 1;
      this.setState({ cartList });
    } else {
      this.setState({ cartList: { ...cartList, [product.id]: product } });
      ourProduct.quantity = 1;
    }
  }

  render() {
    const { categories, loading, products, cartList, selectedCategory } = this.state;
    const inCategory = (selectedCategory !== '')
      ? `Pesquisar em ${categories.find(
        (object) => object.id === selectedCategory,
      ).name}`
      : '';

    return (
      <section className="wrapper-category-shoplist">
        <header className="header">
          <section className="searchbar">
            <input
              data-testid="query-input"
              type="text"
              placeholder={ inCategory }
              onChange={ this.handleChange }
              className="search-input"
            />
            <button
              data-testid="query-button"
              onClick={ this.handleClick }
              type="button"
            >
              Pesquisar
            </button>
            {/* <span>{ inCategory }</span> */}
          </section>
          <CategoryList
            categories={ categories }
            handleSelect={ this.handleSelect }
            handleReset={ this.handleResetCategory }
          />
        </header>
        <div>
          <Cart cartList={ cartList } />
          <div className="productsList">
            <RenderProduct
              loading={ loading }
              products={ products }
              addToCart={ this.addToCart }
              cartList={ cartList }
            />
          </div>
        </div>
      </section>
    );
  }
}
ShopList.defaultProps = {
  location: { state: { cartList: {} } },

};

ShopList.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartList: PropTypes.objectOf(PropTypes.any),
    }),

  }),
};


export default ShopList;
