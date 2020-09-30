import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { props } = this.props;
    const { title, price } = props;
    return (
      <div data-testid="product">
        <div>{title}</div>
        <div>{price}</div>
      </div>
    );
  }
}

CategoryList.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default CategoryList;
