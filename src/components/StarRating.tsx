import { Icon } from '@iconify/react';
import { useState } from 'react';

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  //const maxStars = 10;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(event.target.value));
  };
  return (
    <div className="star-rating">
      <select id={String(Math.random())} value={rating} onChange={handleChange}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <option id={String(value)} key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      {rating > 0 ? (
        <>
          <p>{rating}</p>
          <Icon icon="solar:star-bold" color="#e4e740" />
        </>
      ) : (
        <Icon icon="solar:star-line-duotone" color="#E4E740" />
      )}
    </div>
  );
};
