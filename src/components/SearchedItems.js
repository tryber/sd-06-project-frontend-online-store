import React, { Component } from 'react';

class SearchedItems extends Component {
  render() {
    const { title, thumbnail, price } = this.props.item;

    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={thumbnail} alt="thumbnail" />
        <span>{price}</span>
      </div>
    );
  }
}

export default SearchedItems;