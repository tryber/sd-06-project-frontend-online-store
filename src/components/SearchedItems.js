import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchedItems extends Component {
  render() {
    const { item: { id, title, thumbnail, price } } = this.props;

    return (
      <div data-testid="product">
        <Link data-testid="product-detail-link" to={ `/${id}` }>
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="thumbnail" />
          <span>{ price }</span>
        </Link>
      </div>
    );
  }
}

SearchedItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default SearchedItems;
