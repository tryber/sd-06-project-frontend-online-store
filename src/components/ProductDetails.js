import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.fetchItem = this.fetchItem.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
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

  handleReviewChange({ target }) {
    const { value } = target;
    this.setState({ writtenReview: value });
  }

  render() {
    const { product, writtenReview } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <p>{price}</p>
          <img alt="Product" src={ thumbnail } />
        </div>
        <div>
          <form className="review-form">
            <label htmlFor="review-stars">
              Dê uma avaliação enter 1 e 5 estrelas
              <input id="review-stars" type="number" min="1" max="5" />
            </label>
            <label htmlFor="written-review">
              <textarea
                id="written-review"
                data-testid="product-detail-evaluation"
                name="written-review"
                value={ writtenReview }
                onChange={ this.handleReviewChange }
              />
            </label>
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
  match: PropTypes.number.isRequired,
};

export default ProductDetails;
