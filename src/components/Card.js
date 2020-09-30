import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return(
      <div data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt="fotografia do produto" />
        <span>{ price }</span>
      </div>
    );
  }
}

Card.propTypes = { product: PropTypes.shape({
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired }

export default Card;
