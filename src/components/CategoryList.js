import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories, handleSelect } = this.props;
    const empty = 0;

    return (
      <section className="category-list">
        {(categories.length > empty)
          ? categories
            .map((category) => (
              <label htmlFor={ category.id } key={ category.id }>
                <input
                  type="radio"
                  name="category"
                  id={ category.id }
                  data-testid="category"
                  onChange={ handleSelect }
                />
                {category.name}
              </label>
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
