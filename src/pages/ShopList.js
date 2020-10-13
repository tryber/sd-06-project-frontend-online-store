import React from 'react';

import PropTypes from 'prop-types';

import * as api from '../services/api';
import { CategoryContainer, RenderProduct } from '../components';

class ShopList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadCategories = this.loadCategories.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCartDropdown = this.handleCartDropdown.bind(this);
    this.handleCategoryDropdown = this.handleCategoryDropdown.bind(this);
    this.closeInactiveDropdowns = this.closeInactiveDropdowns.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
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
      cartDropdown: false,
      categoryDropdown: false,

    };
  }

  componentDidMount() {
    this.loadCategories();
    this.updateCartListFromLocalStorage();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory, cartList } = this.state;
    if (selectedCategory !== prevState.selectedCategory) this.handleClick();
    this.clearCartList(cartList);
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

  handleCartDropdown() {
    const { cartDropdown } = this.state;
    this.setState({ cartDropdown: !cartDropdown });
  }

  handleCategoryDropdown() {
    const { categoryDropdown } = this.state;
    this.setState({ categoryDropdown: !categoryDropdown });
  }

  closeInactiveDropdowns(event, wrapperRef) {
    const { className } = event.target;
    const { cartDropdown } = this.state;

    if (wrapperRef.current !== null) {
      if (cartDropdown
        && !wrapperRef.current.contains(event.target)
        && className !== 'button__add_to_cart button') {
        this.setState({ cartDropdown: false });
      }
    }
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
    const item = cartList[product.id];
    if (item && item.available_quantity > item.quantity) {
      item.quantity += 1;
      this.setState({ cartList });
    } else {
      this.setState({ cartList: { ...cartList, [product.id]: product } });
      ourProduct.quantity = 1;
    }
  }

  removeCartItem(itemId) {
    const { cartList } = this.state;
    cartList[itemId].quantity = 0;
    this.setState({ cartList });
  }

  clearCartList(cartList) {
    const cleanCartList = {};
    const zero = 0;
    Object.keys(cartList).filter((key) => cartList[key].quantity !== zero)
      .forEach((key) => { cleanCartList[key] = { ...cartList[key] }; });


    if (Object.keys(cartList).length !== Object.keys(cleanCartList).length) {
      this.setState({ cartList: cleanCartList });
      return cleanCartList;
    }
    return cartList;
  }

  render() {
    const {
      categories,
      loading,
      products,
      cartList,
      cartDropdown,
      categoryDropdown } = this.state;
    return (

      <section

        className="wrapper-category-shoplist"
      >
        <CategoryContainer
          handleSelect={ this.handleSelect }
          categories={ categories }
          cartList={ cartList }
          closeInactiveDropdowns={ this.closeInactiveDropdowns }
          cartDropdown={ cartDropdown }
          categoryDropdown={ categoryDropdown }
          handleCartDropdown={ this.handleCartDropdown }
          handleCategoryDropdown={ this.handleCategoryDropdown }
          removeCartItem={ this.removeCartItem }
        />

        <div className="productsList">
          <RenderProduct

            loading={ loading }
            products={ products }
            addToCart={ this.addToCart }
            cartList={ cartList }
          />
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
