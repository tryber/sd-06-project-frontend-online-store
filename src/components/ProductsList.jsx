import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductsList extends Component {
  render() {
    const { cards, query } = this.props;
    
    if (cards.length === 0) {  
      return (
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      );
    }

    return (
      <section>
        {cards.map((product) => {
          const { title, thumbnail, price, id } = product;

          return (
            <Link to={`/details/${query}/${id}`} data-testid="product-detail-link">
              <section key={id} data-testid="product">
                <p>{title}</p>
                <img src={thumbnail} alt='' />
                <p>{`R$${price}`}</p>
              </section>
            </Link>
          );
        })};
      </section>
    );
  }
}

export default ProductsList;
