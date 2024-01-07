import { DisplayData } from '../utils/types';

type DisplayCardProps = DisplayData;

export const DisplayCard = ({
  poster,
  title,
  description,
}: DisplayCardProps) => {
  return (
    <div className="display-card">
      <img src={poster} alt="poster" />
      <h5>{title}</h5>
      <p>{description}</p>
      <button>Click me</button>
    </div>
  );
};
