import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Cards extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card" data-testid="product">
        <div className="image-box">
          <img className="card-image" src={ item.thumbnail } alt="Item" />
        </div>
        <div className="card-discription">
          <h4 className="card-title">{ item.title }</h4>
          <h4 className="card-price">
            R$
            {item.price}
          </h4>
        </div>
      </div>
    );
  }
}

export default Cards;
