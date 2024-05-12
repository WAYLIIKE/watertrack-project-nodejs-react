import css from './DeleteWaterModal.module.css';

export const DeleteWaterModal = ({ title }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.question}>Are you sure you want to delete the entry?</p>
      <div className={css.buttonWrapper}>
        <button className={css.deleteButton}>Delete</button>
        <button className={css.cancelButton}>
          <span className={css.cancelButtonText}>Cancel</span>
        </button>
      </div>
    </div>
  );
};
