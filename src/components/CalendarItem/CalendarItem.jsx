import css from './CalendarItem.module.css';

export const CalendarItem = ({ day, percentage }) => {
  const handleClick = () => {};
  const isFullConsumption = percentage === 100;
  const getDayStyles = (isFullConsumption) => {
    if (isFullConsumption) {
      return {
        backgroundColor: 'white',
      };
    }
    return {}; // залишаємо стилі за замовчуванням
  };
  const styles = getDayStyles(isFullConsumption);
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
