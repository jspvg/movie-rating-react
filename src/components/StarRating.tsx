import { Icon } from '@iconify/react';
import { useState } from 'react';

export const StarRating = () => {
  const [rating, setRating] = useState(0);
  const maxStars = 5;
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(event.target.value));
  };
  return (
    <div className="star-rating">
      <select value={rating} onChange={handleChange}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      {Array(maxStars)
        .fill(1)
        .map((_, i) =>
          i < rating ? (
            <Icon key={i} icon="solar:star-bold" color="#e4e740" />
          ) : (
            <Icon key={i} icon="solar:star-line-duotone" color="#E4E740" />
          ),
        )}
    </div>
  );
};
