import { useState } from 'react';
import { z } from 'zod';

const ratingSchema = z.number().min(0).max(10).step(0.5);

export const StarRating = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    try {
      ratingSchema.parse(value);
      setRating(value);
      setError('');
    } catch (err) {
      setError('Please enter a number from 0 to 10 in 0.5 increments.');
    }
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    console.log(rating);
  };

  return (
    <div className="star-rating">
      {error && <span style={{ color: 'red' }}>{error}</span>}

      <form>
        <input
          type="number"
          id={String(Math.random())}
          value={rating === null ? '' : rating}
          min="0"
          max="10"
          step="0.5"
          onChange={handleChange}
        />
        <button className="submit-btn" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
