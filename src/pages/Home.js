import React from 'react';
import ProductList from '../components/ProductList';


class Home extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input data-testid="query-input" type="text" name="research" />
        </form>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList products={ this.state.products } />
      </div>
    );
  }
}

export default Home;
