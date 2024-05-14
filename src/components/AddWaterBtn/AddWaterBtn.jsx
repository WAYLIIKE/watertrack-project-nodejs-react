import { IconPlusWater } from '../Icons/IconPlusWater';
import css from './AddWaterBtn.module.css';
// import WaterModal from "../WaterModal/WaterModal";

const AddWaterBtn = () => {
  return (
    <button className={css.btn} type="button">
      <IconPlusWater />
      <span>Add water</span>
    </button>
  );
};

export default AddWaterBtn;
