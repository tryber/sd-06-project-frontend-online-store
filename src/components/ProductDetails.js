import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { items } = state;
    const { title, price, thumbnail } = items;

    return (
      <div data-testid="shopping-cart-button">
        <h1>Detalhes do Produto</h1>
        <h2>{ title }</h2>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
        <Link
          to={ { pathname: '/', state: { items } } }
        >
          <button type="button">Voltar</button>
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      items: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
