import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.fetchItem = this.fetchItem.bind(this);
    this.state = {
      product: "",
    };
  }

  componentDidMount() {
    this.fetchItem();
  }

  async fetchItem() {
    const { match } = this.props;
    const { id, query } = match.params;
    const products = await api.getProductsFromCategoryAndQuery('categoryId', query);
    this.setState({ product: products.results.filter((product) => product.id === id) });
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
