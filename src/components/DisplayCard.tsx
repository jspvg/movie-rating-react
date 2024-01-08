import { DisplayData } from '../utils/types';
import { StarRating } from './StarRating';

type DisplayCardProps = DisplayData;

export const DisplayCard = ({
  id,
  overview,
  poster_path,
  title,
  vote_average,
  release_date,
}: DisplayCardProps) => {
  return (
    <div className="display-card" key={id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="poster"
      />
      <h6>{title}</h6>
      <span>{`Release date: ${release_date} | Avg rating: ${vote_average}`}</span>
      <p>
        {overview.length > 70 ? `${overview.substring(0, 70)}...` : overview}
      </p>
      <StarRating />
    </div>
  );
};
