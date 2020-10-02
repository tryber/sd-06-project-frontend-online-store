import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from '../Components/Product';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { condition } = product;
    return (
      <div>
        <div className="product-detail-container">
          <Product product={ product } />
          <div className="product-detail-body">
            <h5>Especificações</h5>
            <p>{`Condições do Produto: ${condition}`}</p>
          </div>
          <div>
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
};

export default ProductDetails;
