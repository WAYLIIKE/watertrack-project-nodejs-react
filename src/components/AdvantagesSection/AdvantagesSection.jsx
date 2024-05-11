import css from './AdvantagesSection.module.css';
import { girl1, girl2, boy } from '../../assets/img';
export const AdvantagesSection = () => {
  return (
    <div className={css.section}>
      <div className={css.studentsBox}>
        <ul className={css.customerImg}>
          <li className={css.item}>
            <img className={css.img} src={girl2} alt="girl1" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={boy} alt="boy" />
          </li>

          <li className={css.item}>
            <img className={css.img} src={girl1} alt="girl2" />
          </li>
        </ul>

        <p className={css.customerText}>
          Our <span>happy</span> customers
        </p>
      </div>

      <div className={css.group}>
        <ul className={css.advantagesGroup}>
          <li className={css.textAdvantage}>
            <div className={css.ellipse}></div>
            <p className={css.text}>Habit drive</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>View statistics</p>
          </li>
          <li className={css.textAdvantage}>
            <p className={css.textBlack}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
