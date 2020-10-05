import React from 'react';

function CartProductCard(product, handleCart, productsOnCart) {
  const { id, title, quantityOnCart, price } = product;
  const productIsOnCart = productsOnCart.find((cartProduct) => cartProduct.id === id);
  let disabledOption;
  if (productIsOnCart === undefined) {
    disabledOption = (product.available_quantity < 1);
  } else {
    disabledOption = (productIsOnCart.available_quantity
      < productIsOnCart.quantityOnCart);
  }
  return (
    <div key={ id }>
      <p data-testid="shopping-cart-product-name">{title}</p>
      <p>{price}</p>
      <p data-testid="shopping-cart-product-quantity">{quantityOnCart}</p>
      <button
        type="button"
        name="productsOnCart/add"
        data-testid="product-increase-quantity"
        value={ JSON.stringify(product) }
        onClick={ handleCart }
        operation="add"
        disabled={ disabledOption }
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
