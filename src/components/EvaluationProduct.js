import React, { Component } from 'react';

import LastEvaluationProduct from './LastEvaluationProduct';

class EvaluationProduct extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      stars: 1,
      messageList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const { email, stars, message } = this.state;

    const newOpinion = {
      email,
      stars,
      message,
    };
    console.log(newOpinion);
    this.setState((prevState) => ({
      messageList: [...prevState.messageList, newOpinion],
    }));
  }

  render() {
    const { email, message, stars } = this.state;
    return (
      <div>
        <form>
          Avalie este produto:
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Digite seu e-mail"
            onChange={ this.handleChange }
          />
          <input
            name="stars"
            type="number"
            min="1"
            max="5"
            value={ stars }
            onChange={ this.handleChange }
          />
          <textarea
            name="message"
            data-testid="product-detail-evaluation"
            placeholder="Deixe seu comentário (opcional)"
            value={ message }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ () => this.handleSubmit() }
          >
            Avaliar
          </button>
          <LastEvaluationProduct email={ email } stars={ stars } message={ message } />
        </form>
      </div>
    );
  }
}

export default EvaluationProduct;
