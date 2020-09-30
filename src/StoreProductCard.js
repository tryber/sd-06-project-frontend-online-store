import React from 'react';

function StoreProductCard(product) {
  const { price, title, thumbnail } = product;
  return (
    <div key={ title } data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <div>
        <p>{title}</p>
        <p>{`R$: ${price}`}</p>
      </div>
    </div>
  );
}

export default StoreProductCard;
