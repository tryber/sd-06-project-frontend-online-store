import React, { Component } from 'react';
import * as api from '../services/api';

class Categories extends Component {
	constructor() {
    super();
    this.fetchCategories = this.fetchCategories.bind(this);
    this.getId= this.getId.bind(this);
    
    this.state = {
      category: '',
      categories: [],
      check: false,
      productList: {},
    }
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const result = await api.getCategories();
    this.setState({
      categories: result,
    });
  }
  
  getId({ target }) {
    const { callback, getObj } = this.props;
    this.setState({ category: target.id }, async () =>{
       this.setState({ productList: await callback(this.state.category, undefined) }); 
       getObj(this.state.productList);
    })
  }

  render() {
    return (
      <div>
        {this.state.categories
        .map((cat) => 
          <div key={cat.id}>
            <label htmlFor={cat.id}>
              <input data-testid="category"
                type="radio"
                onClick={this.getId}
                name="each-category"
                id={cat.id}
              />
              {cat.name}
            </label>
          </div>
        )}
      </div>
    );
  }
}

export default Categories;
