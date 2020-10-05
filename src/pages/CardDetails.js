import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductReviewForm from '../components/ProductReviewForm';
import CartAddButtons from '../components/CartAddButton';
import addCart from '../addCart.svg';


class CardDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    api.getCategories();
    this.loadApiDetails();
  }

  async loadApiDetails() {
    const { location: { state: { data } } } = this.props;
    const { match: { params: { id } } } = this.props;

    this.setState(
      async () => {
        const apiDetails = await api.getProductsFromCategoryAndQuery('', data);
        const itemSearched = apiDetails.results.find((item) => item.id === id);

        this.setState({
          product: itemSearched,
        });
      },
    );
  }

  render() {
    const { product: { thumbnail, title, price } } = this.state;

    const { location: { teste: { addtoCart } } } = this.props;

    return (
      <main>
        <div data-testid="product-detail-name">
          <img src={ thumbnail } alt="product thumbnail" />
          <p>{ title }</p>
          <p>{ price }</p>
          <CartAddButtons addtoCart={ addtoCart } productName={ title } />
          <div>
            <Link
              data-testid="shopping-cart-button"
              to={ { pathname: '/cart' } }
            >
              <img src={ addCart } alt="button car shopping" />
            </Link>
          </div>
        </div>

        {/* <ProductReviewForm /> */}

      </main>
    );
  }
}

CardDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CardDetails;
