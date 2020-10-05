import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.handleProductQuantityAltering = this.handleProductQuantityAltering.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleStartRating = this.handleStartRating.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.loadCart = this.loadCart.bind(this);

    const { id } = this.props.match.params;

    const storeComments = JSON.parse(localStorage.getItem('storeComments')) || [];

    const productComments = storeComments.find((comments) => comments.id === id);

    let oldComments;

    if (!productComments) {
      oldComments = [];
    } else {
      oldComments = productComments.comments;
    }

    this.state = {
      quantity: 1,
      email: '',
      message: '',
      rating: 0,
      comments: oldComments,
      id,
      cartProducts: [],
      cartProductsQuantity: 0,
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  componentWillUnmount() {
    const { id, comments, cartProducts } = this.state;

    if (comments.length) {
      const storeComments = JSON.parse(localStorage.getItem('storeComments')) || [];

      const commentIndex = storeComments.findIndex((comment) => comment.id === id);

      if (!storeComments[commentIndex]) {
        storeComments.push({
          comments,
          id,
        });
        localStorage.setItem('storeComments', JSON.stringify(storeComments));
        return;
      }

      storeComments[commentIndex].comments = comments;

      localStorage.setItem('storeComments', JSON.stringify(storeComments));
    }

    localStorage.setItem('cartItems', JSON.stringify(cartProducts));
  }

  loadCart() {
    const cartProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    const initialQuantity = 0;

    const cartProductsQuantity = cartProducts.reduce((accumulator, { quantity }) => accumulator += quantity, initialQuantity);

    this.setState({ cartProducts, cartProductsQuantity });
  }

  handleInputValueChange({ name, value }) {
    this.setState({
      [name]: value,
    });
  }

  handleStartRating({ target }) {
    let rating;
    switch (target.id) {
    case 'rate-5':
      rating = 5;
      break;
    case 'rate-4':
      rating = 4;
      break;
    case 'rate-3':
      rating = 3;
      break;
    case 'rate-2':
      rating = 2;
      break;
    default:
      rating = 1;
      break;
    }

    this.setState({
      rating,
    });
  }

  addItemToCart(product, id, quantity) {
    const availableQuantity = product.available_quantity;

    if (quantity > availableQuantity) return;

    const { cartProducts, cartProductsQuantity } = this.state;
    const cartItems = [...cartProducts];
    const itemAlreadyInCart = cartItems.findIndex(({ product: item }) => item.id === id);

    if (cartItems[itemAlreadyInCart]) {
      if ((quantity + cartItems[itemAlreadyInCart].quantity) > availableQuantity) return;

      cartItems[itemAlreadyInCart].quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }

    const newCartProductsQuantity = cartProductsQuantity + quantity;
    this.setState({ cartProducts: cartItems, cartProductsQuantity: newCartProductsQuantity });
  }

  handleProductQuantityAltering({ target }) {
    let { quantity } = this.state;
    const { name } = target;
    if (name === 'plus') {
      quantity += 1;
    } else {
      quantity = quantity === 1 ? 1 : quantity - 1;
    }
    this.setState({ quantity });
  }

  handleComment(event) {
    event.preventDefault();

    const { email, rating, message, comments } = this.state;

    const comment = {
      email,
      rating,
      message,
    };

    const newComments = [...comments, comment];

    this.setState({
      comments: newComments,
    });
  }

  render() {
    const { products } = this.props.location.state;
    const { quantity, comments, id, cartProductsQuantity } = this.state;
    const product = products.find((productItem) => id === productItem.id);
    return (
      <>
        <Link to="/shopping-cart" data-testid="shopping-cart-button" className="fa fa-shopping-cart cart-icon">
          {(cartProductsQuantity > 0) && (
            <span data-testid="shopping-cart-size" className="cart-quantity">{cartProductsQuantity}</span>
          )}
        </Link>
        <Link to="/">home</Link>
        <div className="product-detail-content">
          <div data-testid="product-detail-name">
            <h2>{product.title}</h2>
            <span>
              R$
              {' '}
              {product.price}
            </span>
            <img src={ product.thumbnail } alt="imagem do produto" />
            <div>
              <p>Adicionar ao carrinho</p>
              <div>
                <button
                  type="button"
                  onClick={ this.handleProductQuantityAltering }
                  name="minus"
                >
                  -

                </button>
                <input
                  type="number"
                  min={ 1 }
                  max={ product.available_quantity }
                  step={ 1 }
                  value={ quantity }
                  readOnly
                />
                <button
                  type="button"
                  onClick={ this.handleProductQuantityAltering }
                  name="plus"
                  disabled={ quantity === product.available_quantity }
                >
                  +

                </button>
                <button
                  type="button"
                  data-testid="product-detail-add-to-cart"
                  onClick={ () => this.addItemToCart(product, id, quantity) }
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
          <section className="product-reviews">
            <h3>Avaliações</h3>
            <form onSubmit={ this.handleComment }>
              <div className="form-email-rating">
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  onChange={ ({ target }) => this.handleInputValueChange(target) }
                  required
                />
                <div className="star-rating-container">
                  <input required type="radio" name="rate" id="rate-5" onChange={ this.handleStartRating } />
                  <label className="fa fa-star" htmlFor="rate-5" />
                  <input required type="radio" name="rate" id="rate-4" onChange={ this.handleStartRating } />
                  <label className="fa fa-star" htmlFor="rate-4" />
                  <input required type="radio" name="rate" id="rate-3" onChange={ this.handleStartRating } />
                  <label className="fa fa-star" htmlFor="rate-3" />
                  <input required type="radio" name="rate" id="rate-2" onChange={ this.handleStartRating } />
                  <label className="fa fa-star" htmlFor="rate-2" />
                  <input required type="radio" name="rate" id="rate-1" onChange={ this.handleStartRating } />
                  <label className="fa fa-star" htmlFor="rate-1" />
                </div>
              </div>
              <textarea
                name="message"
                placeholder="mensagem (opcional)"
                id="message"
                data-testid="product-detail-evaluation"
                onChange={ ({ target }) => this.handleInputValueChange(target) }
              />

              <button type="submit">Comentar!</button>
            </form>

            <div className="user-reviews">
              {!comments.length
                ? <p>Sem comentários para este produto.</p>
                : (
                  comments.map((comment, index) => (
                    <div key={ `${comment.email + index}` } className="comment">
                      <div className="comment-header">
                        <p className="comment-email">{comment.email}</p>
                        <div className="comment-rating">
                          {[...new Array(comment.rating)].map((star, i) => (
                            <span key={ `${comment.email + index + i}` } className="fa fa-star comment-rating" />
                          ))}
                          {[...new Array(5 - comment.rating)].map((star, i) => (
                            <span key={ `${comment.email + index + i}` } className="fa fa-star comment-no-rating" />
                          ))}
                        </div>
                      </div>
                      <p className="comment-body">
                        {comment.message}
                      </p>
                    </div>
                  ))
                )}
            </div>
          </section>
        </div>
      </>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string,
  }) }).isRequired,
  location: PropTypes.shape({ state: PropTypes.shape({
    products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })) }) }).isRequired,
};

export default ProductDetail;
