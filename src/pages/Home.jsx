import React, { Component } from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Products from '../components/Products';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleEventChecked = this.handleEventChecked.bind(this);
    this.addCartItems = this.addCartItems.bind(this);

    this.state = {
      textInput: "",
      data: null,
      checkedId: null,
      cart: {
        totalPrice: null,
        totalQtd: null,
        products: [],
      },
    };
  }

  addProduct(product, op) {
    console.log('Produto adicionado ao carrinho com sucesso!');
    console.log(product, op);
    const { cart: { products } } = this.state;
    let newCartState;
    let newListItems = [];
    if (products) {
      if (products.some((item) => (item.id === product.id))) {
        newListItems = products.map((item) => {
          if (item.id === product.id) {
            if (op === "plus") {
              item.aqtd += 1;
            } else {
              if (item.aqtd > 1) item.aqtd -= 1;
            }
            return item;
          }
          return item;
        });
        return newListItems;
      } else {
        return [...products, product];
      }
    } else {
      return [product];
    }
  }

  addCartItems(product, op) {
    if (!product.aqtd) product.aqtd = 1;
    const productsUpdated = this.addProduct(product, op);
    console.log(productsUpdated);
    this.setState({ cart: { products: productsUpdated } })
  }

  handleEvent({ target }) {
    const query = target.value;
    this.setState({ textInput: query });
  }

  handleEventChecked({ target }) {
    const categoryId = target.value;
    this.setState({ checkedId: categoryId });
    this.fetchProducts({ categoryId });
  }

  onClick() {
    const query = this.state.textInput;
    if (query !== '') this.fetchProducts({ query });
  }

  async fetchProducts({ categoryId, query }) {
    const fetchData = await api.getProductsFromCategoryAndQuery({ categoryId, query });
    this.setState({ data: fetchData });
  }

  render() {
    const { data, textInput, cart } = this.state;
    return (
      <div>
        <Header
          inputValue={ textInput }
          handleEvent={ this.handleEvent } 
          onClick={ this.onClick }
        />
        <div className="content">
          <Categories 
            handleEventChecked={ this.handleEventChecked } 
          />
          <Products
            addCartItems={this.addCartItems}
            cart={ cart }
            data={ data }
          />
        </div>
      </div>
    );
  }
}

export default Home;