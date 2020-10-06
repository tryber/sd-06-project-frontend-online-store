let cartList = [];

export async function addItem({ target }) {
  const { title, price } = target;
  const newItem = { title, price };

  cartList = cartList.concat({ title: newItem.title });
}

export { cartList };
