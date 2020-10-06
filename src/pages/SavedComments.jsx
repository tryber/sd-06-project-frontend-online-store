import React from 'react';

class SavedComments extends React.Component {
  render() {
    const { email, comment, rating } = this.props.evaluation;
    console.log(email, comment, rating);
    return (
      <div className="saved-comments-container">
        <p>{email}</p>
        <p>{comment}</p>
        <p>{rating}</p>
      </div>
    );
  }
}
  
export default SavedComments;
