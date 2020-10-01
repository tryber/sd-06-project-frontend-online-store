import React from 'react';

class StarRating extends React.Component {
  handleStarClick() {
    console.log('Star Clicked');
  }

  render() {
    return (
      <section className="star-rating">
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
        />
      </section>
    );
  }
}

export default StarRating;
