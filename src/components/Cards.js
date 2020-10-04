import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Cards extends Component {
  render() {
    const { item, addtoCart } = this.props;
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
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => { addtoCart(item); } }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  item: PropTypes.exact({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  addtoCart: PropTypes.func.isRequired,
};

export default Cards;
