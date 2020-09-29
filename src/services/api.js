export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((categorias) => categorias.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(url).then((categorias) => categorias.json());
}

//"https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
