import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shoppingCartImage from './Images/shoppingcart.png';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;
    return (
      <div>
        <header className="navigation">
          <Link to="/">Voltar</Link>
          <Link to="/shoppingcart">
            <img width="30px" src={ shoppingCartImage } alt="Cart" />
          </Link>
        </header>
        <div className="main-productdetails">
          <div className="left-details">
            <p data-testid="product-detail-name">{ `${title} - R$ ${price}` }</p>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div>
            <p>Especificações Técnicas</p>
            <ul>
              <li>Quantidade disponivel: 0</li>
              <li>Especificação Técnicas 2</li>
              <li>Especificação Técnicas 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
