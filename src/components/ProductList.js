import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';


class ProductList extends React.Component {
  render() {
    const { items } = this.props;
    const { title, price, thumbnail, id } = items;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
        <BrowserRouter>
          <Route path="/productdetails/:id" render={ () => <ProductDetails id={ id } /> } />
        </BrowserRouter>
        <Link to={ `/productdetails/${id}` }>
          <button type="button" data-testid="product-detail-link">Detalhes</button>
        </Link>
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;
