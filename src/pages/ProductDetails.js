import React, { Component } from 'react';

class ProductDetails extends Component {
  
  render() {
    const { id } = this.props.match.params;
    // const { title, thumbnail, price } = product;
    console.log(id);
    return (
      <span>AAAA</span>
      // <section key={ title } data-testid="product" className="product-content">
      //   <div className="img-div">
      //     <img className="img" src={ thumbnail } alt={ title } />
      //   </div>
      //   <div className="product-details-div">
      //     <p>{ title }</p>
      //     <p className="price">{`R$ ${price}`}</p>
      //   </div>
      // </section>
    )
  }
}

export default ProductDetails;
