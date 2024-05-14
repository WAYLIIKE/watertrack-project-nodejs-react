import { useDispatch } from 'react-redux';
import css from './LogOutModal.module.css';
import { signOut } from '../../redux/user/userOps';

export const LogOutModal = ({ title, onClose }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.question}>Do you really want to leave?</p>
      <div className={css.buttonWrapper}>
        <button
          className={css.logoutButton}
          onClick={() => dispatch(signOut())}
        >
          Log out
        </button>
        <button className={css.cancelButton} onClick={onClose}>
          <span className={css.cancelButtonText}>Cancel</span>
        </button>
      </div>
    </div>
  );
};
