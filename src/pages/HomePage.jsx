import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductsList from '../components/ProductsList';
import SearchBar from '../components/SearchBar';

class HomePage extends Component {
  constructor() {
    super()

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);

    this.state = {
      inputValue: '',
      radioValue: '',
    };
  }

  handleButtonClick(query) {
    this.setState({
      inputValue: query,
    });
  }

  handleRadioClick(query) {
    this.setState({
      radioValue: query,
    });
  }

  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">CART</Link>
        <SearchBar handleButtonClick={this.handleButtonClick} />
        <ProductsList query={this.state.inputValue} />
        <Categories handleRadioClick={this.handleRadioClick} />
      </div>
    );
  }
}

export default HomePage;
