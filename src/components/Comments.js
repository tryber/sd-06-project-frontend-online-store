import React from 'react';
import PropTypes from 'prop-types';

function Comments(props) {
  const { commentsState } = props;

  return (
    <div>
      { commentsState.map((el) => (
        <div
          key={ el.nota }
        >
          <p>
            email:
            { el.email }
          </p>
          <p>
            Comentario:
            { el.msg }
          </p>
          <p>
            nota:
            { el.nota }
          </p>
        </div>))}
    </div>
  );
}

export default Comments;
Comments.propTypes = {
  commentsState: PropTypes.arrayOf(PropTypes.object).isRequired,
};
