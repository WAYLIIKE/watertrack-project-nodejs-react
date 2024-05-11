import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

export const Logo = () => {
  return <NavLink path="/" className={css.logo}>AquaTrack</NavLink>;
};
