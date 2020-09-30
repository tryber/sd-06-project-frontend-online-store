import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="category-container">
        <form>
          {categories.map((category) => (
            <label htmlFor={category.id}>{category.name}
              <input
                key={category.id}
                type="checkbox"
                name={category.id}
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
