import { selectDesiredVolume } from '../../redux/selectors';
import css from './CalendarItem.module.css';
import { useSelector } from 'react-redux';

export const CalendarItem = ({ day, getDayData }) => {
  const waterData = getDayData(day);
  const userNorma = useSelector(selectDesiredVolume);
  let percentage = 0;

  if (waterData) {
    const consumption = waterData.totalDayWater || 0;
    percentage = Math.floor(Math.min((consumption / userNorma) * 100, 100));
  }

  const isFullConsumption = percentage === 100;

  const getDayStyles = (isFullConsumption) => {
    if (isFullConsumption) {
      return {
        backgroundColor: 'white',
      };
    }
    return {};
  };
  const styles = getDayStyles(isFullConsumption);
  return (
    <div>
      <button className={css.button} style={{ ...styles }}>
        <div className={css.number}>{day.getDate()}</div>
      </button>
      <div className={css.percentage}>{percentage}%</div>
    </div>
  );
};
