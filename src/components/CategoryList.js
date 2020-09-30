import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    const empty = 0;

    return (
      <section>
      {(categories.length > empty)
        ? categories
          .map((category) => (
            <p data-testid="category" key={ category.id }>{category.name}</p>
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
