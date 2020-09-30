import React from 'react';

class ProductDetails extends React.Component {
  render() {
    // console.log(this.props.location.state);
    
    const { title, thumbnail, price } = this.props.location.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>Preço: {price}</p>
        <img src={thumbnail} alt={title} />
      </div>
    )
  }
}

export default ProductDetails;
