import { CalendarItem } from '../CalendarItem/CalendarItem';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from 'date-fns';
import css from './Calendar.module.css';

export const Calendar = ({ currentMonth }) => {
  // з редакс мені потрібно масив води випитої за кожен день місяця і денна норма кожного юзера

  const totalDayWater = [
    { date: new Date('2024-05-01'), consumption: 900 },
    { date: new Date('2024-05-02'), consumption: 250 },
    { date: new Date('2024-05-03'), consumption: 3000 },
    { date: new Date('2024-05-04'), consumption: 900 },
    { date: new Date('2024-05-05'), consumption: 0 },
    { date: new Date('2024-05-06'), consumption: 3000 },
    { date: new Date('2024-05-07'), consumption: 900 },
    { date: new Date('2024-05-08'), consumption: 250 },
    { date: new Date('2024-05-09'), consumption: 3000 },
  ];

  const days = eachDayOfInterval({
    start: startOfMonth(new Date(currentMonth)),
    end: endOfMonth(new Date(currentMonth)),
  });

  return (
    <div>
      <ul className={css.listCalendar}>
        {days.map((day) => {
          const matchingDay = totalDayWater.find((data) =>
            isSameDay(data.date, day)
          );
          const consumption = matchingDay?.consumption || 0;
          const percentage = Math.floor(
            Math.min((consumption / 2000) * 100, 100)
          );

          return (
            <li className={css.itemCalendar} key={day.getTime()}>
              <CalendarItem
                day={day}
                consumption={consumption}
                percentage={percentage}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
