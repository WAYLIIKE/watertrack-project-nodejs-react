import { useSelector } from 'react-redux';
import css from './ChooseDate.module.css';
import { selectWaterDate } from '../../redux/selectors';
import { format, isSameDay } from 'date-fns';

export const ChooseDate = () => {
  const waterDate = useSelector(selectWaterDate);

  return (
    <h3 className={css.selectedDay}>
      {isSameDay(new Date(waterDate), new Date())
        ? 'Today'
        : format(new Date(waterDate), 'd, MMMM')}
    </h3>
  );
};
