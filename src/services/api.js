export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

  const allCategories = await fetch(endpoint).then((r) => r.json());

  return allCategories;
}

export async function getProductsFromCategoryAndQuery(
  categoryId = '',
  query = '',
) {
  let url = 'https://api.mercadolibre.com/sites/MLB/search?';

  if (categoryId !== '') {
    // if there is categoryId, concatenate url with this
    url += `category=${categoryId}`;
  }

  if (query !== '') {
    // if there is categoryId, concatenate url with '&' before query
    url = categoryId === '' ? `${url}q=${query}` : `${url}&q=${query}`;
  }

  const products = await fetch(url).then((r) => r.json());

  return products;
}
