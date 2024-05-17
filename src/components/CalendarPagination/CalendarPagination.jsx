import css from './CalendarPagination.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { format, addMonths, subMonths, startOfMonth } from 'date-fns';

export const CalendarPagination = ({ currentDate, setCurrentDate }) => {
  const minDate = new Date('2024-01-01');
  const handlePrevMonth = () => {
    const newMonth = subMonths(currentDate, 1);
    if (newMonth >= startOfMonth(minDate)) {
      setCurrentDate(newMonth);
    }
  };
  const handleNextMonth = () => {
    if (currentDate < new Date()) {
      const newMonth = addMonths(currentDate, 1);
      setCurrentDate(newMonth);
    }
  };
  console.log(currentDate);
  return (
    <div className={css.paginationSection}>
      <p className={css.month}>Month</p>
      <div className={css.chooseMonth}>
        <button
          className={css.button}
          onClick={handlePrevMonth}
          disabled={currentDate <= startOfMonth(minDate)}
        >
          <BsChevronLeft className={css.chevron} />
        </button>
        <span className={css.span}>{format(currentDate, 'MMMM, yyyy')}</span>
        <button className={css.button} onClick={handleNextMonth}>
          <BsChevronRight className={css.chevron} />
        </button>
        {/* <button className={css.button}>
          <IconPie className={css.svg} />
        </button> */}
      </div>
    </div>
  );
};
