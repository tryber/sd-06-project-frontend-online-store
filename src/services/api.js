export function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json())
    .catch(() => {
      const errorApi = 'Erro de requisição de api';
      return errorApi;
    });
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((data) => data.json().then((resp) => resp))
    .catch(() => {
      const errorApi = 'Erro de requisição de api';
      return errorApi;
    });
  return res;
}

export async function getProductFromId(id) {
  const res = await fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((data) => data.json())
    .catch(() => {
      const errorApi = 'Erro de requisição de api';
      return errorApi;
    });
  return res;
}
