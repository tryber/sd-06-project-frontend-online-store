import React from 'react';

class Card extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return(
      <div>
        <h3>{title}</h3>
        <img src={thumbnail} alt="fotografia do produto" />
        <span>{price}</span>
      </div>
    )
  }
}

export default Card;