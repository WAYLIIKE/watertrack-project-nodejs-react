import css from './WaterMainInfo.module.css';
import { WaterDailyNorma } from '../WaterDailyNorma/WaterDailyNorma';
import { WaterProgressBar } from '../WaterProgressBar/WaterProgressBar';
import { AddWaterBtn } from '../AddWaterBtn/AddWaterBtn';
import { bottle } from '../../assets/img';

export const WaterMainInfo = ({ openWaterModal }) => {
  return (
    <div className={css.container}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn openWaterModal={openWaterModal} />
      <div className={css.imgWrapper}>
        <img className={css.img} src={bottle} alt="Water bottle image" />
      </div>
    </div>
  );
};
