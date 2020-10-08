import React from 'react';

class Evaluator extends React.Component {
  constructor(props) {
    super();

    this.saveEvaluation = this.saveEvaluation.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      id: props.productId,
      email: "",
      comment: "",
      rating: 0,
    }
  }
  
  saveEvaluation() {
    const { evaluation } = this.props;
    // Recupera array a partir do LocalStorage "ou" cria um array vazia
    const evaluations = JSON.parse(localStorage.getItem('myEvaluations') || '[]');
    const { id, email, comment, rating } = this.state;
        
    const myClickedEvaluation = { id, email, comment, rating };
    evaluations.push(myClickedEvaluation);
    
    localStorage.setItem('myEvaluations', JSON.stringify(evaluations));
    // console.log('array final', evaluations);
    evaluation();
  }

  updateState(field, value) {
    this.setState({ [field]: value });
  }
  
  render() {
    return (
      <div className="evaluator-container">
        <form>
          <label className="email-container" htmlFor="email">
            Email:
          <input type="text" name="email" id="email" 
            onChange={(event) => this.updateState('email', event.target.value)}
          />
          </label>
          <label className="stars" htmlFor="stars">
            <input onChange={(event) => this.updateState('rating', event.target.value)}
              name="rating" id="star-1" value="1" type="radio"/>
            <input onChange={(event) => this.updateState('rating', event.target.value)}
              name="rating" id="star-2" value="2" type="radio"/>
            <input onChange={(event) => this.updateState('rating', event.target.value)}
              name="rating" id="star-3" value="3" type="radio"/>
            <input onChange={(event) => this.updateState('rating', event.target.value)}
              name="rating" id="star-4" value="4" type="radio"/>
            <input onChange={(event) => this.updateState('rating', event.target.value)}
              name="rating" id="star-5" value="5" type="radio"/>
          </label>
          <label className="comment-container" htmlFor="comment">
            Comment (Optional):
            <textarea
              onChange={(event) => this.updateState('comment', event.target.value)}
              data-testid="product-detail-evaluation" 
              name="comment" id="comment" cols="15" 
              rows="5">
            </textarea>
          </label>
        </form>
        <button className="evaluator-button" type="button" onClick={this.saveEvaluation}>
          Evaluate!
        </button>
      </div>
    );
  }
}
  
export default Evaluator;
