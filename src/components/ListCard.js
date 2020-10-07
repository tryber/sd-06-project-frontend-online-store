import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListCard extends Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
    this.state = {};
  }

  addToCart(item) {
    const { title, thumbnail, price, id } = item;
    const { addItem } = this.props;
    addItem({ title, thumbnail, price, id, quantity: 1 });
  }

  render() {
    const { item } = this.props;
    const { title, thumbnail, price, id } = item;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: `/ProductDetails/${id}`, state: { product: item } } }
          data-testid="product-detail-link"
        >
          <h1>{title}</h1>
          <span>{price}</span>
          <img src={ thumbnail } alt=" Product" />
        </Link>
        <button
          type="button"
          onClick={ () => this.addToCart(item) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ListCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ListCard;
