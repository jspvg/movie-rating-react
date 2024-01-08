import { useParams } from 'react-router-dom';

export const Movie = () => {
  const { id } = useParams<string>();
  if (!id) {
    return <div>Invalid Movie ID</div>;
  }
  return <h3>Movie {id}</h3>;
};
