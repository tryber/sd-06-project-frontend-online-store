export async function getCategories() {
  const apiResponse = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoryList = await apiResponse.json();

  return categoryList;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiResponse;

  if (categoryId) {
    apiResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  } else {
    apiResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }

  const searchResults = await apiResponse.json();

  return searchResults;
}
