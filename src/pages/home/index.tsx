import { useState } from 'react';
import { DisplayGrid } from './DisplayGrid';
import { movieData, tvData } from '../../utils/mockData';

enum DisplayType {
  Movies = 'movies',
  TVShows = 'tvshows',
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies,
  );
  return (
    <div className="home-page">
      <div className="switch">
        <a
          onClick={() => setDisplayType(DisplayType.Movies)}
          className={displayType === DisplayType.Movies ? 'underline' : ''}
        >
          Movies
        </a>
        <a
          onClick={() => setDisplayType(DisplayType.TVShows)}
          className={displayType === DisplayType.TVShows ? 'underline' : ''}
        >
          TV Shows
        </a>
      </div>
      {displayType === DisplayType.Movies ? (
        <DisplayGrid dataset={movieData} />
      ) : (
        <DisplayGrid dataset={tvData} />
      )}
    </div>
  );
};

export default Home;
