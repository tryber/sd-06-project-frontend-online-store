import React from 'react';
import PropTypes from 'prop-types';
import CartBtn from '../services/CartBtn';
import Evaluations from '../components/Evaluations'

class ProductDetails extends React.Component {
  saveEvaluation() {
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;
    const evaluation = {
      email,
      rating,
      message,
    };
    const evaluationString = JSON.stringify(evaluation);
    localStorage.setItem('evaluations', [evaluationString]);
  }

  render() {
    const { location: { state: product } } = this.props;
    const { addToCart } = this.props;

    console.log(product);

    return (
      <div>
        <div>
          <div>
            <h1 data-testid="product-detail-name">{ product.title }</h1>
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div>
            <p>{ product.attibutes }</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => addToCart(product) }
          >
            Adicionar ao Carrinho
          </button>
          <CartBtn />
          <Evaluations productId={ product.id } />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      attibutes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
