import { useState } from 'react';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { Calendar } from '../Calendar/Calendar';
import css from './MonthInfo.module.css';
export const MonthInfo = () => {
  //По замовчуванню обрана дата дорівнює поточному місяцю
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className={css.calendar}>
      <CalendarPagination
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <Calendar currentMonth={currentDate} />
    </div>
  );
};
