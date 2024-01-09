export type AuthMutationData = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

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
  release_date?: string;
  first_air_date?: string;
};
