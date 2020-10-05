export const cart = [];

export const arrayProductList = [];

export const reviews = [];

export function countQuantity() {
  return cart.reduce((total, product) => {
    const quantity = product.quantity;
    return total + quantity;
  }, 0);
}
