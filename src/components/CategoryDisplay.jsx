import React from 'react';
import { Component } from 'react';
import * as Api from '../services/api';
import ProductList from './ProductList';
import ShoppingCartButton from './ShoppingCartButton';

class CategoryDisplay extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryID: '',
            items: [],
            cartItems: [],
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addtoCart = this.addtoCart.bind(this);
    }

    componentDidMount() {
        this.fetchApi();
    }

    async fetchApi() {
        const getCategories = await Api.getCategories()
        this.setState({
            categories: getCategories,
        });
    }

    handleSelect({ target }) {
        const { id } = target;
        const { query } = this.props;
        this.setState({ categoryID: id});
        this.handleClick(id, query);
    }

    async handleClick(categoryID, query) {
        await Api.getProductsFromCategoryAndQuery(categoryID, query).then((result) => {
            this.setState({ items: result.results});
        })
    }

    addtoCart(item) {
        const { cartItems } = this.state;
        this.setState({ cartItems: [...cartItems, item]});
    }

    render() {
        const { categories, items, categoryID, cartItems } = this.state;
        const { query } = this.props;
        return (
            <div className="category-field">
                <section className="shopping-car-button">
                    <ShoppingCartButton addtoCart= { cartItems } />
                </section>
                <p>Categorias</p>
                <ul>
                {categories.map(element => (
                    <section key={element.name}>
                        <input key={element.id} name="category" id={element.id} type="radio" data-testid="category" onChange={this.handleSelect} />
                        <label htmlFor="category" key={element.name}>{element.name}</label>
                    </section>
                ))}
                </ul>
                <button
                    type="button"
                    onClick={ () => this.handleClick(categoryID, query) }
                    data-testid="query-button"
                >
                    Buscar
                </button>
                <section className="product-list">
                    <ProductList items={ items } cartItems={ cartItems } query={ query } addtoCart= { this.addtoCart } />
                </section>
            </div>
        )
    }
}

export default CategoryDisplay;
