import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchedItems extends Component {
  render() {
    const { item: { id, title, thumbnail, price }, query } = this.props;

    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="thumbnail" />
        <span>{price}</span>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/card/${id}`, state: { data: query } } }
        >
          Detalhes
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
  query: PropTypes.string.isRequired,
};

export default SearchedItems;
