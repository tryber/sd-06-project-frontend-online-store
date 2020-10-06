import React from 'react';
import ShoppingCartButton from '../components/ShoppingCartButton';
import Stars from '../components/Stars';

class CardDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
    this.addtoCart = this.addtoCart.bind(this);
}
  addtoCart() {
    const cartItems = this.props.location.cart;
    const item = this.props.location.state;
    this.setState({ cart: [...cartItems, item]});
  }
  render() {
    const { title, thumbnail, price, attributes } = this.props.location.state;
    const { cart } = this.state;
    return (
      <div>
        <div className="item-description">
          <section className="description">
            <h2>Produto:</h2>
            <h3 data-testid="product-detail-name">{title}</h3>
            <h2>Preço:</h2>
            <h3>R$ {price}</h3>
            <img className="item-image" src={thumbnail} alt={title}></img>
            <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => { this.addtoCart(); } }
          >
            Add to Cart
          </button>
          </section>
          <section className="description">
            <h2>Especificações Técnicas:</h2>
            {attributes.map(attribute => <h3>{attribute.name}: {attribute.value_name}</h3>)}
          </section>
          <section className="shopping-car-button">
            <ShoppingCartButton addtoCart={ cart } />
          </section>
        </div>
        <div className="formDeAvaliacao">
          <form action="">
            <div className="quantidade">
              <button>-</button>
              <label>0</label>
              <button>+</button>
              <button>Adicionar ao Carrinho</button><br />
            </div>
            <div className="avaliacao">
              <Stars />
              <label>Avaliações</label><br />
              <div className="textos"><br />
                <input type="email" name="" id="" placeholder="Email"/><br />
                <input type="text" name="" id="" data-testid="product-detail-evaluation" placeholder="Mensagem (Opcional)"/><br />
                <input type="submit" value="Avaliar"/>
              </div>
            </div>

          </form>

        </div>
      </div>
    )
  }
}


export default CardDetail;