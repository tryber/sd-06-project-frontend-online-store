import React from 'react';
import PropTypes from 'prop-types';
import { saveEvaluation, getEvaluations } from '../services/api';

class Evaluations extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: '',
      message: '',
      list: [],
    };
    this.clickSaveEvaluation = this.clickSaveEvaluation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const { productId } = this.props;
    const evaluations = getEvaluations(productId);
    if (evaluations != null) {
      this.setState({ list: evaluations });
    }
  }

  clickSaveEvaluation() {
    const { email, rating, message } = this.state;
    const evaluation = {
      email,
      rating,
      message,
    };
    this.renderEvaluation(evaluation);
    const { productId } = this.props;
    saveEvaluation(productId, evaluation);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderEvaluation(evaluation) {
    const { list } = this.state;
    this.setState({
      list: list.concat(evaluation),
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Coloque seu email"
            name="email"
            required
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label htmlFor="rating">
            Avaliação:
            <input
              type="number"
              min={ 0 }
              max={ 5 }
              step={ 1 }
              name="rating"
              required
              onChange={ this.handleChange }
            />
            <br />
            <br />
          </label>
          <textarea
            name="message"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem(opcional)"
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <button
            type="button"
            onClick={ this.clickSaveEvaluation }
          >
            Submeter avaliação
          </button>
        </form>
        <div>
          {list.map((evaluation) => (
            <div key={ evaluation.email }>
              <p>{ evaluation.email }</p>
              <p>{ evaluation.rating }</p>
              <p>{ evaluation.message }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Evaluations.propTypes = { productId: PropTypes.string.isRequired };

export default Evaluations;
