let cartList = [];

export function addItem(title, quantity) {
  const newItem = { title, quantity };

  cartList = cartList.concat({ title: newItem.title, quantity: newItem.quantity });
}

export { cartList };
