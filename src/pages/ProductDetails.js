import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();

    this.fetchProduct = this.fetchProduct.bind(this);

    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { id } = this.props.match.params;
    const categoria = await getCategories();
    this.setState({
      category: categoria,
    })
    const { category } = this.state;
    console.log(category)
    console.log(id)
    const aaa = category.find(objeto => objeto.id = id).name;
    console.log(aaa)
    const bla = await getProductsFromCategoryAndQuery(id, aaa);

  }

  render() {
    const { id } = this.props.match.params;
    console.log(id);
    console.log(getProductsFromCategoryAndQuery());
    console.log(id);

    return (
      <span>AAAA</span>
      // <section key={ title } data-testid="product" className="product-content">
      //   <div className="img-div">
      //     <img className="img" src={ thumbnail } alt={ title } />
      //   </div>
      //   <div className="product-details-div">
      //     <p>{ title }</p>
      //     <p className="price">{`R$ ${price}`}</p>
      //   </div>
      // </section>
    );
  }
}

export default ProductDetails;
