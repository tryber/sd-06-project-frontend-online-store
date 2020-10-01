function saveLocalStorage(productArray) {
  localStorage.setItem('products', JSON.stringify(productArray));
}

function loadLocalStorage() {
  return JSON.parse(localStorage.getItem('products') || '[]');
}

export default {
  createStorage: () => {
    const arrayProducts = loadLocalStorage();
    if (arrayProducts.length < 1) saveLocalStorage([]);
  },

  getItemsFromLocalStorage: () => loadLocalStorage(),

  addItem: (product) => {
    const products = loadLocalStorage();
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      amount: 1,
    };
    let uniqueProduct = false;
    products.forEach((element) => {
      uniqueProduct = (uniqueProduct || item.id === element.id);
      if (uniqueProduct) element.amount += 1;
    });
    if (!uniqueProduct) products.push(item);
    saveLocalStorage(products);
  },
};
