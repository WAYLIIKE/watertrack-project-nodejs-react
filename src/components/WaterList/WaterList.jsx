import { WaterItem } from '../WaterItem/WaterItem';
import css from './WaterList.module.css';

export const WaterList = () => {
  return (
    <ul className={css.wrapper}>
      <WaterItem />
    </ul>
  );
};
