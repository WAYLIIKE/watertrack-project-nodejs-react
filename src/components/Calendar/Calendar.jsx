import { CalendarItem } from '../CalendarItem/CalendarItem';
import { format, startOfMonth, endOfMonth } from 'date-fns';
export const Calendar = ({ currentDate }) => {
  const selectedMonth = new Date();
  const startDate = format(startOfMonth(selectedMonth), 'yyyy-MM-dd');
  const endDate = format(endOfMonth(selectedMonth), 'yyyy-MM-dd');
  console.log('startDate:', startDate);
  console.log('endDate:', endDate);
  return (
    <div>
      <CalendarItem />
    </div>
  );
};
