import React, { Component } from 'react';

class ProductEvaluation extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showComments = this.showComments.bind(this);
    this.state = {
      commentary: '',
      email: '',
      numberAvaliation: 0,
    };
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  readComments() {
    return JSON.parse(localStorage.getItem('comments'));
  }

  showComments() {
    const comments = this.readComments();
    if (comments) {
      return comments
        .map((comment) => (
          <div key="avaliation">
            <h4 key={ comment[0] }>{comment[0]}</h4>
            <h4 key={ comment[1] }>{comment[1]}</h4>
            <h4 key={ comment[2] }>{comment[2]}</h4>
          </div>
        ));
    }
    console.log(comments);
  }

  handleSubmit(event) {
    event.persist();
    event.preventDefault();

    const emailValue = event.target[0].value;
    const commentaryValue = event.target[1].value;
    const numberAvaliationValue = event.target[2].value;

    let comments = this.readComments();
    const array = [emailValue, commentaryValue, numberAvaliationValue];

    if (comments) {
      comments = [...comments, array];
    } else {
      comments = [array];
    }

    localStorage.setItem('comments', JSON.stringify(comments));
    this.showComments();
  }

  render() {
    const { commentary,
      email,
      numberAvaliation,
    } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.onChange }
            placeholder="Digite E-mail"
            required="required"
          />
          <textarea
            data-testid="product-detail-evaluation"
            type="text"
            name="commentary"
            value={ commentary }
            onChange={ this.onChange }
            placeholder="Digite Comentario"
          />
          <input
            type="number"
            name="numberAvaliation"
            value={ numberAvaliation }
            onChange={ this.onChange }
            min={ 0 }
            max={ 5 }
            required="required"
          />
          <input
            type="submit"
            value="Enviar"
          />
        </form>
        <div>
          {this.showComments()}
        </div>
      </div>
    );
  }
}

export default ProductEvaluation;
