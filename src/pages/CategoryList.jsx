import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="category-container">
        <form>
          {categories.map((category) => (
            <label key={category.id} htmlFor={category.name}>{category.name}
              <input
                type="checkbox"
                name={category.name}
                data-testid="category"
              />
            </label>
          ))}
        </form>
      </div>
    )
  }
}

export default CategoryList;
