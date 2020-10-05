import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.fetchItem = this.fetchItem.bind(this);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.fetchItem();
  }

  async fetchItem() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await response.json();
    this.setState({ product: result });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img alt="Product" src={ thumbnail } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.number.isRequired,
};

export default ProductDetails;
