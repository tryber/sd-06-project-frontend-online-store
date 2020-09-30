import React from 'react';
import { getCategories } from '../services/api';

class CardList extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async fetchCard() {
    const cards = await getCategories;
    console.log(cards);
    //this.setState({ cards });
  }

  render() {
    return (
      <div>
        <div>
          <input data-testid="query-input" value={this.state.value} onChange={this.handleChange}></input>
        </div>
        <div data-testid="query-button">
          <h3>Nome do produto</h3>
          <img/>
          <h4>Preço</h4>
        </div>
      </div>
    )
  }
}

export default CardList;