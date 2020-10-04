import React from 'react';

class CategoryList extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map(category => {
          return <p key={ category.id }>{ category.name }</p>
        }) }
      </div>
    )
  }
}

export default CategoryList;
