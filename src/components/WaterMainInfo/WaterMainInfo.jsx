import css from './WaterMainInfo.module.css';
import WaterDailyNorma from '../WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from '../WaterProgressBar/WaterProgressBar';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn';
import { bottle } from '../../assets/img';

const WaterMainInfo = () => {
  return (
    <div className={css.container}>
      {/* <div className={css.WaterMaininfoContainer}> */}
      <h1 className={css.header}>AQUATRACK</h1>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
      <div className={css.imgWrapper}>
        <img className={css.img} src={bottle} alt="Water bottle image" />
      </div>
      {/* </div> */}
    </div>
  );
};
export default WaterMainInfo;
