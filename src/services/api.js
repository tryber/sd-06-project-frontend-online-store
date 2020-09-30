export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return categories;
}
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const a = await fetch(`https://api.mercadolibre.com/${categoryId}${query}`)
    .then((response) => response.json());
  console.log(a);
  return a;
}
