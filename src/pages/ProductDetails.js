import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import returnArrow from '../images/return-arrow.png';
import shoppingCart from '../images/shopping-cart.png';
import '../App.css';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { location } = this.props;
    const { addFromDetails, product } = location;
    addFromDetails(product);
  }

  render() {
    const { location } = this.props;
    const { product } = location;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Link to="/">
          <img src={ returnArrow } alt="retornar" height="50" />
        </Link>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img src={ shoppingCart } height="50" alt="carrinho de compras" />
        </Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt="produto" />
        <p>{`Preço: R$ ${price}`}</p>
        <button
          type="button"
          className="add-to-cart-button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleClick() }
        >
          Adicionar ao carrinho
        </button>
        <div>
          <h4>Avaliação do Produto:</h4>
          <textarea
            className="evaluation-textarea"
            data-testid="product-detail-evaluation"
            rows="10"
            columns="500"
          />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.shape(),
  product: PropTypes.shape(),
};

ProductDetails.defaultProps = {
  title: '',
  thumbnail: '',
  price: 0,
  location: {},
  product: {},
};

export default ProductDetails;
