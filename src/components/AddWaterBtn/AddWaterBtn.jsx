import css from "./AddWaterBtn.module.css";
// import WaterModal from "../WaterModal/WaterModal";

const AddWaterBtn = () => {
  return (
    <button className={css.btn} type="button">
        <svg className={css.svg}>
          <use
            className={css.icon}
            href="../Icons/IconPlus.jsx"
          ></use>
        </svg>
        <a className={css.btnText}>Add water</a>
    </button>
  );
};

export default AddWaterBtn;