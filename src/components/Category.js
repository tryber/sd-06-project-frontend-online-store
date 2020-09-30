import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="radio">
        <label htmlFor={ data.id }>
          <input
            id={ data.id }
            type="radio"
            name="categories"
            value={ data.id }
            data-testid="category"
          />
          {data.name}
        </label>
      </div>
    );
  }
}

Categories.propTypes = { data: PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}).isRequired };

export default Categories;
