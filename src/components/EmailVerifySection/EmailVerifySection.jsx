import { NavLink } from 'react-router-dom';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import css from './EmailVerifySection.module.css';

export const EmailVerifySection = () => {
  return (
    <div className={css.section}>
      <IoCheckmarkCircleOutline className={css.icon} />
      <h2 className={css.title}>Email verified!</h2>
      <p className={css.text}>You can now sign in with your new account</p>
      <NavLink to="/signin" className={css.button}>
        Sign In
      </NavLink>
    </div>
  );
};
