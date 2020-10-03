import React from 'react';
import PropTypes from 'prop-types';
import './style_sheets/PreviousReview.css';
import PreviousReviewStar from './PreviousReviewStar';


class PreviousReview extends React.Component {
  render() {
    const { email, message, rating } = this.props;
    return (
      <section className="rating-history">
        <div className="rating-column">
          <p>{email}</p>
          <PreviousReviewStar rating={ rating } />
        </div>
        <div className="rating-column">
          {message}
        </div>
      </section>
    );
  }
}

PreviousReview.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default PreviousReview;
