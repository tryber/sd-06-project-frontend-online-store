import React from 'react';
import propTypes from 'prop-types';
import * as api from '../services/api';
import './style_sheets/CategoriesSideBar.css';
//

class CategoriesSideBar extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      apiCategories: [],
    };
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({ apiCategories: categories }));
  }

  handleClick({ target }) {
    const { saveSelectedCategory } = this.props;
    const categoryId = target.id;
    saveSelectedCategory(categoryId);
  }

  render() {
    const { apiCategories } = this.state;
    return (
      <aside className="side-bar">
        <h3>Categories:</h3>
        {apiCategories.map((category) => (
          <div key={ category.id } data-testid="category" className="category-container">
            <input
              type="radio"
              name="categories"
              id={ category.id }
              onClick={ this.handleClick }
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </aside>
    );
  }
}

CategoriesSideBar.propTypes = {
  saveSelectedCategory: propTypes.func.isRequired,
};

export default CategoriesSideBar;
