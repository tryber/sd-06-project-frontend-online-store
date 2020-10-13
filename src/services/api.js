export async function getCategories() {
  const urlEndPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = fetch(urlEndPoint)
    .then((response) => response.json())
    .catch((error) => { console.log(error); });
  return request;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlEndPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const request = fetch(urlEndPoint)
    .then((response) => response.json())
    .catch((error) => { console.log(error); });
  return request;
}

export function saveEvaluation(productId, evaluation) {
  const stored = localStorage.getItem(productId);
  const evaluations = [];
  if (stored != null) {
    evaluation = JSON.parse(stored);
  }
  evaluations.push(evaluation);
  localStorage.setItem(productId, JSON.stringify(evaluations));
}

export function getEvaluations(productId) {
  const stored = localStorage.getItem(productId);
  let evaluations = [];
  if (stored != null) {
    evaluations = JSON.parse(stored);
  }
  return evaluations;
}
