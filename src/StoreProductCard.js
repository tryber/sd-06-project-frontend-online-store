import React from 'react';
import './StoreProductCard.css';
import { Link } from 'react-router-dom';

function isFreeShipping(freeShipping) {
  if (freeShipping) {
    return (<p data-testid="free-shipping">Frete Gratis</p>);
  }
}

function StoreProductCard(product, handleCart, productsOnCart) {
  const { price, title, thumbnail, id } = product;
  const productIsOnCart = productsOnCart.find((cartProduct) => cartProduct.id === id);
  let disabledOption;
  if (productIsOnCart === undefined) {
    disabledOption = (product.available_quantity < 1);
  } else {
    disabledOption = (productIsOnCart.available_quantity
      < productIsOnCart.quantityOnCart);
  }
  return (
    <div className="card" key={ id } data-testid="product">
      <img src={ thumbnail } alt={ title } />
      <div className="product-data">
        <p className="title">{title}</p>
        <p className="price">{`R$: ${price}`}</p>
        {isFreeShipping(product.shipping.free_shipping)}
        <div data-testid="product-detail-name">
          <Link
            to={ { pathname: `/product-details/${id}`,
              state: { product },
            } }
            data-testid="product-detail-link"
          >
            Details
          </Link>
        </div>
      </div>
      <div>
        <button
          type="button"
          name="productsOnCart/add"
          data-testid="product-add-to-cart"
          value={ JSON.stringify(product) }
          onClick={ handleCart }
          disabled={ disabledOption }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default StoreProductCard;
