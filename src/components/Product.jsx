import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';

class Product extends React.Component {

  localStorageSave(data) {
    const stringData = JSON.stringify(data);
    localStorage.setItem('product', stringData);
  }

  render() {
    const { data, bt } = this.props;
    return (
      <div className="product-group">
        <Link data-testid="product-detail-link" to={`/products/${data.id}`} onClick={() => this.localStorageSave(data)}>
          <div data-testid="product">
            <h4 data-testid="shopping-cart-product-name" className="product-title">{data.title}</h4>
            <img src={data.thumbnail} alt={data.title} />
            <div>R$ {data.price}</div>
          </div>
        </Link>
        <AddCartButton bt={bt} data={data} />
      </div>
    );
  }
}

export default Product;
