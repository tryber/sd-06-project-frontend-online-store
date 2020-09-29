export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
  .then(data => data.json())
  .catch(() => {
    const errorApi = 'Erro de requisição de api';
    return errorApi;
  });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  .then(data => data.json())
}
