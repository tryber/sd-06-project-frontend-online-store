import React from 'react';

function CartProductCard(product, quantity) {
  return (
    <div key={ product.id }>
      <p data-testid="shopping-cart-product-name">{product.title}</p>
      <p>{product.price}</p>
      <p data-testid="shopping-cart-product-quantity">{quantity}</p>
    </div>
  );
}

export default CartProductCard;
