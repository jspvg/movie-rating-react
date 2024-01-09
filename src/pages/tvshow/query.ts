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
