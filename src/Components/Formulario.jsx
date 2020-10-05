import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: '',
      commentList: [],
    };
    this.updateComment = this.updateComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  updateComment({ target }) {
    const { value } = target;
    this.setState({ newComment: value });
  }

  addComment() {
    this.setState((prevState) => ({
      commentList: [...prevState.commentList, prevState.newComment],
      newComment: '',
      // zerar o campo de comentários
    }));
  }

  render() {
    const { newComment, commentList } = this.state;
    return (
      <fieldset>
        <legend>Avaliações:</legend>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Escreva seu comentário"
          value={ newComment }
          onChange={ this.updateComment }
          rows="5"
          cols="50"
        />
        <button type="submit" onClick={ this.addComment }>
          Enviar
        </button>
        <ul>
          {commentList.map((comment) => (
            <li key={ comment }>
              { comment }
            </li>
          ))}
        </ul>
      </fieldset>
    );
  }
}

export default Formulario;
