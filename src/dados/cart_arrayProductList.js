export const cart = [];

export const arrayProductList = [];

export const reviews = [];

export function countQuantity() {
  return cart.reduce((total, product) => {
    const { quantity } = product;
    return total + quantity;
  }, (1 - 1));
}
