import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import CartButton from './CartButton';
import RatingForm from './RatingForm';
import Vote from './Vote';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.dataOK = this.dataOK.bind(this);
  }

  dataOK(data) {
    const { handleCartItems } = this.props;
    return (
      <div className="product-details">
        <div data-testid="product">
          <h4 className="product-title" data-testid="product-detail-name">{data.title}</h4>
          <img src={data.thumbnail} alt={data.title} />
          <div>R$ {data.price}</div>
          <AddCartButton handleCartItems={handleCartItems} bt="home" data={data} />
          <AddCartButton handleCartItems={handleCartItems} bt="productDetails" showBtRemove={false} data={data} />
        </div>
      </div>
    );
  }

  render() {
    const { productDetails, ratingSubmit, ratingProducts } = this.props;
    const filteredRatingProducts = ratingProducts.filter((item) => item.id === productDetails.id )
    return (
      <div>
        <Link to="/">Voltar para a Home</Link>
        <CartButton />
        {(productDetails) ? this.dataOK(productDetails) : 'Loading...'}
        <RatingForm ratingSubmit={ ratingSubmit } productDetails={productDetails} />
        {(filteredRatingProducts)
          ? filteredRatingProducts.map((item) => <Vote item={item}  />)
          : 'Seja o primeiro a avaliar este produto'}
      </div>
    );
  }
}

export default ProductDetails;