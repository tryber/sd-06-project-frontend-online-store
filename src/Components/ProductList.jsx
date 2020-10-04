import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      loading: false,
      message: 'Digite algum termo de pesquisa ou escolha uma categoria',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(newName) {
    this.setState({
      message: newName,
    })
  }

  render() {
    // console.log(this.props.noCarrinho)
    return (
      <div>
        <p>{ this.state.message }</p>
        {this.props.search.length === 0 ? (
          <p>{ this.state.message }</p>
        ) : (
            this.props.search.map(product => {
              return <ProductCard product={ product } onNameChange={ this.onChange } />
            })
          ) }
      </div>
    )
  }
}

export default ProductList;
