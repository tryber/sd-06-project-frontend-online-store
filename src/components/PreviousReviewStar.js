import React from 'react';
import PropTypes from 'prop-types';

class PreviousReviewStar extends React.Component {
  render() {
    const { rating } = this.props;
    const ratingNumber = parseInt(rating, 10);
    const totalStars = 5;
    const ratingArray = [];
    const checked = 'fa fa-star checked';
    const unChecked = 'fa fa-star';


    for (let index = 1; index <= totalStars; index += 1) {
      if (index <= ratingNumber) {
        ratingArray.push(checked);
      } else {
        ratingArray.push(unChecked);
      }
    }

    return (
      <section className="star-rating">
        {ratingArray.map((check, index) => <div key={ index } className={ check } />)}
      </section>
    );
  }
}

PreviousReviewStar.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default PreviousReviewStar;
