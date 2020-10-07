import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductDetails extends Component{

  constructor() {
    super();

    this.getProductById = this.getProductById.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);

    this.state = {
      products: [],
    }
  }

  async getProductById(id) {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    return response.json();
  }

  async productFetch() {
    const { id } = this.props.match.params
    const getProducts = await this.getProductById(id)
    this.setState({
      products: getProducts
    });
  }

  componentDidMount() {
    this.productFetch();
  }

  handleAddProduct(newProduct) {
    const shoppingCart = [];
    const products = JSON.parse(localStorage.getItem('cartProducts'));
    if (products) shoppingCart.push(...products, newProduct);
    else shoppingCart.push(newProduct);
    localStorage.setItem('cartProducts', JSON.stringify(shoppingCart));
  }

  render() {
    let { products } = this.state;
    if(products === []) {
      return <h1>Loading...</h1>
    }
    return(
      <div>
        <Link to="/shopping-cart"><button data-testid="shopping-cart-button">Carrinho</button></Link>
        <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleAddProduct(products) }
          >
            Adicionar ao carrinho
        </button>
        <div>
          <h2 data-testid="product-detail-name">{products.title}</h2>
          <h2>{products.price}</h2>
          <img src={products.thumbnail} alt={products.title}/>
        </div>
        <div>
          <h3>Especificações Técnicas:</h3>
          {products.attributes ? products.attributes.map((attribute) => <p key={attribute.id}>{attribute.name}: {attribute.value_name}</p>) : <h1>Load...</h1>}
        </div>
      </div>
    );
  }
}

export default ProductDetails;