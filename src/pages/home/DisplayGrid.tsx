import { DisplayCard } from '../../components/DisplayCard';
import { DisplayData } from '../../utils/types';

type DisplayGridProps = {
  dataset: DisplayData[];
};

export const DisplayGrid = ({ dataset }: DisplayGridProps) => {
  return (
    <div className="display-grid">
      {dataset.map((data, index) => (
        <DisplayCard
          key={index}
          poster={data.poster}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};
