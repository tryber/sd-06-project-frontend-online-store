import React from 'react';
import * as api from './services/api'

api.getCategories().then(categories => { console.log(categories) })

function CartItens() {
    return (
      <div>
          <p>items</p>
      </div>
    );
  }
  
export default CartItens;