import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.listener = this.listener.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.listener);
  }


  listener(event) {
    const { closeInactiveDropdowns } = this.props;
    const dropDownState = 'categoryDropdown';
    const keepOpenExceptions = ['icon-bars category', 'img-bars'];
    closeInactiveDropdowns(
      event, this.wrapperRef, keepOpenExceptions, dropDownState,
    );
  }

  render() {
    const { categories, handleSelect, categoryDropdown } = this.props;
    const empty = 0;

    return (
      <section
        ref={ this.wrapperRef }
        className={ categoryDropdown ? 'category-list-active' : 'none' }
      >
        <h1 className="category-title">Departamentos</h1>
        <div className="categories-container">
          {(categories.length > empty)
            ? categories

              .map((category) => (
                <label htmlFor={ category.id } key={ category.id }>
                  <input
                    type="radio"
                    name="category"
                    id={ category.id }
                    className="category-input"
                    data-testid="category"
                    onChange={ handleSelect }
                  />
                  {category.name}
                </label>
              ))
            : <span>Loading...</span>}
        </div>
      </section>

    );
  }
}

CategoryList.propTypes = PropTypes.shape({
  title: PropTypes.string,
  price: PropTypes.number,
}).isRequired;

export default CategoryList;
