import { useSelector } from 'react-redux';
import {
  selectTotalDayWater,
  selectUser,
  selectWaterDate,
} from '../../redux/selectors';
import { format, isSameDay } from 'date-fns';
import Slider from '@mui/material/Slider';
import css from './WaterProgressBar.module.css';

export const WaterProgressBar = () => {
  const waterDate = useSelector(selectWaterDate);
  const totalDayWater = useSelector(selectTotalDayWater);
  const user = useSelector(selectUser);

  const percentage = totalDayWater
    ? (totalDayWater / user.desiredVolume) * 100
    : 0;

  return (
    <div className={css.container}>
      <strong className={css.title}>
        {isSameDay(new Date(waterDate), new Date())
          ? 'Today'
          : format(new Date(waterDate), 'd, MMMM')}
      </strong>
      <Slider
        className={css.slider}
        value={percentage}
        sx={{
          m: 0,
          p: 0,
          color: 'var(--color-lightgreen)',
          '& .MuiSlider-thumb': {
            borderRadius: '16px',
            width: '12px',
            height: '12px',
            color: 'white',
            border: '1px solid var(--color-lightgreen)',
          },

          '& .MuiSlider-rail': {
            color: 'var(--color-lightgray)',
            backgroundColor: 'var(--color-lightgray)',
          },
        }}
      />
      <div className={css.percentBar}>
        <a>0%</a>
        <a className={css.fifty}>50%</a>
        <a>100%</a>
      </div>
    </div>
  );
};
