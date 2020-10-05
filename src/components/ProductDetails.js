import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.handleAPI = this.handleAPI.bind(this);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.handleAPI();
  }

  async handleAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await request.json();
    this.setState({
      product: result,
    });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div className="product-details">
        <img alt="Product" src={ thumbnail } className="product-image" />
        <div className="product-info">
          <h1 data-testid="product-detail-name">{title}</h1>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
