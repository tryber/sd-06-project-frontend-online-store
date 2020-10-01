export async function getCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const formattedCategories = await response.json();
  return formattedCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const formattedResult = await response.json();
  return formattedResult;
}

export default { getCategories, getProductsFromCategoryAndQuery };
