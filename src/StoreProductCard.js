import React from 'react';
import './StoreProductCard.css';

function StoreProductCard(product) {
  const { price, title, thumbnail } = product;
  return (
    <div className="card" key={ title } data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <div className="product-data">
        <p className="title">{title}</p>
        <p className="price">{`R$: ${price}`}</p>
      </div>
    </div>
  );
}

export default StoreProductCard;
