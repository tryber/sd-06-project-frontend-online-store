import React from 'react';
import api from '../services/api';

class EmptyProductList extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api}</p>
        <input />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default EmptyProductList;