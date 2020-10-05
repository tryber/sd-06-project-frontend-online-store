import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';
import CategoriesList from './CategoriesList';
import Cart from '../services/cart';
import NoSearching from './NoSearching';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      products: [],
      categoryId: '',
      empty: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchCard = this.fetchCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickID = this.handleClickID.bind(this);
  }

  componentDidMount() {
    Cart.createStorage();
  }

  handleClick() {
    const { value } = this.state;
    if (value !== '' || value != null) {
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
    const noResults = 0;
    this.setState({
      products: results,
      empty: (results.length === noResults),
    });
  }

  render() {
    const { products, value, empty } = this.state;
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
          { products.map((product) => <Card product={ product } key={ product.id } />) }
          { (empty != null && empty) ? <NoSearching /> : false }
        </div>
      </div>
    );
  }
}

export default CardList;
