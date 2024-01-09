import { Link } from 'react-router-dom';
import { DisplayCard } from '../../components/DisplayCard';
import { DisplayData, DisplayType } from '../../utils/types';
import { StarRating } from '../../components/StarRating';

type DisplayGridProps = {
  dataset: DisplayData[];
  displayType: DisplayType;
};

export const DisplayGrid = ({ dataset, displayType }: DisplayGridProps) => {
  return (
    <div className="display-grid">
      {dataset.map((data) => (
        <div className="display-card-outer" key={data.id}>
          <Link
            to={`/${displayType === DisplayType.Movies ? `movie` : `tvshow`}/${
              data.id
            }`}
          >
            <DisplayCard
              id={data.id}
              overview={data.overview}
              poster_path={data.poster_path}
              title={
                displayType === DisplayType.Movies ? data.title : data.name
              }
              vote_average={data.vote_average}
              release_date={
                displayType === DisplayType.TVShows
                  ? data.first_air_date
                  : data.release_date
              }
            />
          </Link>
          <StarRating />
        </div>
      ))}
    </div>
  );
};
