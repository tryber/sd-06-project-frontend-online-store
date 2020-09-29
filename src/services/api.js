export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (categoryId && query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (query) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category?q=${query}`;
  }
  return fetch(url).then((response) => response.json());
}
