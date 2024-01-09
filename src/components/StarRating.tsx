import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { rateMovie, rateTVShow } from '../utils/api/mutations';
import { DisplayType } from '../utils/types';
import 'react-toastify/dist/ReactToastify.css';

const ratingSchema = z.number().min(0).max(10).step(0.5);

export const StarRating = ({
  displayType,
  id,
}: {
  displayType: DisplayType;
  id: number;
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [error, setError] = useState('');
  const onSuccess = () =>
    toast.success('Successfully rated!', {
      theme: 'light',
      autoClose: 2000,
    });
  const onError = () =>
    toast.error('Something went wrong!', {
      theme: 'light',
      autoClose: 2000,
    });
  const { mutate: rateMovieMutation } = useMutation({
    mutationKey: ['rateMovie'],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess,
    onError,
  });
  const { mutate: rateTVShowMutation } = useMutation({
    mutationKey: ['rateTVShow'],
    mutationFn: (id: number) => rateTVShow(id, rating),
    onSuccess,
    onError,
  });

  const rate =
    displayType === DisplayType.Movies ? rateMovieMutation : rateTVShowMutation;

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
    rate(id);
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
