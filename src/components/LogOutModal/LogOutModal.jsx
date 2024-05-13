import css from './LogOutModal.module.css';

export const LogOutModal = ({ title }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.question}>Do you really want to leave?</p>
      <div className={css.buttonWrapper}>
        <button className={css.logoutButton}>Log out</button>
        <button className={css.cancelButton}>
          <span className={css.cancelButtonText}>Cancel</span>
        </button>
      </div>
    </div>
  );
};
