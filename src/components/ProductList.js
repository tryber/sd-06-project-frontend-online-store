import PropTypes from 'prop-types';
import React from 'react';
import { Route, Link } from 'react-router-dom';


class ProductList extends React.Component {
  constructor() {
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick() {
    const { title, addCart, id } = this.props;
    addCart(title, id)
  }

  render() {
    const { items, cartItem, cartCount} = this.props;
    const { title, price, thumbnail } = items;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={thumbnail} alt="item" width="250px" />
        <p>
          R$
          {price}
        </p>
        <Route>
          <Link
            // data-testid="product-detail-link"
            to={{ pathname: `/cart`, state: { cartItem, cartCount } }}
            items={items}
          >
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={this.handleAddClick}
        >
          Adicionar ao Carrinho
          </button>
          </Link>
    
          <Link
            data-testid="product-detail-link"
            to={{ pathname: `/products/${items.id}`, state: { items } }}
            details={items}
          >
            <button type="button">VER DETALHES</button>
          </Link>
        </Route>
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;
