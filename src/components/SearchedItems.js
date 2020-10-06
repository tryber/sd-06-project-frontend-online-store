import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchedItems extends Component {
  constructor() {
    super();
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    const { item: { title }, addTocart } = this.props;
    addTocart(title);
  }

  render() {
    const { item: { id, title, thumbnail, price },
      query, addTocart, freeShipping } = this.props;

    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="thumbnail" />
        { freeShipping ? <div data-testid="free-shipping">Frete Grátis </div> : <div />}
        <span>{price}</span>
        <div>
          <Link
            data-testid="product-detail-link"
            to={ { pathname: `/card/${id}`,
              state: { data: query },
              teste: { addtoCart: addTocart },
              shipping: { shipping: freeShipping },
            } }
          >
            Detalhes
          </Link>
        </div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleclick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
// Removers
SearchedItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  query: PropTypes.string.isRequired,
  addTocart: PropTypes.func.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default SearchedItems;
