import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

class ProductRating extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonComment = this.handleButtonComment.bind(this);
    this.state = {
      email: '',
      rating: '',
      message: '',
      register: [],
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  registerComments(comment) {
    const { register } = this.state;
    this.setState({
      register: register.concat(comment),
    });
  }

  handleButtonComment() {
    const { email, rating, message } = this.state;
    const comment = {
      email,
      rating,
      message,
    };
    this.registerComments(comment);
  }

  render() {
    const { register } = this.state;
    return (
      <div>
        <form>
          <h2>Avaliações:</h2>
          <fieldset>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={ this.handleChange }
            />
            <Rater
              total={ 5 }
              rating={ 0 }
              onChange={ this.handleChange }
            />
            <br />
            <br />
            <textarea
              data-testid="product-detail-evaluation"
              placeholder="Mensagem (opcional)"
              name="message"
              rows="5"
              cols="50"
              onChange={ this.handleChange }
            />
            <br />
            <br />
            <button
              type="button"
              onClick={ this.handleButtonComment }
            >
              Avaliar
            </button>
          </fieldset>
        </form>
        <div>
          {register.map((comment) => (
            <div key={ comment.email }>
              <p>{ comment.email }</p>
              <p>{ comment.rating }</p>
              <p>{ comment.message }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductRating;
