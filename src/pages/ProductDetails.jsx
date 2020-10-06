import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { cart, arrayProductList, reviews, countQuantity } from '../dados/cart_arrayProductList';

class ProductDetails extends Component {
  constructor() {
    super();
    this.filterProduct = this.filterProduct.bind(this);
    this.reviewSubmit = this.reviewSubmit.bind(this);
    this.state = {
      email: '',
      stars: 0,
      message: '',
      reviewsState: [],
      countQuantity: countQuantity(),
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const reviewFilter = reviews.filter(el => el.id === id);
    this.setState({reviewsState: reviewFilter});
  }

  filterProduct() {
    const { id } = this.props.match.params;
    return arrayProductList.find((element) => element.id === id);
  }

  AddCart(product) {
    cart.push({...product, quantity: 1});
    this.setState({ countQuantity: countQuantity() });
  }


  reviewSubmit() {
    const { id } = this.props.match.params;
    const { email, message, reviewsState} = this.state;
    const reviewObj = { email, message, id };
    this.setState({ email: '', message: '' });
    reviews.push(reviewObj);
    const reviewFilter = reviews.filter(el => el.id === id);
    this.setState({reviewsState: reviewFilter});
  }

  render() {
    const product = this.filterProduct();
    const { title, thumbnail, price, id, shipping } = product;
    return (
      <section>
        <div>
          <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
          <span data-testid="shopping-cart-size">{this.state.countQuantity}</span>
        </div>
        <section key={id}>
          <h1 data-testid="product-detail-name">{title}</h1>
          <img src={thumbnail} />
          <span>{`R$${price}`}</span>
          <span data-testid="free-shipping">{shipping.free_shipping ? 'Frete Grátis' : ''}</span>
        </section>
        <button
          type="button"
          onClick={() => this.AddCart(product)}
          data-testid="product-detail-add-to-cart"
        >Adicionar ao cart</button>
        <form className="review">
          <input type="text"  onChange={({ target }) => {this.setState({email: target.value})}} value={this.state.email} placeholder="Email" />
          <textarea
            data-testid="product-detail-evaluation"
            onChange={({ target }) => {this.setState({message: target.value})}}
            value={this.state.message}
            placeholder="Mensagem(opcional)" 
          />
          <button type="button" onClick={this.reviewSubmit}>Avaliar</button>
        </form>
        {
          (this.state.reviewsState.length !== 0)
          ? this.state.reviewsState.map((review, index) => (
            <div key={index}>
              <p>{review.email}</p>
              <p>{review.message}</p>
            </div>
          ))
          : <h1>Produto sem avaliações...</h1>
        }
      </section>
    );
  }
}

export default ProductDetails;
