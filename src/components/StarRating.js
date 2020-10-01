import React from 'react';

class StarRating extends React.Component {
  constructor() {
    super();

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick({ target }) {
    const { saveRating } = this.props;
    const starPosition = target.id - 1;
    let leftRightCount = 0;
    const stars = document.getElementsByClassName('fa-star');
    const unCheckedClass = 'fa fa-star';
    const checkedClass = 'fa fa-star checked';

    for (let i = 0; i < 5; i += 1) {
      stars[i].className = unCheckedClass;
    }

    while ((leftRightCount <= starPosition) && (target.className === unCheckedClass)) {
      const currentStar = stars[leftRightCount];
      currentStar.className = checkedClass;
      leftRightCount += 1;
    }

    saveRating(target.id);
  }

  render() {
    return (
      <section className="star-rating">
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="1"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="2"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="3"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="4"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="5"
        />
      </section>
    );
  }
}

export default StarRating;
