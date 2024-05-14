import { IconPlus } from '../Icons/IconPlus';
import css from './AddWaterBtn.module.css';
// import WaterModal from "../WaterModal/WaterModal";

const AddWaterBtn = () => {
  return (
    <button className={css.btn} type="button">
      <IconPlus className={css.icon} />
      <span className={css.btnText}>Add water</span>
    </button>
  );
};

export default AddWaterBtn;
