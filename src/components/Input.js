import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value, onClick, onChange } = this.props;
    return (
      <div className="input-container">
        <input
          type="text"
          data-testid="query-input"
          className="home-input"
          value={ value }
          onChange={ onChange }
        />
        <button
          type="button"
          data-testid="query-button"
          className="home-button"
          onClick={ onClick }
        >
          Search
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Input;
