import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarsRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const a = 5;
  return (
    <div>
      {[...Array(a)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label
            key={ `${star}` }
            htmlFor="rating"
          >
            <input
              type="radio"
              name="rating"
              value={ ratingValue }
              onClick={ () => setRating(ratingValue) }
            />
            <FaStar
              size={ 20 }
              className="star"
              color={ ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
              onMouseEnter={ () => setHover(ratingValue) }
              onMouseLeave={ () => setHover(null) }
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarsRating;
