import React from 'react';
import PropTypes from 'prop-types';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.handleAPI = this.handleAPI.bind(this);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.handleAPI();
  }

  async handleAPI() {
    const { match } = this.props;
    const { id } = match.params;
    const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await request.json();
    this.setState({
      product: result,
    });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>{price}</p>
        <img alt="Product" src={ thumbnail } />
        <div className="rate-form">
          <hr />
          <h2>Avaliações</h2>
          <form>
            <Rater total={5} rating={0} />
            <br />
            <input 
              type="text" 
              placeholder="Email" 
              required>
            </input>
            <br />
            <textarea 
              data-testid="product-detail-evaluation" 
              type="text" 
              placeholder="Mensagem (opcional)">
            </textarea>
            <br />
            <button>Avaliar</button>
          </form>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
