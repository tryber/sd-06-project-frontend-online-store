import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      newNote: '',
    };

    this.newComment = this.newComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  newComment({ target }) {
    this.setState({ newNote: target.value });
  }

  addComment() {
    const { newNote } = this.state;
    this.setState((prevState) => ({
      notes: prevState.notes.concat(newNote),
    }));
  }

  render() {
    const { notes, newNote } = this.state;
    console.log(notes, newNote);
    return (
      <fieldset>
        <legend>Avaliações:</legend>
        <textarea
          data-testid="product-detail-evaluation"
          value={ newNote }
          onChange={ this.newComment }
          rows="4"
          cols="40"
        />
        <button type="submit" onClick={ this.addComment }>
          Enviar
        </button>
        <ul>
          {notes.map((comment) => (
            <li key={ comment }>
              { comment }
            </li>
          ))}
        </ul>
      </fieldset>
    );
  }
}
export default Form;
