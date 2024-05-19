import { WaterForm } from '../WaterForm/WaterForm';
import css from './WaterModal.module.css';

export const WaterModal = ({ title, subtitle, onClose, toggleHandle, id }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{title}</h2>
      <WaterForm
        subtitle={subtitle}
        onClose={onClose}
        toggleHandle={toggleHandle}
        id={id}
      />
    </div>
  );
};
