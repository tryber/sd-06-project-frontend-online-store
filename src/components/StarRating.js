import React from 'react';
import PropTypes from 'prop-types';

class StarRating extends React.Component {
  constructor() {
    super();

    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleStarClick({ target }) {
    const { saveRating } = this.props;

    const starPosition = target.id - 1;
    const stars = document.getElementsByClassName('fa-star');
    const numberOfStars = 5;

    let leftRightCount;
    const indexStart = 0;
    leftRightCount = indexStart;

    const unCheckedClass = 'fa fa-star';
    const checkedClass = 'fa fa-star checked';

    for (let i = leftRightCount; i < numberOfStars; i += 1) {
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
          onKeyDown={ this.handleStarClick }
          role="button"
          aria-label="Mute volume"
          tabIndex="0"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="2"
          onKeyDown={ this.handleStarClick }
          role="button"
          aria-label="Mute volume"
          tabIndex="0"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="3"
          onKeyDown={ this.handleStarClick }
          role="button"
          aria-label="Mute volume"
          tabIndex="0"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="4"
          onKeyDown={ this.handleStarClick }
          role="button"
          aria-label="Mute volume"
          tabIndex="0"
        />
        <div
          className="fa fa-star"
          onClick={ this.handleStarClick }
          id="5"
          onKeyDown={ this.handleStarClick }
          role="button"
          aria-label="Mute volume"
          tabIndex="0"
        />
      </section>
    );
  }
}

StarRating.propTypes = {
  saveRating: PropTypes.func.isRequired,
};

export default StarRating;
