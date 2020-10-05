import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListCard extends Component {
  render() {
    const { iten } = this.props;
    const { title, thumbnail, price, id } = iten;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: `/ProductDetails/${id}`, state: { product: iten } } }
          data-testid="product-detail-link"
        >
          <h1>{title}</h1>
          <span>{price}</span>
          <img src={ thumbnail } alt=" Product" />
        </Link>
      </div>
    );
  }
}

ListCard.propTypes = {
  iten: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ListCard;
