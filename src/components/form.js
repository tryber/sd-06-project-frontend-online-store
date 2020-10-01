import React, { Component } from 'react';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      evaluation: '',
      name: '',
      email: '',
      evaluations: [],
    };
    this.textInputChange = this.textInputChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }


  textInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  ratingChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleAddSubmit() {
    const { name, email, evaluation, rating } = this.state;
    const obj = {
      name,
      email,
      evaluation,
      rating,
    };
    const { evaluations } = this.state;
    this.setState({
      evaluations: evaluations.push(obj),
    });
  }

  render() {
    const { rating, evaluation, name, email, evaluations } = this.state;
    return (
      <div>
        <fieldset>
          <form>
            <label htmlFor="name" name="name">
              Nome:
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                onChange={ this.textInputChange }
                name="name"
                value={ name }
              />
            </label>
            <label htmlFor="email" name="email">
              Email:
              <input
                id="email"
                type="email"
                placeholder="Seu email"
                onChange={ this.textInputChange }
                name="email"
                value={ email }
              />
            </label>
            <label htmlFor="evaluation" name="evaluation">
              Comentário:
              <textarea
                id="evaluation"
                data-testid="product-detail-evaluation"
                type="text"
                placeholder="Deixe seu comentário"
                onChange={ this.textInputChange }
                name="evaluation"
                value={ evaluation }
              />
            </label>
            <label htmlFor="rating" name="rating">
              Avaliação:
              <input
                id="rating"
                type="number"
                onChange={ this.ratingChange }
                name="rating"
                value={ rating }
              />
            </label>
            <button type="button" onClick={ this.handleAddSubmit }>Enviar</button>
          </form>
          <p>{ evaluations }</p>
        </fieldset>
      </div>
    );
  }
}

export default Form;
