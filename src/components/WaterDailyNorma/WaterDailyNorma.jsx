import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  return (
    <div className={css.dailyNorm}>
      <a className={css.title}>Amount L</a>
      <a className={css.desc}>My daily norma</a>
    </div>
  );
};
export default WaterDailyNorma;
