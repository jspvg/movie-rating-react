import { useParams } from "react-router-dom";

export const TVShow = () => {
  const { id } = useParams<string>();
  if (!id) {
    return <div>Invalid TV Show ID</div>;
  }
  return <h3>TV Show {id}</h3>;
};
