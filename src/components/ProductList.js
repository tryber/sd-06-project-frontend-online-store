import React from 'react';

class ProductList extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props.items;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } width="250px" />
        <p> R${ price } </p>
      </div>
    );
  }
}


export default ProductList;
