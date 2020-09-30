import React from 'react';
import * as api from './services/api';

class CategoryListener extends React.Component {
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
    const { handleCategory } = this.props;
    const { apiCategories } = this.state;
    return (
      <div>
        {apiCategories.map((category) => (
          <div key={ category.id } data-testid="category">
            <input type="radio" name="filterId" value={ category.id } onClick={handleCategory}/>
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </div>
    );
  }
}

export default CategoryListener;
