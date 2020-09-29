export async function getCategories() {
  const a = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return a;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const a = await fetch(`https://api.mercadolibre.com/${categoryId}${query}`)
    .then((response) => response.json());
  return a;
}
