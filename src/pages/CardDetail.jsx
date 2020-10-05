import React from 'react';


class CardDetail extends React.Component {
  render() {
    const { title, thumbnail, price, attributes } = this.props.location.state;

    return (
      <div className="item-description">
        <div className="description">
          <h2>Produto:</h2>
          <h3 data-testid="product-detail-name">{title}</h3>
          <h2>Preço:</h2>
          <h3>R$ {price}</h3>
          <img className="item-image" src={thumbnail} alt={title}></img>
        </div>
        <div className="description">
          <h2>Especificações Técnicas:</h2>
          {attributes.map(attribute => <h3>{attribute.name}: {attribute.value_name}</h3>)}
        </div>
      </div>
    )
  }
}


export default CardDetail;