export async function getCategories() {
  const urlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(urlCategories)
    .then((response) => response.json())
    .then((res) => res);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlProducts = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(urlProducts)
    .then((response) => response.json());
}

export function getAllProduct(word) {
  const UrlAllProducts = `https://api.mercadolibre.com/sites/MLB/search?q=${word}`;
  return fetch(UrlAllProducts)
    .then((response) => response.json())
    .then((res) => res.results);
}
