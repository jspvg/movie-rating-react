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
