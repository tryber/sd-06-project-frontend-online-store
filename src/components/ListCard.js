import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListCard extends Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
    this.state = {
      quantity: 1,
    };
  }

  addToCart() {
    console.log(this.props);
  }

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
        <Link
          to={ { pathname: `/Cart/${id}/1`, state: { product: iten } } }
        >
          <button
            type="button"
            onClick={ this.addToCart }
            data-testid="product-add-to-cart">
            Adicionar ao Carrinho
          </button>
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
    quantity: PropTypes.number,
  }).isRequired,
};

export default ListCard;
