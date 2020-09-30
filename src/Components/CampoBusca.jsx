import React, { Component } from 'react';

class CampoBusca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ search }
          onChange={ this.handleChanges }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleAPI }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default CampoBusca;
