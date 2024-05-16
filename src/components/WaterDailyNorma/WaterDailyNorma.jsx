import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import css from './WaterDailyNorma.module.css';

export const WaterDailyNorma = () => {
  const user = useSelector(selectUser);
  const dailyWaterGoal = user.desiredVolume / 1000;

  return (
    <div className={css.dailyNorm}>
      <a className={css.title}>{dailyWaterGoal} L</a>
      <a className={css.desc}>My daily norma</a>
    </div>
  );
};
