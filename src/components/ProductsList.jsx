import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class ProductsList extends Component {
  constructor() {
    super();
    this.inputOnChange = this.inputOnChange.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.state = {
      card: [],
      value: '',
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async (query) => {
    const getProducts = await Api.getProductsFromCategoryAndQuery(query)
      .then(resolve => resolve.results);
    this.setState({
      card: getProducts,
    });
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

  render() {
    const { card, value } = this.state;

    return (
      <div>
        <section >
          <input type="text" data-testid="query-input" value={value} onChange={this.inputOnChange} />
          <button onClick={this.buttonOnClick} data-testid="query-button">botao</button>
        </section>
        {card.map((product) => {
          const { title, thumbnail, price, id } = product;
          return (
            <Link to={`/details/${value}/${id}`} data-testid="product-detail-link">
              <section key={id}>
                <p>{title}</p>
                <img src={thumbnail} />
                <p>{`R$${price}`}</p>
              </section>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ProductsList;
