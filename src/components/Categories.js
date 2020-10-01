// import React from 'react';
// import * as api from '../services/api';
// import ItemCard from './ItemCard';
// class Categories extends React.Component {
//   constructor() {
//     super();
//     this.chooseCategories = this.chooseCategories.bind(this);
//     this.state = {
//       categories: [],
//       categoryId: '',
//       selectedCategory: []
//     };
//   }
//   componentDidMount() {
//     const categoriesList = [];
//     api.getCategories()
//       .then((result) => result.forEach((item) => categoriesList.push(item)))
//       .then(() => this.setState({
//         categories: categoriesList,
//       }));
//   }
//   returnCategories() {
//     const { categories } = this.state;
//     return categories.map((category) => (
//       <button
//       data-testid="category"
//       key={ category.id }
//       type="button"
//       id={ category.id }
//       onClick={this.chooseCategories}
//       >
//         { category.name }
//       </button>
//     ));
//   }
//   async chooseCategories ({ target }) {
//     this.setState({ categoryId: target.id})
//     const result = await api.getProductsFromCategoryAndQuery(target.id, "")
//     this.setState ({selectedCategory: result.results})
//   }
//   render() {
//     const { selectedCategory } = this.state;
//     return (
//       <div>
//         <p>{this.returnCategories()}</p>
//         <div>
//           {selectedCategory.map((product) => <ItemCard key={ product.id } product={ product } />)}
//         </div>
//       </div>
//     );
//   }
// }
// export default Categories;
