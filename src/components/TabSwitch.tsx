import { DisplayType } from "../utils/types";

type TabSwitchProps = {
  displayType: DisplayType;
  onTabClick: (displayType: DisplayType) => void;
}

export const TabSwitch = ({displayType, onTabClick}: TabSwitchProps) => {
  return(
    <div className="switch">
        <a
          onClick={() => onTabClick(DisplayType.Movies)}
          className={displayType === DisplayType.Movies ? 'underline' : ''}
        >
          Movies
        </a>
        <a
          onClick={() => onTabClick(DisplayType.TVShows)}
          className={displayType === DisplayType.TVShows ? 'underline' : ''}
        >
          TV Shows
        </a>
      </div>
  )
}