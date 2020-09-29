import React, { Component } from 'react'

export default class CategoriesListing extends Component {
  render() {
    const { categorie } = this.props;
    const { name } = categorie;
    return (
      <p data-testid="category">{name}</p>
    )
  }
}
