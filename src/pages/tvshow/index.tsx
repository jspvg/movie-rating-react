import { Icon } from '@iconify/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchTVShowData } from './query';
import { useEffect } from 'react';

type Genre = {
  id: number;
  name: string;
};

type tvShowData = {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  genres: Genre[];
  first_air_date: string;
  last_air_date: string;
  episode_run_time: number;
  vote_average: number;
  vote_count: number;
  number_of_seasons: number;
  number_of_episodes: number;
};

export const TVShow = () => {
  const { id } = useParams<string>();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<tvShowData>({
    queryKey: ['tvshow'],
    queryFn: () => fetchTVShowData(id),
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['tvshow'], exact: true });
    };
  }, [queryClient]);

  if (!id) {
    return <div className="center-content">Invalid TV Show ID</div>;
  }

  if (isLoading) {
    <div className="center-content">Loading...</div>;
  }

  return (
    <div className="details-page">
      {data && (
        <div className="movie-details">
          <div className="grid-left">
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt={`${data.name} poster`}
            />
            <div className="genres">
              {data.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>

            <p>Episode runtime: {data.episode_run_time}min</p>
          </div>
          <div className="grid-right">
            <div className="title-bar">
              {data.adult && <span>18+</span>}
              <h5>{data.name}</h5>
            </div>
            <div className="ratings">
              <span>{data.vote_average}</span>
              <Icon icon="solar:star-bold" color="#e4e740" />
              <span>({data.vote_count})</span>
            </div>
            <span>First aired: {data.first_air_date} | Last aired: {data.last_air_date}</span>
            <span>Seasons: {data.number_of_seasons} | Episodes: {data.number_of_episodes}</span>
            <p>{data.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
