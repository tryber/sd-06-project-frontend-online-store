import React from 'react';

export default class ProductEvaluations extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addLocalItem = this.addLocalItem.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);

    this.state = {
      evaluatorList: [],
      evaluatorRating: 1,
      evaluatorText: '',
      retrieveArray: [],
    };
  }

  handleOnchange(field, newValue) {
    this.setState({ [field]: newValue });
  }

  handleSubmit() {
    const newOpinion = `${this.state.evaluatorText} ${this.state.evaluatorRating}`;
    this.setState((prevState) => ({
      evaluatorList: [...prevState.evaluatorList, newOpinion],
    }), () => {
      this.addLocalItem();
      this.retrieveLocalItem();
    });
  }

  addLocalItem() {
    const { id } = this.props.product
    const evaluationToLocal = this.state.evaluatorList;
    localStorage.setItem(id, evaluationToLocal);
  }

  retrieveLocalItem() {
    const { id } = this.props.product
    const retrieveValue = localStorage.getItem(id);
    this.setState({
      retrieveArray: retrieveValue.split(','),
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="rating">
            Avaliação (de 1 a 5):
            <input
              id="rating"
              type="number"
              value={ this.state.evaluatorRating }
              onChange={(event) => this
                .handleOnchange('evaluatorRating', event.target.value) }
              name="quantidade"
              min="1"
              max="5"
            />
          </label>
          <label htmlFor="opinionText">
            Apenas algum texto em uma área de texto
            <textarea
              id="opinionText"
              data-testid="product-detail-evaluation"
              value={ this.state.evaluatorText }
              onChange={ (event) => this
                .handleOnchange('evaluatorText', event.target.value) }
            />
          </label>
        </form>
        <div>
          <button
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <div>
            { this.state.retrieveArray
              .map((opinion, index) => <p key={ index }>{ opinion }</p>) }
          </div>
        </div>
      </div>
    );
  }
}
