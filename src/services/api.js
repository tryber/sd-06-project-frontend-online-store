export async function getCategories() {
  const endpoint = { api: 'https://api.mercadolibre.com/sites/MLB/categories' };
  const response = await fetch(endpoint.api);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  if (categoryId === '') {
    apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=';
<<<<<<< HEAD
    const response = await fetch(`${apiUrl}$${query}`);
=======

    const response = await fetch(`${apiUrl}${query}`);
>>>>>>> 452d59b9a4a8d2182395ade9c2a50a8de6df4cce
    const data = await response.json();
    return data;
  }

  if (query === '') {
    apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?category=';

    const response = await fetch(`${apiUrl}${categoryId}`);
    const data = await response.json();
    return data;
  }

  const response = await fetch(`${apiUrl}${categoryId}&q=${query}`);
  const data = await response.json();
  return data;
}
