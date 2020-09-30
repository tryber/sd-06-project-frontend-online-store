import React from 'react';
import * as api from '../services/api';

class CardDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    api.getCategories();
    this.loadApiDetails();    
  }

  async loadApiDetails() {
    const { query } = this.props.location.state;
    const { id } = this.props.match.params;

    this.setState(
      async () => {
        const apiDetails = await api.getProductsFromCategoryAndQuery('', query);
        const itemSearched = apiDetails.results.find((item) => item.id === id);        

        this.setState({
          product: itemSearched,
        });
      },
    );
  }

  render() {
    const { thumbnail, name, price } = this.state.product;

    return (
      <div data-testid="product-detail-name">
        <img src={ thumbnail } alt="product thumbnail" />
        <p>{ name }</p>
        <p>{ price }</p>
      </div>
    );
  }
}

export default CardDetails;
