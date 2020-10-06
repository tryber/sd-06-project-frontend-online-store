import React, { Component } from 'react';
import * as api from '../services/api';
import nav from '../style/Categories.css';


class Categories extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      name: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const getCategories = await api.getCategories()
      .then(resolve => resolve);
    this.setState({
      name: getCategories,
    });
  }

  handleClick({ target }) {
    const { handleCategoryClick } = this.props;
    
    handleCategoryClick(target.id);
  }

  render() {
    const { name } = this.state;
    
    return (
      <nav>
        <ul className="categoryList">
          {name.map(names => (
              <label htmlFor={names.id} key={names.id}>
                <input
                  type="radio" id={names.id}
                  name="categoryID"
                  data-testid="category"
                  onClick={this.handleClick}
                />
                {names.name}
              </label>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Categories;
