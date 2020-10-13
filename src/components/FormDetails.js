import React, { Component } from 'react';
import Comments from './Comments';

export default class FormDetails extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      msg: '',
      nota: 1,
      msgList: [],
      commentsStorage: [],
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

  async handleSubmit() {
    const { email, nota, msg } = this.state;
    const newComments = {
      email,
      nota,
      msg,
    };

    await this.setState((prevState) => ({
      msgList: [...prevState.msgList, newComments],
    }));
    const { msgList } = this.state;
    localStorage.evaluetor = await JSON.stringify(msgList);
    this.setState({
      commentsStorage: JSON.parse(localStorage.evaluetor),
    });
  }

  render() {
    const { commentsStorage } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Digite seu email:
            <input
              type="email"
              id="email"
              placeholder="digite seu email"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="nota">
            Avalie com nota o produto.
            <input
              name="nota"
              id="nota"
              type="number"
              min="1"
              max="5"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="msg">
            <textarea
              id="msg"
              name="msg"
              data-testid="product-detail-evaluation"
              placeholder="Deixe seu comentário (opcional)"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleSubmit }
          >
            Enviar
          </button>
        </form>
        <div>
          <Comments

            commentsState={ commentsStorage }
          />
        </div>
      </div>
    );
  }
}
