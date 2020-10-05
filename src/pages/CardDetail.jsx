import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';

class CardDetail extends React.Component {
  render() {
    const { title, thumbnail, price, attributes } = this.props.location.state;
    const cartItems = this.props.location.cart;

    return (
      <div className="item-description">
        <section className="description">
          <h2>Produto:</h2>
          <h3 data-testid="product-detail-name">{title}</h3>
          <h2>Preço:</h2>
          <h3>R$ {price}</h3>
          <img className="item-image" src={thumbnail} alt={title}></img>
        </section>
        <section className="description">
          <h2>Especificações Técnicas:</h2>
          {attributes.map(attribute => <h3>{attribute.name}: {attribute.value_name}</h3>)}
        </section>
        <section className="shopping-car-button">
          <ShoppingCartButton addtoCart={ cartItems } />
        </section>
      </div>
    )
  }
}


export default CardDetail;