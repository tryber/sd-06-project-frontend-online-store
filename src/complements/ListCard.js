import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCard extends Component {
  render() {
    const { iten } = this.props;
    const { title, thumbnail, price } = iten;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <span>{price}</span>
        <img src={ thumbnail } alt=" Product" />
      </div>
    );
  }
}

ListCard.propTypes = {
  iten: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ListCard;
