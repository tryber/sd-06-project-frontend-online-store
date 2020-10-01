export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(catId = '', query = '') {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?';
  const response = await fetch(`${url}category=${catId}&q=${query}`);
  const results = await response.json();
  return results;
}
