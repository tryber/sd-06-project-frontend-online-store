import React from 'react';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="category-container">
        {categories.map((category) => (
          <form key={category.id}>
            <input
              type="checkbox"
              name={category.id}
              data-testid="category"
            />
          </form>
        ))}
      </div>
    )
  }
}

export default CategoryList;
