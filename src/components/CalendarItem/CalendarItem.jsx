import css from './CalendarItem.module.css';
import { isSameMonth } from 'date-fns';
export const CalendarItem = ({ day, percentage }) => {
  const handleClick = () => {};
  const isFullConsumption = percentage === 100;
  // потосна дата
  const today = new Date();
  const isToday = day.getDate() === today.getDate();
  const getDayStyles = (isFullConsumption, isToday) => {
    if (isFullConsumption) {
      return {
        backgroundColor: 'white',
      };
    }
    if (isToday && isSameMonth(day, new Date())) {
      return {
        backgroundColor: '#323F47',
        color: '#9BE1A0',
      };
    }
    return {};
  };

  const styles = getDayStyles(isFullConsumption, isToday);
  return (
    <div>
      <button
        className={css.button}
        onClick={handleClick}
        style={{ ...styles }}
      >
        <div className={css.number}>{day.getDate()}</div>
      </button>
      <div className={css.percentage}>{percentage}%</div>
    </div>
  );
};
