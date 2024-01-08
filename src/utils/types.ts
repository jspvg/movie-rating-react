export enum DisplayType {
  Movies = 'movies',
  TVShows = 'tvshows',
}

export type DisplayData = {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
};
