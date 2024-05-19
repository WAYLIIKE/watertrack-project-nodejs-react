import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/waterOps';
import css from './DeleteWaterModal.module.css';

export const DeleteWaterModal = ({ title, id, closeDeleteModal }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const response = await dispatch(deleteWater(id));

    if (response.meta.requestStatus === 'fulfilled') closeDeleteModal();
  };

  const handleClose = () => {
    closeDeleteModal();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.question}>Are you sure you want to delete the entry?</p>
      <div className={css.buttonWrapper}>
        <button className={css.deleteButton} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.cancelButton} onClick={handleClose}>
          <span className={css.cancelButtonText}>Cancel</span>
        </button>
      </div>
    </div>
  );
};
