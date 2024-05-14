import css from './WaterProgressBar.module.css';
import Slider from '@mui/material/Slider';

const WaterProgressBar = () => {
  return (
    <div className={css.container}>
      <strong className={css.title}>Today</strong>
      <Slider
        className={css.slider}
        defaultValue={50}
        sx={{
          m: 0,
          p: 0,
          // height: 6,
          color: 'var(--color-lightgreen)',
          '& .MuiSlider-thumb': {
            borderRadius: '16px',
            width: '12px',
            height: '12px',
            color: 'white',
            border: '1px solid var(--color-lightgreen)',
          },

          '& .MuiSlider-rail': {
            color: 'var(--color-lightgray)',
            backgroundColor: 'var(--color-lightgray)',
          },
        }}
      />
      <div className={css.percentBar}>
        <a>0%</a>
        <a className={css.fifty}>50%</a>
        <a>100%</a>
      </div>
    </div>
  );
};
export default WaterProgressBar;
