import React, { Component } from 'react';

export default class ProductRevised extends Component {
    render() {
        const {thumbnail, id, title, amount, price} = this.props;
        return(
            <div>
                <h3>Revise seus Produtos</h3>
                <img src={thumbnail} alt={id}></img>
                <p>{title}</p>
                <p><b>Total:</b>R$:{price*amount}</p>
            </div>
        )
    }
}