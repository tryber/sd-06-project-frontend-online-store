import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart, arrayProductList } from '../dados/cart_arrayProductList';

class ProductDetails extends Component {
  constructor() {
    super();
    this.filterProduct = this.filterProduct.bind(this);
    this.reviewSubmit = this.reviewSubmit.bind(this);
    this.state = {
      email: '',
      stars: 0,
      message: '',
      reviews: [],
    }
  }


  filterProduct() {
    const { id } = this.props.match.params;
    return arrayProductList.find((element) => element.id === id);
  }

  AddCart(product) {
    cart.push(product);
  }


  reviewSubmit() {
    const { email, message, reviews } = this.state;
    const reviewObj = { email: email, message: message };
    this.setState({ reviews: [...reviews, reviewObj] })
    this.setState({ email: '', message: '' })
  }

  render() {
    const product = this.filterProduct();
    const { title, thumbnail, price, id } = product;
    return (
      <section>
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <section key={id}>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={thumbnail} />
          <span>{`R$${price}`}</span>
        </section>
        <button
          type="button"
          onClick={() => this.AddCart(product)}
          data-testid="product-detail-add-to-cart"
          >Adicionar ao cart</button>
        <form className="review">
          <input type="text"  onChange={({ target }) => {this.setState({email: target.value})}} value={this.state.email} placeholder="Email" />
          <textarea data-testid="product-detail-evaluation" onChange={({ target }) => {this.setState({message: target.value})}} value={this.state.message}  placeholder="Mensagem(opcional)" />
          <button type="button" onClick={this.reviewSubmit}>Avaliar</button>
        </form>
        {
          (this.state.reviews.length !== 0)
          ? this.state.reviews.map((review, index )=> (
            <div key={index}>
              <p>{review.email}</p>
              <p>{review.message}</p>
            </div>
          ) )
          : <h1>Produto sem avaliações...</h1>
        }
      </section>
    );
  }
}

export default ProductDetails;
