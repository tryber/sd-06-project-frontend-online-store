import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CartAddButtons from '../components/CartAddButton';

class CardDetails extends React.Component {
  constructor(props) {
    super();

    this.handleAddToCartButton = this.handleAddToCartButton.bind(this);

    this.state = {
      product: {},
      productName: '',
      quantityToBuy: 0,
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
          productName: itemSearched.title,
        });
      },
    );
  }

  handleAddToCartButton() {

    const { addProductToCart } = this.props;

    this.setState ((currentState) => ({
      quantityToBuy: currentState.quantityToBuy + 1
      }), () => {
        const { productName, quantityToBuy } = this.state;
        addProductToCart( productName, quantityToBuy)
      })
  
  }


  render() {
    const { product: { thumbnail, title, price } } = this.state;

    return (
      <div data-testid="product-detail-name">
        <img src={ thumbnail } alt="product thumbnail" />
        <p>{ title }</p>
        <p>{ price }</p>
        <CartAddButtons handleAddToCartButton={this.handleAddToCartButton}/>
      </div>
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
