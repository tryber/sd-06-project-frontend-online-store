import React from 'react';
import './style_sheets/ProductReviewForm.css';
import StarRating from './StarRating';

class ProductReviewForm extends React.Component {
  constructor() {
    super();

    this.saveRating = this.saveRating.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);


    this.state = {
      email: '',
      message: '',
      rating: 0,
      messageDisplayStyle: 'none',
    };
  }

  saveRating(star) {
    this.setState({ rating: star });
  }

  handleInputChange({ target }) {
    const stateName = target.id;
    this.setState({ [stateName]: target.value });
  }

  handleSubmitButton() {
    const { email, message, rating } = this.state;
    const displayTimeoutReset = 5000;

    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('rating', rating);

    this.setState({
      email: '',
      message: '',
      rating: 0,
      messageDisplayStyle: 'inherit',
    });

    setTimeout(() => {
      this.setState({ messageDisplayStyle: 'none' });
    }, displayTimeoutReset);
  }

  render() {
    const { rating, message, email, messageDisplayStyle } = this.state;
    return (
      <form>
        <h3>Avaliações</h3>
        <fieldset>
          <legend>Avalie!</legend>
          <section className="form-input-section">
            <div className="email-and-stars">
              <input
                id="email"
                type="text"
                placeholder="E-mail"
                className="form-inputs"
                onChange={ this.handleInputChange }
                value={ email }
              />
              <StarRating saveRating={ this.saveRating } rateGiven={ rating } />
            </div>
            <textarea
              id="message"
              placeholder="Mensagem (opcional)"
              onChange={ this.handleInputChange }
              value={ message }
              data-testid="product-detail-evaluation"
            />
            <button
              type="button"
              className="form-button"
              onClick={ this.handleSubmitButton }
            >
              Avaliar
            </button>
            <span style={ { display: messageDisplayStyle } }>
              Obrigado pelo seu FeedBack
            </span>
          </section>
        </fieldset>
      </form>
    );
  }
}

export default ProductReviewForm;
