import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import Product from '../Components/Product';

class ProductDetails extends Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { available_quantity, condition } = product;
    return (
      <div>
        <div className="product-detail-container">
          <Product product={ product } />
          <div className="product-detail-body">
            <h5>Especificações</h5>
            <p>{`Quantidade Disponível: ${available_quantity}`}</p>
            <p>{`Condições do Produto: ${condition}`}</p>
          </div>
          <div>
            <Link to="/"><Input value="VOLTAR" /></Link>
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
