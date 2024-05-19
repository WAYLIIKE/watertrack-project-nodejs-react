import { AddWaterBtn } from '../AddWaterBtn/AddWaterBtn';
import { ChooseDate } from '../ChooseDate/ChooseDate';
import { MonthInfo } from '../MonthInfo/MonthInfo';
import { WaterList } from '../WaterList/WaterList';
import css from './DailyInfo.module.css';

export const DailyInfo = ({ openWaterModal }) => {
  return (
    <>
      <div className={css.flexContainer}>
        <ChooseDate />
        <AddWaterBtn openWaterModal={openWaterModal} isPrimary={false} />
      </div>
      <WaterList />
      <MonthInfo />
    </>
  );
};
