import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LastEvaluationProduct extends Component {
  render() {
    const { email, message } = this.props;
    return (
      <div>
        <span>{email}</span>
        <span>{message}</span>
      </div>
    );
  }
}

LastEvaluationProduct.defaultProps = {
  message: '',
};

LastEvaluationProduct.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default LastEvaluationProduct;
