import { useSelector } from 'react-redux';
import { selectWaterItems } from '../../redux/selectors';
import { WaterItem } from '../WaterItem/WaterItem';
import css from './WaterList.module.css';

export const WaterList = () => {
  const waterItems = useSelector(selectWaterItems);

  return (
    <>
      {!waterItems?.length ? (
        // eslint-disable-next-line react/no-unescaped-entities
        <div className={css.noWater}>You haven't added the water yet.</div>
      ) : (
        <ul className={css.wrapper}>
          {waterItems.map((item) => (
            <li key={item._id} className={css.item}>
              <WaterItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
