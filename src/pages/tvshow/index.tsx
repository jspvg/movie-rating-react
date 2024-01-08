import { useParams } from 'react-router-dom';

export const TVShow = () => {
  const { id } = useParams<string>();
  if (!id) {
    return <div>Invalid TV Show ID</div>;
  }
  return <div className="details-page"></div>;
};
