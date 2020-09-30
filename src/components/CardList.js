import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import CategoriesList from './CategoriesList';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      products: [],
      categoryId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickID = this.handleClickID.bind(this);
  }

  handleClick() {
    const { value } = this.state;
    if (value !== '') {
      this.fetchCard('');
    }
  }

  handleClickID(catID) {
    this.setState({
      categoryId: catID,
    }, () => {
      const { categoryId } = this.state;
      this.fetchCard(categoryId);
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async fetchCard(id) {
    const { value } = this.state;
    const card = await getProductsFromCategoryAndQuery(id, value);
    const { results } = card;
    this.setState({
      products: results,
    });
  }

  render() {
    const { products, value } = this.state;
    return (
      <div>
        <div>
          <input
            data-testid="query-input"
            value={ value }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </div>
        <CategoriesList handleID={ this.handleClickID } />
        <div>
          { products.map((product) => <Card product={ product } key={ product.id } />)}
        </div>
      </div>
    );
  }
}

export default CardList;
