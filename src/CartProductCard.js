import React from 'react';

function CartProductCard(product, handleCart) {
  return (
    <div key={ product.id }>
      <p data-testid="shopping-cart-product-name">{product.title}</p>
      <p>{product.price}</p>
      <p data-testid="shopping-cart-product-quantity">{product.quantityOnCart}</p>
      <button
        type="button"
        name="productsOnCart/add"
        data-testid="product-increase-quantity"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
        operation="add"
      >
        Add
      </button>
      <button
        type="button"
        name="productsOnCart/del"
        data-testid="product-decrease-quantity"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
        operation="del"
      >
        Del
      </button>
    </div>
  );
}

export default CartProductCard;
