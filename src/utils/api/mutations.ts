import { AuthMutationData } from '../types';

export const mutationLogin = async (): Promise<AuthMutationData> => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/authentication/guest_session/new',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Server response was not ok');
    }

    const data: AuthMutationData = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const rateMovie = async (movieId: number, rating: number | null) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
        'guest_session_id',
      )}&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        body: `{"value": ${rating}}`,
      },
    );
    if (!response.ok) {
      throw new Error('Server response was not ok');
    }

    const data: AuthMutationData = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const rateTVShow = async (tvShowId: number, rating: number | null) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
        'guest_session_id',
      )}&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        body: `{"value": ${rating}}`,
      },
    );
    if (!response.ok) {
      throw new Error('Server response was not ok');
    }

    const data: AuthMutationData = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
