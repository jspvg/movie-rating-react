import { useState } from 'react';
import { fetchMovies, fetchTVShows } from './query';
import { DisplayGrid } from './DisplayGrid';
import { DisplayType } from '../../utils/types';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies,
  );
  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
  const { data: tvData, isLoading: isLoadingTv } = useQuery({
    queryKey: ['tvshows'],
    queryFn: fetchTVShows,
  });

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
      {isLoadingMovies || isLoadingTv ? (
        <div>Loading data...</div>
      ) : (
        <>
          {displayType === DisplayType.Movies ? (
            <DisplayGrid dataset={movieData.results} displayType={DisplayType.Movies} />
          ) : (
            <DisplayGrid dataset={tvData.results} displayType={DisplayType.TVShows} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
