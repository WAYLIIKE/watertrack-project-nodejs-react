import { useState } from 'react';
import { CalendarPagination } from '../CalendarPagination/CalendarPagination';
import { Calendar } from '../Calendar/Calendar';

export const MonthInfo = () => {
  //По замовчуванню обрана дата дорівнює поточному місяцю
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div>
      <CalendarPagination
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <Calendar currentDate={currentDate} />
    </div>
  );
};
