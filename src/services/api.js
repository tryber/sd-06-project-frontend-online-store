export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(url);
  const categoriesObj = await result.json();

  return categoriesObj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const productObj = await result.json();

  return productObj;
}
