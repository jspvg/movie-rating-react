import { useState } from 'react';
import { TabSwitch } from '../../components/TabSwitch';
import { DisplayType } from '../../utils/types';
import { DisplayGrid } from '../home/DisplayGrid';
import { useQuery } from '@tanstack/react-query';
import { fetchRatedMovies, fetchRatedTVShows } from '../../utils/api/queries';

type Result = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
};

type RatedMoviesData = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

const Rated = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies,
  );
  const { data: ratedMovies, isLoading: isLoadingMovies } =
    useQuery<RatedMoviesData>({
      queryKey: ['ratedMovies'],
      queryFn: fetchRatedMovies,
    });
  const { data: ratedTVShows, isLoading: isLoadingTv } = useQuery({
    queryKey: ['ratedTVShows'],
    queryFn: fetchRatedTVShows,
  });
  const handleTabClick = (selectedDisplayType: DisplayType) => {
    setDisplayType(selectedDisplayType);
  };
  const rated = true;
  console.log(ratedMovies!);
  return (
    <div className="rated-page">
      <TabSwitch displayType={displayType} onTabClick={handleTabClick} />
      {isLoadingMovies || isLoadingTv ? (
        <div className="center-content">Loading data...</div>
      ) : (
        <>
          {displayType === DisplayType.Movies ? (
            <DisplayGrid
              dataset={ratedMovies!.results}
              displayType={DisplayType.Movies}
              rated={rated}
            />
          ) : (
            <DisplayGrid
              dataset={ratedTVShows.results}
              displayType={DisplayType.TVShows}
              rated={rated}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Rated;
