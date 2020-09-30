import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchedItems extends Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    console.log(this.props);

    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="thumbnail" />
        <span>{ price }</span>
      </div>
    );
  }
}

SearchedItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchedItems;
