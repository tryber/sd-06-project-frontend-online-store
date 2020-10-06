import React from 'react';
import { PropTypes } from 'prop-types';

class ProductEvaluation extends React.Component {
  constructor(props) {
    super();

    this.state = {
      evaluationEmail: '',
      rating: 0,
      evaluationMessage: '',
      productId: props.productId,
    };

    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveEvaluation = this.saveEvaluation.bind(this);
  }

  handleRating({ target }) {
    this.setState({ rating: target.id });
  }

  handleChange({ target }) {
    this.setState({ [target.id]: target.value });
  }

  saveEvaluation() {
    const { evaluationEmail, rating, evaluationMessage, productId } = this.state;
    const evaluations = (localStorage.getItem('evaluations'))
      ? JSON.parse(localStorage.getItem('evaluations'))
      : {};
    evaluations[productId] = {
      [evaluationEmail]: [rating, evaluationMessage],
    };
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
  }

  render() {
    const stars = [];
    const maxStars = 5;
    const start = 1;

    for (let i = start; i <= maxStars; i += 1) {
      stars.push(
        <button
          type="button"
          key={ i }
          id={ i }
          onClick={ this.handleRating }
        >
          (
          {i}
          )
        </button>,
      );
    }

    return (
      <form>
        <h2>Avaliações</h2>
        <label htmlFor="evaluationEmail">
          Email
          <input
            type="text"
            data-testid="evaluation-email"
            id="evaluationEmail"
            onChange={ this.handleChange }
          />
        </label>
        {stars}
        <label htmlFor="evaluationMessage">
          Sua mensagem
          <textarea
            data-testid="product-detail-evaluation"
            id="evaluationMessage"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.saveEvaluation }>Avaliar</button>
      </form>
    );
  }
}

ProductEvaluation.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductEvaluation;
