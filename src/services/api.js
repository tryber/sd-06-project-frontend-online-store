export async function getCategories() {
  const requestResponse = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return requestResponse;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const requestResponse = await fetch(URL).then((response) => response.json());
  return requestResponse;
}
