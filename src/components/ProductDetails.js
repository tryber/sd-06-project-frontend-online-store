import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgCart from '../img/imgCart.jpg';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.fetchItem = this.fetchItem.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
    this.addToCartDetail = this.addToCartDetail.bind(this);
    this.state = {
      product: '',
      writtenReview: '',
    };
  }

  componentDidMount() {
    this.fetchItem();
  }

  async fetchItem() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await response.json();
    this.setState({ product: result });
  }

  addToCartDetail() {
    const { product } = this.state;
    const { addToCart } = this.props;
    addToCart(product);
  }

  handleReviewChange({ target }) {
    const { value } = target;
    this.setState({ writtenReview: value });
  }

  render() {
    const { product, writtenReview } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <Link to="/cart">
          <button
            className="shoppingCartButtonDetails"
            data-testid="shopping-cart-button"
            type="button"
            onClick={ this.handleClick }
          >
            <img src={ imgCart } alt="shopping-cart-button" width="50" />
          </button>
        </Link>
        <div className="product">
          <p data-testid="product-detail-name">{title}</p>
          <img alt="Product" src={ thumbnail } />
          <p>
            R$:
            {' '}
            {price}
          </p>
        </div>
        <br />
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.addToCartDetail }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <br />
        <div>
          <form className="review-form">
            <label htmlFor="review-stars">
              <p>
                {' '}
                Dê uma avaliação entre 1 e 5 estrelas
                {' '}
                <input id="review-stars" type="number" min="1" max="5" />
              </p>
            </label>
            <br />
            <label htmlFor="written-review">
              <textarea
                id="written-review"
                data-testid="product-detail-evaluation"
                name="written-review"
                value={ writtenReview }
                onChange={ this.handleReviewChange }
              />
            </label>
            <br />
            <br />
            <button type="submit">
              Enviar avaliação
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
