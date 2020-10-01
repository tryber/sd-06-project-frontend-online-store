import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class Cards extends Component {
  render() {
    const { item } = this.props;
    return (
      <div data-testid="product" className="card">
        <div className="image-box">
          <img className="card-image" src={ item.thumbnail } alt="Imagem do item" />
        </div>
        <div className="card-discription">
          <h4 className="card-title">{item.title}</h4>
          <h4 className="card-price">{item.price}</h4>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  item: PropTypes.exact({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
