import React from 'react';
import PropTypes from 'prop-types';
import ContortoEstrelaComponente from './ContornoEstrela';
import { saveEvaluation, getEvaluations } from '../services/api';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      texto: '',
    };
    this.renderText = this.renderText.bind(this);
    this.textChange = this.textChange.bind(this);
    this.clearText = this.clearText.bind(this);
    this.renderClick = this.renderClick.bind(this);
  }

  // componentDidMount() {
  //   const { productId } = this.props;

  //   getEvaluations(productId)
  //     .then((result) => {
  //       result.forEach((evaluation) => {
  //         this.renderText(evaluation.email, evaluation.texto);
  //       });
  //     });
  // }

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

  renderText(email, texto) {
    const user = document.createElement('span');
    user.innerText = email;
    const textsDiv = document.getElementById('texts-div');
    const comment = document.createElement('p');
    comment.innerText = texto;

    textsDiv.appendChild(user);
    textsDiv.appendChild(comment);
  }

  renderClick(productId) {
    const { email, texto } = this.state;

    this.renderText(email, texto);

    const evaluation = {
      email,
      texto,
    };
    saveEvaluation(productId, evaluation);
  }

  render() {
    const { email, texto } = this.state;
    const { productId } = this.props;
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
            <button
              onClick={ () => { this.renderClick(productId); } }
              type="button"
            >
              Avaliar
            </button>
          </form>
        </fieldset>
        <div id="texts-div" />
      </div>
    );
  }
}

EvaluationForm.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default EvaluationForm;
