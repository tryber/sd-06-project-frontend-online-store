import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import ProductEvaluation from '../components/PorductEvaluation';
import ListEvaluation from '../components/ListEvaluation';

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: {
        state: {
          product,
          cartList
        }
      }
    } = this.props;
    this.state = {
      cartList,
      product,
    };
    this.renderDetails = this.renderDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(item) {
    const { cartList } = this.state;
    const ourProduct = item;
    if (cartList[item.id]) {
      cartList[item.id].quantity += 1;
      this.setState({ cartList });
    } else {
      this.setState({ cartList: { ...cartList, [item.id]: item } });
      ourProduct.quantity = 1;
    }
  }

  renderDetails() {
    const { product, cartList } = this.state;
    const { title, quantity, thumbnail, price, id } = product;


    return (
      <div>
        <Link to={ { pathname: '/', state: { cartList } } }>voltar</Link>
        <Cards cartList={ cartList } />
        <div data-testid="product-detail-name">{title}</div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToCart(product) }
        >
          Adicionar
        </button>
        <div data-testid="product-detail-quantity">
          <span className="decrease-quantity"> - </span>
          quantidade:
          {quantity}
          <span className="increase-quantity"> + </span>
        </div>
        <div>{price}</div>
        <img src={ thumbnail } alt="product" />
        <ProductEvaluation productId={ id } />
        <ListEvaluation productId={ id } />
      </div>
    );
  }
  render() {
    return this.renderDetails();
  }
}
CardDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartList: PropTypes.objectOf(PropTypes.any).isRequired,
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
};
export default CardDetail;
