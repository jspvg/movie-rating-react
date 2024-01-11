import { useState } from 'react';
import { DisplayGrid } from './DisplayGrid';
import { DisplayType } from '../../utils/types';
import { useQuery } from '@tanstack/react-query';
import { TabSwitch } from '../../components/TabSwitch';
import { fetchMovies, fetchTVShows } from '../../utils/api/queries';

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
  const rated = false;

  const handleTabClick = (selectedDisplayType: DisplayType) => {
    setDisplayType(selectedDisplayType);
  };

  return (
    <div className="home-page">
      <TabSwitch displayType={displayType} onTabClick={handleTabClick} />
      {isLoadingMovies || isLoadingTv ? (
        <div className="center-content">Loading data...</div>
      ) : (
        <>
          {displayType === DisplayType.Movies ? (
            <DisplayGrid
              dataset={movieData.results}
              displayType={DisplayType.Movies}
              rated={rated}
            />
          ) : (
            <DisplayGrid
              dataset={tvData.results}
              displayType={DisplayType.TVShows}
              rated={rated}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
