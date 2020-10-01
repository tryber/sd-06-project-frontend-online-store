import React from 'react';
import './StoreProductCard.css';

function StoreProductCard(product, handleState) {
  const { price, title, thumbnail } = product;
  return (
    <div className="card" key={ title } data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <div className="product-data">
        <p className="title">{title}</p>
        <p className="price">{`R$: ${price}`}</p>
      </div>
      <div>
        <button
          type="button"
          name="productsOnCart"
          data-testid="product-add-to-cart"
          value={ JSON.stringify(product) }
          onClick={ handleState }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default StoreProductCard;
