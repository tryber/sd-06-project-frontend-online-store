import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CampoBusca extends Component {
  constructor(props) {
    super();

    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;

    this.setState({
      search: value,
    });
  }

  render() {
    const { search } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => onClick({ search }) }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

CampoBusca.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CampoBusca;
