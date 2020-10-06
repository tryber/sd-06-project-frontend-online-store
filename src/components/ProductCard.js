import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
  }

  addItem(product) {
    const titulo = product.title;
    const price = product.price
    this.setState({ title: titulo, price: price });
  }

  render() {
    const { product } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <img src={ product.thumbnail } alt="product" className="product-card-image" />
        <div className="product-card-title">
          <h3>{product.title}</h3>
        </div>
        <div className="product-card-body">
          <p>
            Preço: {product.price}
          </p>
          <div className="product-card-links">
            <Link
              data-testid="product-detail-link"
              to={ { pathname: '/product', state: product } }
            >
              DETALHES
            </Link>
            <Link
              data-testid="product-detail-add-to-cart"
              to={ { pathname: '/shopping-cart', state: product } }
              title={this.state.title}
              quantity={this.state.quantity}
              price={this.state.price}
            >
                ADICIONAR AO CARRINHO
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
