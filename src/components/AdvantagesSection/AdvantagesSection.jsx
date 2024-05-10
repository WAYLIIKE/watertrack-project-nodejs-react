import css from './AdvantagesSection.module.css';
import { girl1, girl2, boy } from '../../assets/img';
export const AdvantagesSection = () => {
  return (
    <div className={css.section}>
      <div>
        <div className={css.studentsBox}>
          <ul className={css.studentImg}>
            <li className={css.studenItem}>
              <img className={css.img} src={girl2} alt="girl1" />
            </li>
            <li className={css.studenItem}>
              <img className={css.img} src={boy} alt="boy" />
            </li>
            <li className={css.studenItem}>
              <img className={css.img} src={girl1} alt="girl2" />
            </li>
          </ul>
          <p>Our happy customers</p>
        </div>
        <div>
          <ul>
            <li className={css.textHabits}>
              <div className={css.ellipse}></div>
              <p className={css.text}>Habit drive</p>
            </li>
            <li className={css.textStatistic}>
              <p className={css.textBlack}>View statistics</p>
            </li>
            <li className={css.textSetting}>
              <p className={css.textBlack}>Personal rate setting</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
