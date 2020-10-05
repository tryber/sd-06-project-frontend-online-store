import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const { title, image, price} = this.props.location.state
    return (
      <div data_testid="product-detail-name">
        <div>
          <p>{`Produto: ${title} - ${price}`}</p>
        </div>
        <div>
          <div>
            <img src={ image } alt={ `product-${title}` } />
          </div>
          <div>
            <div>especificações tecnicas</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
