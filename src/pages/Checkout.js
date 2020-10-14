import React, { Component } from 'react';

import ProductRevised from '../components/ProductRevised';

export default class Checkout extends Component {

    render() {
        const local = JSON.parse(localStorage.cart);
        console.log(local)
        return(
            <div>
                <ProductRevised local={local}/>
                
            </div>
        )
    }
}