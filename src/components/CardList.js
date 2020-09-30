import React from 'react';
import { getProductsFromQuery } from '../services/api';
import Card from './Card';

class CardList extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.fetchCard();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async fetchCard() {
    const { value } = this.state;
    const cards = await getProductsFromQuery(value);
    const { results } = cards;
    this.setState({
      products: results,
    });
    console.log(results)
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <div>
          <input data-testid="query-input" value={this.state.value} onChange={this.handleChange}></input>
          <button data-testid="query-button" onClick={() => this.handleClick()}>Pesquisar</button>
        </div>
        <div>
          {products.map((product) => <Card product={ product } key={product.id}/> )}
        </div>
      </div>
    )
  }
}

export default CardList;