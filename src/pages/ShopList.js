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
    const { cartList } = this.state;
    console.log(cartList);
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

  addToCart(product) {
    const { cartList } = this.state;

    const ourProduct = product;

    if (cartList[product.id]) {
      cartList[product.id].quantity += 1;
      this.setState({ cartList });
    } else {
      this.setState({ cartList: { ...cartList, [product.id]: product } });
      ourProduct.quantity = 1;
    }
  }

  render() {
    const { categories, loading, products, cartList } = this.state;


    return (
      <section className="wrapper-category-shoplist">
        <CategoryList categories={ categories } handleSelect={ this.handleSelect } />
        <div data-testid="home-initial-message">
          <input data-testid="query-input" type="text" onChange={ this.handleChange } />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button
            data-testid="query-button"
            onClick={ this.handleClick }
            type="button"
          >
            Pesquisar
          </button>
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
