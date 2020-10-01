import React from 'react';
import './StoreProductCard.css';
import { Link } from 'react-router-dom';

function StoreProductCard(product, handleState) {
  const { price, title, thumbnail, id } = product;
  return (
    <main>
      <div className="card" key={ title } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <div className="product-data">
          <p className="title">{title}</p>
          <p className="price">{`R$: ${price}`}</p>
          <div data-testid="product-detail-name">
            <Link
              to={ { pathname: `/product-details/${id}`, state: { product } } }
              data-testid="product-detail-link"
            >
              Details
            </Link>
          </div>
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
    </main>
  );
}

export default StoreProductCard;
