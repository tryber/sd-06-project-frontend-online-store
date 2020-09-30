import React from 'react';
import { BrowserRouter, Link, Redirect } from 'react-router-dom';

class ItemList extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return <Link to="/Cart">Carrinho</Link>;
  }

  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        {this.handleClick()}
      </div>
    );
  }
}

export default ItemList;
