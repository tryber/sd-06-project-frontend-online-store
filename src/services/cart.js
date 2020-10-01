function saveLocalStorage(productArray) {
  localStorage.setItem('products', JSON.stringify(productArray));
}

function loadLocalStorage() {
  return JSON.parse(localStorage.getItem('products') || '[]');
}


export default {
  createStorage: () => {
    const teste = loadLocalStorage();
    if (teste.length < 1) saveLocalStorage([]);
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
    products.push(item);
    console.log(products);
    saveLocalStorage(products);
  },
};
