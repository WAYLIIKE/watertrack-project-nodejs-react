import css from "./WaterProgressBar.module.css";
import Slider from "@mui/material/Slider";

const WaterProgressBar = () => {
  return (
    <div className={css.progressCont}>
      <div className={css.textCont}>
        <strong className={css.title}>Today</strong>
        <Slider
          className={css.slider}
          defaultValue={30}
          sx={{
            m: 0,
            p: 0,
            // height: 6,
            color: "--color-lightgreen",
            "& .MuiSlider-thumb": {
              borderRadius: "16px",
              width: "12px",
              height: "12px",
              color: "white",
              border: "1px solid--color-lightgreen",
            },

            "& .MuiSlider-rail": {
              color: "--color-lightgray",
              backgroundColor: "--color-lightgray",
            },
          }}
        />
        <div className={css.percentBar}>
          <a>0%</a>
          <a>50%</a>
          <a>100%</a>
        </div>
      </div>
    </div>
  );
};
export default WaterProgressBar;