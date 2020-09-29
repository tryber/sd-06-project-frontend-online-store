
export function getCategories() {
  const urlApi = 'https:api.mercadolibre.com/sites/MLB/categories';
  return fetch(urlApi)
    .then((response) => response.json())
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
