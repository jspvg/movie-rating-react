import { Icon } from '@iconify/react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMovieData } from './query';
import { useEffect } from 'react';

type Genre = {
  id: number;
  name: string;
};

type movieData = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  genres: Genre[];
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
};

export const Movie = () => {
  const { id } = useParams<string>();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<movieData>({
    queryKey: ['movie'],
    queryFn: () => fetchMovieData(id),
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ['movie'], exact: true });
    };
  }, [queryClient]);

  if (!id) {
    return <div className="center-content">Invalid Movie ID</div>;
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
              alt={`${data.title} poster`}
            />
            <div className='genres'>
              {data.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>

            <p>Runtime: {data.runtime}min</p>
          </div>
          <div className="grid-right">
            <div className="title-bar">
              {data.adult && <span>18+</span>}
              <h5>{data.title}</h5>
            </div>
            <div className="ratings">
              <span>{data.vote_average}</span>
              <Icon icon="solar:star-bold" color="#e4e740" />
              <span>({data.vote_count})</span>
            </div>
            <span>Released: {data.release_date}</span>
            <p>{data.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
