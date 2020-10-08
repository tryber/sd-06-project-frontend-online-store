import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AddToCartButton from '../components/AddToCartButton';
import Evaluator from '../components/Evaluator';
import SavedComments from '../components/SavedComments';

class CardDetail extends React.Component {
  constructor() {
    super();

    this.loadStateFromEvaluation = this.loadStateFromEvaluation.bind(this);

    this.state = {
      product: undefined,
      evaluations: undefined,
    }
  }

  componentDidMount(props){
    const product = this.props.location.state.product;
    this.setState({ product })
    this.loadStateFromEvaluation();
    // console.log(evaluations);
  }

  loadStateFromEvaluation() {
    const evaluations = JSON.parse(localStorage.getItem('myEvaluations') || '[]');
    this.setState({ evaluations })
  }

  showDetails(product) {
    const { title, thumbnail, price } = product;
    return (
      <div>
        <img alt="Product" src={ thumbnail } />
        <div className="product-card-body">
          <h4 data-testid="product-detail-name">{title}</h4>
          <p>{`R$ ${(price).toFixed(2)}`}</p>
          <p></p>
        </div>
        <AddToCartButton product={ product } testId="product-detail-add-to-cart" />
      </div>
    );
  }

  render() {
    const { product, evaluations } = this.state;
    // console.log(product);
    
    return (
      <div>
        <div className="product-card" >
          {product ? this.showDetails(product) : null}
        </div>
        {product ? <Evaluator evaluation={this.loadStateFromEvaluation} productId={product.id}/> : null}
        <br/>
        <ShoppingCartButton />
        <Link to="/">Voltar</Link>
        <div>
          {evaluations ? evaluations.map((item, index) =>
            <SavedComments key={index} evaluation={item}/>) : null}
        </div>
      </div>
    );
  }
}

export default CardDetail;