import React from 'react';
import * as api from '../services/api';
import { Link } from 'react-router-dom';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
      thumbnail: '',
      attributes: '',
      loading: true,
      id: props.id,
      quantity: 1,
    }

    this.detailedProduct = this.detailedProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  async componentDidMount() {
    const { productId, category, title } = this.props.match.params;
    const productFromId = await api.getProductsFromId(productId);
    const productList = await api.getProductsFromCategoryAndQuery(category, title);
    const productFilter = productList.results.filter(product => product.id === productId)[0];
    const product = productFilter ? productFilter : productFromId;
    const { price, thumbnail, attributes } = product;
    this.setState({
      title: product.title,
      price,
      thumbnail,
      attributes,
      loading: false,
    });
    if(!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '')
    }
  }

  lessProduct() {
    const { quantity } = this.state
    if(quantity > 1){
      const newQuantity = quantity - 1;
      this.setState({
        quantity: newQuantity,
      });
    } 
  }

  addProduct() {
    const { quantity } = this.state
    const newQuantity = quantity + 1;
    this.setState({
      quantity: newQuantity,
    });
  }

  addToCart() {
    if (!localStorage.getItem('cart')) {
      const array = [];
      const obj = {
        title: this.state.title,
        quantity: this.state.quantity,
      };
      array.push(obj);
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(array));
    } else { 
      const save =  JSON.parse(localStorage.getItem('cart'));
      const obj = {
        title: this.state.title,
        quantity: this.state.quantity,
      };
      save.push(obj);
      localStorage.clear();
      localStorage.setItem('cart', JSON.stringify(save));
   }
  }

  // addToCart() {
  //   const { title, quantity } = this.state
  //   const recoverStorage = `${localStorage.getItem('cart')}${title}&${quantity}`
  //   localStorage.clear();
  //   localStorage.setItem('cart', recoverStorage);
  // }

  detailedProduct() {
    const { title, price, thumbnail, attributes, quantity } = this.state;
    return (
      <div data-testid="product-detail-link">
        <div data-testid="product-detail-name">{title}</div>
        <div>{price}</div>
        <img src={thumbnail} alt={`${title}`} />
        {
          attributes.map(({ name, value_name, id }) => {
            return (<p key={`${id}`}>{`${name}: ${value_name}`}</p>);
          })
        }
        <div className="add-cart-button">
          <span>Quantidade</span>
          <button className="less-product" onClick={this.lessProduct}>-</button>
          <span>{quantity}</span>
          <button className="plus-product" onClick={this.addProduct}>+</button>
          <Link to={`/cart/`} data-testid="product-detail-add-to-cart" onClick={this.addToCart}>Add ao carrinho</Link>
        </div>
      </div>
    )
  }

  render() {
    const { loading } = this.state
    return (
      loading
        ? <p>Carregando...</p>
        : <this.detailedProduct />
    )
  }
}
