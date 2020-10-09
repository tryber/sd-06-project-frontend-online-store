// https://stackoverflow.com/questions/35577551/how-to-use-global-variables-in-react-native
// aprendi aqui que podia usar variaveis globais
export const cart = [];

export function supplyQuantity() {
  return cart.length;
}

export function checkForIds(array) {
  const ids = array.map((item) => item.id);
  return ids;
}

export default { supplyQuantity, checkForIds };
