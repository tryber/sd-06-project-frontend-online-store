import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListEvaluation extends Component {
  constructor(props) {
    super();

    this.state = {
      evaluations: (localStorage.getItem('evaluations'))
        ? JSON.parse(localStorage.getItem('evaluations'))
        : {},
      productId: props.productId,
    };
  }

  render() {
    const { evaluations, productId } = this.state;
    const productHasEvaluations = (evaluations[productId]);

    if (productHasEvaluations) {
      return (
        <div>
          {Object.keys(evaluations[productId]).map((email) => (
            <div key={ email }>
              <hr />
              <h3>{email}</h3>
              <p>
                Estrelas
                {evaluations[productId][email][0]}
              </p>
              <p>{evaluations[productId][email][1]}</p>
            </div>
          ))}
        </div>
      );
    }
    return <h3>Não há avaliações.</h3>;
  }
}

ListEvaluation.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ListEvaluation;
