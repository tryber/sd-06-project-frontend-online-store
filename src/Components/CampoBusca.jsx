import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CampoBusca extends Component {
  constructor(props) {
    super();

    this.state = {
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;

    this.setState({
      search: value,
    });
  }

  handleClick() {
    this.props.changeSearch(this.state.search)
  }

  render() {
    // console.log(this.props)
    const { search } = this.state;
    return (
      <div class="campo-busca">
        <input
          data-testid="query-input"
          type="text"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

// CampoBusca.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default CampoBusca;
