import React from 'react';

function CartProductCard(product, quantity, handleCart) {
  return (
    <div key={ product.id }>
      <p data-testid="shopping-cart-product-name">{product.title}</p>
      <p>{product.price}</p>
      <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      <button
        type="button"
        name="productsOnCart"
        data-testid="product-detail-add-to-cart"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
        hidden
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default CartProductCard;
