import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListCard extends Component {
  handleRedirect() {
    console.log('oi');
    return <Link to="/ProductDetails" />;
  }

  render() {
    const { iten } = this.props;
    const { title, thumbnail, price } = iten;

    return (
      <div onClick={ this.handleRedirect } data-testid="product">
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
