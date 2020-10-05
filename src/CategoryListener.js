import React from 'react';
import PropTypes from 'prop-types';
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
          <div key={ category.id }>
            <input
              id={ category.id }
              type="radio"
              name="filterId"
              data-testid="category"
              value={ category.id }
              onClick={ handleCategory }
            />
            <label htmlFor={ category.id }>{ category.name }</label>
          </div>))}
      </div>
    );
  }
}

export default CategoryListener;

CategoryListener.defaultProps = {
  handleCategory: null,
};

CategoryListener.propTypes = {
  handleCategory: PropTypes.func,
};
