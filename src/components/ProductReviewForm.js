import React from 'react';
import './style_sheets/ProductReviewForm.css';
import StarRating from './StarRating';
import PreviousReview from './PreviousReview';

class ProductReviewForm extends React.Component {
  constructor() {
    super();

    this.saveRating = this.saveRating.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
    this.handlestoreMessagesubmitButton = this.storeMessages.bind(this);

    this.state = {
      email: '',
      message: '',
      rating: 0,
      storedMessages: JSON.parse(localStorage.getItem('previousReviews')) !== null ? JSON.parse(localStorage.getItem('previousReviews')) : [],
      messageDisplayStyle: 'none',
    };
  }

  handleInputChange({ target }) {
    const stateName = target.id;
    this.setState({ [stateName]: target.value });
  }

  storeMessages() {
    const { storedMessages } = this.state;
    const storedMessagesStringfied = JSON.stringify(storedMessages);

    localStorage.setItem('previousReviews', storedMessagesStringfied);
  }

  handleSubmitButton() {
    const { email, message, rating } = this.state;

    this.setState((previousState) => ({
      email: '',
      message: '',
      rating: 0,
      storedMessages: [
        ...previousState.storedMessages,
        {
          email,
          message,
          rating,
        },
      ],
      messageDisplayStyle: 'inherit',
    }), () => {
      this.storeMessages();
    });
  }


  saveRating(star) {
    this.setState({ rating: star });
  }

  render() {
    // const displayTimeoutReset = 5000;
    // setTimeout(() => {
    //   this.setState({ messageDisplayStyle: 'none' });
    // }, displayTimeoutReset);

    // if (localStorage.getItem('previousReviews') !== null) {
    //   const retrieveReviews = localStorage.getItem('previousReviews');
    //   treatedReviews = JSON.parse(retrieveReviews);

    //   this.setState({ treatedMessages: treatedReviews });
    // }

    const { rating, message, email, messageDisplayStyle, storedMessages } = this.state;

    return (
      <section>
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

        {storedMessages.map((review) => (<PreviousReview
          key={ review.email }
          email={ review.email }
          message={ review.message }
          rating={ review.rating }
        />))}

      </section>
    );
  }
}

export default ProductReviewForm;
