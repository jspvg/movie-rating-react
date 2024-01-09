import { DisplayData } from '../utils/types';

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
    <div className="display-card-inner" key={id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="poster"
      />
      <h6>{title!.length > 20 ? `${title?.substring(0, 20)}...` : title}</h6>
      <span>{`Release: ${release_date} | Avg rating: ${vote_average}`}</span>
      <p>
        {overview.length > 40 ? `${overview.substring(0, 40)}...` : overview}
      </p>
    </div>
  );
};
