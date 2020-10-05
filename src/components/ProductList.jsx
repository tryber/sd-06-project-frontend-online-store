import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Product.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      image: this.props.image,
      price: this.props.price,
    };
  }

  render() {
    const { title, image, price, id} = this.props;
    return (
      <div className="product-card" data-testid="product">
        <div>
          <p>{ title }</p>
        </div>
        <div>
          <img src={ image } alt="product-img" />
        </div>
        <div>
          <p>{ price }</p>
        </div>
        <div>
          <Link to={ { pathname: `/Product-details/${id}`, state: this.state } }>More Details</Link>
        </div>
      </div>
    );
  }
}

export default ProductList;
