import React from 'react';
import PropTypes from 'prop-types';

class PreviousReviewStar extends React.Component {
  render() {
    const { rating } = this.props;
    const indexStart = 0;
    const ratingArray = [];
    for (let index = indexStart; index < rating; index += 1) {
      console.log(ratingArray);
    }
    return (
      <section className="star-rating">
        <div
          className="fa fa-star"
        />
        <div
          className="fa fa-star"
        />
        <div
          className="fa fa-star"
        />
        <div
          className="fa fa-star"
        />
        <div
          className="fa fa-star"
        />
      </section>
    );
  }
}

PreviousReviewStar.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default PreviousReviewStar;
