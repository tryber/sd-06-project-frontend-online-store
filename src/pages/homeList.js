import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

// constructor(props) {
//   super()
//   this.state = {
//     title: null,
//     image: null,
//     price: 0,
//   }
// }

function homeList() {
  console.log(api.getCategories());
  console.log(
    api.getProductsFromCategoryAndQuery(
      'MLB1368',
      'Arte, Papelaria e Armarinho',
    ),
  );
  return (
    <div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <input placeholder="Digite Aqui" />
      <Link to="/cart">
        <img
          data-testid="shopping-cart-button"
          width="50px"
          src="https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-carrinho-de-compras-icon-carrinho-de-compras-by-vexels.png"
          alt="card"
        />
      </Link>
    </div>
  );
}

export default homeList;
