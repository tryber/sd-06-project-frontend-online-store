import React from 'react';
import ItemCard from './ItemCard'


class ItemList extends React.Component {
    render() {
      const { movies } = this.props;
      return (
        <section>
          {movies.map((movie) => (
            <ItemCard key={movie.title} movie={movie} />
          ))}
        </section>
      );
    }
  }


  export default ItemList;