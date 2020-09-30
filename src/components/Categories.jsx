import React, { Component } from 'react';
import * as Api from '../services/api'; 

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      name: [],
    };
  }
  
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const getCategories = await Api.getCategories()
      .then(resolve => resolve);
    this.setState({
      name: getCategories,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <nav>
        <ul>
          {name.map(names => (
            <label htmlFor="input-radio">
              <input type="radio" id="input-radio" data-testid="category" key={names.id} name="category" />
              {names.name}
            </label>
          )

          )}
        </ul>
      </nav>
    );
  }
}

export default Categories;
