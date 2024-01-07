import { DisplayData } from '../utils/types';
import { StarRating } from './StarRating';

type DisplayCardProps = DisplayData;

export const DisplayCard = ({
  poster,
  title,
  description,
}: DisplayCardProps) => {
  return (
    <div className="display-card">
      <img src={poster} alt="poster" />
      <h5>{title}</h5>
      <p>{description}</p>
      <StarRating />
    </div>
  );
};
