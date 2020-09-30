import React from 'react';
import api from '../services/api';
import CategoryFilter from './CategoryFilter';

class EmptyProductList extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.api}</p>
        <input />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CategoryFilter />
      </div>
    );
  }
}

export default EmptyProductList;
