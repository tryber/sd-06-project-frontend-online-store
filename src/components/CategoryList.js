import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategoryId: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ selectedCategoryId: target.id });
  }

  render() {
    const { categories } = this.props;
    const empty = 0;

    return (
      <section>
      {(categories.length > empty)
        ? categories
          .map((category) => (
            <label htmlFor={category.id} key={ category.id }>
              <input
                type="radio" name="category" id={category.id} data-testid="category"
                onChange={this.handleChange}
              />
            {category.name}</label>
          ))
        : <span>Loading...</span>}
      </section>
    );
  }
}

CategoryList.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default CategoryList;
