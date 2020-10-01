import React from 'react';
import ContortoEstrelaComponente from './ContornoEstrela';
import { saveEvaluation } from '../services/api';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      texto: '',
    };
    this.textChange = this.textChange.bind(this);
    this.renderText = this.renderText.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  textChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clearText() {
    this.setState({
      email: '',
      texto: '',
    });
  }

  renderText() {
    const { email, texto } = this.state;
    const user = document.createElement('span');
    user.innerText = email;
    const textsDiv = document.getElementById('texts-div');
    const comment = document.createElement('p');
    comment.innerText = texto;
    const productId = "qualquercoisa"
    const evaluation = {
      'email': email,
      'nota': 0,
      'comentario': texto
    }
  
    saveEvaluation(productId, evaluation)

    return (
      textsDiv.appendChild(user),
      textsDiv.appendChild(comment),
      this.clearText()
    );
  }

  render() {
    const { email, texto } = this.state;
    return (
      <div id="main-div">
        <fieldset>
          <form>
            <ContortoEstrelaComponente />
            <br />
            <input
              type="email"
              placeholder="Email"
              onChange={ this.textChange }
              name="email"
              value={ email }
            />
            <br />
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem(opcional)"
              rows="5"
              onChange={ this.textChange }
              name="texto"
              value={ texto }
            />
            <br />
            <button onClick={ this.renderText } type="button">Avaliar</button>
          </form>
        </fieldset>
        <div id="texts-div" />
      </div>
    );
  }
}

export default EvaluationForm;
