import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import { Loading } from '../components';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

    };
    this.fetchProduct = this.fetchProduct.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }


  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const product = await api.getProduct(id);
    this.setState({ product, loading: false });
  }

  renderDetails() {
    const { product } = this.state;
    const { price, thumbnail, title } = product;
    return (
      <div>
        <div data-testid="product-details-name">{title}</div>
        <div>{price}</div>
      </div>
    );
  }


  render() {
    console.log('renderizei');
    const { loading } = this.state;
    console.log(this.state);
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
