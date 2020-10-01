import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import { Loading } from '../components';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: [],
    };

    this.fetchProduct = this.fetchProduct.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }


  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    try {
      const { match } = this.props;
      const { id } = match.params;
      const product = await api.getProduct(id);
      this.setState({ product, loading: false });
    } catch(e) {
      return (e, 'error fetching product details');
    }
  }

  renderDetails() {
    const { product } = this.state;
    const { price, title, thumbnail } = product;
    return (
      <div>
        <Link to="/">voltar</Link>
        <div data-testid="product-detail-name">{title}</div>
        <div>{price}</div>
        <img src={ thumbnail } alt="product" />
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return this.renderDetails();
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
