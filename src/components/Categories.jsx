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

  handleClick(callback, query) {
    callback(query);
  }

  render() {
    const { name } = this.state;
    const { handleRadioClick } = this.props;
    
    return (
      <nav>
        <ul>
          {name.map(names => (
            <label htmlFor={names.id} key={names.id}>
              <input
                type="radio" id={names.id}
                name="category"
                data-testid="category"
                onClick={() => this.handleClick(handleRadioClick, `${names.id}`)}
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
