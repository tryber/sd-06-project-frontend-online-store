import React, { Component } from 'react';
import * as Api from '../services/api'; 


class Categories extends Component {
  constructor() {
    super();
    this.inputOnClick = this.inputOnClick.bind(this);
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

  inputOnClick({ target }) {
    const updateId = this.props.updateId;
    updateId(target.id);
  }

  render() {
    const { name } = this.state;
    return (
      <nav>
        <ul>
          {name.map(names => (
              <label htmlFor={names.id}>
                <input
                type="radio" id={names.id} 
                key={names.id} name="category" onClick={this.inputOnClick}
                data-testid="category"
                />
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
