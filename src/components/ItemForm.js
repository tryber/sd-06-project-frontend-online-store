import React from 'react';

class ItemForm extends React.Component {
  constructor() {
    super();

    this.state = {
      comment: [],
      newComment: '',
    };

    this.handleComment = this.handleComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  handleComment({ target }) {
    this.setState({ newComment: target.value });
  }

  addComment() {
    const { newComment, comment } = this.state;
    this.setState({
      comment: [...comment, newComment],
    });
  }

  render() {
    const { comment, newComment } = this.state;
    return (
      <form>
        <fieldset>
          <h3>Avalie este item:</h3>
          <textarea
            data-testid="product-detail-evaluation"
            value={ newComment }
            onChange={ this.handleComment }
          />
          <button
            type="submit"
            onClick={ this.addComment }
          >
            Enviar
          </button>
          <ol>
            {comment.map((text) => (
              <li key={ comment.indexOf(text) }>
                { text }
              </li>
            ))}
          </ol>
        </fieldset>
      </form>
    );
  }
}


export default ItemForm;
