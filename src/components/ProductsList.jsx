import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class ProductsList extends Component {
  constructor() {
    super();
    this.inputOnChange = this.inputOnChange.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
    this.state = {
      card: undefined,
      value: '',
      cart: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts(query) {
    const category = await this.props.categoriesId;
    const getProducts = await Api.getProductsFromCategoryAndQuery(query, category)
    if (getProducts !== undefined) {
      this.setState({
        card: getProducts.results,
      });
    }
    
  }
  
  buttonOnClick() {
    const value = this.state.value;
    this.fetchProducts(value);
  }
  
  inputOnChange({ target }) {
    this.setState({
      value: target.value,
    });
  }


  handleAddCart({ target }) {
    const product = this.state.card.find(element => element.id === target.id);    
    this.props.cart(product)
    
  }

  render() {
    const { card, value } = this.state;
    
    if (card !== undefined) {
      return (
        <div>
          <section >
            <input type="text" data-testid="query-input" value={value} onChange={this.inputOnChange} />
            <button onClick={this.buttonOnClick} data-testid="query-button">botao</button>
          </section>
          {card.map((product) => {
            const { title, thumbnail, price, id } = product;
            return (
              <div key={id} data-testid="product">
              <Link to={`/details/${id}`} data-testid="product-detail-link">
                <section >
                  <p>{title}</p>
                  <img src={thumbnail} />
                  <p>{`R$${price}`}</p>
                </section>
                </Link>
                <button type="button" id={id} data-testid="product-add-to-cart" onClick={this.handleAddCart}>Adicionar ao cart</button>
                </div>
              
            );
          })}
        </div>
      );
    } else {
     return <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
    }
    
  } 
}

export default ProductsList;
