import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../Components/Product';
import CategoriesList from './CategoriesList';
import Input from '../Components/Input';
import Button from '../Components/Button';

class ProductList extends Component {
  constructor() {
    super();

    this.onClickButton = this.onClickButton.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);
    this.onClickCart = this.onClickCart.bind(this);

    this.state = {
      valueInput: '',
      products: [],
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    };
  }

  onClickCart(prod) {
    const { cart } = this.state;
    cart.push(prod);
    this.setState({
      cart,
    });

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  async onClickCategory(categoriesId) {
    const { valueInput } = this.state;
    const getAll = await getProductsFromCategoryAndQuery(categoriesId, valueInput);
    this.setState({
      categoryId: categoriesId,
      products: getAll.results,
    });
  }

  async onClickButton(valueOfInput) {
    const { categoryId } = this.state;
    const getCategories = await getProductsFromCategoryAndQuery(categoryId, valueOfInput);
    const { results } = getCategories;
    this.setState({
      valueInput: valueOfInput,
      products: results,
    });
  }

  handleInput(event) {
    const input = event.target.value;
    this.setState({ valueInput: input });
  }


  render() {
    const { products, valueInput } = this.state;
    return (
      <div>
        <Input onChange={ this.handleInput } />
        <Button
          testId="query-button"
          nameButton="Buscar"
          onClick={ () => this.onClickButton(valueInput) }
        />
        { products.map((prod) => (<Product
          product={ prod }
          key={ prod.id }
          search={ products }
          onClick={ () => this.onClickCart(prod) }
        />)) }
        <CategoriesList onClick={ (event) => this.onClickCategory(event.target.name) } />
      </div>
    );
  }
}


export default ProductList;
