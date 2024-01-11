export const fetchMovies = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
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

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchTVShows = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
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

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchMovieData = async (movieId: string | undefined) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchTVShowData = async (tvShowId: string | undefined) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`,
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

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchRatedMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${
        import.meta.env.VITE_ACCOUNT_ID
      }/rated/movies?language=en-US&page=1&session_id=${localStorage.getItem(
        'guest_session_id',
      )}sort_by=created_at.asc`,
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

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchRatedTVShows = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
        'guest_session_id',
      )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
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

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
