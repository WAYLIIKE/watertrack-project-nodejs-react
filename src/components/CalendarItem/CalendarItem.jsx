import toast from 'react-hot-toast';
import { selectDesiredVolume, selectWaterDate } from '../../redux/selectors';
import { getDayWater } from '../../redux/water/waterOps';
import css from './CalendarItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { format, isSameDay } from 'date-fns';

export const CalendarItem = ({ day, getDayData }) => {
  const dispatch = useDispatch();

  const waterDate = useSelector(selectWaterDate);

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

  const handleDayClick = () => {
    const utcDate = Date.UTC(day.getFullYear(), day.getMonth(), day.getDate());

    if (utcDate > Date.now())
      return toast.error('Can`t get waters from future.', {
        duration: 5000,
        position: 'top-center',
        style: {
          textAlign: 'center',
          boxShadow: '8px 11px 27px -8px rgba(66, 68, 90, 1)',
        },
      });

    if (isSameDay(waterDate, utcDate))
      return toast.error(
        `Your waters already from ${format(new Date(waterDate), 'd, MMMM')}`,
        {
          duration: 5000,
          position: 'top-center',
          style: {
            textAlign: 'center',
            boxShadow: '8px 11px 27px -8px rgba(66, 68, 90, 1)',
          },
        }
      );

    dispatch(getDayWater(utcDate));
  };

  return (
    <div>
      <button
        className={css.button}
        style={{ ...styles }}
        onClick={() => {
          handleDayClick();
        }}
      >
        <div className={css.number}>{day.getDate()}</div>
      </button>
      <div className={css.percentage}>{percentage}%</div>
    </div>
  );
};
