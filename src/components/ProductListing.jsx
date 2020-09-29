import React, { Component } from 'react'

export default class ProductListing extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <div>
          <span data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</span>
        </div>
      </div>
    )
  }
}
