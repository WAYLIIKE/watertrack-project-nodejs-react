import css from './CalendarPagination.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { format, addMonths, subMonths } from 'date-fns';

export const CalendarPagination = ({ currentDate, setCurrentDate }) => {
  const handlePrevMonth = () => {
    const newMonth = subMonths(currentDate, 1);
    setCurrentDate(newMonth);
  };
  const handleNextMonth = () => {
    if (currentDate < new Date()) {
      const newMonth = addMonths(currentDate, 1);
      setCurrentDate(newMonth);
    }
  };
  return (
    <div className={css.paginationSection}>
      <p className={css.month}>Month</p>
      <div className={css.chooseMonth}>
        <button className={css.button} onClick={handlePrevMonth}>
          <BsChevronLeft className={css.chevron} />
        </button>
        <span className={css.span}>{format(currentDate, 'MMMM, yyyy')}</span>
        <button className={css.button} onClick={handleNextMonth}>
          <BsChevronRight className={css.chevron} />
        </button>
      </div>
    </div>
  );
};
