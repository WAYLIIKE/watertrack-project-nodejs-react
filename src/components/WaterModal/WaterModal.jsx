import { WaterForm } from '../WaterForm/WaterForm';
import css from './WaterModal.module.css';

export const WaterModal = ({ title, subtitle, onClose }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>{title}</h2>
      <WaterForm subtitle={subtitle} onClose={onClose} />
    </div>
  );
};
