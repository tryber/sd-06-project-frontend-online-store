import React from 'react';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';
import ProductDetails from './ProductDetails';

class Product extends React.Component {

  // localStorageSave(data) {
  //   const stringData = JSON.stringify(data);
  //   localStorage.setItem('product', stringData);
  // }

  render() {
    const { data, bt, handleCartItems, removeItem, productDetailsPage, saveDetails } = this.props;
    return (
      <div className="product-group">
        <Link data-testid="product-detail-link" to={`/products/${data.id}`} onClick={() => saveDetails(data)}>
          <div id="product-view" data-testid="product">
            <h4 data-testid="shopping-cart-product-name" className="product-title">{data.title}</h4>
            <img id="product-image" src={data.thumbnail} alt={data.title} />
            <div id="product-price">R$ {data.price}</div>
          </div>
        </Link>
        <AddCartButton
          removeItem={removeItem}
          handleCartItems={handleCartItems}
          id="button-product-list"
          bt={bt}
          data={data}
        />
      </div>
    );
  }
}

export default Product;
