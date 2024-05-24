import css from './CalendarPagination.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { format, addMonths, subMonths, startOfMonth } from 'date-fns';
import { IconPie } from '../../components/Icons/IconPie';
export const CalendarPagination = ({
  currentDate,
  setCurrentDate,
  isActive,
  setIsActive,
}) => {
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
  const isPrevDisabled = currentDate <= startOfMonth(minDate);
  const isNextDisabled = currentDate > new Date();

  return (
    <div className={css.paginationSection}>
      {isActive ? (
        <p className={css.month}>Month</p>
      ) : (
        <p className={css.month}>Statistic</p>
      )}
      <div className={css.chooseMonth}>
        {isActive ? (
          <>
            <button
              className={css.button}
              disabled={isPrevDisabled}
              onClick={handlePrevMonth}
            >
              <BsChevronLeft
                className={isPrevDisabled ? css.chevronDisabled : css.chevron}
              />
            </button>
            <span className={css.span}>
              {format(currentDate, 'MMMM, yyyy')}
            </span>
            <button
              className={css.button}
              onClick={handleNextMonth}
              disabled={isNextDisabled}
            >
              <BsChevronRight
                className={isNextDisabled ? css.chevronDisabled : css.chevron}
              />
            </button>
          </>
        ) : null}

        <button onClick={() => setIsActive(!isActive)}>
          <IconPie className={css.svg} />
        </button>
      </div>
    </div>
  );
};
