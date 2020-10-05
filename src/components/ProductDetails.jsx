import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.fetchProduct = this.fetchProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      loading: false,
      product: {},
      grade: 1,
      comments: '',
      reviews: [],
    };
  }


  componentDidMount() {
    this.fetchProduct()
  }

  async fetchProduct() {
    const { id, category_id } = this.props.match.params;
    this.setState({
      loading: true,
    },
      async () => {
        const products = await api.getProductsFromCategoryAndQuery(category_id, undefined);
        const results = await products.results;
        const selectedProduct = results.find((product) => product.id === id);
        this.setState({
          product: selectedProduct,
          loading: false,
        })
      }
    )
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  onSubmit(e) {
    const { grade, comments } = this.state;
    this.setState((state, props) => ({
      reviews: [...state.reviews, { grade, comments }]
    }))
  }

  renderDetails() {
    const { id, title, price, thumbnail } = this.state.product;
    return (
      <div>
        <div>
          <p>
            <span data-testid="product-detail-name">{ title }</span>
            <span>{ `Price: R$${price}` }</span>
          </p>
          <p>{ `ID: ${id}` }</p>
          <p><img src={ thumbnail } alt={ `${title}PIC` } /></p>
        </div>
        <div></div>
      </div>
    )

  }

  renderForm() {
    return (
      <div>
        <label>
          Nota:
          <select name="grade" onChange={ this.handleChange }>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        <label>
          Comentario:
          <textarea
            onChange={ this.handleChange }
            name="comments"
            placeholder="Opcional"
            data-testid="product-detail-evaluation"
          />
        </label>
        <button onClick={ this.onSubmit }>Enviar</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Link to="/" >Voltar</Link>
        {this.state.loading ? <span>Loading</span> : this.renderDetails() }
        <Link to="/ShoppingCart" >Carrinho</Link>
        {this.renderForm() }
        {this.state.reviews.map((review) => (
          <div key={ review.comments }>
            <p>{ `Nota: ${review.grade}` }</p>
            <p>{ `Comentario: ${review.comments}` }</p>
          </div>
        )) }
      </div>
    )
  }
}