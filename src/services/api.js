export async function getCategories() {
  let response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  response = await response.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  response = await response.json();
  return response;
}

export async function getProductsCategoriesById(categoryId) {
  let response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  response = await response.json();
  return response;
}
