const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  const requestReturn = await fetch(endpoint);
  const requestObject = await requestReturn.json();
  return requestObject;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
