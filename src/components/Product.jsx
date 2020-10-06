import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';

class Product extends React.Component {

  localStorageSave(data) {
    const stringData = JSON.stringify(data);
    localStorage.setItem('product', stringData);
  }

  render() {
    const { data, bt, addCartItems } = this.props;
    return (
      <div className="product-group">
        <Link data-testid="product-detail-link" to={`/products/${data.id}`} onClick={() => this.localStorageSave(data)}>
          <div id="product-view" data-testid="product">
            <h4 data-testid="shopping-cart-product-name" className="product-title">{data.title}</h4>
            <img id="product-image" src={data.thumbnail} alt={data.title} />
            <div id="product-price">R$ {data.price}</div>
          </div>
        </Link>
        <AddCartButton addCartItems={addCartItems} id="button-product-list" bt={bt} data={data} />
      </div>
    );
  }
}

export default Product;
