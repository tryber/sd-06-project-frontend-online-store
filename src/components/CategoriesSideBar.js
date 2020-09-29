import React from 'react';
import * as api from '../services/api';
import './style_sheets/CategoriesSideBar.css';


class CategoriesSideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      apiCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ apiCategories: categories }));
  }

  render() {
    const { apiCategories } = this.state;
    console.log(apiCategories);
    return (
      <aside className="side-bar">
        {apiCategories.map((category) => (
          <div key={ category.id } data-testid="category" className="category-container">
            <input type="radio" name="categories" id={ category.id } />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </aside>
    );
  }
}

export default CategoriesSideBar;
