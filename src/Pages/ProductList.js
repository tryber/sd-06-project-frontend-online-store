import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Product from '../Components/Product';
import CategoriesList from './CategoriesList';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Teste from '../Components/Teste';

class ProductList extends Component {
  constructor() {
    super();

    this.onClickButton = this.onClickButton.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onClickCategory = this.onClickCategory.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      valueInput: '',
      categoryId: '',
      products: [],
    };
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
    this.resetState();
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

  resetState() {
    this.setState({
      categoryId: '',
    });
  }

  render() {
    const { products, valueInput } = this.state;
    return (
      <div>
        <Input onChange={ this.handleInput } />
        <Button onClick={ () => this.onClickButton(valueInput) } />
        { products.map((prod) => <Product product={ prod } key={ prod.id } search={ products } />) }
        <CategoriesList onClick={ (event) => this.onClickCategory(event.target.value) } />
      </div>
    );
  }
}

export default ProductList;
