import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CarrinhoCompras extends Component {
  // constructor() {
  //   super();
  //   // this.renderProduct = this.renderProduct.bind(this);
  //   //this.setShoppingCart = this.setShoppingCart.bind(this);

  //   this.state = {
  //    // productCartState: [],
  //   };
  // }

  // setStateCart() {
  //   const { productCart, countProducts } = this.props;
  //   this.setState({
  //     productCartState: productCart,
  //   });
  // }

  // setShoppingCart(productCart, countProducts) {
  //   if (productCart.length > 0) {
  //     return productCart.map((product, index) => (
  //       <div style={{ background: "yellow" }} key={index}>
  //         <h3
  //           style={{ color: "red" }}
  //           data-testid="shopping-cart-product-name"
  //         >
  //           {product.name}
  //         </h3>
  //         <h3 style={{ color: "blue" }} data-testid="shopping-cart-product-quantity">{countProducts}</h3>
  //       </div>
  //     ))
  //   }
  //   return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>

  // }

  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

// CarrinhoCompras.propTypes = {
//   productCart: PropTypes.array.isRequired,
//   countProducts: PropTypes.string.isRequired,
// };
export default CarrinhoCompras;
