import { MutationData } from '.';

export const mutationLogin = async (): Promise<MutationData> => {
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

    const data: MutationData = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
