import React from 'react';
import * as api from '../services/api';
import '../App.css';

class ListaCategorias extends React.Component {
  constructor() {
    super();

    this.state = {
      categoryList: []
    }
  }

  componentDidMount() {
    api.getCategories()
      .then(categories => {
        this.setState({
          categoryList: categories,
        })
      })
  }

  render() {
    return (
      <div className="category-list">
        <h3>Categorias:</h3>
        <ul>
          {this.state.categoryList.map(category => {
            return <li key={category.id} data-testid="category">{category.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default ListaCategorias;
